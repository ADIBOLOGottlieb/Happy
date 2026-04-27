const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--color-border)', textAlign: 'center', background: 'var(--color-bg)' }}>
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          &copy; {new Date().getFullYear()} Happy GAZOZO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
