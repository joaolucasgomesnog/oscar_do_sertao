import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css'
import Schedules from "@/components/Home/Schedules";
import TicketSection from "@/components/Home/TicketSection";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Schedules | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/schedules", text: "Eventos" },
  ];
  return (
    <>
      <HeroSub
        title="Próximos Eventos"
        description="Confira a programação completa dos nossos próximos eventos e não perca nenhuma oportunidade de aprendizado e networking."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">  
        <div className="container upcoming">
          {/* <BoxSlider/> */}
          <Schedules/>        
        </div>
      </section>      
      <div>
        {/* <Testimonials /> */}
        {/* <TicketSection/> */}
      </div>
    </>
  );
};

export default page;
