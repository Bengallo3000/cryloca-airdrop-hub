import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import crylocaLogo from "@/assets/cryloca-logo.png";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Responsive Banner */}
      <div className="w-full overflow-hidden relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10" />
        
        {/* Desktop Banner: 1920x400 */}
        <div className="hidden lg:block h-40 relative">
          <img
            src={heroBanner}
            alt="Cryloca.eu - Best Crypto Airdrops 2025"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tablet Banner: 1024x300 */}
        <div className="hidden md:block lg:hidden h-32 relative">
          <img
            src={heroBanner}
            alt="Cryloca.eu - Best Crypto Airdrops 2025"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Mobile Banner: 768x200 */}
        <div className="block md:hidden h-24 relative">
          <img
            src={heroBanner}
            alt="Cryloca.eu - Best Crypto Airdrops 2025"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full group-hover:bg-primary/50 transition-all duration-300" />
              <img 
                src={crylocaLogo} 
                alt="Cryloca.eu - Crypto Airdrops Logo" 
                className="relative w-14 h-14 rounded-full ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-gradient">
                Cryloca.eu
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                Crypto Airdrops 2025
              </span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            
            <Link 
              to="/#airdrops" 
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              <Sparkles className="w-4 h-4 text-accent group-hover:text-primary transition-colors" />
              Airdrops
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
