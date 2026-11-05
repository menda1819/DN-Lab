import React from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useContent } from '../../context/ContentContext';

export const AdminBar: React.FC = () => {
  const { isAdmin, logout, openAdminPanel } = useAdminAuth();
  const { resetToDefaults } = useContent();

  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[140] w-auto max-w-[95vw] bg-inverse-surface/95 text-inverse-on-surface backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 sm:gap-4 text-xs font-medium animate-bounce-subtle">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#93C90E] animate-pulse" />
        <span className="font-bold tracking-tight text-white flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-[#00A3E0]">settings_suggest</span>
          <span>Admin Mode Active</span>
        </span>
      </div>

      <div className="h-4 w-px bg-white/20" />

      <button
        onClick={openAdminPanel}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-on-secondary hover:brightness-110 active:scale-95 transition-all font-semibold shadow-sm"
      >
        <span className="material-symbols-outlined text-sm">edit_note</span>
        <span>Customize Website</span>
      </button>

      <button
        onClick={() => {
          if (confirm('Are you sure you want to reset all customizations back to factory defaults?')) {
            resetToDefaults();
            alert('Customizations reset to defaults.');
          }
        }}
        title="Reset all prices and media back to defaults"
        className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 transition-colors"
      >
        <span className="material-symbols-outlined text-sm">restart_alt</span>
        <span>Reset Defaults</span>
      </button>

      <div className="h-4 w-px bg-white/20" />

      <button
        onClick={logout}
        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-tertiary text-on-tertiary hover:opacity-90 active:scale-95 transition-all font-semibold"
        title="Exit Admin Mode"
      >
        <span className="material-symbols-outlined text-sm">logout</span>
        <span>Exit</span>
      </button>
    </div>
  );
};
