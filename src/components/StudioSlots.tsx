
import React, { useState } from "react";
import SlotCard, { SlotCardProps } from "./SlotCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const studiosData: Omit<SlotCardProps, 'onSelect'>[] = [
  {
    id: 1,
    title: "Recording Studio A",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    time: "10:00 AM - 1:00 PM",
    date: "May 21, 2025",
    price: "$75",
    features: ["Pro Audio Equipment", "Sound Engineer", "Mixing Console"],
    available: true
  },
  {
    id: 2,
    title: "Photo Studio B",
    image: "https://images.unsplash.com/photo-1576073719676-aa95576db207?q=80&w=1974&auto=format&fit=crop",
    time: "2:00 PM - 6:00 PM",
    date: "May 21, 2025",
    price: "$90",
    features: ["Natural Lighting", "Backdrops", "Product Setup"],
    available: true
  },
  {
    id: 3,
    title: "Video Studio C",
    image: "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?q=80&w=1974&auto=format&fit=crop",
    time: "6:30 PM - 9:30 PM",
    date: "May 21, 2025",
    price: "$120",
    features: ["4K Cameras", "Lighting Kit", "Green Screen"],
    available: false
  },
  {
    id: 4,
    title: "Podcast Studio D",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
    time: "9:00 AM - 11:00 AM",
    date: "May 22, 2025",
    price: "$60",
    features: ["Soundproof Room", "Quality Mics", "Mixer Board"],
    available: true
  },
  {
    id: 5,
    title: "Dance Studio E",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1935&auto=format&fit=crop",
    time: "11:30 AM - 3:30 PM",
    date: "May 22, 2025",
    price: "$85",
    features: ["Full Mirrors", "Sound System", "Wooden Floor"],
    available: true
  },
  {
    id: 6,
    title: "Art Studio F",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=2574&auto=format&fit=crop",
    time: "4:00 PM - 8:00 PM",
    date: "May 22, 2025",
    price: "$70",
    features: ["Natural Light", "Easels", "Materials"],
    available: true
  }
];

interface StudioSlotsProps {
  onSelectSlot: (slot: Omit<SlotCardProps, 'onSelect'>) => void;
}

const StudioSlots: React.FC<StudioSlotsProps> = ({ onSelectSlot }) => {
  const [studioType, setStudioType] = useState("all");
  
  const filteredStudios = studiosData.filter(studio => {
    if (studioType === "all") return true;
    if (studioType === "recording") return studio.title.toLowerCase().includes("recording");
    if (studioType === "photo") return studio.title.toLowerCase().includes("photo");
    if (studioType === "video") return studio.title.toLowerCase().includes("video");
    if (studioType === "other") {
      return !["recording", "photo", "video"].some(type => 
        studio.title.toLowerCase().includes(type)
      );
    }
    return true;
  });

  return (
    <section id="studios" className="py-16 bg-studio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Studio <span className="gradient-text">Time Slots</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse through our range of professional studios and find the perfect space for your next creative project
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-5 max-w-md mx-auto">
            <TabsTrigger value="all" onClick={() => setStudioType("all")}>All</TabsTrigger>
            <TabsTrigger value="recording" onClick={() => setStudioType("recording")}>Recording</TabsTrigger>
            <TabsTrigger value="photo" onClick={() => setStudioType("photo")}>Photo</TabsTrigger>
            <TabsTrigger value="video" onClick={() => setStudioType("video")}>Video</TabsTrigger>
            <TabsTrigger value="other" onClick={() => setStudioType("other")}>Other</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudios.map(studio => (
            <SlotCard 
              key={studio.id} 
              {...studio} 
              onSelect={() => onSelectSlot(studio)} 
            />
          ))}
        </div>
        
        {filteredStudios.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-400">No studios available for the selected filter.</p>
            <Button 
              className="mt-4 bg-studio-purple hover:bg-studio-darkPurple"
              onClick={() => setStudioType("all")}
            >
              Show All Studios
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudioSlots;
