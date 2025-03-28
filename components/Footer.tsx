"use client"

import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Contact rapide",
      content: [
        { 
          icon: <MapPin className="w-4 h-4" />, 
          text: "26 Chem. Joseph Aiguier, 13009 Marseille" 
        },
        { 
          icon: <Phone className="w-4 h-4" />, 
          text: "06 30 96 98 99" 
        },
        { 
          icon: <Clock className="w-4 h-4" />, 
          text: "Lun-Ven: 09:00 - 19:00" 
        },
      ]
    }
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="text-primary-foreground font-mystical text-3xl tracking-wider">
              Breathe
            </Link>
            <p className="mt-4 text-sm text-secondary/80 leading-relaxed">
              Votre bien-être est notre priorité. Découvrez une approche holistique 
              pour améliorer votre santé et votre qualité de vie.
            </p>
          </div>

          {/* Contact Section */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-primary-foreground font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-secondary/80 mt-1 mr-2">
                      {item.icon}
                    </span>
                    <span className="text-sm text-secondary/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6 text-sm text-secondary/80">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Breathe. Tous droits réservés.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer