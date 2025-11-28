import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Trophy, ExternalLink } from "lucide-react";
import { Airdrop } from "@/data/airdrops";

interface AirdropCardProps {
  airdrop: Airdrop;
}

const AirdropCard = ({ airdrop }: AirdropCardProps) => {
  const statusConfig = {
    active: {
      variant: "success" as const,
      label: "Active",
      icon: <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />,
    },
    upcoming: {
      variant: "default" as const,
      label: "Soon",
      icon: <Clock className="w-3 h-3" />,
    },
    ended: {
      variant: "outline" as const,
      label: "Ended",
      icon: null,
    },
  };

  const config = statusConfig[airdrop.status];

  return (
    <a 
      href={airdrop.externalUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block h-full"
    >
      <Card className="h-full transition-all duration-500 hover:scale-[1.03] border-2 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm gradient-card overflow-hidden relative hover-lift group">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        
        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between mb-4">
            {/* Airdrop Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center shadow-lg p-2.5 border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src={airdrop.logoUrl} 
                  alt={`${airdrop.title} Logo`}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
            
            <Badge variant={config.variant} className="flex items-center gap-1.5">
              {config.icon}
              {config.label}
            </Badge>
          </div>
          
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
            {airdrop.title}
            {airdrop.status === 'active' && (
              <Trophy className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </CardTitle>
          
          <CardDescription className="line-clamp-2 text-muted-foreground group-hover:text-foreground/80 transition-colors">
            {airdrop.shortDescription}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
              {airdrop.category}
            </Badge>
            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Join Now
              </span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </CardContent>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </a>
  );
};

export default AirdropCard;
