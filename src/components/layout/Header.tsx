import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AppContext } from '@/contexts/AppContext';
import { Menu, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { setIsSidebarOpen, isAuthenticated } = useContext(AppContext);
  const location = useLocation();
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/track', label: 'Track Issues' },
    { to: '/announcements', label: 'Announcements' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">BB</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              BuildBharat
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={cn(
                  "transition-all text-sm font-medium hover:text-accent relative py-2",
                  location.pathname === link.to 
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent" 
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="p-2 md:hidden rounded-md hover:bg-muted/50 transition-colors"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};