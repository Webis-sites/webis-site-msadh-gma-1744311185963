'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaLeaf, FaAppleAlt, FaCarrot } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-md p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px rgba(150, 206, 180, 0.3)',
        transition: { duration: 0.3 }
      }}
      style={{
        boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.05), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
          style={{ 
            background: 'linear-gradient(135deg, #96CEB4, #588C7E)',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-right text-gray-800">{title}</h3>
        <p className="text-gray-600 text-right">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <FaSeedling />,
      title: "מנות אורגניות",
      description: "אנו מכינים את כל המנות שלנו מחומרי גלם אורגניים טריים שנבחרו בקפידה מהחוות המקומיות הטובות ביותר.",
      imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaLeaf />,
      title: "תפריט צמחוני ייחודי",
      description: "מגוון רחב של מנות צמחוניות וטבעוניות עשירות בטעמים ובערכים תזונתיים, מבושלות בשיטות בריאות.",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaAppleAlt />,
      title: "קינוחים בריאים",
      description: "קינוחים מפנקים המוכנים עם חומרים טבעיים, דלי סוכר ועשירים בטעמים מפתיעים שישאירו אתכם מרוצים.",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
    },
    {
      icon: <FaCarrot />,
      title: "מיצים טבעיים",
      description: "מיצים וסמוזי'ס טריים המוכנים במקום מפירות וירקות עונתיים, מלאים בויטמינים ומינרלים חיוניים.",
      imageUrl: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <section 
      dir="rtl" 
      className="py-16 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)'
      }}
    >
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#588C7E' }}
          >
            השירותים שלנו
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#96CEB4' }}></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            במסעדת גמא אנו מציעים חוויה קולינרית בריאה ומיוחדת, עם דגש על מזון טרי, אורגני ומזין שמוכן בקפידה על ידי השפים המומחים שלנו.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 rounded-full text-white font-medium"
            style={{ 
              background: 'linear-gradient(135deg, #96CEB4, #588C7E)',
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '6px 6px 15px rgba(0, 0, 0, 0.15), -6px -6px 15px rgba(255, 255, 255, 0.8)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            הזמינו שולחן עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;