import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users, MapPin } from "lucide-react";
import physiotherapistImage from "@/assets/physiotherapist-portrait.jpg";

const About = () => {
  const achievements = [
    { icon: Award, label: "10+ Years Experience", value: "Certified Professional" },
    { icon: Users, label: "500+ Patients Treated", value: "Successful Recoveries" },
    { icon: Clock, label: "24/7 Support", value: "Emergency Consultations" },
    { icon: MapPin, label: "Multiple Locations", value: "Home & Clinic Visits" }
  ];

  const specializations = [
    "Orthopedic Rehabilitation",
    "Sports Medicine",
    "Neurological Physiotherapy", 
    "Pediatric Therapy",
    "Geriatric Care",
    "Manual Therapy"
  ];

  return (
    <section className="py-20 px-4 bg-medical-light" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Physiotherapist</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to helping you achieve optimal health and mobility through evidence-based treatment
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img 
                src={physiotherapistImage} 
                alt="Dr. Sarah Mitchell - Licensed Physiotherapist" 
                className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 card-shadow"
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Dr. Sarah Mitchell</h3>
            <p className="text-primary font-semibold mb-4">Licensed Physiotherapist, DPT</p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over a decade of experience in physiotherapy, Dr. Mitchell specializes in helping patients 
              recover from injuries, manage chronic pain, and improve their overall quality of life. She holds 
              a Doctorate in Physical Therapy and is committed to providing personalized, evidence-based care.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Specializations:</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-shadow border-0 bg-card hover:bg-primary/5 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{achievement.label}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;