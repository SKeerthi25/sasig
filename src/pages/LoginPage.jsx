import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@sasigltd.co.uk');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="py-12 sm:py-24 flex items-center justify-center">
      <SEO
        title="Sign In to SASIG Cloud Workspace"
        description="Access your SASIG CRM, Books, Projects, and support dashboard."
        canonical="/login"
      />

      <div className="w-full max-w-md px-4">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-200 dark:border-brand-violet-800 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-2">
              <Logo size="md" showTagline={false} />
            </div>
            <h1 className="font-heading font-black text-2xl text-brand-plum-900 dark:text-white">
              Sign In to Your Workspace
            </h1>
            <p className="text-xs text-brand-plum-500 dark:text-brand-plum-400">
              Enter your credentials to access your SASIG suite.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-heading font-bold text-brand-plum-700 dark:text-brand-plum-200 mb-1">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-brand-plum-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.co.uk"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-cream/40 dark:bg-brand-plum-950/60 text-brand-plum-900 dark:text-white border border-brand-violet-200 dark:border-brand-violet-800 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-heading font-bold text-brand-plum-700 dark:text-brand-plum-200">
                  Password
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to demo@sasigltd.co.uk"); }} className="text-[11px] text-brand-violet-600 dark:text-brand-violet-300 font-bold hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-brand-plum-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-cream/40 dark:bg-brand-plum-950/60 text-brand-plum-900 dark:text-white border border-brand-violet-200 dark:border-brand-violet-800 text-xs sm:text-sm"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading} iconRight={ArrowRight}>
              {isLoading ? "Authenticating..." : "Sign In"}
            </Button>
          </form>

          <div className="pt-4 border-t border-brand-violet-100 dark:border-brand-violet-800 text-center text-xs text-brand-plum-600 dark:text-brand-plum-400">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-brand-violet-600 dark:text-brand-violet-300 font-bold underline hover:text-brand-pink-500">
              Start 14-day free trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
