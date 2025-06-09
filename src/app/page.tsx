import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Cards from "@/components/Cards";
import Logos from "@/components/Logos";
import GridCards from "@/components/GridCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <Cards />
      <Logos />
      <GridCards />
      <Footer />
    </>
  );
}
