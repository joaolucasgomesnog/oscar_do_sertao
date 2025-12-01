import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import ThumbnailCarousel from '@/components/Home/Conferences';
import WorkSpeakers from '@/components/Home/WorkSpeakers';
import EventTicket from '@/components/Home/EventTicket';
import Highlight from '@/components/Home/YearHighlight/page';
import Upcoming from '@/components/Home/Upcoming';
import Testimonials from '@/components/Home/Testimonials';
import TicketSection from '@/components/Home/TicketSection';
import IndexHeader from '@/components/IndexHeader';
export const metadata: Metadata = {
  title: "Oscar do Sertão 2025 – Maior Evento de Tecnologia e Inovação do Sertão Brasileiro",
  description:
    "Participe do Oscar do Sertão 2025, o maior evento de tecnologia, inovação e empreendedorismo do sertão de Pernambuco. Palestras, workshops, startups e networking.",
  keywords:
    "Oscar do Sertão, pernambuco, paraiba, saúde, comércio, inovação no sertão, tecnologia nordeste, evento tecnológico pernambuco, inovação brasileira, empreendedorismo sertão, serra talhada, afogados da ingazeira, carnaiba, tabira, princesa, flores, bm, uniplan",
  authors: [{ name: "Cesar de Luna" }],
  openGraph: {
    title: "Oscar do Sertão 2025 – Tecnologia, Inovação e Empreendedorismo",
    description:
      "O maior evento de tecnologia e inovação do sertão brasileiro. Conecte-se com especialistas, startups e oportunidades.",
    url: "https://oscardosertao.com",
    siteName: "Oscar do Sertão",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Oscar do Sertão 2025 – Evento de Saúde e Comércio do Sertão de Pernambuco",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://oscardosertao.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};


export default function Home() {
  return (
    <main>
      <IndexHeader/>
      <Hero />
      <ThumbnailCarousel/>
      {/* <WorkSpeakers/> */}
      {/* <EventTicket/> */}
      <Highlight/>
      <Upcoming/>
      <Testimonials/>
      <TicketSection/>
    </main>
  )
}
