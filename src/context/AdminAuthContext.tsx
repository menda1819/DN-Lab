import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CREDS_KEY = 'dn_lab_admin_creds_v1';
const AUTH_KEY = 'dn_lab_admin_auth_v1';
const ATTEMPTS_KEY = 'dn_lab_admin_attempts_v1';

interface AdminCredentials {
  username: string;
  passwordHash: string; // Base64 encoded simple hash for client-side storage
}

const DEFAULT_CREDS: AdminCredentials = {
  username: 'admin',
  // btoa('admin123')
  passwordHash: btoa('admin123')
};

interface AdminAuthContextType {
  isAdmin: boolean;
  isLoginModalOpen: boolean;
  isAdminPanelOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openAdminPanel: () => void;
  closeAdminPanel: () => void;
  login: (user: string, pass: string) => { success: boolean; message?: string };
  logout: () => void;
  changePassword: (oldPass: string, newPass: string) => { success: boolean; message: string };
  lockoutRemaining: number;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [lockoutRemaining, setLockoutRemaining] = useState<number>(0);

  // Check lockout on mount and tick down timer if locked out
  useEffect(() => {
    const checkLockout = () => {
      try {
        const stored = localStorage.getItem(ATTEMPTS_KEY);
        if (stored) {
          const { lockedUntil } = JSON.parse(stored);
          if (lockedUntil && Date.now() < lockedUntil) {
            setLockoutRemaining(Math.ceil((lockedUntil - Date.now()) / 1000));
          } else {
            setLockoutRemaining(0);
          }
        }
      } catch {
        setLockoutRemaining(0);
      }
    };

    checkLockout();
    const interval = setInterval(checkLockout, 1000);
    return () => clearInterval(interval);
  }, []);

  // Listen for hash changes: #admin or #/admin
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin' || hash === '#/admin' || hash === '#login') {
        if (isAdmin) {
          setIsAdminPanelOpen(true);
        } else {
          setIsLoginModalOpen(true);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [isAdmin]);

  // Keyboard shortcut: Ctrl + Shift + A or Cmd + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        if (isAdmin) {
          setIsAdminPanelOpen(prev => !prev);
        } else {
          setIsLoginModalOpen(prev => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin]);

  const getStoredCreds = (): AdminCredentials => {
    try {
      const raw = localStorage.getItem(CREDS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_CREDS;
  };

  const login = (user: string, pass: string): { success: boolean; message?: string } => {
    if (lockoutRemaining > 0) {
      return { success: false, message: `Too many failed attempts. Please wait ${lockoutRemaining} seconds.` };
    }

    const creds = getStoredCreds();
    const passHash = btoa(pass.trim());

    if (user.trim() === creds.username && passHash === creds.passwordHash) {
      setIsAdmin(true);
      localStorage.setItem(AUTH_KEY, 'true');
      localStorage.removeItem(ATTEMPTS_KEY);
      setIsLoginModalOpen(false);
      setIsAdminPanelOpen(true);
      // Clean up hash if needed
      if (window.location.hash === '#admin' || window.location.hash === '#/admin' || window.location.hash === '#login') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      return { success: true };
    } else {
      // Record failed attempt
      try {
        const stored = localStorage.getItem(ATTEMPTS_KEY);
        let count = 1;
        if (stored) {
          const parsed = JSON.parse(stored);
          count = (parsed.count || 0) + 1;
        }

        if (count >= 5) {
          const lockedUntil = Date.now() + 60 * 1000; // 60s lockout
          localStorage.setItem(ATTEMPTS_KEY, JSON.stringify({ count, lockedUntil }));
          setLockoutRemaining(60);
          return { success: false, message: 'Too many failed attempts. Locked out for 60 seconds.' };
        } else {
          localStorage.setItem(ATTEMPTS_KEY, JSON.stringify({ count }));
          return { success: false, message: `Invalid username or password. (${5 - count} attempts remaining)` };
        }
      } catch {
        return { success: false, message: 'Invalid username or password.' };
      }
    }
  };

  const logout = useCallback(() => {
    setIsAdmin(false);
    setIsAdminPanelOpen(false);
    localStorage.removeItem(AUTH_KEY);
    if (window.location.hash === '#admin' || window.location.hash === '#/admin') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const changePassword = (oldPass: string, newPass: string): { success: boolean; message: string } => {
    const creds = getStoredCreds();
    if (btoa(oldPass.trim()) !== creds.passwordHash) {
      return { success: false, message: 'Current password does not match.' };
    }
    if (newPass.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters long.' };
    }

    const updatedCreds: AdminCredentials = {
      username: creds.username,
      passwordHash: btoa(newPass.trim())
    };
    localStorage.setItem(CREDS_KEY, JSON.stringify(updatedCreds));
    return { success: true, message: 'Password updated successfully!' };
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openAdminPanel = () => setIsAdminPanelOpen(true);
  const closeAdminPanel = () => setIsAdminPanelOpen(false);

  return (
    <AdminAuthContext.Provider
      value={{
        isAdmin,
        isLoginModalOpen,
        isAdminPanelOpen,
        openLoginModal,
        closeLoginModal,
        openAdminPanel,
        closeAdminPanel,
        login,
        logout,
        changePassword,
        lockoutRemaining
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
