
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <div className="mx-auto p-3 rounded-full bg-green-500/20 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <DialogTitle className="text-xl font-bold text-center">Booking Confirmed!</DialogTitle>
          <DialogDescription className="text-center">
            Your studio reservation has been confirmed. You'll receive all details in your email shortly.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 py-4">
          <div className="bg-studio-darkGray p-4 rounded-lg text-center animate-pulse-glow">
            <p className="text-sm text-muted-foreground">Booking Reference</p>
            <p className="text-lg font-semibold">STD-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
          
          <p className="text-sm text-center text-muted-foreground">
            Please save this reference number. Our team will be in touch with you 24 hours before your session.
          </p>
        </div>
        
        <DialogFooter>
          <Button 
            className="w-full bg-studio-purple hover:bg-studio-darkPurple"
            onClick={() => onOpenChange(false)}
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
