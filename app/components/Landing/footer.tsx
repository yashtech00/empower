import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-display font-bold tracking-tight mb-4 inline-block">
              Empower<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-foreground/70 mb-6 max-w-xs">
              Empowering entrepreneurs with alternative financing models and financial literacy resources.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-semibold mb-4">Financing</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Crowdfunding</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Revenue-Based</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Peer-to-Peer</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Compare Options</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold mb-4">Literacy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Courses</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Calculators</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Resources</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Team</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Empower. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
