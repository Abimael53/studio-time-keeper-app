
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">StudioTime</h3>
            <p className="text-muted-foreground">
              Professional studios for your creative projects. Book easily, create seamlessly.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Studios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Recording</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Photography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Videography</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Podcast</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-studio-purple">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StudioTime. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-studio-purple">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-studio-purple">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-studio-purple">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
