import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
    title: "Contato | Oscar do Sertão ",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contato" },
  ];
  return (
    <>
      <HeroSub
        title="Entre em contato"
        description="Estamos aqui para ajudar! Entre em contato conosco para qualquer dúvida, sugestão ou informação adicional que você precise."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
      {/* <TicketSection/> */}
    </>
  );
};

export default page;
