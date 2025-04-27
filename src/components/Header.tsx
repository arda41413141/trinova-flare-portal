import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogIn, Menu, MessageCircle, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileMenu } from "./header/MobileMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="glass-panel sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/53713856-b5d6-425f-ad4e-81579dbf2b5f.png" 
              alt="Trinova Studios" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-gradient">
              Trinova Studios
            </span>
          </Link>
        </div>
        
        <DesktopNavigation />

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://discord.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <MessageCircle className="h-5 w-5 text-purple-300" />
            </a>
            <a href="https://twitter.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <Twitter className="h-5 w-5 text-purple-300" />
            </a>
            <a href="https://instagram.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <Instagram className="h-5 w-5 text-purple-300" />
            </a>
          </div>
          
          <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5 text-purple-300" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
            <Link to="/profile">
              <User className="h-5 w-5 text-purple-300" />
            </Link>
          </Button>
          <Button className="trinova-gradient">
            <LogIn className="mr-2 h-5 w-5" />
            Giriş Yap
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-purple-300" />
        </Button>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} />
    </header>
  );
};

export default Header;
