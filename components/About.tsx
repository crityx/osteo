"use client"

import { Stethoscope, Sun as Lung, Brain } from "lucide-react"
import { useEffect, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)

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

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true)
          statsObserver.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1
      }
    )

    const element = document.getElementById('about-content')
    const statsElement = document.getElementById('stats-overlay')
    
    if (element) {
      observer.observe(element)
    }
    if (statsElement) {
      statsObserver.observe(statsElement)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
      if (statsElement) {
        statsObserver.unobserve(statsElement)
      }
    }
  }, [])

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Ostéopathie",
      description: "Une approche douce et globale pour soulager vos douleurs et restaurer l'équilibre de votre corps"
    },
    {
      icon: <Lung className="w-8 h-8 text-primary" />,
      title: "Techniques de respiration",
      description: "Des techniques manuelles précises pour améliorer votre mobilité et votre bien-être physique"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Coaching",
      description: "Un accompagnement personnalisé pour développer votre potentiel et atteindre vos objectifs"
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div id="about-content">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              Renaud Martin Mista
            </h2>
            <p className={`text-base md:text-lg text-muted-foreground mb-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              Depuis plus de 12 ans, j'accompagne les personnes vers une santé plus équilibrée, un bien-être durable et une meilleure harmonie entre le corps, l'esprit et les émotions avec 3 méthodes :
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="flex-shrink-0 p-3 bg-secondary rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="w-full">
              <div className="aspect-[3/2] md:aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMiz8ckZfjoDMYRSkKBR9eEShN3vHBgI0pUGIK0=s680-w680-h510"
                  alt="Notre équipe au travail"
                  className="w-full h-full object-cover md:object-center object-[center_33%]"
                />
              </div>
            </div>
            {/* Stats Overlay */}
            <div 
              id="stats-overlay"
              className={`absolute -bottom-[25%] md:-bottom-6 left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 bg-primary p-4 md:p-6 rounded-xl shadow-lg w-[90%] md:w-[80%] transition-all duration-1000 ${
                isStatsVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-12">
                <div className={`transition-all duration-700 delay-300 ${
                  isStatsVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}>
                  <p className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-primary-foreground">100%</p>
                  <p className="text-sm md:text-base text-primary-foreground/80">Patients satisfaits</p>
                </div>
                <div className={`transition-all duration-700 delay-500 ${
                  isStatsVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}>
                  <p className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-primary-foreground">130+</p>
                  <p className="text-sm md:text-base text-primary-foreground/80">Personnes aidées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About