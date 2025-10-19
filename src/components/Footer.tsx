import { useEffect, useState } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor counter (in real app, this would come from backend)
    const stored = localStorage.getItem("cryloca-visitors");
    const count = stored ? parseInt(stored) : 1000;
    const newCount = count + 1;
    setVisitorCount(newCount);
    localStorage.setItem("cryloca-visitors", newCount.toString());
  }, []);

  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">
          <p className="font-semibold text-lg mb-2">Cryloca.eu</p>
          <p>&copy; 2025 Cryloca.eu - All Rights Reserved</p>
          <p className="text-sm mt-2">
            The Best Crypto Airdrops for DeFi, NFT, Gaming and more
          </p>
          <p className="text-xs mt-4 text-muted-foreground/50">
            Disclaimer: Cryloca.eu provides information about airdrops. 
            Please do your own research before participating in any airdrop.
          </p>
        </div>
        
        {/* Hidden visitor counter - white text on white background, no contrast */}
        <div className="text-center mt-4" aria-hidden="true">
          <span className="text-background select-none" style={{ color: 'hsl(var(--background))' }}>
            Visitors: {visitorCount}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
