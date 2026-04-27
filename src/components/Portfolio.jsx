import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  '/images/image-2.jpeg',
  '/images/image-3.jpeg',
  '/images/image-4.jpeg',
  '/images/image-5.jpeg',
  '/images/image-6.jpeg',
  '/images/image-7.jpeg',
]; // Removed image-1 from portfolio grid since it's the hero image

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <motion.h2 
          className="title-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          Selected Works
        </motion.h2>
        
        <div className="portfolio-masonry">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="portfolio-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Portfolio work ${index + 1}`} loading="lazy" />
              <div className="portfolio-item-overlay">
                <span style={{ 
                  fontFamily: 'var(--font-primary)', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase', 
                  fontSize: '0.8rem',
                  color: '#fff' 
                }}>View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(3,3,3,0.98)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'var(--color-accent)' }}
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Fullscreen view" 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
