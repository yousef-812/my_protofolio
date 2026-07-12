import React, { useState, useEffect } from 'react';
import { X, Trash2, CheckCircle2, Download, Shield, AlertCircle } from 'lucide-react';

export default function AdminDashboard({ onClose }) {
  const [requests, setRequests] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Load requests from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const stored = localStorage.getItem('yousef_service_requests');
      if (stored) {
        setRequests(JSON.parse(stored));
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock password
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid admin password. Try again.');
    }
  };

  const handleToggleStatus = (id) => {
    const updated = requests.map(req => 
      req.id === id ? { ...req, status: req.status === 'pending' ? 'contacted' : 'pending' } : req
    );
    setRequests(updated);
    localStorage.setItem('yousef_service_requests', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const filtered = requests.filter(req => req.id !== id);
    setRequests(filtered);
    localStorage.setItem('yousef_service_requests', JSON.stringify(filtered));
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(requests, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `service_requests_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div className="bg-[#121214] text-white rounded-3xl border border-zinc-800 p-8 w-full max-w-sm relative shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Admin Authentication</h3>
            <p className="text-xs text-zinc-400 mb-6">Enter password to view service requests.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Admin Password (admin123)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-indigo-500 focus:outline-none text-sm text-white"
              required
            />
            {error && (
              <p className="text-xs text-rose-500 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                {error}
              </p>
            )}
            <button 
              type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#121214] text-white rounded-3xl border border-zinc-800 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 hover:text-indigo-400 transition-all duration-200 z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6 border-b border-zinc-900 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-display text-white">Service Requests Dashboard</h2>
              <p className="text-xs text-zinc-500">Manage client inquires received through the website.</p>
            </div>
          </div>
          <button 
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Export Data
          </button>
        </div>

        {/* Scrollable Request List */}
        <div className="p-8 overflow-y-auto flex-1 space-y-4">
          {requests.length === 0 ? (
            <div className="text-center py-16 text-zinc-500">
              <p className="text-sm">No service requests received yet.</p>
            </div>
          ) : (
            requests.map((req) => (
              <div 
                key={req.id} 
                className={`p-6 rounded-2xl border transition-all duration-200 flex justify-between items-start gap-4 ${req.status === 'contacted' ? 'bg-zinc-900/40 border-zinc-900/60 opacity-60' : 'bg-zinc-900/90 border-zinc-800'}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-sm font-bold text-white font-display">{req.name}</span>
                    
                    {req.email && (
                      <a href={`mailto:${req.email}`} className="text-xs text-indigo-400 hover:underline">{req.email}</a>
                    )}
                    
                    {req.phone && (
                      <a 
                        href={`https://wa.me/${req.phone.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-emerald-400 hover:underline"
                      >
                        WhatsApp: {req.phone}
                      </a>
                    )}

                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-400">
                      {req.service}
                    </span>
                    <span className="text-[10px] text-zinc-500">{new Date(req.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 leading-relaxed max-w-2xl">{req.message}</p>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => handleToggleStatus(req.id)}
                    title={req.status === 'contacted' ? 'Mark as Pending' : 'Mark as Contacted'}
                    className={`p-2 rounded-lg border transition-colors cursor-pointer ${req.status === 'contacted' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-white'}`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(req.id)}
                    title="Delete Request"
                    className="p-2 bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-rose-500 hover:border-rose-500/20 rounded-lg transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
