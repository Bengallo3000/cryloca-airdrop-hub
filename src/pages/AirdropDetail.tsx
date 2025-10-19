/* 
 * Cryloca.eu - Airdrop Detail Page
 * Displays detailed information about a specific airdrop
 * Including requirements, rewards and participation conditions
 */

import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { airdrops } from "@/data/airdrops";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Trophy, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AirdropDetail = () => {
  const { slug } = useParams();
  const airdrop = airdrops.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!airdrop) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Airdrop Not Found</h1>
          <Link to="/">
            <Button variant="gradient">Back to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    active: "bg-green-500/10 text-green-600 border-green-500/20",
    upcoming: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    ended: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  };

  return (
    <>
      <Helmet>
        <title>{airdrop.metaTitle || `${airdrop.title} | Cryloca.eu`}</title>
        <meta 
          name="description" 
          content={airdrop.metaDescription || airdrop.shortDescription} 
        />
        <meta 
          name="keywords" 
          content={airdrop.metaKeywords || `${airdrop.category}, airdrop, crypto`} 
        />
        <link rel="canonical" href={`https://cryloca.eu/airdrop/${airdrop.slug}`} />
        
        <meta property="og:title" content={airdrop.metaTitle || airdrop.title} />
        <meta property="og:description" content={airdrop.metaDescription || airdrop.shortDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cryloca.eu/airdrop/${airdrop.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": airdrop.title,
            "description": airdrop.shortDescription,
            "author": {
              "@type": "Organization",
              "name": "Cryloca.eu"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cryloca.eu"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 md:py-12">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Airdrops
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border/50 gradient-card">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Airdrop Logo */}
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-lg flex-shrink-0 p-3">
                      <img 
                        src={airdrop.logoUrl} 
                        alt={`${airdrop.title} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={statusColors[airdrop.status]} variant="outline">
                          {airdrop.status}
                        </Badge>
                        <Badge variant="secondary">{airdrop.category}</Badge>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold">{airdrop.title}</h1>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground">{airdrop.shortDescription}</p>
                </CardHeader>
              </Card>

              <Card className="border-border/50 gradient-card">
                <CardHeader>
                  <CardTitle>About This Airdrop</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  {/* Full Description Placeholder */}
                  <p className="text-foreground/80">
                    {airdrop.fullDescription || `Detailed description for ${airdrop.title} will be displayed here. 
                    This airdrop offers great opportunities for early participants. 
                    Learn more about the benefits and how to participate.`}
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Participation Requirements</h3>
                  <ul className="space-y-2">
                    {airdrop.requirements?.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{req}</span>
                      </li>
                    )) || (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Requirement 1: Placeholder for specific requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Requirement 2: More details coming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Requirement 3: Additional information</span>
                        </li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-border/50 gradient-card sticky top-24">
                <CardHeader>
                  <CardTitle>Airdrop Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Reward</p>
                      <p className="font-semibold">{airdrop.rewards || "TBA"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">End Date</p>
                      <p className="font-semibold">{airdrop.endDate || "Still Open"}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button className="w-full" variant="gradient" size="lg">
                      Join Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AirdropDetail;
