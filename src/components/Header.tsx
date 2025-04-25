
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="glass-panel sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-white">
            Trinova Studios
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link">Ana Sayfa</Link>
          <Link to="/store" className="nav-link">Mağaza</Link>
          <Link to="/vip" className="nav-link">VIP</Link>
          <Link to="/support" className="nav-link">Destek</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="trinova-gradient">
            <LogIn className="mr-2 h-5 w-5" />
            Giriş Yap
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
