import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import crylocaLogo from "@/assets/cryloca-logo.png";
const Header = () => {
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Banner Placeholder - Multiple Sizes for Responsive Display */}
      <div className="w-full overflow-hidden">
        {/* Desktop Banner: 1920x400 */}
        <div className="hidden lg:block h-40">
          <img src={heroBanner} alt="Cryloca.eu - Die besten Crypto Airdrops 2025" className="w-full h-full object-cover" />
        </div>
        {/* Tablet Banner: 1024x300 */}
        <div className="hidden md:block lg:hidden h-32">
          <img src={heroBanner} alt="Cryloca.eu - Die besten Crypto Airdrops 2025" className="w-full h-full object-cover" />
        </div>
        {/* Mobile Banner: 768x200 */}
        <div className="block md:hidden h-24">
          <img src={heroBanner} alt="Cryloca.eu - Die besten Crypto Airdrops 2025" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="container mx-auto rounded-full py-px px-[20px]">
        <nav className="flex h-16 items-center justify-between mx-0 my-px">
          <Link to="/" className="flex items-center space-x-3">
            <img src={crylocaLogo} alt="Cryloca.eu - Crypto Airdrops Logo" className="overflow-y-visible max-w-60 " />
            <span className="gradient-primary bg-clip-text text-transparent text-justify font-extrabold text-5xl">
              Cryloca.eu
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/#airdrops" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Airdrops
            </Link>
          </div>
        </nav>
      </div>
    </header>;
};
export default Header;