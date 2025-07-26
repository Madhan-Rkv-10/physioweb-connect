import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users, MapPin, Star, ThumbsUp } from "lucide-react";
import physiotherapistImage from "@/assets/physiotherapist-portrait.jpg";

const About = () => {
  const achievements = [
    { icon: Award, label: "Professional Expertise", value: "Certified Psychotherapist" },
    { icon: Users, label: "200+ Clients Supported", value: "Successful Outcomes" },
    { icon: Clock, label: "Flexible Timings", value: "Home & Online Sessions" },
    { icon: MapPin, label: "Nagpur Based", value: "Local & Remote Care" }
  ];

  const specializations = [
    "Anxiety & Depression",
    "Trauma Therapy",
    "Cognitive Behavioral Therapy", 
    "Stress Management",
    "Relationship Counseling",
    "Mindfulness-Based Therapy"
  ];

  const testimonials = [
    {
      name: "Suhas Phunde",
      role: "Team Lead - DevOps/Cloud Engineer @ IBM",
      text: "Prachi is wonderful to work with and has exceptional expertise in leadership, coaching and motivation. She consistently demonstrated a solid work ethic. Prachi is dedicated, self-motivated, and very capable. She is not only reliable but also carries a positive attitude towards work and is an inspiring team player.",
      rating: 5
    },
    {
      name: "Gaurav Shah", 
      role: "Senior Engineer @ Siemens Digital Industries",
      text: "Prachi is very good in technical skills. She has very good communication and interpersonal skills. She does detailed analysis of her work and makes sure to deliver successful results on time with great quality. She takes full ownership of assignments and works with full team spirit.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-medical-light" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Psychotherapist</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to helping you achieve optimal mental health and emotional well-being through evidence-based therapy
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img 
                src={physiotherapistImage} 
                alt="Ms. Prachi W - Licensed Psychotherapist" 
                className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 card-shadow"
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Ms. Prachi W</h3>
            <p className="text-primary font-semibold mb-4">Licensed Psychotherapist</p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              A dedicated psychotherapist with extensive experience in providing personalized mental health care to clients. 
              Ms. Prachi specializes in helping clients navigate emotional challenges, develop coping strategies, and improve 
              their overall mental well-being. She is known for her exceptional communication skills, therapeutic expertise, 
              and compassionate approach to mental healthcare.
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

        {/* Patient Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">What Colleagues Say</h3>
            <p className="text-lg text-muted-foreground">
              Professional testimonials from colleagues and peers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-shadow border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <ThumbsUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
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