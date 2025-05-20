
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold gradient-text">StudioTime</h1>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#studios" className="hover:text-studio-purple transition-colors">Studios</a>
          <a href="#pricing" className="hover:text-studio-purple transition-colors">Pricing</a>
          <a href="#about" className="hover:text-studio-purple transition-colors">About</a>
          <Button className="bg-studio-purple hover:bg-studio-darkPurple">Sign In</Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
