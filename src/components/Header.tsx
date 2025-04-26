
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogIn, Menu, ChevronDown, Discord, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link to="/" className="nav-link px-3 py-2 rounded-md hover:bg-purple-500/10">
                  Ana Sayfa
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-purple-500/10 text-white/70 hover:text-purple-400">
                  Oyun Modları <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/90 backdrop-blur-lg border border-purple-500/20 p-4 rounded-lg w-[300px]">
                  <ul className="grid gap-3">
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">SMP</div>
                        <div className="text-sm text-purple-300/70">Survival Multiplayer deneyimi</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">LifeSteal</div>
                        <div className="text-sm text-purple-300/70">Her öldürme bir kalp kazandırır</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">Crystal PvP</div>
                        <div className="text-sm text-purple-300/70">End Crystal savaşları</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">Skyblock</div>
                        <div className="text-sm text-purple-300/70">Gökyüzünde hayatta kalma</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">Fantezi Survival</div>
                        <div className="text-sm text-purple-300/70">Büyülü yeteneklerle hayatta kal</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/store" className="nav-link px-3 py-2 rounded-md hover:bg-purple-500/10">
                  Mağaza
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/vip" className="nav-link px-3 py-2 rounded-md hover:bg-purple-500/10">
                  VIP
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-purple-500/10 text-white/70 hover:text-purple-400">
                  Topluluk <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/90 backdrop-blur-lg border border-purple-500/20 p-4 rounded-lg w-[300px]">
                  <ul className="grid gap-3">
                    <li>
                      <a href="https://discord.com" target="_blank" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300 flex items-center">
                          <Discord className="h-4 w-4 mr-2" /> Discord
                        </div>
                        <div className="text-sm text-purple-300/70">Topluluğumuza katıl</div>
                      </a>
                    </li>
                    <li>
                      <Link to="/support" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">Destek</div>
                        <div className="text-sm text-purple-300/70">Yardım ve destek</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">Forum</div>
                        <div className="text-sm text-purple-300/70">Topluluk forumu</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="block p-2 hover:bg-purple-500/10 rounded-md">
                        <div className="font-medium text-purple-300">Kurallar</div>
                        <div className="text-sm text-purple-300/70">Sunucu kuralları</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://discord.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <Discord className="h-5 w-5 text-purple-300" />
            </a>
            <a href="https://twitter.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <Twitter className="h-5 w-5 text-purple-300" />
            </a>
            <a href="https://instagram.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <Instagram className="h-5 w-5 text-purple-300" />
            </a>
          </div>
          
          <Button variant="ghost" size="icon" className="hover:bg-purple-500/10">
            <ShoppingCart className="h-5 w-5 text-purple-300" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-purple-500/10">
            <User className="h-5 w-5 text-purple-300" />
          </Button>
          <Button className="trinova-gradient">
            <LogIn className="mr-2 h-5 w-5" />
            Giriş Yap
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-purple-300" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
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
          
          <div className="flex items-center gap-2 pt-2">
            <a href="https://discord.com" target="_blank" className="p-2 hover:bg-purple-500/10 rounded-full transition-colors">
              <Discord className="h-5 w-5 text-purple-300" />
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
    </header>
  );
};

export default Header;
