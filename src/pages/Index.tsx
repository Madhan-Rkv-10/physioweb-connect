import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import StickyBookingButton from "@/components/StickyBookingButton";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Services />
        <About />
        <BookingForm />
        <Location />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;
