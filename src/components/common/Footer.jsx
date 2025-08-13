import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">Biz haqimizda</Link>
        <Link to="/contact" className="link link-hover">Aloqa</Link>
        <Link to="/help" className="link link-hover">Yordam</Link>
        <Link to="/terms" className="link link-hover">Shartlar</Link>
      </nav>
      
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://t.me/your_channel" className="text-2xl hover:text-primary transition-colors">
            📱
          </a>
          <a href="https://instagram.com/your_account" className="text-2xl hover:text-secondary transition-colors">
            📷
          </a>
          <a href="https://facebook.com/your_page" className="text-2xl hover:text-accent transition-colors">
            📘
          </a>
          <a href="mailto:info@example.com" className="text-2xl hover:text-info transition-colors">
            📧
          </a>
        </div>
      </nav>
      
      <aside>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🛍️</span>
          <span className="text-xl font-bold">Internet Magazin</span>
        </div>
        <p>© 2024 - Barcha huquqlar himoyalangan</p>
        <p className="text-sm opacity-70">Telegram WebApp orqali xarid qiling</p>
      </aside>
    </footer>
  );
};

export default Footer;