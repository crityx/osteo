"use client"

import { Sun as Lung, Activity, Brain } from "lucide-react"
import { useState, useEffect } from "react"

const Services = () => {
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

    const element = document.getElementById('services-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const services = [
    {
      icon: <Brain className="w-12 h-12 mb-6 text-primary" />,
      title: "Ostéopathie",
      description: "Traitement manuel des douleurs et dysfonctionnements mécaniques du corps",
      image: "https://lh3.googleusercontent.com/p/AF1QipNvqR_XdoQB8G1JK1bnmLdzhgY1KBAVCMf7n7z5=s680-w680-h510",
      features: [
        "Bilan complet personnalisé",
        "Techniques douces et précises",
        "Suivi adapté à vos besoins"
      ]
    },
    {
      icon: <Lung className="w-12 h-12 mb-6 text-primary" />,
      title: "Respiration",
      description: "Techniques de respiration pour améliorer votre bien-être quotidien",
      image: "https://lh3.googleusercontent.com/p/AF1QipPrMWARZ-ntdem9y3il335wkeceThLW3oKY0Qme=s680-w680-h510",
      features: [
        "Exercices personnalisés",
        "Gestion du stress",
        "Amélioration du sommeil"
      ]
    },
    {
      icon: <Activity className="w-12 h-12 mb-6 text-primary" />,
      title: "Coaching",
      description: "Accompagnement personnalisé pour atteindre vos objectifs de santé",
      image: "https://lh3.googleusercontent.com/p/AF1QipOQt7q3NMPz4xLX-F7p18CdGjU-SDhYSs6UFkYk=s680-w680-h510",
      features: [
        "Programme sur mesure",
        "Suivi régulier",
        "Objectifs adaptés"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary mt-10 md:mt-0">
      <div id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
            Prenez rendez-vous
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Choisissez la méthode qui correspond le mieux à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="modern-button w-full py-6 text-lg font-medium rounded-xl shadow-lg">
                  <span>Je réserve</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services