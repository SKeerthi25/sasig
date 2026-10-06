import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, X, Send } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export const FloatingHelp = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi there! Welcome to SASIG LTD. Looking for a UK business software suite or need a quick demo?' }
  ]);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatMessage('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: `Thanks for reaching out! A SASIG specialist from our Hull team will connect with you shortly, or email us directly at ${companyInfo.email}.`
        }
      ]);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Interactive Chat Popup */}
      {isChatOpen && (
        <div className="w-[320px] sm:w-[360px] bg-white dark:bg-brand-obsidian-900 rounded-3xl shadow-2xl border border-brand-emerald-200 dark:border-brand-emerald-800/60 overflow-hidden mb-2 animate-float-slow">
          {/* Chat Header */}
          <div className="gradient-emerald-champagne p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                S
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm leading-tight">SASIG Live Support</h4>
                <p className="text-[11px] text-brand-emerald-100 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-champagne-300 animate-ping inline-block"></span>
                  UK Office: Hull (Online)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3 max-h-[260px] overflow-y-auto text-xs sm:text-sm bg-brand-pearl/60 dark:bg-brand-obsidian-950/40">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-brand-emerald-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-brand-obsidian-800 text-brand-obsidian-900 dark:text-brand-obsidian-100 rounded-bl-none shadow-sm border border-brand-emerald-100 dark:border-brand-emerald-900'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-brand-obsidian-900 border-t border-brand-emerald-100 dark:border-brand-emerald-900 flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Ask anything about SASIG..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-brand-emerald-50/50 dark:bg-brand-obsidian-800 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="p-2 rounded-xl gradient-emerald-champagne text-white hover:brightness-110 shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(prev => !prev)}
          aria-label="Toggle live chat"
          className="p-3.5 rounded-2xl gradient-emerald-champagne text-white shadow-emerald-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-heading font-bold text-xs group"
        >
          <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline">Ask Us</span>
        </button>

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3.5 rounded-2xl bg-white dark:bg-brand-obsidian-800 text-brand-emerald-600 dark:text-brand-emerald-300 shadow-obsidian-card border border-brand-emerald-200 dark:border-brand-emerald-800 hover:bg-brand-emerald-50 dark:hover:bg-brand-obsidian-700 hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
