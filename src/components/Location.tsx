import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 px-4 bg-medical-light" id="location">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Clinic</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Nagpur with easy access and dedicated care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="card-shadow border-0 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground">
                        House #180, Plot #828<br />
                        Buddha Nagar, Dr. Ambedkar Road<br />
                        Nagpur - 440017<br />
                        <span className="text-sm">(Near Buddha Park. Adjacent to Home Sweet Home Building.)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">8600996386</p>
                      <p className="text-sm text-muted-foreground">Available for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">prachiwtherapy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Service Areas</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Home visits available in Nagpur</li>
                    <li>• Online consultations worldwide</li>
                    <li>• Clinic visits by appointment</li>
                    <li>• Emergency consultations available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle>Location Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-80 bg-medical-soft rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prachi W Therapy Clinic Location - Nagpur"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>✓ Personalized treatment plans</p>
                  <p>✓ Convenient home visits available</p>
                  <p>✓ Modern evidence-based techniques</p>
                  <p>✓ Flexible appointment scheduling</p>
                  <p>✓ Comprehensive rehabilitation programs</p>
                  <p>✓ Professional and caring approach</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
