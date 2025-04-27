import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Instagram, LogIn, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div className={cn(
      "md:hidden transition-all duration-300 overflow-hidden",
      isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
    )}>
      <nav className="container flex flex-col space-y-3">
        <Link to="/" className="text-white/70 hover:text-purple-400 p-2 hover:bg-purple-500/10 rounded-md">
          Ana Sayfa
        </Link>
        <Link to="/" className="text-white/70 hover:text-purple-400 p-2 hover:bg-purple-500/10 rounded-md">
          Oyun Modları
        </Link>
        <Link to="/store" className="text-white/70 hover:text-purple-400 p-2 hover:bg-purple-500/10 rounded-md">
          Mağaza
        </Link>
        <Link to="/vip" className="text-white/70 hover:text-purple-400 p-2 hover:bg-purple-500/10 rounded-md">
          VIP
        </Link>
        <Link to="/support" className="text-white/70 hover:text-purple-400 p-2 hover:bg-purple-500/10 rounded-md">
          Destek
        </Link>
        
        <div className="flex items-center gap-2">
          <Link to="/cart" className="p-2 hover:bg-purple-500/10 rounded-md text-white/70 hover:text-purple-400">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-2">Sepetim</span>
          </Link>
          <Link to="/profile" className="p-2 hover:bg-purple-500/10 rounded-md text-white/70 hover:text-purple-400">
            <User className="h-5 w-5" />
            <span className="ml-2">Profilim</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2 pt-2">
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
        
        <Button className="trinova-gradient w-full">
          <LogIn className="mr-2 h-5 w-5" />
          Giriş Yap
        </Button>
      </nav>
    </div>
  );
};
