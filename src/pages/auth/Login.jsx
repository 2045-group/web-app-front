import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', { email, password });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-7xl mb-4 animate-bounce drop-shadow-lg">
            🔐
          </div>
          <h1 className="text-4xl font-bold text-primary-content mb-3 drop-shadow-md">
            Xush kelibsiz
          </h1>
          <p className="text-primary-content/90 text-lg font-medium">
            Hisobingizga kiring va xaridni boshlang
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100/95 backdrop-blur-xl shadow-2xl border border-base-300/50">
          <div className="card-body p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-base-content">
                Hisobga kirish
              </h2>
              <p className="text-base-content/70 mt-2">
                Ma'lumotlaringizni kiriting
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    Email manzil
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="input input-bordered w-full pr-10 focus:input-primary transition-all duration-300 hover:border-primary/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-base-content/40">✉️</span>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-lg">🔒</span>
                    Parol
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-10 focus:input-primary transition-all duration-300 hover:border-primary/50"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="text-lg">
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link 
                  to="/forgot-password" 
                  className="link link-primary text-sm hover:link-hover"
                >
                  Parolni unutdingizmi?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className={`btn btn-primary w-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  isLoading ? 'loading' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <>
                    <span className="mr-2">🚀</span>
                    Kirish
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-6">yoki</div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="btn btn-outline btn-info w-full hover:scale-105 transition-transform duration-300">
                <span className="mr-2 text-lg">📱</span>
                Telegram orqali kirish
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-6 pt-4 border-t border-base-300">
              <p className="text-base-content/70">
                Hisobingiz yo'qmi?{' '}
                <Link 
                  to="/register" 
                  className="link link-primary font-semibold hover:link-hover"
                >
                  Ro'yxatdan o'ting
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-primary-content/60 text-sm">
            © 2024 Internet Magazin. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;