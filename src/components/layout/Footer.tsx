const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Designed & Built with precision
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">{"<SB/>"}</span> Srikanth Bommadi — Software/SRE Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
