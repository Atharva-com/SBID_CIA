"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUpRight,
  Building2,
  Send,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error';
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>('idle');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const controls = useAnimation();
  const currentYear = new Date().getFullYear();


  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      return;
    }
    
    setSubscriptionStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubscriptionStatus('success');
    setEmail('');
    // Reset success message after 3 seconds
    setTimeout(() => setSubscriptionStatus('idle'), 3000);
  };

  // Featured Projects Data
  const featuredProjects = [
    {
      title: "Eco-Friendly Township",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG93bnNoaXAlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
      category: "Residential"
    },
    {
      title: "Tech Innovation Hub",
      location: "Bangalore",
      image: "https://plus.unsplash.com/premium_photo-1683133686509-a84ea0c8de4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvd25zaGlwJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
      category: "Commercial"
    },
    {
      title: "Cultural Center",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1482731215275-a1f151646268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvd25zaGlwJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
      category: "Cultural"
    }
  ];

  // Auto-rotate projects
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => 
        prev === featuredProjects.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Floating animation for elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const footerLinks = {
    services: [
      'Architectural Design',
      'Interior Design',
      'Urban Planning',
      'Project Management',
      'Green Building',
      'Renovation'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates',
      'Testimonials',
      'Awards'
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', color: '#1877f2' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', color: '#1da1f2' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', color: '#e4405f' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', color: '#0077b5' }
  ];

  const statusMessages = {
    error: { text: 'Please enter a valid email', icon: XCircle, color: 'text-red-500' },
    success: { text: 'Successfully subscribed!', icon: CheckCircle, color: 'text-green-500' },
    loading: { text: 'Subscribing...', icon: Loader2, color: 'text-blue-500' }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
        />
      </div> */}
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [-100, 100, -100],
            y: [-50, 50, -50]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [100, -100, 100],
            y: [50, -50, 50]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [45, -45, 45],
            x: [-50, 50, -50],
            y: [0, 100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      {/* New Featured Projects Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 bg-gray-800/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6 py-12">
          <motion.h3 
            animate={floatingAnimation}
            className="text-2xl font-bold text-white text-center mb-8"
          >
            Featured Projects
          </motion.h3>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-center gap-8"
              >
                <motion.img
                  src={featuredProjects[currentProject].image}
                  alt={featuredProjects[currentProject].title}
                  className="w-full md:w-1/3 rounded-lg shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="md:w-1/3 text-center md:text-left">
                  <motion.h4 
                    className="text-xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {featuredProjects[currentProject].title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-400 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {featuredProjects[currentProject].location}
                  </motion.p>
                  <motion.span
                    className="inline-block px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {featuredProjects[currentProject].category}
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentProject === index ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.5 }}
                  animate={currentProject === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, repeat: currentProject === index ? Infinity : 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Latest Projects</h3>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter and receive updates about our latest architectural innovations and projects.</p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={subscriptionStatus === 'loading'}
                >
                  {subscriptionStatus === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Status Message */}
              <AnimatePresence mode="wait">
                {subscriptionStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center justify-center gap-2 mt-4 ${statusMessages[subscriptionStatus].color}`}
                  >
                    {React.createElement(statusMessages[subscriptionStatus].icon, { className: "w-5 h-5" })}
                    <span>{statusMessages[subscriptionStatus].text}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Building2 className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Shree Bhargava</h3>
            </motion.div>
            <p className="text-sm leading-relaxed">
              Creating architectural marvels that blend modern innovation with Indian heritage.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium inline-flex items-center group"
            >
              Contact Us
              <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={index}
                  onHoverStart={() => setHoveredLink(`service-${index}`)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="relative cursor-pointer group"
                >
                  <motion.span 
                    className="inline-block hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.span>
                  {hoveredLink === `service-${index}` && (
                    <motion.span
                      layoutId="highlight"
                      className="absolute -inset-x-4 -inset-y-2 bg-orange-500/10 rounded-lg z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  onHoverStart={() => setHoveredLink(`company-${index}`)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="relative cursor-pointer group"
                >
                  <motion.span 
                    className="inline-block hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.span>
                  {hoveredLink === `company-${index}` && (
                    <motion.span
                      layoutId="highlight"
                      className="absolute -inset-x-4 -inset-y-2 bg-orange-500/10 rounded-lg z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-white font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <motion.a 
                href="tel:+1234567890"
                className="flex items-center space-x-3 hover:text-orange-500 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>+91 123 456 7890</span>
              </motion.a>
              <motion.a 
                href="mailto:info@example.com"
                className="flex items-center space-x-3 hover:text-orange-500 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>info@shreebhargava.com</span>
              </motion.a>
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 flex-shrink-0 group-hover:bounce transition-transform" />
                <span>123 Business District, Mumbai, Maharashtra, India</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ 
                    y: -5,
                    backgroundColor: social.color,
                    transition: { duration: 0.2 }
                  }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors relative group"
                >
                  {social.icon}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 text-xs"
                  >
                    {social.name}
                  </motion.span>
                </motion.a>
              ))}
            </div>
            <motion.p 
              className="text-sm"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Shree Bhargava Infrastructure. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;