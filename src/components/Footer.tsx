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
          <p>&copy; 2025 Cryloca.eu - Alle Rechte vorbehalten</p>
          <p className="text-sm mt-2">
            Die besten Crypto Airdrops für DeFi, NFT, Gaming und mehr
          </p>
          <p className="text-xs mt-4 text-muted-foreground/50">
            Disclaimer: Cryloca.eu bietet Informationen zu Airdrops. 
            Bitte führen Sie Ihre eigene Recherche durch, bevor Sie an einem Airdrop teilnehmen.
          </p>
        </div>
        
        {/* Hidden visitor counter - white text on white background, no contrast */}
        <div className="text-center mt-4" aria-hidden="true">
          <span className="text-background select-none" style={{ color: 'hsl(var(--background))' }}>
            Besucher: {visitorCount}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
