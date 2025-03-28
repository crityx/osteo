"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from "react"

const Testimonials = () => {
const testimonials = [
    {
      name: "Steph Dispot",
      content: "Une très belle expérience d'introspection par la respiration, qui mérite d'être vécue et qui permet de redécouvrir son corps et ses capacités, et sans aucun doute de libérer des blocages internes. Une approche étonnante, une personne à l'écoute qui redonne du souffle et du sens. Merci du temps, de l'énergie et des clefs que tu transmets... Ça fait du bien au corps mais aussi à l'âme.",
      rating: 5
    },
    {
      name: "Leana",
      content: "J'ai participé à un atelier de respiration animé par Renaud. Ce fut une expérience riche. Renaud a su installer un climat chaleureux et bienveillant qui m'a permis de vivre entièrement l'expérience. Cela a été émotionnellement riche et a permis des prises de conscience que je n'imaginais pas. Ces ateliers s'intègrent parfaitement dans une prise en charge holistique. Je ne peux que recommander !",
      rating: 5
    },
    {
      name: "Pascal Palpacuer",
      content: "Excellent coaching sur un deuil délicat. Malgré un suivi avec un psychologue, la séance de Renaud a révélé beaucoup de choses. Bienveillant et enthousiaste, il m’a aidé à accepter certains faits de la vie et à dépasser de fausses limites. Séance éprouvante mais qui vaut la peine. Je recommande vivement son accompagnement.",
      rating: 5
    },
    {
      name: "Mickael",
      content: "Une expérience géniale, Renaud est bien plus qu'un ostéopathe. À l'écoute de ses patients, essayant de résoudre chaque petit défaut de la vie. Un mélange d'ostéopathie, coaching cérébral et respiration, tout ça dans un moment archi sympathique ! Merci encore.",
      rating: 5
    },
    {
      name: "Charlotte Stroumza",
      content: "Une superbe expérience d'ostéopathie ! Renaud adopte une approche holistique, prenant le temps d'écouter attentivement et d'agir en profondeur sur l'ensemble du corps. Sa douceur et son professionnalisme m'ont mise en confiance dès le premier instant. Je recommande vivement ses services. Le cadre est également superbe, ajoutant une touche apaisante à chaque séance.",
      rating: 5
    },
    {
      name: "Jean-Baptiste",
      content: "J'ai récemment eu une séance avec Renaud, et je suis extrêmement satisfait de l'expérience.",
      rating: 5
    },
    {
      name: "Véronique Arcadu",
      content: "J'ai rencontré Renaud pour la première fois grâce à une personne que j'ai rencontrée sur mon lieu de travail. Je peux dire que c'est plus qu'un ostéopathe : il est à l'écoute et m'a permis d'ouvrir les yeux sur beaucoup de choses et de mes sentiments. Encore merci beaucoup et je recommande fortement, plus plus plus plus plus plus plus plus !",
      rating: 5
    },
    {
      name: "Georges Chiroli",
      content: "Deuxième visite pour moi, très bonne connexion avec Renaud autant pour la remise en forme de mon corps que de mon esprit. Séances qui font du bien et que je recommande.",
      rating: 5
    },
    {
      name: "Joël Bonzi",
      content: "Je ressors du cabinet de Renaud encore une fois apaisé et relaxé. Renaud, toujours à l'écoute, sait exactement où et comment il faut agir pour notre bien-être. Mille mercis pour ce moment magique qui me ressource et me redonne l'énergie nécessaire. À bientôt.",
      rating: 5
    },
    {
      name: "Alicia Fiard",
      content: "J'ai eu une séance de coaching et d'ostéopathie avec Renaud, c'était top. Renaud est à l'écoute, sans jugement, et excellent ostéopathe. Il travaille le corps dans sa globalité et le cadre est un super plus. Je retournerai sans hésiter ! Vous pouvez y aller.",
      rating: 5
    },
    {
      name: "Yannick Pignol",
      content: "J'ai fait 3 séances avec Renaud. Un excellent praticien. Il a su être à l'écoute de mes blocages et de mes nœuds pour travailler à chaque séance un peu plus en profondeur et libérer complètement les tensions émotionnelles. Un très bon thérapeute qui a su trouver les mots et les gestes pour remettre à niveau mon énergie, mon physique et ma santé. Merci Renaud.",
      rating: 5
    },
    {
      name: "Thomas Creach",
      content: "Mon expérience du workshop respi a été surprenante et puissante, notamment sur le relâchement émotionnel. Ça a été un moment intense et libérateur. Je recommande à toutes les personnes curieuses de ce type d'expérience (mais aussi aux personnes déjà convaincues) d'être accompagnées par Renaud. Merci pour cette belle aventure.",
      rating: 5
    },
    {
      name: "Nadege Kraeutler",
      content: "Un super ostéopathe que je consulte depuis de nombreuses années. La séance est vraiment complète et j'en sors toujours ravie. Renaud travaille le corps dans sa globalité et les bienfaits sont clairement ressentis. Attentif et passionné, je le recommande vivement !",
      rating: 5
    },
    {
      name: "Olivier Breton",
      content: "Thérapeute très à l'écoute et qui sait détecter les points sensibles émotionnels provoquant des blocages mécaniques. Dès la 1ère séance, le travail de fond est bénéfique, permettant ainsi de libérer des tensions musculaires profondes. Praticien passionné, Renaud est également un excellent pédagogue. Je recommande vivement son approche et son sérieux.",
      rating: 5
    },
    {
      name: "Farid Tari",
      content: "Mes séances hebdomadaires me permettent d'avancer à grands pas vers une paix intérieure en réglant des conflits anciens et enfouis. En traitant également mes addictions, mon corps et mon esprit sont bien mieux alignés. Renaud est un bel être. Prévoir du repos après la séance.",
      rating: 5
    },
    {
      name: "Mally Etienne",
      content: "Renaud vous reçoit dans un cadre chaleureux et naturel. Il sait prendre le temps de discuter avec vous et est à l'écoute de vos mots et maux ! Il vous explique au fur et à mesure des manipulations. On ressort de la séance apaisé, détendu, tant au niveau de l'esprit que du corps… Après cette séance, une super nuit de sommeil !! Je recommande +++.",
      rating: 5
    },
    {
      name: "Morgane Dutertre",
      content: "1re séance de coaching, Renaud a su, par son écoute active, appuyer sur des leviers que je ne soupçonnais pas ! Accueillie dans une ambiance qui met tout de suite à l'aise, une séance a déjà permis de débloquer des nœuds internes et continue de cheminer les jours suivants. Un excellent praticien, je recommande !",
      rating: 5
    },
    {
      name: "Natnout",
      content: "C'est un excellent ostéopathe qui a une approche que je ne retrouve nulle part ailleurs, avec une grande bienveillance et une écoute des patients. Sa vision des choses en coaching et sa méthode sont également très pertinentes. J'apprécie sa disponibilité et son professionnalisme. Je recommande sans hésiter.",
      rating: 5
    },
    {
      name: "Patrick",
      content: "Renaud m'a permis de dépasser des blocages inconscients qui me limitaient sur beaucoup de secteurs de ma vie. Avec la qualité de sa prise en compte du problème, par son analyse et son excellent travail, il a réussi à me faire aller plus loin afin de me libérer définitivement de tout cela. Depuis, je ne cesse de constater les résultats au quotidien... Je vous le recommande sans hésitation. C'est une personne à avoir dans son répertoire !",
      rating: 5
    },
    {
      name: "Ludovic Laurent",
      content: "Il a su adapter la bonne méthode et remettre du mouvement à mon épaule en une séance. J'ai vite constaté une belle amélioration et je poursuis son travail de fond. Merci pour cette séance et ces précieux conseils !",
      rating: 5
    },
    {
      name: "Caroline Chauvin",
      content: "Renaud a une approche pleine de douceur et de bienveillance. Lors de ma séance, Renaud a su me transporter dans une vraie parenthèse en dehors du temps et de l'espace. Il a été un guide dans la compréhension de mes blocages et de mes maux. Merci beaucoup ✨",
      rating: 5
    },
    {
      name: "Corfdir Erwann",
      content: "Un thérapeute de qualité rare avec une écoute très fine. Le coaching est un vrai défi pour avancer sur nos peurs et blocages, il n'y a pas de place pour le mental, Renaud nous met en confiance pour faire face à ce que nous devons affronter. Pour ce qui est de la partie physique, encore une fois on retrouve un travail très précis avec beaucoup d'intensité, une vraie main de fer dans un gant de velours.",
      rating: 5
    },
    {
      name: "Arnaud Benoît",
      content: "Super ostéopathe, qui a de suite compris les raisons de mes tensions et mes douleurs. Il m'a aiguillé et conseillé sur ma vie professionnelle et personnelle pour atténuer mes douleurs et mon anxiété. Très à l'écoute de son patient sans paraître trop intrusif. Merci à vous pour votre suivi !!",
      rating: 5
    },
    {
      name: "Louise Attali",
      content: "Séance au top, relaxante et personnalisée ! Renaud est à l'écoute et s'adapte à nos problématiques. Merci encore !",
      rating: 5
    },
    {
      name: "Imelda Saurat",
      content: "Excellent praticien à l'écoute des problèmes tant émotionnels que physiques. À l'issue de la séance, le corps est détendu, débarrassé des douleurs provoquées, en partie, par des émotions négatives. J'ai rencontré un thérapeute profondément empathique que je recommande vivement.",
      rating: 5
    },
    {
      name: "Anne",
      content: "Praticien passionné avec une excellente qualité d'écoute et de prise en charge. Son accompagnement m'a vraiment aidée à débloquer des problématiques tant sur le plan physique qu'émotionnel ! Allez-y les yeux fermés, vous ne serez pas déçu !",
      rating: 5
    },
    {
      name: "Tofy",
      content: "J'avais de fortes douleurs à l'épaule et au dos, et rien ne me soulageait. Après quelques manipulations ciblées, je suis reparti soulagé. Renaud analyse en profondeur pour éviter toute rechute. Je recommande vivement. Seul bémol : il est bavard ! 😉",
      rating: 5
    },
    {
      name: "Lea",
      content: "Je recommande fortement. Il m'a fait découvrir des choses sur mon corps que je ne savais même pas. On a envie de parler quand on est avec lui ! 10/10",
      rating: 5
    },
    {
      name: "Marine Villielm",
      content: "Très professionnel. Très à l'écoute. Des séances qui font du bien au corps et à l'esprit. Vous pouvez y aller les yeux fermés.",
      rating: 5
    },
    {
      name: "Thierry Villielm",
      content: "Super ostéo : après 3 séances, il a su trouver mes blocages et tensions. Je recommande fortement.",
      rating: 5
    },
    {
      name: "Yoh Djer",
      content: "Super ostéo. Une approche atypique qui m'a beaucoup apporté.",
      rating: 5
    },
    {
      name: "Nath Di Giudice",
      content: "Expérience inoubliable... Bienveillance et écoute, que du positif... Merci ! 🙏✨✨✨",
      rating: 5
    },
    {
      name: "Romain Chiousse",
      content: "Une sublime expérience avec un excellent praticien !",
      rating: 5
    },
    {
      name: "Alexandre Schilling",
      content: "À l'écoute, attentionné et surtout très efficace !",
      rating: 5
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 3,
    breakpoints: {
      '(max-width: 768px)': { slidesToScroll: 1 }
    }
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ce que disent mes patients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les expériences de ceux qui m'ont fait confiance 
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-4"
                >
                  <div className="bg-secondary rounded-2xl p-8 h-full">
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{testimonial.name}</h3>
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-primary fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-secondary-foreground italic flex-grow">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-secondary transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-secondary transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials