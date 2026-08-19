import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X, ShieldCheck, Mail } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
  timestamp?: string;
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div 
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 max-w-sm sm:max-w-md w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 6000); // 6 seconds auto-dismiss

    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
      case 'info':
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
    }
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':
        return 'border-emerald-500/40 bg-slate-900/95 shadow-emerald-500/10';
      case 'warning':
        return 'border-amber-500/40 bg-slate-900/95 shadow-amber-500/10';
      case 'info':
      default:
        return 'border-slate-700 bg-slate-900/95 shadow-amber-500/5';
    }
  };

  return (
    <div
      role="status"
      className={`pointer-events-auto rounded-2xl border p-4 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 flex items-start gap-3 relative overflow-hidden ${getBorderColor()}`}
    >
      {/* Visual Accent Glow Bar on Left */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-1.5 ${
          toast.type === 'success' ? 'bg-emerald-400' : 'bg-amber-400'
        }`}
      />

      <div className="pl-1">
        {getIcon()}
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-xs sm:text-sm font-bold text-white font-display">
            {toast.title}
          </h4>
          <span className="text-[10px] font-mono text-slate-400">
            {toast.timestamp || 'Just now'}
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {toast.message}
        </p>
      </div>

      <button
        onClick={() => onDismiss(toast.id)}
        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
