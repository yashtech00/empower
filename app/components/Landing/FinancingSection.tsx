import React from 'react';
import { Users, TrendingUp, GiftIcon } from 'lucide-react';
import FeaturedCard from './FeaturedCard';

const FinancingSection = () => {
  return (
    <section id="financing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="heading-lg mb-6 animate-slide-in">
            Alternative Financing Models
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Traditional financing isn't the only path to fund your business. Explore innovative funding models designed for modern entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeaturedCard 
            title="Crowdfunding" 
            description="Raise funds from a large number of people who believe in your vision and want to support your business."
            icon={<Users size={32} />}
            className="animate-fade-in"
          />
          
          <FeaturedCard 
            title="Revenue-Based" 
            description="Get capital upfront and repay as a percentage of your monthly revenue, aligning payment with your cash flow."
            icon={<TrendingUp size={32} />}
            className="animate-fade-in"
            // Adding a slight delay for staggered animation
            style={{ animationDelay: "100ms" }}
          />
          
          <FeaturedCard 
            title="Peer-to-Peer" 
            description="Connect directly with individuals or organizations willing to lend money at competitive rates."
            icon={<GiftIcon size={32} />}
            className="animate-fade-in"
            // Adding more delay for staggered animation
            style={{ animationDelay: "200ms" }}
          />
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="button-primary">
            Compare Financing Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;