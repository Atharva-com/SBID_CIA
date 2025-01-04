"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ChevronRight } from 'lucide-react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'PROJECTS',
      href: '/projects',
      submenu: [
        { title: 'ALL', href: '/projects/all' },
        { title: 'RESIDENTIAL', href: '/projects/residential' },
        { title: 'ARCHITECTURAL', href: '/projects/architectural' },
        { title: 'COMMERCIAL', href: '/projects/commercial' },
        { title: 'TURNKEY', href: '/projects/turnkey' },
        { title: 'LANDSCAPE', href: '/projects/landscape' },
        { title: 'INTERIOR', href: '/projects/interior' },
        { title: 'CAFE', href: '/projects/cafe' }
      ]
    },
    {
      title: 'SERVICES',
      href: '/services',
      submenu: [
        { title: 'ALL SERVICES', href: '/services/all' },
        { title: 'ARCHITECTURE DESIGN', href: '/services/architecture' },
        { title: 'INTERIOR DESIGN', href: '/services/interior' },
        { title: 'LANDSCAPE DESIGN', href: '/services/landscape' },
        { title: 'PROJECT MANAGEMENT', href: '/services/management' },
        { title: 'CONSTRUCTION', href: '/services/construction' },
        { title: 'RENOVATION', href: '/services/renovation' },
        { title: 'CONSULTING', href: '/services/consulting' }
      ]
    },
    { title: 'Home', href: '/home' },
    { title: 'FIRM', href: '/firm' },
    { title: 'Career', href: '/Career' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'NEWS', href: '/news' },
    { title: 'CONTACT', href: '/contact' }
  ];

  const contactInfo = {
    office: 'SHREE BHARGAVA INFRASTRUCTURE DEVELOPMENT PVT. LTD.',
    address: ['7', 'Apolo Towers', 'India, IN']
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  const submenuVariants = {
    closed: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 p-2 text-white"
      >
        <motion.div
          initial={false}
          animate={{ color: isOpen ? 'white' : 'white' }}
          className="text-2xl"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.div>
      </button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900 z-40 overflow-y-auto bg-black/40 bg-opacity-50"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="min-h-screen flex flex-col justify-center px-12 lg:px-24 py-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,1fr] gap-12 text-white">
                {/* Main Navigation */}
                <div>
                  <nav className="space-y-6">
                    {menuItems.map((item) => (
                      <motion.div
                        key={item.title}
                        variants={itemVariants}
                        className="overflow-hidden"
                      >
                        <motion.button
                          className="text-4xl lg:text-5xl font-bold hover:text-gray-300 transition-colors flex items-center group w-full text-left"
                          whileHover={{ x: 20 }}
                          onClick={() => {
                            if (item.submenu) {
                              setActiveSubmenu(activeSubmenu === item.title ? null : item.title);
                            } else {
                              setIsOpen(false);
                              // Handle navigation here
                            }
                          }}
                        >
                          {item.title}
                          {item.submenu && (
                            <ChevronRight 
                              className={`ml-4 transition-transform ${
                                activeSubmenu === item.title ? 'rotate-90' : ''
                              }`}
                            />
                          )}
                        </motion.button>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Submenu */}
                <div className="lg:col-span-1">
                  <AnimatePresence mode="wait">
                    {activeSubmenu && menuItems.find(item => item.title === activeSubmenu)?.submenu && (
                      <motion.div
                        key={activeSubmenu}
                        variants={submenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="space-y-4 pt-4"
                      >
                        {menuItems
                          .find(item => item.title === activeSubmenu)
                          ?.submenu?.map((subItem) => (
                            <motion.a
                              key={subItem.title}
                              href={subItem.href}
                              className="block text-xl lg:text-2xl font-ui text-gray-100 hover:text-white transition-colors"
                              whileHover={{ x: 10 }}
                              onClick={() => setIsOpen(false)}
                            >
                                <ChevronRight className="inline-block w-6 h-6 mr-2" />
                              {subItem.title}
                            </motion.a>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Information */}
                <motion.div
                  variants={itemVariants}
                  className="text-gray-800 self-end font-ui"
                >
                  <h3 className="text-lg text-gradient-yellow font-semibold mb-4">
                    {contactInfo.office}
                  </h3>

                  {contactInfo.address.map((line, index) => (
                    <p key={index} className="text-md text-gray-300">
                      {line}
                    </p>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;