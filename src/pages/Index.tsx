import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  GraduationCap,
  Target,
  Heart,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Star,
  Sparkles
} from 'lucide-react';

// Import generated images
import heroImage from '@/assets/hero-school.jpg';
import laboratoryImage from '@/assets/laboratory.jpg';
import playgroundImage from '@/assets/playground.jpg';
import classroomImage from '@/assets/classroom.jpg';
import libraryImage from '@/assets/library.jpg';
import computerLabImage from '@/assets/computer-lab.jpg';
import annualDayImage from '@/assets/annual-day.jpg';
import sportsDayImage from '@/assets/sports-day.jpg';
import flagCeremonyImage from '@/assets/flag-ceremony.jpg';
import ccaActivitiesImage from '@/assets/cca-activities.jpg';

const Index = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    class: '',
    message: ''
  });

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your enquiry. We will get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: '',
      class: '',
      message: ''
    });
  };

  const facilities = [
    {
      title: "Science Laboratories",
      description: "State-of-the-art Physics, Chemistry, and Biology labs with modern equipment for hands-on learning.",
      image: laboratoryImage,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Sports Complex",
      description: "Spacious playground with basketball court, football ground, and athletics track for physical development.",
      image: playgroundImage,
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Smart Classrooms",
      description: "Well-ventilated classrooms equipped with smart boards and modern teaching aids.",
      image: classroomImage,
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Digital Library",
      description: "Comprehensive library with vast collection of books, journals, and digital resources.",
      image: libraryImage,
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Computer Laboratory",
      description: "Modern computer lab with latest systems for digital literacy and programming skills.",
      image: computerLabImage,
      icon: <Target className="w-6 h-6" />
    }
  ];

  const activities = [
    {
      title: "Annual Cultural Day",
      description: "Spectacular performances showcasing student talents in dance, music, drama, and cultural programs.",
      image: annualDayImage
    },
    {
      title: "Sports Championship",
      description: "Inter-house competitions, athletics meets, and sports tournaments promoting fitness and teamwork.",
      image: sportsDayImage
    },
    {
      title: "National Celebrations",
      description: "Patriotic events including Independence Day, Republic Day, and Kannada Rajyotsava with great enthusiasm.",
      image: flagCeremonyImage
    },
    {
      title: "Co-Curricular Activities",
      description: "Weekly CCA sessions including art, music, debate, science club, and creative learning programs.",
      image: ccaActivitiesImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section with Enhanced Space */}
            <div className="logo-container animate-fade-in">
              <div className="logo-image">
                <img 
                  src="https://mtpscbse.com/wp-content/uploads/2020/03/logo.jpg" 
                  alt="Mother Teresa High School Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-gradient-primary">
                  Mother Teresa High School
                </h1>
                <p className="text-sm text-muted-foreground">
                  CBSE | Jalahalli, Bengaluru
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#infrastructure" className="text-foreground hover:text-primary transition-colors font-medium">Infrastructure</a>
              <a href="#activities" className="text-foreground hover:text-primary transition-colors font-medium">Activities</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
              <Button className="btn-secondary">
                Admissions <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current transition-all h-0.5 w-6 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <span className={`bg-current transition-all h-0.5 w-6 my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`bg-current transition-all h-0.5 w-6 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
                <a href="#infrastructure" className="text-foreground hover:text-primary transition-colors font-medium">Infrastructure</a>
                <a href="#activities" className="text-foreground hover:text-primary transition-colors font-medium">Activities</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
                <Button className="btn-secondary w-fit">
                  Admissions <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero/80" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-bounce-in">
                Welcome to Excellence in
                <span className="block text-secondary-light">Education</span>
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in delay-300">
                Nurturing young minds with quality CBSE education, 
                holistic development, and moral values since establishment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-500 pt-4">
                <Button size="lg" className="btn-hero">
                  <Users className="mr-2 w-5 h-5" />
                  Explore Admissions
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Star className="w-8 h-8 text-secondary-light" />
            </div>
          </div>
          <div className="absolute bottom-32 right-10 animate-float delay-1000">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
                About Our School
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mother Teresa High School is managed by Jalahalli Education Society and recognized 
                by the Government of Karnataka, providing exceptional CBSE education with a focus 
                on academic excellence and character development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="school-card animate-on-scroll">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-gradient-primary">Vision & Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    To nurture compassionate, responsible, and academically strong students 
                    prepared for the challenges of the modern world with strong moral values.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="school-card animate-on-scroll delay-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-gradient-secondary">Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Experienced educational leadership with dedicated headmaster and coordinators 
                    committed to fostering academic excellence and personal growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="school-card animate-on-scroll delay-400">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-gradient-primary">Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    Karnataka State Board affiliated institution with CBSE curriculum, 
                    providing quality English medium education since establishment.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="infrastructure" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
                World-Class Infrastructure
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our state-of-the-art facilities provide the perfect environment for learning, 
                creativity, and personal development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="school-card animate-on-scroll hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                        {facility.icon}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-gradient-primary text-lg leading-relaxed min-h-[3rem] flex items-center">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {facility.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
                Vibrant School Life
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Beyond academics, we offer a rich tapestry of activities that help students 
                discover their passions and develop well-rounded personalities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <Card key={index} className="school-card animate-on-scroll hover-lift overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-2xl font-bold mb-2">{activity.title}</h4>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-base">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
                Connect With Us
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to begin your child's educational journey? Get in touch with us for admissions, 
                enquiries, or to schedule a campus visit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Enhanced Contact Form */}
              <div className="animate-on-scroll">
                <Card className="school-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient-primary">Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you promptly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="form-input"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className="form-input"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="form-input"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="enquiry-type">Enquiry Type *</Label>
                          <Select value={formData.enquiryType} onValueChange={(value) => setFormData({...formData, enquiryType: value})}>
                            <SelectTrigger className="form-select">
                              <SelectValue placeholder="Select enquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admission">New Admission</SelectItem>
                              <SelectItem value="transfer">Transfer Admission</SelectItem>
                              <SelectItem value="fees">Fee Information</SelectItem>
                              <SelectItem value="facilities">Facilities Enquiry</SelectItem>
                              <SelectItem value="general">General Information</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="class">Class/Grade Interest</Label>
                        <Select value={formData.class} onValueChange={(value) => setFormData({...formData, class: value})}>
                          <SelectTrigger className="form-select">
                            <SelectValue placeholder="Select class/grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nursery">Nursery</SelectItem>
                            <SelectItem value="lkg">LKG</SelectItem>
                            <SelectItem value="ukg">UKG</SelectItem>
                            <SelectItem value="class-1">Class 1</SelectItem>
                            <SelectItem value="class-2">Class 2</SelectItem>
                            <SelectItem value="class-3">Class 3</SelectItem>
                            <SelectItem value="class-4">Class 4</SelectItem>
                            <SelectItem value="class-5">Class 5</SelectItem>
                            <SelectItem value="class-6">Class 6</SelectItem>
                            <SelectItem value="class-7">Class 7</SelectItem>
                            <SelectItem value="class-8">Class 8</SelectItem>
                            <SelectItem value="class-9">Class 9</SelectItem>
                            <SelectItem value="class-10">Class 10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please share your message, questions, or specific requirements..."
                          className="form-input min-h-[120px]"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>

                      <Button type="submit" className="btn-hero w-full">
                        <Mail className="mr-2 w-5 h-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Contact Info */}
              <div className="space-y-8 animate-on-scroll">
                {/* Google Maps */}
                <Card className="school-card overflow-hidden">
                  <div className="h-80 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3194096557477!2d77.54878977454647!3d13.01489721373221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df9d8cddc23%3A0xf1c2e1aa77bb4c9d!2sMES%20Ring%20Rd%2C%20Jalahalli%2C%20Bengaluru%2C%20Karnataka%20560013!5e0!3m2!1sen!2sin!4v1693910242876!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mother Teresa High School Location"
                    ></iframe>
                  </div>
                </Card>

                {/* Contact Information */}
                <Card className="school-card">
                  <CardHeader>
                    <CardTitle className="text-gradient-primary">Visit Our Campus</CardTitle>
                    <CardDescription>We welcome you to visit our beautiful campus</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          P.B.NO.1320, M.E.S. Ring Road<br />
                          Jalahalli, Bengaluru - 560013<br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone Numbers</h4>
                        <p className="text-muted-foreground text-sm">
                          Main Office: 080-28380124<br />
                          Principal: +91-XXXXXXXXXX<br />
                          Administration: +91-XXXXXXXXXX
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground text-sm">
                          info@motherteresahs.in
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">School Timings</h4>
                        <p className="text-muted-foreground text-sm">
                          Monday - Saturday: 8:30 AM - 3:30 PM<br />
                          Office Hours: 9:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-hero text-primary-foreground">
        <div className="container-custom py-16 px-8 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Information */}
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-xl p-2">
                  <img 
                    src="https://mtpscbse.com/wp-content/uploads/2020/03/logo.jpg" 
                    alt="School Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-secondary-light">Mother Teresa High School</h4>
                  <p className="text-primary-foreground/80">Excellence in CBSE Education</p>
                </div>
              </div>
              
              {/* Enhanced Address Layout */}
              <div className="space-y-4 text-primary-foreground/90">
                <div>
                  <h5 className="font-semibold text-secondary-light mb-2">Campus Address:</h5>
                  <p className="leading-relaxed">
                    P.B.NO.1320, M.E.S. Ring Road<br />
                    Jalahalli, Bengaluru - 560013<br />
                    Karnataka, India
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h5 className="font-semibold text-secondary-light mb-2">Contact:</h5>
                    <p className="text-sm">
                      📞 080-28380124<br />
                      ✉️ info@motherteresahs.in
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary-light mb-2">Timings:</h5>
                    <p className="text-sm">
                      Mon-Sat: 8:30 AM - 3:30 PM<br />
                      Office: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-semibold mb-6 text-secondary-light">Quick Links</h4>
              <nav className="space-y-3">
                <a href="#about" className="block text-primary-foreground/80 hover:text-secondary-light transition-colors text-sm">About School</a>
                <a href="#infrastructure" className="block text-primary-foreground/80 hover:text-secondary-light transition-colors text-sm">Infrastructure</a>
                <a href="#activities" className="block text-primary-foreground/80 hover:text-secondary-light transition-colors text-sm">Activities</a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary-light transition-colors text-sm">Admissions</a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary-light transition-colors text-sm">Contact Us</a>
              </nav>
            </div>

            {/* Social Media & Connect */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-semibold mb-6 text-secondary-light">Connect With Us</h4>
              <div className="space-y-4">
                <p className="text-primary-foreground/80 text-sm">
                  Stay updated with school events, announcements, and achievements.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/mtpsblr/about/?locale=hi_IN&_rdr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/mtps.cbse/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                
                {/* Recognition Badge */}
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-secondary-light" />
                    <span className="font-semibold text-secondary-light">Recognized By</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80">
                    Government of Karnataka<br />
                    CBSE Affiliated Institution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20">
          <div className="container-custom py-6 px-8 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-primary-foreground/70 text-sm">
                © 2024 Mother Teresa High School. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Heart className="w-4 h-4 text-secondary-light" />
                <span>Nurturing minds since establishment</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;