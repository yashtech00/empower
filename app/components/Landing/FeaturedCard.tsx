import React from 'react';
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FeaturedCard = ({ title, description, icon, className, style }: FeaturedCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg group",
        className
      )}
      style={style}
    >
      <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="heading-md mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default FeaturedCard;