import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Home, Heart, Zap, Users, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Online Therapy",
      description: "Convenient virtual therapy sessions from the comfort of your home with personalized treatment plans."
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Professional psychotherapy services delivered to your home for maximum comfort and convenience."
    },
    {
      icon: Heart,
      title: "Anxiety & Depression",
      description: "Comprehensive treatment for anxiety disorders and depression using evidence-based therapeutic approaches."
    },
    {
      icon: Zap,
      title: "Trauma Therapy",
      description: "Specialized treatment for trauma survivors with focus on healing and post-traumatic growth."
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Collaborative therapy sessions that combine professional guidance with peer support and shared experiences."
    },
    {
      icon: Stethoscope,
      title: "Stress Management",
      description: "Expert guidance for managing stress, building resilience, and developing healthy coping strategies."
    }
  ];

  return (
    <section className="py-20 px-4" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive psychotherapy services tailored to your unique needs and mental health goals
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