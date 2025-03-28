"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Copy, Check } from "lucide-react"
import { useState, useEffect } from "react"

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1
      }
    )

    const element = document.getElementById('contact-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Adresse",
      content: "Residence Michelet Saint-Jacques, 26 Chem. Joseph Aiguier, 13009 Marseille",
      field: "address",
      copyable: true
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Téléphone",
      content: "06 30 96 98 99",
      field: "phone",
      copyable: true
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horaires",
      content: (
        <>
          lundi 09:00 - 19:00<br />
          mardi 09:00 - 19:00<br />
          mercredi 09:00 - 19:00<br />
          jeudi 09:00 - 19:00<br />
          vendredi 09:00 - 19:00<br />
          samedi - dimanche fermé
        </>
      ),
      copyable: false
    }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5 text-primary" />, href: "https://www.facebook.com/renaud.martinmista/", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5 text-primary" />, href: "https://www.instagram.com/breathe_marseille/", label: "Instagram" }
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Me contacter
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Contact Info */}
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="p-3 bg-secondary rounded-lg">
                    {info.icon}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{info.title}</h3>
                    <div className="flex items-start gap-2">
                      <p className="text-muted-foreground">{info.content}</p>
                      {info.copyable && (
                        <button
                          onClick={() => handleCopy(info.content as string, info.field)}
                          className="p-1 hover:bg-secondary rounded-md transition-colors"
                          aria-label={`Copier ${info.title.toLowerCase()}`}
                        >
                          {copiedField === info.field ? (
                            <Check className="w-4 h-4 text-primary" />
                          ) : (
                            <Copy className="w-4 h-4 text-primary" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-12 transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative h-full flex items-center transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden w-full">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB8ku2GZyIn1NAWvp33Ym7lJ6vvYGxwhlf9-aIjw_6nlVuohbZ7LIYNCghsZCbawWcAc0LUnstlJL89QptjGWSJgj11fXoEarri1mxVLpFRQzZX3BrKGBbSp6J0CQicNCcpBB9h6=s680-w680-h510"
                alt="Cabinet à Marseille"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact