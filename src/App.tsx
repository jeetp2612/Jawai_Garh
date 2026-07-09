import { useState, useEffect, useCallback } from 'react';
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Wifi,
  Car,
  Clock,
  Droplets,
  Sparkles,
  Utensils,
  Facebook,
  Instagram,
  Twitter,
  Camera,
  Calendar,
  Users,
  User,
  ArrowRight,
  Star,
  Leaf,
  Mountain,
  Sun,
  Moon,
} from 'lucide-react';

type CottageType = 'royal' | 'family';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  cottage: CottageType;
  guests: number;
}

const heroSlides = [
  {
    image: '/1_land.jpeg',
    title: 'Serene Evenings Amidst Nature',
    subtitle: 'Unwind on our lush green lawns as the sun sets over the majestic hills of Jawai.'
  },
  {
    image: '/2_land.jpeg',
    title: 'Welcome to Leopard Territory',
    subtitle: 'Step into Jawai Garh, where the thrill of the wild meets unparalleled royal hospitality.'
  },
  {
    image: '/3_land.jpeg',
    title: 'A Grand Entrance Awaits',
    subtitle: 'Enter a realm of rustic elegance, beautifully illuminated under the vibrant evening sky.'
  },
  {
    image: '/4_land.jpeg',
    title: 'Rustic Charm, Modern Luxury',
    subtitle: 'Relax in our beautifully crafted stone cottages, designed for a perfect blend of comfort and heritage.'
  },
  {
    image: '/5_land.jpeg',
    title: 'Dive into Tranquility',
    subtitle: 'Take a refreshing dip in our pristine pool while soaking in the golden hues of the setting sun.'
  },
];

const cottageDetails = {
  royal: {
    name: 'Jawai Royal Cottage',
    description: 'Experience royal hospitality in our elegantly designed cottage, perfect for couples seeking a romantic wilderness getaway.',
    weekday: 7500,
    weekend: 9000,
    extraBed: 1800,
    amenities: ['King Size Bed', 'Private Balcony', 'En-suite Bathroom', 'Mini Bar', 'Air Conditioning'],
    images: [
      '/royalcottage.jpeg',
      '/1_royal.jpeg',
      '/2_royal.jpeg',
      '/3_royal.jpeg',
      '/4_royal.jpeg',
    
    ],
  },
  family: {
    name: 'Jawai Family Cottage',
    description: 'Spacious and comfortable, our family cottage offers the perfect blend of luxury and togetherness for memorable family vacations.',
    weekday: 9500,
    weekend: 11000,
    extraBed: 1800,
    amenities: ['Two Bedrooms', 'Living Area', 'Private Balcony', 'Full Bathroom', 'Air Conditioning'],
    images: [
      '/familycottage.jpeg',
      '/1_family.jpeg',
      '/2_family.jpeg',
      '/3_family.jpeg',
      '/4_family.jpeg',

    ],
  },
};

const galleryImages = [
  { src: '/12.jpeg', alt: 'Jawai Garh Resort Exterior', category: 'resort' },
  { src: '/2_royal.jpeg', alt: 'Luxury Cottage Interior', category: 'interior' },
  { src: '/15.jpeg', alt: 'Wilderness View from Resort', category: 'resort' },
  { src: '/2_royal.jpeg', alt: 'Royal Cottage Bedroom', category: 'interior' },
  { src: '/11.jpeg', alt: 'Safari Landscape Jawai', category: 'resort' },
  { src: '/familycottage.jpeg', alt: 'Family Cottage Living Area', category: 'interior' },
  { src: '/3_land.jpeg', alt: 'Dining Area', category: 'interior' },
  { src: '/3_family.jpeg', alt: 'Premium Room Amenities', category: 'interior' },
];

function Header({ onBookClick }: { onBookClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Cottages', href: '#cottages' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-wilderness-800/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isScrolled ? 'bg-gold-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Sun className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-gold-400'}`} />
            </div>
            <div>
              <span className={`text-xl font-serif font-bold ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                Jawai Garh
              </span>
              <p className={`text-xs tracking-widest ${
                isScrolled ? 'text-gold-400' : 'text-gold-300'
              }`}>
                GOLDEN HOURS
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold-400 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button onClick={onBookClick} className="btn-primary">
              Book Your Stay
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-wilderness-800/95 backdrop-blur-md border-t border-white/10 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-gold-400 transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onBookClick();
                }}
                className="btn-primary w-full mt-4"
              >
                Book Your Stay
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection({ onBookClick }: { onBookClick: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wilderness-900/60 via-wilderness-900/40 to-wilderness-900/70" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-gold-500/20 backdrop-blur-sm rounded-full text-gold-400 text-sm tracking-widest">
              GOLDEN HOURS HOTELS & RESORTS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight animate-slide-up">
            {heroSlides[currentSlide].title.split(',').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && ','}
                {i === 0 && <br className="hidden sm:block" />}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-slide-up">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="#cottages"
              className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-wilderness-800"
            >
              Explore Cottages
            </a>
            <button onClick={onBookClick} className="btn-primary flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Check Availability
            </button>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gold-500 w-8' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const highlights = [
    { icon: Leaf, title: 'Wilderness Safari', desc: 'Guided leopard safaris through the rugged terrain' },
    { icon: Mountain, title: 'Scenic Location', desc: 'Nestled amidst rocky hills and natural beauty' },
    { icon: Star, title: 'Premium Hospitality', desc: 'World-class service with local Rajasthani charm' },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm tracking-widest uppercase">About the Resort</span>
          <h2 className="section-heading mt-2">The Jawai Garh Experience</h2>
          <p className="section-subheading">
            Where the wild beauty of Jawai meets the refined elegance of luxury hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/1_land.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Jawai Garh Resort in Rajasthan"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/safari.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Jawai Wildlife Safari"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/rockyhills.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Rocky Hills of Jawai"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/2_family.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Luxury Cottage Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-3xl font-serif text-wilderness-800 mb-6">
              Discover the Land of Leopards
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Jawai Garh by Golden Hours Hotels & Resorts is a premium luxury retreat located in the
              heart of Jawai, Rajasthan. Known as the land of leopards, Jawai offers a unique wilderness
              experience where rocky hills, scenic landscapes, and diverse wildlife converge.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our resort combines this raw natural beauty with world-class hospitality, offering guests
              an unprecedented opportunity to experience wildlife safaris by day and return to the comfort
              of our elegantly appointed cottages by night.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-wilderness-800 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a href="#cottages" className="btn-primary inline-flex items-center gap-2">
                View Accommodations
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CottagesSection({ onBookClick, onViewDetails }: { onBookClick: () => void; onViewDetails: (type: CottageType) => void }) {
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');

  return (
    <section id="cottages" className="py-20 lg:py-32 bg-wilderness-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm tracking-widest uppercase">Accommodations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Cottages & Tariff</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Choose from our carefully designed cottages, each offering a perfect blend of wilderness charm and modern comfort.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-wilderness-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('weekday')}
              className={`px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'weekday'
                  ? 'bg-gold-500 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              Weekday (Mon-Thu)
            </button>
            <button
              onClick={() => setActiveTab('weekend')}
              className={`px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'weekend'
                  ? 'bg-gold-500 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
              Weekend (Fri-Sun)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {(Object.keys(cottageDetails) as CottageType[]).map((type) => {
            const cottage = cottageDetails[type];
            const price = activeTab === 'weekday' ? cottage.weekday : cottage.weekend;

            return (
              <div
                key={type}
                className="bg-wilderness-700/50 backdrop-blur-sm rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cottage.images[0]}
                    alt={`Jawai Garh ${cottage.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wilderness-900 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-gold-400 text-sm">All Meals Included</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-white">{cottage.name}</h3>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gold-400">₹{price.toLocaleString()}</p>
                      <p className="text-slate-400 text-sm">per night</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{cottage.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cottage.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-wilderness-600 text-slate-200 text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-wilderness-600">
                    <p className="text-slate-400 text-sm">
                      Extra Bed: <span className="text-gold-400">₹{cottage.extraBed.toLocaleString()}</span>
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => onViewDetails(type)}
                        className="px-4 py-2 text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onBookClick()}
                        className="btn-primary text-sm py-2"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            All rates include Breakfast, Lunch & Dinner.
            <span className="mx-2">|</span>
            Extra bed charge for third guest applies.
          </p>
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  const amenities = [
    { icon: Utensils, title: 'All Meals Included', desc: 'Breakfast, Lunch & Dinner' },
    { icon: Wifi, title: 'High Speed Wi-Fi', desc: 'Complimentary throughout' },
    { icon: Car, title: 'Free Parking', desc: 'Secure parking area' },
    { icon: Clock, title: '24/7 Support', desc: 'Round the clock assistance' },
    { icon: Droplets, title: 'Premium Water', desc: 'Mineral water provided' },
    { icon: Sparkles, title: 'Daily Housekeeping', desc: 'Fresh linens & cleaning' },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm tracking-widest uppercase">What's Included</span>
          <h2 className="section-heading mt-2">Inclusions & Amenities</h2>
          <p className="section-subheading">
            Every stay at Jawai Garh comes with complimentary amenities to ensure your comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors">
                <amenity.icon className="w-8 h-8 text-gold-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-wilderness-800 mb-1">{amenity.title}</h3>
              <p className="text-slate-500 text-sm">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm tracking-widest uppercase">Visual Tour</span>
          <h2 className="section-heading mt-2">Gallery</h2>
          <p className="section-subheading">
            Explore our resort and cottages through stunning photography.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 || index === 5 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ aspectRatio: index === 0 || index === 5 ? '1' : '1' }}
              />
              <div className="absolute inset-0 bg-wilderness-900/0 group-hover:bg-wilderness-900/40 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-wilderness-900/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={galleryImages[currentImage].src.replace('w=800', 'w=1920')}
            alt={galleryImages[currentImage].alt}
            className="max-w-full max-h-[85vh] object-contain animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}

function BookingModal({
  isOpen,
  onClose,
  selectedCottage,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedCottage?: CottageType;
}) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    cottage: selectedCottage || 'royal',
    guests: 2,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedCottage) {
      setFormData((prev) => ({ ...prev, cottage: selectedCottage }));
    }
  }, [selectedCottage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'guests' ? parseInt(value) : value }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder for future backend integration
    // This can be wired to: Supabase API, WhatsApp redirect, or Razorpay payment gateway
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log booking data for debugging/monitoring
    console.log('Booking submission:', formData);

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wilderness-900/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-wilderness-800 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-serif text-white">Book Your Stay</h3>
              <p className="text-gold-400 text-sm">Jawai Garh Resort Inquiry</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-wilderness-800 mb-2">Inquiry Received!</h4>
              <p className="text-slate-500">We'll contact you shortly to confirm your booking.</p>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="+91 "
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-slate-700 mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-slate-700 mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cottage" className="block text-sm font-medium text-slate-700 mb-1">
                    Cottage Type
                  </label>
                  <select
                    id="cottage"
                    name="cottage"
                    value={formData.cottage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  >
                    <option value="royal">Jawai Royal Cottage</option>
                    <option value="family">Jawai Family Cottage</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 mt-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Submit Inquiry
                  </>
                )}
              </button>

              <p className="text-center text-slate-400 text-xs mt-4">
                We'll contact you within 24 hours to confirm availability.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function CottageDetailsModal({
  isOpen,
  onClose,
  cottageType,
}: {
  isOpen: boolean;
  onClose: () => void;
  cottageType: CottageType;
}) {
  const cottage = cottageDetails[cottageType];
  const [currentImage, setCurrentImage] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wilderness-900/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="h-72 md:h-96 relative overflow-hidden">
            {cottage.images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`${cottage.name} photo ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-wilderness-900/60 to-transparent" />
          </div>

          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
              aria-label="Close details modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2 justify-center">
              {cottage.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage ? 'bg-gold-500 w-6' : 'bg-white/60'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h3 className="text-3xl font-serif text-wilderness-800 mb-2">{cottage.name}</h3>
              <p className="text-slate-600">{cottage.description}</p>
            </div>
            <div className="bg-gold-500/10 px-6 py-4 rounded-lg text-center">
              <p className="text-sm text-gold-600">Starting from</p>
              <p className="text-2xl font-bold text-gold-600">₹{cottage.weekday.toLocaleString()}</p>
              <p className="text-xs text-slate-500">per night (weekday)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-wilderness-800 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-500" />
                Amenities
              </h4>
              <div className="flex flex-wrap gap-2">
                {cottage.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cream-200 text-wilderness-700 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-wilderness-800 mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-gold-500" />
                Pricing
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Weekday (Mon-Thu)</span>
                  <span className="font-semibold text-wilderness-800">₹{cottage.weekday.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Weekend (Fri-Sun)</span>
                  <span className="font-semibold text-wilderness-800">₹{cottage.weekend.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-cream-300">
                  <span className="text-slate-600">Extra Bed (3rd Guest)</span>
                  <span className="font-semibold text-wilderness-800">₹{cottage.extraBed.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Utensils className="w-5 h-5 text-gold-600" />
              <span className="font-semibold text-wilderness-800">All Meals Included</span>
            </div>
            <p className="text-slate-600 text-sm">
              Your stay includes complimentary breakfast, lunch, and dinner prepared with local Rajasthani flavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-wilderness-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Jawai Garh</h3>
                <p className="text-gold-400 text-xs tracking-widest">GOLDEN HOURS</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience luxury in the land of leopards. A premium wilderness retreat
              brought to you by Golden Hours Hotels & Resorts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Experience', 'Cottages', 'Amenities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div>
                  <p className="text-sm">+91 8866051222</p>
                  <p className="text-sm">+91 8866051444</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p className="text-sm">contact@jawaigarh.in</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400">Jawai, Rajasthan, India</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Find Us</h4>
            <div className="bg-wilderness-700 rounded-lg overflow-hidden h-48">
              <iframe
  title="Jawai Garh Location"
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.5456997443284!2d73.20305517537915!3d25.117235377762565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzAyLjEiTiA3M8KwMTInMjAuMyJF!5e0!3m2!1sen!2sin!4v1783609143006!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
/>
            </div>
          </div>
        </div>

        <div className="border-t border-wilderness-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {new Date().getFullYear()} Jawai Garh by Golden Hours Hotels & Resorts. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wilderness-700 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wilderness-700 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-wilderness-700 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedCottage, setSelectedCottage] = useState<CottageType>('royal');

  const handleBookClick = useCallback(() => setIsBookingOpen(true), []);
  const closeBooking = useCallback(() => setIsBookingOpen(false), []);

  const handleViewDetails = useCallback((type: CottageType) => {
    setSelectedCottage(type);
    setIsDetailsOpen(true);
  }, []);

  const closeDetails = useCallback(() => setIsDetailsOpen(false), []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Header onBookClick={handleBookClick} />
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <ExperienceSection />
        <CottagesSection onBookClick={handleBookClick} onViewDetails={handleViewDetails} />
        <AmenitiesSection />
        <GallerySection />
      </main>
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        selectedCottage={selectedCottage}
      />

      <CottageDetailsModal
        isOpen={isDetailsOpen}
        onClose={closeDetails}
        cottageType={selectedCottage}
      />
    </div>
  );
}

export default App;
