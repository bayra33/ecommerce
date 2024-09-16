
import { CarSell } from "@/components/CarSell";
import { Body } from "@/components/Body";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full h-full items-center">
      
      <div className="w-[1040px] my-5 mt-5">

     
   <CarSell/>
    <Body/>
    <Card/>
    </div>
 
    </div>
  );
}
