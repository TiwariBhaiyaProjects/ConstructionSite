import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { companyInfo, contactSubjects } from "@/data/companyData";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: companyInfo.address,
      link: "#map",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">Contact</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, subject: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactSubjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactCards.map((card, index) => (
                  <Card 
                    key={index}
                    className="hover-lift bg-card"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <card.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {card.title}
                      </h3>
                      {card.link ? (
                        <a
                          href={card.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {card.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{card.content}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Section */}
              <div id="map" className="rounded-xl overflow-hidden h-64 md:h-80 bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social}
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
