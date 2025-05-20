
import React, { useState } from "react";
import { SlotCardProps } from "@/components/SlotCard";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioSlots from "@/components/StudioSlots";
import ReservationForm from "@/components/ReservationForm";
import SuccessModal from "@/components/SuccessModal";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const Index = () => {
  const [selectedSlot, setSelectedSlot] = useState<Omit<SlotCardProps, "onSelect"> | null>(null);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSlotSelect = (slot: Omit<SlotCardProps, "onSelect">) => {
    setSelectedSlot(slot);
    setReservationOpen(true);
  };

  const handleReservationComplete = () => {
    setReservationOpen(false);
    setSuccessOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      
      <StudioSlots onSelectSlot={handleSlotSelect} />
      
      <ReservationForm
        open={reservationOpen}
        onOpenChange={setReservationOpen}
        selectedSlot={selectedSlot}
        onReservationComplete={handleReservationComplete}
      />
      
      <SuccessModal 
        open={successOpen}
        onOpenChange={setSuccessOpen}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
