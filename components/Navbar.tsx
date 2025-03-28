"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [menuItemsVisible, setMenuItemsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)

      const sections = ["hero", "about", "services", "testimonials", "contact"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Déclencher l'animation des éléments du menu après un court délai
      const timer = setTimeout(() => {
        setMenuItemsVisible(true)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setMenuItemsVisible(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setMenuItemsVisible(false)
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 500)
  }

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Mobile Navigation Overlay */}
      {(isOpen || isClosing) && (
        <div 
          className={`fixed inset-0 bg-primary md:hidden ${
            isClosing ? 'animate-slide-out' : 'animate-slide-in'
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col h-full">
            <div className="h-20" /> {/* Spacer to match navbar height */}
            <nav className="flex flex-col justify-center flex-grow px-6">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="transform transition-all duration-500 py-4"
                  style={{
                    transform: menuItemsVisible ? 'translateX(0)' : 'translateX(-2rem)',
                    opacity: menuItemsVisible ? 1 : 0,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-white text-3xl font-light hover:text-secondary transition-colors inline-block"
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
            <div 
              className="px-6 pb-8 transform transition-all duration-500"
              style={{
                transform: menuItemsVisible ? 'translateY(0)' : 'translateY(2rem)',
                opacity: menuItemsVisible ? 1 : 0,
                transitionDelay: `${navItems.length * 100}ms`
              }}
            >
              <Link 
                href="#services"
                onClick={handleClose}
                className="bg-white text-primary block w-full py-6 text-lg font-medium rounded-xl shadow-lg text-center hover:bg-secondary transition-colors"
              >
                Je prends RDV
              </Link>
            </div>
          </div>
        </div>
      )}

      <nav 
        className={`
          fixed w-full
          transition-all duration-500 ease-in-out
          ${hasScrolled && !isOpen ? 'bg-primary shadow-lg' : 'bg-transparent'}
        `}
        style={{
          backdropFilter: hasScrolled && !isOpen ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: hasScrolled && !isOpen ? 'blur(10px)' : 'none',
          zIndex: 50
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-20">
            {/* Logo - Fixed width to match CTA */}
            <div className={`w-[200px] flex items-center transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}>
              <Link href="/" className="text-primary-foreground font-mystical text-3xl tracking-wider hover:text-secondary transition-colors">
                Breathe
              </Link>
            </div>
            
            {/* Desktop Navigation - Centered in page */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nav-link transform transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Call to action button - Fixed width to match logo */}
            <div className={`hidden md:flex ml-auto w-[200px] justify-end items-center transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <Link 
                href="#services"
                className="modern-button-inverse inline-block px-6 py-3 rounded-xl shadow-lg"
              >
                <span>Je prends RDV</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className={`md:hidden ml-auto transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`} style={{ zIndex: 60 }}>
              <button
                onClick={() => isOpen ? handleClose() : setIsOpen(true)}
                className="text-primary-foreground p-2"
              >
                <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
                  <Menu className="menu" />
                  <X className="close" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar