
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface SlotCardProps {
  id: number;
  title: string;
  image: string;
  time: string;
  date: string;
  price: string;
  features: string[];
  available: boolean;
  onSelect: (id: number) => void;
}

const SlotCard: React.FC<SlotCardProps> = ({
  id,
  title,
  image,
  time,
  date,
  price,
  features,
  available,
  onSelect,
}) => {
  return (
    <Card className="overflow-hidden border border-border hover:border-studio-purple/50 transition-all hover:shadow-md hover:shadow-studio-purple/20">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-studio-dark to-transparent opacity-50 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {!available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-20">
            <span className="text-white font-bold text-xl">Booked</span>
          </div>
        )}
      </div>
      
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{date}</p>
          </div>
          <div className="bg-studio-darkGray px-3 py-1 rounded-full text-sm">
            {time}
          </div>
        </div>
        
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-studio-purple">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-border pt-4">
        <div className="font-bold">
          {price}
          <span className="text-muted-foreground text-sm font-normal"> /hour</span>
        </div>
        <Button 
          className="bg-studio-purple hover:bg-studio-darkPurple" 
          disabled={!available}
          onClick={() => available && onSelect(id)}
        >
          {available ? "Book Now" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SlotCard;
