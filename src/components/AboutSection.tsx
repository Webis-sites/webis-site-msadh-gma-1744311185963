'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaUtensils, FaLeaf, FaUsers, FaAward } from 'react-icons/fa';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="flex flex-col items-end p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)] transition-all hover:shadow-[8px_8px_20px_rgba(0,0,0,0.12),-8px_-8px_20px_rgba(255,255,255,0.12)] hover:translate-y-[-5px]"
      aria-labelledby={`feature-title-${title}`}
    >
      <div className="flex items-center justify-end w-full mb-4">
        <h3 id={`feature-title-${title}`} className="text-xl font-bold text-right mr-3 text-[#588C7E]">{title}</h3>
        <div className="p-3 rounded-full bg-[#96CEB4]/20 text-[#588C7E]">{icon}</div>
      </div>
      <p className="text-right text-gray-700">{description}</p>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section dir="rtl" className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="about-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#96CEB4]/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#588C7E]/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            id="about-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-[#588C7E]"
          >
            אודות מסעדה גמא
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-[#96CEB4] mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-700 max-w-3xl mx-auto text-right"
          >
            אנחנו מסעדה מובילה בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"
            >
              <FeatureCard
                icon={<FaUtensils size={24} />}
                title="מטבח איכותי"
                description="אנו מקפידים על חומרי גלם טריים ואיכותיים בכל מנה שאנו מכינים"
              />
              <FeatureCard
                icon={<FaLeaf size={24} />}
                title="אוכל בריא"
                description="התפריט שלנו מתוכנן בקפידה כדי לספק אפשרויות בריאות ומזינות"
              />
              <FeatureCard
                icon={<FaUsers size={24} />}
                title="צוות מקצועי"
                description="הצוות שלנו מורכב ממומחים בתחומם עם ניסיון רב בענף המסעדנות"
              />
              <FeatureCard
                icon={<FaAward size={24} />}
                title="שירות מצטיין"
                description="אנו מחויבים לספק חוויית לקוח יוצאת דופן בכל ביקור"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative h-[400px] md:h-full rounded-2xl overflow-hidden shadow-[10px_10px_30px_rgba(0,0,0,0.15),-10px_-10px_30px_rgba(255,255,255,0.15)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="צוות מסעדה גמא בעבודה"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">הצוות המקצועי שלנו</h3>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)] p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="פנים המסעדה"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-right text-[#588C7E]">הסיפור שלנו</h3>
              <p className="text-gray-700 mb-4 text-right">
                מסעדה גמא נוסדה לפני 15 שנים מתוך אהבה לאוכל בריא ואיכותי. המייסדים שלנו, שף מוביל ותזונאית קלינית, חברו יחד כדי ליצור מקום שמשלב טעמים נפלאים עם ערכים תזונתיים גבוהים.
              </p>
              <p className="text-gray-700 mb-4 text-right">
                אנו מאמינים שאוכל בריא יכול וצריך להיות טעים, מגוון ומהנה. התפריט שלנו משתנה עם עונות השנה כדי להבטיח שימוש בחומרי גלם טריים ואיכותיים.
              </p>
              <p className="text-gray-700 text-right">
                הצוות שלנו מחויב לספק לכם חוויה קולינרית יוצאת דופן בכל ביקור, תוך שמירה על סטנדרטים גבוהים של שירות ואיכות.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#588C7E]">בואו לבקר אותנו</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-[#96CEB4] text-white font-bold shadow-[5px_5px_15px_rgba(0,0,0,0.1)] hover:bg-[#588C7E] transition-all duration-300"
          >
            הזמינו שולחן עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;