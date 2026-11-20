import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureCollection from "@/components/SignatureCollection";
import MaisonStory from "@/components/MaisonStory";
import VedicPromise from "@/components/VedicPromise";
import BulkAndTrack from "@/components/BulkAndTrack";
import EditorialFAQ from "@/components/EditorialFAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SignatureCollection />
      <MaisonStory />
      <VedicPromise />
      <BulkAndTrack />
      <EditorialFAQ />
      <Footer />
    </main>
  );
}
