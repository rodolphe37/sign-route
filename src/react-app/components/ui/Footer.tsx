function Footer() {
  const currentYear = new Date().getFullYear();
  const appVersion = "v1.0.0"; // Remplace par ta version réelle

  return (
    <footer className="bg-card border-t border-border py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
        <span>© {currentYear} Rodolphe AUGUSTO - Tous droits réservés.</span>
        <span className="mt-1 sm:mt-0">Version {appVersion}</span>
      </div>
    </footer>
  );
}

export default Footer;
