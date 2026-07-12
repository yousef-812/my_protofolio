import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, AlertCircle } from 'lucide-react';

const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: 'SaaS Platform', 
    budget: '$100 - $300',
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: At least email or phone must be provided
    if (!formData.email.trim() && !formData.phone.trim()) {
      setValidationError('Please provide at least one contact method: Email or WhatsApp.');
      return;
    }

    setValidationError('');
    
    // Create new request object
    const newRequest = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      date: new Date().toISOString()
    };

    // Load from localStorage and append
    const existing = localStorage.getItem('yousef_service_requests');
    const list = existing ? JSON.parse(existing) : [];
    list.unshift(newRequest);
    localStorage.setItem('yousef_service_requests', JSON.stringify(list));

    // Show success state
    setSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      service: 'SaaS Platform', 
      budget: '$100 - $300',
      message: '' 
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-zinc-950/10 flex justify-center">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-5xl w-full glass-card rounded-3xl border border-zinc-350/50 p-8 md:p-12 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500"></div>

        {/* LEFT COLUMN: Info */}
        <div className="md:col-span-5 text-left flex flex-col justify-between space-y-8">
          <div>
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-6">
              <MessageSquare className="w-4 h-4" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-[#1E1E1E] mb-4">
              Got a project in mind? Let's talk
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              Need a tailored SaaS infrastructure, a double-entry financial system, or an optimized storefront? Submit a service request and let's configure it together!
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href="mailto:yousefftaalip@gmail.com" 
              className="inline-flex items-center gap-2 text-[#1E1E1E] font-bold text-sm hover:text-indigo-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              yousefftaalip@gmail.com
            </a>

            <div className="flex gap-4 text-zinc-400 pt-4 border-t border-zinc-200 w-fit">
              <a 
                href="https://www.linkedin.com/in/yousef-taalip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zinc-900 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/yousef-812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zinc-900 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Service Request Form */}
        <div className="md:col-span-7 bg-[#E4E4E6] p-8 rounded-2xl border border-zinc-300/40 text-left">
          <h3 className="font-bold text-lg font-display text-zinc-850 mb-6">Request a Service</h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 text-zinc-800 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold font-display text-base">Request Submitted Successfully</h4>
              <p className="text-xs text-zinc-500 max-w-[280px]">Thank you! Your request has been queued and will appear in Yousef's Admin Dashboard.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-zinc-700">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs"
                  required
                />
              </div>

              {/* Grid for Email & Phone (WhatsApp) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-zinc-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-zinc-700">WhatsApp / Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+20 123 456 7890" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs"
                  />
                </div>
              </div>

              {/* Grid for Service Category & Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-zinc-700">Service Category</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs font-medium cursor-pointer"
                  >
                    <option>SaaS Platform (Mediator)</option>
                    <option>ERP System (Ledger &amp; POs)</option>
                    <option>LMS Platform (WebRTC Video)</option>
                    <option>E-Commerce Store (Angular SSR)</option>
                    <option>Custom Web Application</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-bold text-zinc-700">Project Budget / Salary</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs font-medium cursor-pointer"
                  >
                    <option>$100 - $300</option>
                    <option>$300 - $600</option>
                    <option>$600 - $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-zinc-700">Project Description</label>
                <textarea 
                  rows="3" 
                  placeholder="Outline your project scope, targets, or specific integrations..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs resize-none"
                  required
                ></textarea>
              </div>

              {validationError && (
                <p className="text-xs text-rose-600 flex items-center gap-1.5 font-medium bg-rose-50 p-2.5 rounded-xl border border-rose-100 animate-shake">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {validationError}
                </p>
              )}

              <button 
                type="submit"
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
