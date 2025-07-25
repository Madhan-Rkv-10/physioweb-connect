import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Wellness 
            <span className="text-primary block">Physiotherapy</span>
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-medium">Clinic</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Expert physiotherapy care to help you move better, feel stronger, and live pain-free. 
            Professional treatment in a modern, caring environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="text-lg px-8 py-6 rounded-full transition-smooth hover:shadow-lg"
            >
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden card-shadow">
            <img 
              src={heroImage} 
              alt="Modern physiotherapy clinic interior" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center card-shadow">
            <span className="text-primary-foreground text-lg font-bold">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;