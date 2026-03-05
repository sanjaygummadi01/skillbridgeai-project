import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, User, LogOut, Menu, X } from "@/components/icons";
import { useState } from "react";

interface HeaderProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function Header({ isAuthenticated = false, onLogout }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "" },
    { name: "Top Job Roles", href: "" },
    { name: "Resources", href: "" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">SkillBridge</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {!isAuthenticated && navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/dashboard") ? "text-primary" : "text-muted-foreground"}`}>Dashboard</Link>
              <Link to="/profile" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/profile") ? "text-primary" : "text-muted-foreground"}`}>Profile</Link>
              <Link to="/certificates" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/certificates") ? "text-primary" : "text-muted-foreground"}`}>Certificates</Link>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="rounded-full"><User className="h-5 w-5" /></Button>
              </Link>
              <Button variant="outline" onClick={onLogout} className="gap-2"><LogOut className="h-4 w-4" />Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button variant="ghost">Login</Button></Link>
              <Link to="/register"><Button variant="hero">Register</Button></Link>
            </>
          )}
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            {!isAuthenticated && navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`} onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
            ))}
            {isAuthenticated && (
              <>
                <Link to="/dashboard" className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                <Link to="/profile" className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Profile</Link>
                <Link to="/certificates" className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Certificates</Link>
              </>
            )}
            <div className="flex gap-2 mt-2 px-4">
              {isAuthenticated ? (
                <Button variant="outline" onClick={onLogout} className="w-full gap-2"><LogOut className="h-4 w-4" />Logout</Button>
              ) : (
                <>
                  <Link to="/login" className="flex-1"><Button variant="outline" className="w-full">Login</Button></Link>
                  <Link to="/register" className="flex-1"><Button variant="hero" className="w-full">Register</Button></Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
