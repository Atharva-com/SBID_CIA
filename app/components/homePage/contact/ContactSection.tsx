"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send,
  CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { sendWelcomeEmail } from '../../layout/SendEmail';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { url: "https://www.facebook.com", icon: FaFacebookF, delay: 0.2 },
  { url: "https://www.instagram.com", icon: FaInstagram, delay: 0.4 },
  { url: "https://www.linkedin.com", icon: FaLinkedinIn, delay: 0.6 },
  { url: "https://www.twitter.com", icon: FaTwitter, delay: 0.8 },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const textRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // GSAP ScrollTrigger animation
    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "center center",
          end: "+=70%",
          scrub: true,
          toggleActions: "play none none reverse",
          pin: true,
        },
      }
    );

  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation
    const phoneRegex = /^[0-9-+() ]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulated API call
        const response = await sendWelcomeEmail(formData.email);
        console.log(response);
        if (!response) {
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 5000);
          return;
        }
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 40, Scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    }
  };


  return (
    <section className="relative py-20 md:py-20 lg:py-40 h-auto overflow-hidden w-full">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
        />


      </div>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-10">

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [100, -100, 100],
            y: [50, -50, 50]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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



      <motion.h1
        // variants={textAnimation}
        ref={textRef}
        className="absolute md:block hidden top-20 left-4 text-[11vw] font-extrabold leading-[1.2] text-white opacity-10 pointer-events-none z-[-1] uppercase"
        style={{
          fontFamily: "korolev-condensed, sans-serif",
          transform: "translate3d(0px, 27px, 0px)",
        }}
      >
        Let's <br /> connect
      </motion.h1>

      <motion.h1
        // variants={textAnimation}
        // ref={textRef}
        className="absolute block md:hidden top-64 left-[-0.15em] text-[20vw] font-extrabold leading-[1.2] text-white opacity-10 pointer-events-none z-[-1]
                       uppercase"
        style={{
          fontFamily: "korolev-condensed, sans-serif",
          transform: "translate3d(0px, 27px, 0px)",
        }}
      >
        Let's connect
      </motion.h1>

      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-12 lg:space-y-20 relative">

        {/* Notification */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 z-50"
            >
              <Alert variant={submitStatus === 'success' ? 'default' : 'destructive'}>
                {submitStatus === 'success' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <XCircle className="h-4 w-4" />
                )}
                <AlertDescription>
                  {submitStatus === 'success'
                    ? 'Message sent successfully! We&apos;ll get back to you soon.'
                    : 'Failed to send message. Please try again.'}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: "-100px" }}
          className="relative z-1 px-8 w-full flex flex-col lg:items-end lg:text-end items-center justify-center text-center"
        >

          <motion.span
            className={`font-sans text-gray-400 text-lg tracking-wider`}
            whileHover={{ scale: 1.05 }}
          >
            Contact us
          </motion.span>

          <h2 className={`font-outfit text-4xl md:text-6xl md:max-w-2xl font-bold tracking-wide text-gray-100`}>

            Get in Touch
            <motion.span
              className="text-white font-outfit tracking-wide inline-block pl-2"
              animate={{
                rotate: [0, 5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              .
            </motion.span>

          </h2>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >

            <div className="bg-gray-800/50 border border-[#727272] rounded-xl p-8 shadow-lg h-full">

              <h3 className="text-2xl font-semibold mb-6 font-outfit text-orange-500">Contact Information</h3>

              {/* Contact */}
              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start space-x-4">

                  <div className="bg-transparent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white font-outfit tracking-wide">Office Location</h4>
                    <p className="text-gray-500">123 Architecture Avenue,<br />Mumbai, Maharashtra 400001</p>
                  </div>

                </div>

                {/* phone */}
                <div className="flex items-start space-x-4">

                  <div className="bg-transparent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white font-outfit tracking-wide">Phone</h4>
                    <p className="text-gray-500">+91 123 456 7890</p>
                  </div>

                </div>

                {/* mail */}
                <div className="flex items-start space-x-4">

                  <div className="bg-transparent p-3 rounded-full">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white font-outfit tracking-wide">Email</h4>
                    <p className="text-gray-500">info@shreebhargava.com</p>
                  </div>

                </div>

                {/* working hours */}
                <div className="flex items-start space-x-4">

                  <div className="bg-transparent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>


                  <div>
                    <h4 className="font-semibold text-white font-outfit tracking-wide">Working Hours</h4>
                    <p className="text-gray-500">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>

                </div>

              </div>

              {/* Social Icons */}
              <div className="mt-8 pt-8 border-t">

                <h4 className="font-semibold text-orange-500 mb-4 text-center">Follow Us</h4>

                {/* Social Media Icons */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textAnimation}
                  className="flex justify-center items-center gap-6"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: social.delay }}
                      className="text-gray-600 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          boxShadow: "0px 5px 15px rgba(255, 165, 0, 0.5)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          y: [0, -2, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                          },
                        }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-orange-500"
                      >
                        <social.icon className="w-6 h-6 text-gray-700 hover:text-white" />
                      </motion.div>
                    </motion.a>
                  ))}
                </motion.div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-full"
          >

            <div className="bg-gray-800/50 border border-[#727272] h-full rounded-xl p-8 shadow-lg">

              <h3 className="text-2xl text-orange-500 font-outfit font-semibold mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* name */}
                  <div>

                    <label className="text-white font-outfit tracking-wide block text-sm font-medium    mb-2">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg   font-inter bg-transparent text-gray-300 ${errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}

                  </div>

                  {/* email */}
                  <div>

                    <label className="text-white font-outfit tracking-wide block text-sm font-medium    mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg   font-inter bg-transparent text-gray-300 ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}

                  </div>

                </div>

                {/* phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>

                    <label className="text-white font-outfit tracking-wide block text-sm font-medium    mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg   font-inter bg-transparent text-gray-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}

                  </div>

                  {/* subject */}
                  <div>

                    <label className="text-white font-outfit tracking-wide block text-sm font-medium mb-2">
                      Subject *
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg font-inter bg-transparent text-gray-300 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}

                  </div>

                </div>

                {/* message field */}
                <div>
                  <label className="text-white font-outfit tracking-wide block text-sm font-medium    mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg   font-inter bg-transparent text-gray-300 ${errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Send message */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-inter py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >

                  <span>Send Message</span>
                  <Send className="w-5 h-5" />

                </motion.button>

              </form>

            </div>

          </motion.div>

        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 w-full bg-white rounded-xl shadow-lg overflow-hidden"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.144534513921!2d75.8819547739903!3d22.722868627448513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd391d708021%3A0x77a9376b5b03e8cb!2sApollo%20Tower%2C%20Mahatma%20Gandhi%20Rd%2C%20South%20Tukoganj%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1736078098299!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
