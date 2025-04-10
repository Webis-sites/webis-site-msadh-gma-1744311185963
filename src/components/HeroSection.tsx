'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { FaUtensils, FaCalendarAlt } from 'react-icons/fa';

interface HeroProps {
  businessName?: string;
}

const Hero: React.FC<HeroProps> = ({ businessName = 'מסעדה גמא' }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <section 
      dir="rtl" 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]"
    >
      {/* Background Image with Glassmorphism Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="מסעדה גמא - אווירה"
          layout="fill"
          objectFit="cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          className="w-full md:w-3/5 lg:w-1/2 text-right"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Logo/Brand Icon */}
          <motion.div 
            className="mb-6 inline-block"
            variants={itemVariants}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#96CEB4]/90 backdrop-blur-md border border-white/20 shadow-lg">
              <FaUtensils className="text-white text-3xl md:text-4xl" />
            </div>
          </motion.div>

          {/* Business Name */}
          <motion.h2 
            className="text-lg md:text-xl font-medium text-white mb-2"
            variants={itemVariants}
          >
            {businessName}
          </motion.h2>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            מסעדה מוביל בישראל
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button - Neumorphic Style */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              className="group flex items-center gap-3 bg-gradient-to-br from-[#96CEB4] to-[#588C7E] text-white py-4 px-8 rounded-xl text-lg font-medium
              shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.1)]
              hover:shadow-[8px_8px_15px_rgba(0,0,0,0.3),-8px_-8px_15px_rgba(255,255,255,0.1)]
              transition-all duration-300 ease-out"
            >
              <span>קבע תור עכשיו</span>
              <FaCalendarAlt className="text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Glassmorphism Card */}
          <motion.div 
            className="mt-12 p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20
            shadow-lg"
            variants={itemVariants}
          >
            <p className="text-white/90 text-right">
              אנחנו מסעדה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Glassmorphism Elements for Visual Interest */}
      <motion.div 
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-[#96CEB4]/20 backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      <motion.div 
        className="absolute top-20 left-20 w-24 h-24 rounded-full bg-[#588C7E]/20 backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      />
    </section>
  );
};

export default Hero;