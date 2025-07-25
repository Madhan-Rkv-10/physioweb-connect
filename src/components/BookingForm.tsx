import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  sessionType: string;
  description: string;
}

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: '',
    description: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.sessionType) {
      newErrors.sessionType = 'Session type is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi! I'd like to book a physiotherapy appointment:

Name: ${formData.name}
Mobile: ${formData.mobile}
${formData.email ? `Email: ${formData.email}` : ''}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Session Type: ${formData.sessionType}
${formData.description ? `Additional Details: ${formData.description}` : ''}

Please confirm my appointment. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918600996386"; // Ms. Prachi W's WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking Request Sent!",
      description: "You'll be redirected to WhatsApp to complete your appointment booking.",
    });
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="py-20 px-4 bg-background" id="booking-form">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground">
            Take the first step towards better health. Schedule your consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="card-shadow border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Appointment Details
                </CardTitle>
                <CardDescription>
                  Fill in your details and we'll contact you to confirm your appointment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'border-destructive' : ''}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className={errors.mobile ? 'border-destructive' : ''}
                        placeholder="Enter 10-digit mobile number"
                      />
                      {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        min={today}
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className={errors.preferredDate ? 'border-destructive' : ''}
                      />
                      {errors.preferredDate && <p className="text-sm text-destructive">{errors.preferredDate}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className={errors.preferredTime ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.preferredTime && <p className="text-sm text-destructive">{errors.preferredTime}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessionType">Session Type *</Label>
                    <Select value={formData.sessionType} onValueChange={(value) => handleInputChange('sessionType', value)}>
                      <SelectTrigger className={errors.sessionType ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Choose session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online Consultation</SelectItem>
                        <SelectItem value="offline">In-Clinic Visit</SelectItem>
                        <SelectItem value="home">Home Visit</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.sessionType && <p className="text-sm text-destructive">{errors.sessionType}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Details (Optional)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your condition, symptoms, or any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-shadow border-0 bg-medical-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Clinic Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Emergency Only</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Initial consultation (45-60 minutes)</li>
                  <li>• Comprehensive assessment</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Progress tracking</li>
                  <li>• Home exercise guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;