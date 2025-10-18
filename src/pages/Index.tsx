/* 
 * Cryloca.eu - Homepage
 * Diese Seite zeigt alle verfügbaren Crypto Airdrops an
 * Optimiert für SEO und beste User Experience
 */

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirdropCard from "@/components/AirdropCard";
import { airdrops } from "@/data/airdrops";
import { Sparkles, TrendingUp, Gift, Rocket } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cryloca.eu - Die besten Crypto Airdrops 2025 | Kostenlose Tokens & NFTs</title>
        <meta 
          name="description" 
          content="Entdecken Sie die besten Crypto Airdrops 2025 auf Cryloca.eu. Kostenlose Tokens, NFTs und exklusive Rewards. Täglich aktualisiert!" 
        />
        <link rel="canonical" href="https://cryloca.eu" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 gradient-hero pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(280_85%_65%/0.1),transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(180_95%_55%/0.1),transparent_50%)] pointer-events-none" />
        
        <Header />
        
        <main className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-pulse">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Täglich neue Airdrops</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in">
              <span className="text-gradient">Die besten</span>
              <br />
              <span className="text-foreground">Crypto Airdrops</span>
              <br />
              <span className="text-gradient">2025</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Entdecken Sie täglich aktualisierte <span className="text-accent font-semibold">Airdrops</span> und verdienen Sie 
              kostenlose <span className="text-primary font-semibold">Kryptowährungen</span>, NFTs und exklusive Rewards. 
              <br />
              <span className="text-foreground/80">Verpassen Sie keine Gelegenheit!</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{airdrops.length}</div>
                <div className="text-sm text-muted-foreground">Aktive Airdrops</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
                <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">$500k+</div>
                <div className="text-sm text-muted-foreground">Gesamtwert</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
                <Rocket className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Kostenlos</div>
              </div>
            </div>
          </section>

          {/* Airdrops Grid */}
          <section id="airdrops">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">Aktuelle Airdrops</h2>
              <div className="flex gap-2 items-center bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  {airdrops.length} verfügbar
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
              {airdrops.map((airdrop, index) => (
                <div
                  key={airdrop.id}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  className="animate-fade-in"
                >
                  <AirdropCard airdrop={airdrop} />
                </div>
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="py-20 px-8 rounded-3xl gradient-card border-2 border-primary/20 card-shadow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Gift className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Was sind Crypto Airdrops?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Verdienen Sie kostenlose Kryptowährungen
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Crypto Airdrops sind <span className="text-accent font-semibold">kostenlose Token-Verteilungen</span> von 
                Blockchain-Projekten an ihre Community. Sie dienen dazu, neue Nutzer zu gewinnen, die Bekanntheit zu steigern 
                und frühe Unterstützer zu belohnen.
              </p>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Auf <span className="text-primary font-bold">Cryloca.eu</span> finden Sie täglich aktualisierte Informationen 
                zu den besten Airdrop-Möglichkeiten aus den Bereichen 
                <span className="text-accent font-semibold"> DeFi, NFT, Gaming, Metaverse</span> und mehr.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Verifiziert</h3>
                  <p className="text-sm text-muted-foreground">Alle Airdrops werden sorgfältig geprüft</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Schnell</h3>
                  <p className="text-sm text-muted-foreground">Täglich neue Updates und Airdrops</p>
                </div>
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Wertvoll</h3>
                  <p className="text-sm text-muted-foreground">Hochwertige Projekte mit Potenzial</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
