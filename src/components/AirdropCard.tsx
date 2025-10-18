import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Airdrop } from "@/data/airdrops";

interface AirdropCardProps {
  airdrop: Airdrop;
}

const AirdropCard = ({ airdrop }: AirdropCardProps) => {
  const statusColors = {
    active: "bg-green-500/10 text-green-600 border-green-500/20",
    upcoming: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    ended: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  };

  return (
    <Link to={`/airdrop/${airdrop.slug}`} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-border/50 hover:border-primary/50 bg-card gradient-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardHeader className="relative">
          <div className="flex items-start justify-between mb-2">
            {/* Airdrop Logo */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-md p-2">
              <img 
                src={airdrop.logoUrl} 
                alt={`${airdrop.title} Logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <Badge className={statusColors[airdrop.status]} variant="outline">
              {airdrop.status}
            </Badge>
          </div>
          
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {airdrop.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {airdrop.shortDescription}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {airdrop.category}
            </Badge>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AirdropCard;
