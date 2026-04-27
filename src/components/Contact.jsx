import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-editorial">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="title-medium" style={{ marginBottom: '2rem' }}>Inquiries</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '4rem', maxWidth: '400px' }}>
              Available for bookings worldwide. For editorial, commercial, or runway inquiries, please get in touch.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <a href="mailto:booking@happygazozo.com" className="contact-link">booking@happygazozo.com</a>
              </div>
              <div>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="contact-link">@happygazozo</a>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="image-reveal-wrapper"
          >
            <img 
              src="/images/image-1.jpeg" 
              alt="Contact Happy GAZOZO" 
              style={{ width: '100%', height: '80vh', objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
