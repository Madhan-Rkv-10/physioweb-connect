import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Home, Heart, Zap, Users, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Online Therapy",
      description: "Convenient virtual sessions from the comfort of your home with personalized exercise programs."
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Professional physiotherapy services delivered to your doorstep for maximum convenience."
    },
    {
      icon: Heart,
      title: "Pain Management",
      description: "Comprehensive pain relief strategies using advanced techniques and personalized care plans."
    },
    {
      icon: Zap,
      title: "Sports Injury Recovery",
      description: "Specialized treatment for athletes with focus on quick, safe return to peak performance."
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Collaborative therapy sessions that combine professional guidance with peer support."
    },
    {
      icon: Stethoscope,
      title: "Post-Surgery Rehabilitation",
      description: "Expert post-operative care to ensure optimal recovery and restored mobility."
    }
  ];

  return (
    <section className="py-20 px-4" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive physiotherapy services tailored to your unique needs and recovery goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-smooth border-0 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;