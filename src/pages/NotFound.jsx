import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          setTimeout(() => navigate('/'), 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    setIsRedirecting(true);
    setTimeout(() => navigate('/'), 500);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-error via-warning to-info flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Main Content */}
        <div className="text-center mb-12 animate-fade-in">
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-error-content/20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-bounce">
                🤔
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-error-content mb-4 drop-shadow-lg">
            Sahifa topilmadi
          </h1>
          
          {/* Description */}
          <p className="text-xl text-error-content/80 mb-8 leading-relaxed max-w-md mx-auto">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o'chirilgan.
          </p>
        </div>

        {/* Error Card */}
        <div className="card bg-base-100/95 backdrop-blur-xl shadow-2xl border border-base-300/50 mb-8">
          <div className="card-body p-8 text-center">
            {/* Error Details */}
            <div className="flex flex-col items-center gap-6">
              <div className="text-6xl animate-spin-slow">
                🔍
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-base-content">
                  Nima qilish mumkin?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col items-center p-4 bg-base-200 rounded-lg">
                    <span className="text-2xl mb-2">🏠</span>
                    <span className="font-medium">Bosh sahifaga qaytish</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-base-200 rounded-lg">
                    <span className="text-2xl mb-2">🔙</span>
                    <span className="font-medium">Orqaga qaytish</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-base-200 rounded-lg">
                    <span className="text-2xl mb-2">🔗</span>
                    <span className="font-medium">URL ni tekshirish</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button
                  onClick={handleGoHome}
                  className={`btn btn-primary flex-1 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isRedirecting ? 'loading' : ''
                  }`}
                  disabled={isRedirecting}
                >
                  {isRedirecting ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    <>
                      <span className="mr-2">🏠</span>
                      Bosh sahifa
                    </>
                  )}
                </button>

                <button
                  onClick={handleGoBack}
                  className="btn btn-outline btn-secondary flex-1 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  disabled={isRedirecting}
                >
                  <span className="mr-2">⬅️</span>
                  Orqaga
                </button>
              </div>

              {/* Auto Redirect Counter */}
              <div className="bg-warning/20 border border-warning/40 rounded-lg p-4 w-full">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl animate-pulse">⏰</span>
                  <span className="text-base-content font-medium">
                    {countdown > 0 ? (
                      <>
                        Avtomatik yo'naltirish: <span className="font-bold text-warning">{countdown}</span> soniya
                      </>
                    ) : (
                      'Yo\'naltirilmoqda...'
                    )}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-base-300 rounded-full h-2 mt-3">
                  <div 
                    className="bg-warning h-2 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Links */}
        <div className="card bg-base-100/95 backdrop-blur-xl shadow-xl border border-base-300/50">
          <div className="card-body p-6">
            <h3 className="text-xl font-bold text-base-content mb-4 text-center">
              Mashhur sahifalar
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link 
                to="/" 
                className="btn btn-ghost justify-start hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <span className="mr-3">🛍️</span>
                Mahsulotlar
              </Link>
              
              <Link 
                to="/login" 
                className="btn btn-ghost justify-start hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
              >
                <span className="mr-3">👤</span>
                Hisobga kirish
              </Link>
              
              <Link 
                to="/register" 
                className="btn btn-ghost justify-start hover:bg-success/10 hover:text-success transition-all duration-300"
              >
                <span className="mr-3">✨</span>
                Ro'yxatdan o'tish
              </Link>
              
              <Link 
                to="/contact" 
                className="btn btn-ghost justify-start hover:bg-info/10 hover:text-info transition-all duration-300"
              >
                <span className="mr-3">📞</span>
                Aloqa
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-error-content/60 text-sm">
            Agar muammo davom etsa, <Link to="/contact" className="link link-primary">bizga murojaat qiling</Link>
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce delay-300">
        🎯
      </div>
      <div className="absolute bottom-20 right-10 text-3xl animate-bounce delay-700">
        🚀
      </div>
      <div className="absolute top-1/3 right-20 text-2xl animate-pulse">
        💡
      </div>
    </div>
  );
};

export default NotFound;