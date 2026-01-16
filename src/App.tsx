import { useEffect, useState } from 'react'
import './App.css'
import { Waves } from './components/Waves'
import { trackMetaPixelEvent } from './utils/metaPixel'

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    // Smooth scroll animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleCTAClick = (buttonName: string) => {
    trackMetaPixelEvent('Lead', {
      content_name: buttonName,
      content_category: 'CTA Button Click'
    })
  }

  const handleWhatsAppClick = () => {
    trackMetaPixelEvent('Contact', {
      content_name: 'WhatsApp Contact',
      content_category: 'Social Contact'
    })
  }

  const faqs = [
    {
      question: "¿Cuánto tiempo necesito para ver resultados?",
      answer: "Muchos estudiantes reportan sentir una mejora en su nivel de calma y bienestar desde las primeras semanas de implementar las técnicas. Los resultados varían según la constancia y dedicación, pero con la práctica regular podrás experimentar cambios significativos en tu bienestar mental."
    },
    {
      question: "¿Necesito experiencia previa en meditación?",
      answer: "No, este programa está diseñado para principiantes y personas con experiencia. Las técnicas están explicadas paso a paso, adaptándose a diferentes niveles de conocimiento y experiencia previa."
    },
    {
      question: "¿Cuánto tiempo debo dedicar diariamente?",
      answer: "El programa está diseñado para integrarse fácilmente en tu rutina diaria. Incluso con 10-15 minutos al día podrás comenzar a ver beneficios. Las técnicas son flexibles y se adaptan a tu horario."
    },
    {
      question: "¿Qué incluye exactamente el programa?",
      answer: "El programa incluye técnicas de meditación y atención plena, ejercicios de respiración, prácticas de autoconciencia, estrategias para gestionar pensamientos y emociones, y herramientas para superar obstáculos comunes que impiden alcanzar un estado mental más tranquilo."
    },
    {
      question: "¿Puedo acceder desde cualquier dispositivo?",
      answer: "Sí, el programa está disponible en formato digital y puedes acceder desde cualquier dispositivo con conexión a internet, permitiéndote practicar las técnicas donde y cuando lo necesites."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "Estamos comprometidos con tu satisfacción. Si no estás completamente satisfecho con el programa, puedes contactarnos para resolver cualquier inquietud."
    }
  ]

  return (
    <div className="app">
      <Waves />
      <a 
        href="https://wa.me/573197019244" 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <section className="hero">
        <div className="hero-content fade-in">
          <h1 className="hero-title">Mente Serena</h1>
          <p className="hero-subtitle">Guía práctica para recuperar la calma en tu día a día</p>
          <p className="hero-description">
            Descubre técnicas probadas de meditación, mindfulness y respiración para cultivar una mente serena y equilibrada. 
            Transforma tu relación con el estrés, mejora tu bienestar mental y alcanza una paz interior duradera 
            con nuestro programa integral de técnicas para la mente serena.
          </p>
          <a 
            href="https://hotmart.com/es/marketplace/productos/tecnicas-para-cultivar-una-mente-serena-y-equilibrada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary"
            onClick={() => handleCTAClick('Comenzar Ahora - Hero')}
          >
            Comenzar Ahora
          </a>
        </div>
      </section>
      <section className="problem-section fade-in">
        <div className="container">
          <h2>¿Te sientes abrumado por el estrés y la agitación mental?</h2>
          <p>
            Este programa de técnicas para cultivar una mente serena y equilibrada está diseñado para aquellas personas 
            que anhelan encontrar paz y tranquilidad en sus vidas, pero que a menudo se sienten abrumadas por el estrés 
            y la agitación mental. Si buscas técnicas de relajación, manejo del estrés, meditación para principiantes 
            o métodos de atención plena, este programa te proporcionará las herramientas necesarias para transformar 
            tu bienestar mental y emocional.
          </p>
        </div>
      </section>

      <section className="benefits-section fade-in">
        <div className="container">
          <h2>Lo que aprenderás</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Técnicas de Meditación</h3>
              <p>Métodos probados de meditación y atención plena adaptados para tu rutina diaria</p>
            </div>
            <div className="benefit-card">
              <h3>Ejercicios de Respiración</h3>
              <p>Herramientas prácticas para calmar tu mente en momentos de crisis</p>
            </div>
            <div className="benefit-card">
              <h3>Autoconciencia</h3>
              <p>Aprende a identificar y superar los obstáculos que impiden tu tranquilidad</p>
            </div>
            <div className="benefit-card">
              <h3>Gestión Emocional</h3>
              <p>Maneja tus pensamientos y emociones de manera más saludable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="program-details-section fade-in">
        <div className="container">
          <h2>¿Qué incluye el programa completo?</h2>
          <p className="section-intro">
            A través de un enfoque integral, aprenderás técnicas probadas y estrategias efectivas 
            para cultivar una mente serena y equilibrada.
          </p>
          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-icon">🧘</div>
              <h3>Meditación y Atención Plena</h3>
              <p>
                Descubre métodos de meditación adaptados para integrarse fácilmente en tu rutina diaria. 
                Aprende a estar presente y cultivar la atención plena en cada momento.
              </p>
            </div>
            <div className="detail-item">
              <div className="detail-icon">🌬️</div>
              <h3>Ejercicios de Respiración</h3>
              <p>
                Técnicas de respiración efectivas que te ayudarán a calmar tu sistema nervioso, 
                reducir el estrés y encontrar equilibrio en momentos de agitación.
              </p>
            </div>
            <div className="detail-item">
              <div className="detail-icon">🔍</div>
              <h3>Prácticas de Autoconciencia</h3>
              <p>
                Desarrolla una mayor comprensión de ti mismo, identifica patrones de pensamiento 
                y emociones que generan estrés, y aprende a transformarlos.
              </p>
            </div>
            <div className="detail-item">
              <div className="detail-icon">💭</div>
              <h3>Gestión de Pensamientos</h3>
              <p>
                Herramientas prácticas para manejar tus pensamientos de manera más saludable, 
                permitiéndote experimentar una mayor sensación de calma y bienestar.
              </p>
            </div>
            <div className="detail-item">
              <div className="detail-icon">🚧</div>
              <h3>Superación de Obstáculos</h3>
              <p>
                Explora cómo identificar y superar los obstáculos comunes que impiden alcanzar 
                un estado mental más tranquilo y sereno.
              </p>
            </div>
            <div className="detail-item">
              <div className="detail-icon">✨</div>
              <h3>Paz Interior Duradera</h3>
              <p>
                No solo aprenderás a alcanzar la calma en momentos de crisis, sino que también 
                te guiará para mantener un estado de serenidad constante.
              </p>
            </div>
          </div>
          <div className="transformation-box">
            <h3>Transforma tu vida completamente</h3>
            <p>
              Con estas herramientas prácticas y conocimientos fundamentales, estarás equipado para 
              transformar tu relación con el estrés, mejorar significativamente tu calidad de vida 
              y fortalecer tus relaciones interpersonales.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-section fade-in">
        <div className="container">
          <h2>Inversión Especial</h2>
          <div className="pricing-card">
            <div className="price-old">Antes: $30.000 COP</div>
            <div className="price-new">Ahora: $15.690 COP</div>
            <div className="price-discount">¡Ahorra 48%!</div>
            <p className="price-urgency">⚠️ Oferta por tiempo limitado - No te la pierdas</p>
            <a 
              href="https://hotmart.com/es/marketplace/productos/tecnicas-para-cultivar-una-mente-serena-y-equilibrada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button primary"
              onClick={() => handleCTAClick('Aprovechar Oferta - Pricing')}
            >
              Aprovechar Oferta Ahora
            </a>
          </div>
        </div>
      </section>

      <section className="reviews-section fade-in">
        <div className="container">
          <h2>Lo que dicen nuestros estudiantes</h2>
          <div className="reviews-carousel-wrapper">
            <div className="reviews-carousel">
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Este programa cambió mi vida. Ahora puedo manejar el estrés de manera mucho más efectiva 
                  y siento una calma que no había experimentado antes. Las técnicas son realmente transformadoras."
                </p>
                <p className="review-author">- María G., Bogotá</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Las técnicas son fáciles de implementar en mi día a día. He notado una mejora significativa 
                  en mi bienestar general y en mis relaciones. Lo recomiendo totalmente."
                </p>
                <p className="review-author">- Carlos R., Medellín</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Excelente programa. Las prácticas de respiración y meditación han transformado 
                  completamente mi relación con el estrés. Ahora tengo herramientas reales para mantener la calma."
                </p>
                <p className="review-author">- Ana L., Cali</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Increíble cómo en solo unas semanas pude ver cambios. La autoconciencia que he desarrollado 
                  me ha ayudado a manejar situaciones que antes me desbordaban completamente."
                </p>
                <p className="review-author">- Roberto M., Barranquilla</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "El programa superó mis expectativas. Las técnicas son prácticas, fáciles de seguir 
                  y realmente funcionan. Mi calidad de vida ha mejorado notablemente."
                </p>
                <p className="review-author">- Laura S., Pereira</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Finalmente encontré algo que realmente funciona. La paz interior que he alcanzado 
                  es algo que pensé que nunca sería posible. Gracias por este programa."
                </p>
                <p className="review-author">- Diego A., Bucaramanga</p>
              </div>
              {/* Duplicados para loop infinito */}
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Este programa cambió mi vida. Ahora puedo manejar el estrés de manera mucho más efectiva 
                  y siento una calma que no había experimentado antes. Las técnicas son realmente transformadoras."
                </p>
                <p className="review-author">- María G., Bogotá</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Las técnicas son fáciles de implementar en mi día a día. He notado una mejora significativa 
                  en mi bienestar general y en mis relaciones. Lo recomiendo totalmente."
                </p>
                <p className="review-author">- Carlos R., Medellín</p>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Excelente programa. Las prácticas de respiración y meditación han transformado 
                  completamente mi relación con el estrés. Ahora tengo herramientas reales para mantener la calma."
                </p>
                <p className="review-author">- Ana L., Cali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section fade-in">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <p className="section-intro">
            Resolvemos las dudas más comunes sobre el programa Mente Serena
          </p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section fade-in">
        <div className="container">
          <h2>Comienza tu transformación hacia una mente serena hoy</h2>
          <p>
            No esperes más para encontrar la paz y tranquilidad que buscas. Este programa integral de técnicas para 
            cultivar una mente serena y equilibrada te guiará paso a paso hacia un estado de calma constante. 
            Aprende meditación, mindfulness, ejercicios de respiración y técnicas de autoconciencia que transformarán 
            tu calidad de vida y tus relaciones interpersonales. Únete a cientos de personas que ya han descubierto 
            el poder de una mente serena.
          </p>
          <a 
            href="https://hotmart.com/es/marketplace/productos/tecnicas-para-cultivar-una-mente-serena-y-equilibrada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary large"
            onClick={() => handleCTAClick('Obtener Acceso - Final CTA')}
          >
            Obtener Acceso al Programa Ahora
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
