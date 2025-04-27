
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GameModesContent, CommunityContent } from "./NavigationMenuContent";

export const DesktopNavigation = () => {
  return (
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
              <GameModesContent />
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
              <CommunityContent />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
