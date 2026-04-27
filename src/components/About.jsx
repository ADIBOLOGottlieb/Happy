import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="title-medium" style={{ marginBottom: '2rem' }}>
              The Muse
            </h2>
            <div style={{ paddingLeft: 'var(--spacing-sm)', borderLeft: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '1.05rem', marginBottom: '2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                Happy GAZOZO is an international fashion model known for her striking presence, versatility, and professionalism. With a tall, elegant silhouette and a natural ability to command the camera, she has become a sought-after face for editorial spreads and high-end commercial campaigns.
              </p>
              <p style={{ fontSize: '1.05rem', marginBottom: '3rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                Based internationally, Happy brings a unique blend of confidence and grace to every project. Her portfolio spans diverse styles from avant-garde streetwear to luxury beauty.
              </p>
              <a href="#contact" className="btn">Book Now</a>
            </div>
          </motion.div>

          <motion.div 
            className="image-reveal-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <img 
              src="/images/image-4.jpeg" 
              alt="Happy GAZOZO Editorial" 
              style={{ width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover' }} 
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
