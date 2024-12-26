import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="logo-ticker">
        <LogoTicker />
      </section>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="Features">
        <Features />
      </section>
      <section id="integrations">
        <Integrations />
      </section>
      <Footer />
    </>
  );
}
