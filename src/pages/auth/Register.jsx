import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Parollar mos kelmaydi!');
      return;
    }
    if (!agreedToTerms) {
      alert('Shartlar va qoidalarga rozilik berish kerak!');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Registration attempted with:', formData);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-success via-info to-warning flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-7xl mb-4 animate-pulse drop-shadow-lg">
            ✨
          </div>
          <h1 className="text-4xl font-bold text-success-content mb-3 drop-shadow-md">
            Ro'yxatdan o'ting
          </h1>
          <p className="text-success-content/90 text-lg font-medium">
            Yangi hisob yarating va xaridni boshlang
          </p>
        </div>

        {/* Register Card */}
        <div className="card bg-base-100/95 backdrop-blur-xl shadow-2xl border border-base-300/50">
          <div className="card-body p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-base-content">
                Yangi hisob
              </h2>
              <p className="text-base-content/70 mt-2">
                Ma'lumotlaringizni to'ldiring
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <span className="text-lg">👤</span>
                      Ism
                    </span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Ismingiz"
                    className="input input-bordered focus:input-success transition-all duration-300 hover:border-success/50"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <span className="text-lg">👨</span>
                      Familiya
                    </span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Familiyangiz"
                    className="input input-bordered focus:input-success transition-all duration-300 hover:border-success/50"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    Email manzil
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="input input-bordered focus:input-success transition-all duration-300 hover:border-success/50"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    Telefon raqam
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+998 90 123 45 67"
                  className="input input-bordered focus:input-success transition-all duration-300 hover:border-success/50"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
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
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-10 focus:input-success transition-all duration-300 hover:border-success/50"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-success transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="text-lg">
                      {showPassword ? '🙈' : '👁️'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <span className="text-lg">🔐</span>
                    Parolni tasdiqlang
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="••••••••"
                    className="input input-bordered w-full pr-10 focus:input-success transition-all duration-300 hover:border-success/50"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-success transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <span className="text-lg">
                      {showConfirmPassword ? '🙈' : '👁️'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <span className="label-text">
                    <Link to="/terms" className="link link-success">
                      Shartlar va qoidalar
                    </Link>
                    ga roziman
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className={`btn btn-success w-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  isLoading ? 'loading' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <>
                    <span className="mr-2">🎉</span>
                    Ro'yxatdan o'tish
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-6">yoki</div>

            {/* Social Register */}
            <div className="space-y-3">
              <button className="btn btn-outline btn-info w-full hover:scale-105 transition-transform duration-300">
                <span className="mr-2 text-lg">📱</span>
                Telegram orqali ro'yxatdan o'ting
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6 pt-4 border-t border-base-300">
              <p className="text-base-content/70">
                Hisobingiz bormi?{' '}
                <Link 
                  to="/login" 
                  className="link link-success font-semibold hover:link-hover"
                >
                  Hisobga kiring
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-success-content/60 text-sm">
            © 2024 Internet Magazin. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;