import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import ChatBox from "@/components/AI/ChatBox";


export const metadata: Metadata = {
  title: "MLN-131",

  // other metadata
  description: ""
};


export default function Home() {
  return (
    <main>
      <Hero />

      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />


      <FAQ />

      <Pricing />


      <Testimonial />
      <ChatBox />
    </main>
  );
}
