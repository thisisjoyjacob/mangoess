
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Search, Upload, User, Settings } from 'lucide-react';
import { useRippleEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ to, icon, label, active, onClick }: NavItemProps) => {
  const handleRipple = useRippleEffect();
  
  return (
    <Link 
      to={to} 
      className={cn(
        "relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
        "hover:bg-primary/10",
        "overflow-hidden",
        active ? "bg-primary/10 text-primary" : "text-foreground/80"
      )}
      onClick={(e) => {
        handleRipple(e);
        onClick();
      }}
    >
      <span className={cn(
        "transition-all duration-300",
        active ? "text-primary" : "text-foreground/60"
      )}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
      {active && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transform origin-left"></span>
      )}
    </Link>
  );
};

export const Navbar = () => {
  const [active, setActive] = useState('home');
  
  const navItems = [
    { to: '/', icon: <Brain size={20} />, label: 'Brain', id: 'home' },
    { to: '/search', icon: <Search size={20} />, label: 'Search', id: 'search' },
    { to: '/import', icon: <Upload size={20} />, label: 'Import', id: 'import' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile', id: 'profile' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
  ];

  return (
    <header className="glass-panel fixed top-6 left-1/2 transform -translate-x-1/2 z-40 rounded-full px-1 py-1">
      <nav className="flex items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            to={item.to}
            icon={item.icon}
            label={item.label}
            active={active === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
