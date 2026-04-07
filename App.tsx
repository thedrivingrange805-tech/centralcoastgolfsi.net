import { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, 
  Clock, Check, Home, Building2, Heart, GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1B5E20] rounded-full flex items-center justify-center">
              <div className="text-white text-xl font-bold">⛳</div>
            </div>
            <span className="font-bold text-xl tracking-wide text-[#1B5E20] hidden sm:block">
              THE DRIVING RANGE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold text-gray-700 hover:text-[#4CAF50] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-[#4CAF50] hover:bg-[#1B5E20] text-white rounded-full px-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1B5E20]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1B5E20]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E8F5E9] hover:text-[#1B5E20] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-[#4CAF50] hover:bg-[#1B5E20] text-white rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden gradient-golf">
      {/* Animated background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#81C784] rounded-full opacity-20 blur-3xl animate-pulse-glow -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B5E20] leading-tight mb-6">
              Golf Simulation for Any Occasion
            </h1>
            <p className="text-xl sm:text-2xl text-[#4CAF50] font-semibold mb-6">
              Bring the golf course to your event
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professional mobile golf simulator serving Paso Robles and California's Central Coast. 
              Perfect for corporate events, weddings, backyard parties, and team building.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-[#4CAF50] hover:bg-[#1B5E20] text-white rounded-full px-8 py-6 text-lg font-semibold btn-primary"
              >
                Book Your Event
              </Button>
              <Button 
                onClick={() => scrollToSection('#services')}
                variant="outline"
                className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white rounded-full px-8 py-6 text-lg font-semibold transition-all"
              >
                Explore Services
              </Button>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-[#4CAF50]" />
              <span className="font-medium">Paso Robles, CA</span>
              <span className="text-gray-400">|</span>
              <span>Serving Central Coast within 1 hour</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000 rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
              <img 
                src="/hero-golf-simulator.jpg" 
                alt="Mobile Golf Simulator Setup" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Corporate Events',
      description: 'Team building activities, closest-to-pin competitions, long drive contests, or play a full round with colleagues. Perfect for networking and employee engagement.',
      image: '/service-corporate.jpg'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Weddings',
      description: 'Unique entertainment for your special day. Keep guests engaged during cocktail hour or provide a fun activity for the reception. 4-hour minimum booking.',
      image: '/service-wedding.jpg'
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Backyard Parties',
      description: 'Birthdays, family reunions, or just because! Transform your backyard into a premium golf facility with professional tracking and world-class courses.',
      image: '/service-backyard.jpg'
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Coaching & Training',
      description: 'Professional instruction with detailed analytics from our GC3 launch monitor. Perfect for golfers looking to improve their game with data-driven insights.',
      image: '/service-coaching.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B5E20] mb-4">
            Events We Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From corporate team building to wedding receptions, we bring the ultimate golf experience to your location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card bg-gray-50 rounded-2xl overflow-hidden border-t-4 border-[#4CAF50]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[#4CAF50] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Book Your Date',
      description: 'Use our online booking system or call us at (805) 888-9252 to reserve your event date.'
    },
    {
      number: '2',
      title: 'We Deliver & Setup',
      description: 'Our team arrives 1 hour prior to your event to inflate the enclosure and calibrate the system. We need a 14\'x20\' outdoor space or 11\' ceiling height indoors.'
    },
    {
      number: '3',
      title: 'Play Golf',
      description: 'Enjoy world-class courses with Foresight FSX Play and Awesome Golf software on our professional GC3 launch monitor.'
    },
    {
      number: '4',
      title: 'We Pack Up',
      description: 'When your event ends, we handle complete teardown and removal. You just focus on having fun!'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#E8F5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B5E20] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional setup in under an hour. We handle everything from delivery to takedown.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-[#1B5E20] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Space Requirements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#1B5E20] mb-6 text-center">Space Requirements</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#1B5E20] mb-2">Outdoor Setup</h4>
              <p className="text-gray-600 text-sm">14 ft wide x 20 ft deep</p>
              <p className="text-gray-600 text-sm">Level surface (grass, concrete, or pavement)</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1B5E20] mb-2">Indoor Setup</h4>
              <p className="text-gray-600 text-sm">Minimum 11 ft ceiling height</p>
              <p className="text-gray-600 text-sm">14 ft width x 20 ft depth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const packages = [
    {
      name: 'Basic Package',
      price: '$500',
      duration: '/3 hours',
      description: 'Perfect for small gatherings and backyard parties',
      features: [
        '3 hours of simulator time',
        'GC3 Launch Monitor',
        '50+ World-class courses',
        'Professional setup/takedown',
        'Basic event support'
      ],
      additional: 'Additional hours: $100/hr',
      featured: false,
      cta: 'Book Now'
    },
    {
      name: 'Wedding Package',
      price: '$700',
      duration: '/4 hours',
      description: 'Premium experience for your special day',
      features: [
        '4 hours of simulator time',
        'GC3 Launch Monitor',
        'Custom welcome screen',
        'On-site event coordinator',
        'Priority setup location',
        'Unlimited players'
      ],
      additional: '',
      featured: true,
      cta: 'Book Wedding'
    },
    {
      name: 'Corporate/Coaching',
      price: 'Custom',
      duration: 'Quote',
      description: 'Tailored solutions for businesses and training',
      features: [
        'Team building activities',
        'Tournament organization',
        'Professional instruction available',
        'Custom branding options',
        'Extended hours available',
        'Multiple bay setups'
      ],
      additional: '',
      featured: false,
      cta: 'Get Quote'
    }
  ];

  const handleBook = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowDialog(true);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B5E20] mb-4">
            Investment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                pkg.featured 
                  ? 'border-[#4CAF50] shadow-xl scale-105 z-10' 
                  : 'border-gray-200 hover:border-[#4CAF50]'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4CAF50] text-white px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#1B5E20] mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold text-[#1B5E20]">{pkg.price}</span>
                <span className="text-gray-500">{pkg.duration}</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
              
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {pkg.additional && (
                <p className="text-sm text-gray-500 mb-4">{pkg.additional}</p>
              )}
              
              <Button 
                onClick={() => handleBook(pkg.name)}
                className={`w-full rounded-full py-6 font-semibold transition-all ${
                  pkg.featured
                    ? 'bg-[#4CAF50] hover:bg-[#1B5E20] text-white'
                    : 'border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white bg-transparent'
                }`}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#1B5E20]">Booking Request</DialogTitle>
            <DialogDescription>
              You've selected the <strong>{selectedPackage}</strong>. Please fill out the booking form below to complete your request.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => {
                setShowDialog(false);
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#4CAF50] hover:bg-[#1B5E20] text-white rounded-full px-8"
            >
              Go to Booking Form
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What equipment do you use?',
      answer: 'We use the industry-leading Foresight GC3 Launch Monitor paired with FSX Play and Awesome Golf software. This provides professional-grade ball tracking, including carry distance, ball speed, spin rate, and launch angle. The inflatable enclosure features a premium impact screen and turf flooring.'
    },
    {
      question: 'How much space do I need?',
      answer: 'For outdoor setups, we need a flat area approximately 14 feet wide by 20 feet deep. For indoor setups, we require a minimum ceiling height of 11 feet and similar floor space. We can work on grass, concrete, pavement, or indoor floors.'
    },
    {
      question: 'What areas do you service?',
      answer: "We're based in Paso Robles, California, and service the entire Central Coast region including San Luis Obispo, Atascadero, Templeton, and surrounding areas within a 1-hour drive. For events outside this radius, please contact us for availability."
    },
    {
      question: 'How many people can play at once?',
      answer: 'One person hits at a time, but the simulator accommodates up to 8 players per round. For larger events, we rotate players every 2-3 shots to keep everyone engaged. Average time per person is 5-10 minutes for 3-5 shots.'
    },
    {
      question: 'What if it rains?',
      answer: 'Our inflatable enclosure is weather-resistant and can handle light rain and wind. For severe weather, we can move indoors if space is available, or reschedule your event. We monitor weather closely and will contact you 24 hours prior if conditions look unfavorable.'
    },
    {
      question: 'Do you provide golf clubs?',
      answer: 'While most guests prefer to bring their own clubs, we do have a limited selection of right and left-handed clubs available upon request. Players are welcome to use their own equipment.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B5E20] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our mobile golf simulator
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-[#4CAF50]' : ''
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  activeIndex === index ? 'bg-[#E8F5E9]' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`font-semibold ${activeIndex === index ? 'text-[#1B5E20]' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`faq-icon text-2xl transition-transform duration-300 ${
                  activeIndex === index ? 'text-[#4CAF50] rotate-45' : 'text-gray-400'
                }`}>
                  +
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-5 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Booking Section
function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 gradient-golf-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Tee Off?
          </h2>
          <p className="text-xl text-white/90">
            Book your mobile golf simulator experience today
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B5E20] mb-2">Thank You!</h3>
              <p className="text-gray-600">We will contact you within 24 hours to confirm your booking.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                    placeholder="(805) 888-9252"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                    Event Type
                  </label>
                  <Select 
                    value={formData.eventType} 
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="backyard">Backyard Party</SelectItem>
                      <SelectItem value="coaching">Coaching/Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                    Event Date
                  </label>
                  <Input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                    Number of Guests (Approx)
                  </label>
                  <Input
                    name="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                    placeholder="10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                  Event Location (Address)
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                  placeholder="Paso Robles, CA"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B5E20] mb-2">
                  Additional Details
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border-2 border-gray-200 focus:border-[#4CAF50] rounded-lg"
                  placeholder="Tell us about your event, timing preferences, or special requests..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#4CAF50] hover:bg-[#1B5E20] text-white rounded-full py-6 text-lg font-semibold btn-primary"
              >
                Request Booking
              </Button>

              <p className="text-center text-gray-600">
                Or call us directly at{' '}
                <a href="tel:8058889252" className="text-[#1B5E20] font-bold hover:underline">
                  (805) 888-9252
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <div className="text-white text-lg font-bold">⛳</div>
              </div>
              <span className="font-bold text-lg">THE DRIVING RANGE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional mobile golf simulator services for any occasion. Bringing the golf course to you across California's Central Coast.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@thedrivingrange.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#4CAF50] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#4CAF50] mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Paso Robles, CA 93446
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (805) 888-9252
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@thedrivingrange.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Mon-Sun: 8:00 AM - 8:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#4CAF50] mb-4">Service Area</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Paso Robles</li>
              <li>San Luis Obispo</li>
              <li>Atascadero</li>
              <li>Templeton</li>
              <li>Central Coast Region</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The Driving Range. All rights reserved. | Golf Simulation for Any Occasion
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
