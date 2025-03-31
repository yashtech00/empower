import React from 'react';
import { BookOpen, Calculator, LineChart } from 'lucide-react';

const LiteracySection = () => {
  return (
    <section id="literacy" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="heading-lg mb-6">
              Financial Literacy Hub
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Empower yourself with essential financial knowledge. Our curated resources help entrepreneurs make informed decisions and build sustainable businesses.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Educational Courses</h3>
                  <p className="text-sm text-foreground/70">Self-paced modules on financial management, investment strategies, and business finance.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Financial Tools</h3>
                  <p className="text-sm text-foreground/70">Interactive calculators and planners to forecast cash flow, budget expenses, and plan growth.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <LineChart size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Analytics Dashboard</h3>
                  <p className="text-sm text-foreground/70">Visualize your financial data to identify trends and make data-driven decisions.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="button-primary">
                Explore Resources
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="glass-card rounded-xl p-4 mb-4 backdrop-blur-md bg-white/40">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 mr-4"></div>
                    <div>
                      <div className="h-2.5 w-24 bg-primary/20 rounded-full"></div>
                      <div className="h-2 w-16 bg-primary/10 rounded-full mt-1"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 glass-card rounded-xl p-5 backdrop-blur-md bg-white/40">
                  <div className="h-3 w-32 bg-primary/20 rounded-full mb-4"></div>
                  <div className="flex space-x-4 mb-6">
                    <div className="h-20 w-1/3 bg-primary/10 rounded-lg"></div>
                    <div className="h-20 w-1/3 bg-primary/15 rounded-lg"></div>
                    <div className="h-20 w-1/3 bg-primary/20 rounded-lg"></div>
                  </div>
                  <div className="h-3 w-full bg-primary/10 rounded-full mb-2"></div>
                  <div className="h-3 w-3/4 bg-primary/10 rounded-full mb-2"></div>
                  <div className="h-3 w-5/6 bg-primary/10 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteracySection;