import { Instagram } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-[#171717] text-gray-300 py-6 w-full mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <a href="/"><img src="/logos/logo.png" alt="Logo" className="h-10" /></a>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm">
            <a href="https://forumdestelecommunications.fr" className="hover:text-white">Forum des Télécommunications</a>
            <a href="https://www.instagram.com/bikeandrun_ipp/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={24} />
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-xs mt-4 md:mt-0">&copy; {new Date().getFullYear()} Bike&Run. Tous droits réservés. Développé par <strong>Paul-Jean GIRAULT</strong> </p>
        </div>
      </footer>
    );
  }
  