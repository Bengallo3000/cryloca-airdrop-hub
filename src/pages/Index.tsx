import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import AirdropCard from "@/components/AirdropCard";
import { airdrops } from "@/data/airdrops";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cryloca.eu - Die besten Crypto Airdrops 2025</title>
        <meta 
          name="description" 
          content="Entdecken Sie die besten Crypto Airdrops 2025 auf Cryloca.eu. Kostenlose Tokens, NFTs und exklusive Rewards. Täglich aktualisiert!" 
        />
        <link rel="canonical" href="https://cryloca.eu" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Die besten Crypto Airdrops 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Entdecken Sie täglich aktualisierte Airdrops und verdienen Sie kostenlose Kryptowährungen, 
              NFTs und exklusive Rewards. Verpassen Sie keine Gelegenheit!
            </p>
          </section>

          {/* Airdrops Grid */}
          <section id="airdrops">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Aktuelle Airdrops</h2>
              <div className="flex gap-2">
                <span className="text-sm text-muted-foreground">
                  {airdrops.length} Airdrops verfügbar
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {airdrops.map((airdrop) => (
                <AirdropCard key={airdrop.id} airdrop={airdrop} />
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="mt-20 py-16 px-8 rounded-2xl gradient-card border border-border/50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Was sind Crypto Airdrops?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Crypto Airdrops sind kostenlose Token-Verteilungen von Blockchain-Projekten an ihre Community. 
                Sie dienen dazu, neue Nutzer zu gewinnen, die Bekanntheit zu steigern und frühe Unterstützer zu belohnen. 
                Auf Cryloca.eu finden Sie täglich aktualisierte Informationen zu den besten Airdrop-Möglichkeiten 
                aus den Bereichen DeFi, NFT, Gaming, Metaverse und mehr.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-20">
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p>&copy; 2025 Cryloca.eu - Alle Rechte vorbehalten</p>
            <p className="text-sm mt-2">
              Die besten Crypto Airdrops für DeFi, NFT, Gaming und mehr
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
