import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, login, lockoutRemaining } = useAdminAuth();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isLoginModalOpen) {
      setPassword('');
      setErrorMessage('');
    }
  }, [isLoginModalOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLoginModalOpen) {
        closeLoginModal();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isLoginModalOpen, closeLoginModal]);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setErrorMessage('Please enter your admin password.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      const res = login(username, password);
      setIsSubmitting(false);
      if (!res.success) {
        setErrorMessage(res.message || 'Invalid credentials.');
      }
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative top bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#93C90E] via-[#00A3E0] to-[#be0037]" />

        {/* Header */}
        <div className="p-6 sm:p-8 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/50 text-secondary flex items-center justify-center border border-secondary/30 shadow-inner">
                <span className="material-symbols-outlined text-2xl">admin_panel_settings</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-on-surface">Admin Portal</h3>
                <p className="text-xs text-on-surface-variant font-medium">DN Digital Colour Lab (Pvt) Ltd</p>
              </div>
            </div>
            <button
              onClick={closeLoginModal}
              className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          <p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
            Authorized administrative access to modify pricing, images, descriptions, and site configurations in real-time.
          </p>
        </div>

        {/* Error / Lockout Banner */}
        {lockoutRemaining > 0 ? (
          <div className="mx-6 sm:mx-8 mb-4 p-3 rounded-xl bg-error/10 border border-error/30 text-error flex items-center gap-2 text-xs font-semibold">
            <span className="material-symbols-outlined text-base">timer</span>
            <span>Security Lockout: Wait {lockoutRemaining}s before trying again.</span>
          </div>
        ) : errorMessage ? (
          <div className="mx-6 sm:mx-8 mb-4 p-3 rounded-xl bg-error/10 border border-error/30 text-error flex items-center gap-2 text-xs font-semibold">
            <span className="material-symbols-outlined text-base">warning</span>
            <span>{errorMessage}</span>
          </div>
        ) : null}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 pt-0 space-y-4">
          <div>
            <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
              Admin Username
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg">
                person
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                disabled={lockoutRemaining > 0 || isSubmitting}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-on-surface uppercase tracking-wider">
                Admin Password
              </label>
              <span className="text-[11px] text-on-surface-variant font-medium">Default: <code className="bg-surface-container px-1 py-0.5 rounded text-secondary font-mono">admin123</code></span>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg">
                lock
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={lockoutRemaining > 0 || isSubmitting}
                className="w-full pl-10 pr-11 py-3 rounded-xl border border-outline-variant bg-surface text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                tabIndex={-1}
              >
                <span className="material-symbols-outlined text-lg">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={lockoutRemaining > 0 || isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-secondary text-on-secondary font-semibold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">login</span>
                  <span>Enter Admin Control Center</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer notice */}
        <div className="px-6 sm:px-8 py-3 bg-surface-container/60 border-t border-outline-variant/40 flex items-center justify-between text-[11px] text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-secondary">verified_user</span>
            <span>Client-side Encrypted</span>
          </span>
          <span>Shortcut: <kbd className="px-1.5 py-0.5 bg-surface-container-high rounded border border-outline-variant text-[10px] font-mono">Ctrl+Shift+A</kbd></span>
        </div>
      </div>
    </div>
  );
};
