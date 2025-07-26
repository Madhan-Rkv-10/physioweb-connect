import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Prachi W Therapy</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in mental health and emotional well-being. Professional psychotherapy 
              care delivered with compassion and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'About Us', id: 'about' },
                { name: 'Book Appointment', id: 'booking-form' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">8600996386</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">prachiwtherapy@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  House #180, Plot #828<br />
                  Buddha Nagar, Dr. Ambedkar Road<br />
                  Nagpur - 440017
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Clinic Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Prachi W Therapy. All rights reserved. | 
            <span className="ml-1">Licensed Healthcare Provider - Nagpur</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;