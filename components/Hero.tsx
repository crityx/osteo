"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  const images = [
    'https://lh3.googleusercontent.com/p/AF1QipNDPd76RXQLjYag3tAXPaQnWCXbxqXQpRoqrhEt=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipN1JER6tdkLhoJUR8bYJ3fcYBjeG0yq7du8LVbK=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNvqR_XdoQB8G1JK1bnmLdzhgY1KBAVCMf7n7z5=s680-w680-h510'
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [images.length])

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 
            className={`text-white text-4xl md:text-6xl font-bold mb-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Retrouvez l'harmonie
          </h1>
          <p 
            className={`text-white text-lg md:text-xl mb-4 font-mystical tracking-wider md:hidden transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            OSTÉOPATHIE • RESPIRATION • COACHING
          </p>
          <p 
            className={`hidden md:block text-white text-lg md:text-xl mb-4 font-mystical tracking-wider transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            OSTÉOPATHIE • RESPIRATION • COACHING
          </p>
        </div>
        
        {/* Mobile CTA */}
        <div className={`md:hidden pb-20 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a 
            href="#services" 
            className="inline-block bg-primary-foreground px-8 py-4 rounded-xl shadow-lg text-primary hover:bg-secondary transition-colors text-lg"
          >
            <span>Prendre rendez-vous</span>
          </a>
        </div>

        {/* Desktop Scroll Arrow */}
        <div className={`hidden md:block pb-12 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToServices}
            className="text-white hover:text-secondary transition-colors p-2 animate-bounce"
            aria-label="Défiler vers le bas"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero