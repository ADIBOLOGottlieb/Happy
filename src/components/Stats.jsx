import { motion } from 'framer-motion';

const statsData = [
  { label: 'Height', value: '1.80m / 5\'11"' },
  { label: 'Bust', value: '82cm / 32"' },
  { label: 'Waist', value: '60cm / 24"' },
  { label: 'Hips', value: '89cm / 35"' },
  { label: 'Shoe', value: '39 EU / 8 US' },
  { label: 'Hair', value: 'Black' },
  { label: 'Eyes', value: 'Brown' }
];

const Stats = () => {
  return (
    <section id="stats" className="section-padding" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="title-medium" style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
            Measurements
          </h2>
          
          <div className="stats-list">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
