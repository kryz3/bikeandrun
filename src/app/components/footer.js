export default function Footer() {
    return (
      <footer className="bg-[#171717] text-gray-300 py-6 w-full mt-auto bottom-0 absolute">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/logos/logo.png" alt="Logo" className="h-10" />
          </div>
          
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm">
            <a href="/contact" className="hover:text-white">Nous contacter</a>
            <a href="https://forumdestelecommunications.fr" className="hover:text-white">Forum des Télécommunications</a>
          </nav>
          
          {/* Copyright */}
          <p className="text-xs mt-4 md:mt-0">&copy; {new Date().getFullYear()} Bike&Run. Tous droits réservés.</p>
        </div>
      </footer>
    );
  }
  