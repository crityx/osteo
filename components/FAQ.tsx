"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState, useEffect } from "react"

const FAQ = () => {
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

    const element = document.getElementById('faq-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const faqs = [
    {
      question: "Qu'est-ce que l'ostéopathie ?",
      answer: "L'ostéopathie est une approche thérapeutique manuelle qui vise à identifier et traiter les restrictions de mobilité pouvant affecter l'ensemble des structures composant le corps humain. Elle permet de soulager diverses douleurs et dysfonctionnements en utilisant des techniques précises et adaptées."
    },
    {
      question: "Comment se déroule une séance ?",
      answer: "Une séance débute par un entretien détaillé sur vos antécédents et motifs de consultation. Suit un examen clinique complet permettant d'établir un diagnostic ostéopathique. Le traitement est ensuite réalisé à l'aide de techniques manuelles douces. La séance se termine par des conseils personnalisés."
    },
    {
      question: "Quels sont les bienfaits des exercices de respiration ?",
      answer: "Les exercices de respiration permettent de réduire le stress, d'améliorer la concentration, de favoriser un meilleur sommeil et d'augmenter votre énergie. Ils peuvent également aider à gérer l'anxiété et à renforcer votre système immunitaire."
    },
    {
      question: "À quelle fréquence dois-je consulter ?",
      answer: "La fréquence des consultations dépend de votre situation spécifique, de vos objectifs et de votre réponse au traitement. Généralement, 3 à 4 séances peuvent être nécessaires pour des problèmes aigus, tandis qu'un suivi préventif peut se faire 2 à 3 fois par an."
    },
    {
      question: "Les séances sont-elles remboursées ?",
      answer: "Les consultations d'ostéopathie peuvent être partiellement prises en charge par certaines mutuelles. Le montant du remboursement varie selon votre contrat. N'hésitez pas à vous renseigner auprès de votre assurance complémentaire."
    },
    {
      question: "Comment le programme de coaching est-il personnalisé ?",
      answer: "Le programme de coaching débute par une évaluation approfondie de vos objectifs, mode de vie et contraintes. Nous établissons ensemble un plan d'action réaliste et progressif, avec des points réguliers pour ajuster le programme selon vos progrès et besoins."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
            Vos questions
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes sur nos services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-white rounded-xl border border-primary/10 px-6 shadow-sm hover:shadow-md transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <AccordionTrigger className="text-left text-lg py-6 hover:no-underline text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-secondary-foreground/80 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ