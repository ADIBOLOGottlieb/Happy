import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-editorial">
      <div className="hero-text-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.1, 1] }}
        >
          <h1 className="title-display">
            Happy<br />
            <span style={{ fontStyle: 'italic', paddingLeft: '10%' }}>Gazozo</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ 
              marginTop: '2rem', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)'
            }}
          >
            International Fashion Model
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ marginTop: '3rem' }}
          >
            <a href="#portfolio" className="btn">View Portfolio</a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.1, 1], delay: 0.3 }}
      >
        <img src="/images/image-1.jpeg" alt="Happy GAZOZO" />
      </motion.div>
    </section>
  );
};

export default Hero;
