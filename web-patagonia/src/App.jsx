import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './App.css'

const contactLinks = {
  whatsapp: 'https://wa.me/569XXXXXXXX',
  instagram: 'https://instagram.com/USUARIO',
  email: 'mailto:correo@ejemplo.cl',
}

const themes = {
  rain: {
    label: 'Lluvia del sur',
    nextLabel: 'Día soleado',
    video: '/videos/video-lluvia.mp4',
    eyebrow: 'Refugio artístico entre bosque y lluvia',
    title: 'Pintando Aves Patagonia',
    subtitle: 'Arte sobre vajilla inspirado en aves, bosques y paisajes del sur de Chile.',
    poem: 'Entre lluvia, bosque y calor de hogar, cada ave encuentra su lugar.',
    notes: ['Casa tibia', 'Vidrio empañado', 'Bosque mojado'],
  },
  sun: {
    label: 'Día soleado',
    nextLabel: 'Lluvia del sur',
    video: '/videos/paisaje-sol.mp4',
    eyebrow: 'Color, lago y vuelo en el sur de Chile',
    title: 'Pintando Aves Patagonia',
    subtitle: 'Arte sobre vajilla inspirado en aves, bosques y paisajes del sur de Chile.',
    poem: 'Colores del sur, aves en vuelo y paisajes que iluminan cada pieza.',
    notes: ['Luz de lago', 'Bosque abierto', 'Aves en calma'],
  },
}

const galleryItems = [
  {
    src: '/images/taza-chucao.jpg',
    title: 'Taza Chucao',
    category: 'Taza pintada',
    bird: 'Chucao',
    description:
      'Una taza que guarda el pulso del sotobosque: el chucao aparece entre ramas, tierra húmeda y calma sureña.',
    alt: 'Taza pintada a mano con un ave chucao y detalles naturales.',
  },
  {
    src: '/images/taza-sietecolores.jpg',
    title: 'Taza Sietecolores',
    category: 'Ave colorida',
    bird: 'Sietecolores',
    description:
      'Color intenso sobre fondo profundo, como un destello pequeño junto a humedales y juncos del sur.',
    alt: 'Taza negra pintada con un ave sietecolores de tonos vivos.',
  },
  {
    src: '/images/termo-aguila.jpg',
    title: 'Termo Águila',
    category: 'Termo intervenido',
    bird: 'Águila',
    description:
      'Una pieza de viaje con mirada amplia: ave, lago y horizonte para acompañar rutas y días al aire libre.',
    alt: 'Termo pintado a mano con un águila y paisaje de lago.',
  },
  {
    src: '/images/tetera-gallo.jpg',
    title: 'Tetera Gallo',
    category: 'Objeto decorativo',
    bird: 'Gallo',
    description:
      'Presencia doméstica, color y carácter sobre una tetera negra pensada para vestir la mesa con oficio.',
    alt: 'Tetera negra pintada a mano con un gallo colorido.',
  },
]

const birdStories = [
  {
    name: 'Chucao',
    image: '/images/taza-chucao.jpg',
    alt: 'Detalle de taza pintada con chucao.',
    text: 'Pequeño habitante del bosque húmedo, aparece como una señal íntima entre hojas, musgo y senderos.',
  },
  {
    name: 'Sietecolores',
    image: '/images/taza-sietecolores.jpg',
    alt: 'Detalle de taza pintada con sietecolores.',
    text: 'Un destello vivo y delicado; su plumaje lleva a la vajilla la sorpresa luminosa de los humedales.',
  },
  {
    name: 'Águila',
    image: '/images/termo-aguila.jpg',
    alt: 'Detalle de termo pintado con águila y paisaje.',
    text: 'Mirada alta, viento abierto y paisaje de lago: una presencia que habla de viaje y territorio.',
  },
  {
    name: 'Gallo',
    image: '/images/tetera-gallo.jpg',
    alt: 'Detalle de tetera pintada con gallo.',
    text: 'Cercano y expresivo, trae a la mesa la calidez del hogar, el color cotidiano y la memoria rural.',
  },
]

const processSteps = [
  {
    title: 'Inspiración',
    text: 'Aves, bosques, lluvia, lagos y escenas del sur se observan antes de llegar al trazo.',
  },
  {
    title: 'Elección',
    text: 'Se define la pieza: taza, tetera, termo, vajilla, adorno o utensilio especial.',
  },
  {
    title: 'Pintura',
    text: 'Cada detalle se trabaja a mano, cuidando color, composición y carácter del ave.',
  },
  {
    title: 'Hogar',
    text: 'La pieza queda lista para acompañar una mesa, una cocina, una ruta o un regalo con sentido.',
  },
]

const personalizedOptions = ['Tazas', 'Teteras', 'Termos', 'Vajilla', 'Adornos', 'Utensilios']

const transition = { duration: 0.72, ease: [0.22, 1, 0.36, 1] }

function motionProps(shouldReduceMotion, delay = 0, amount = 0.18) {
  if (shouldReduceMotion) {
    return { initial: false, whileInView: undefined }
  }

  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: { ...transition, delay },
  }
}

function heroProps(shouldReduceMotion, delay = 0) {
  if (shouldReduceMotion) {
    return { initial: false, animate: undefined }
  }

  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition, delay },
  }
}

function hoverLift(shouldReduceMotion, distance = -6) {
  if (shouldReduceMotion) {
    return {}
  }

  return {
    whileHover: {
      y: distance,
      transition: { duration: 0.24, ease: [0.2, 0.7, 0.2, 1] },
    },
  }
}

function getStoredTheme() {
  if (typeof window === 'undefined') {
    return 'rain'
  }

  return window.localStorage.getItem('patagonia-theme') === 'sun' ? 'sun' : 'rain'
}

function App() {
  const shouldReduceMotion = useReducedMotion()
  const [theme, setTheme] = useState(getStoredTheme)
  const activeTheme = themes[theme]
  const featuredItem = theme === 'rain' ? galleryItems[0] : galleryItems[2]

  useEffect(() => {
    window.localStorage.setItem('patagonia-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'rain' ? 'sun' : 'rain'))
  }

  return (
    <main className={`site-shell theme-${theme}`}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <video
          key={activeTheme.video}
          className="hero-video"
          src={activeTheme.video}
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-atmosphere" aria-hidden="true" />

        <motion.header
          className="topbar"
          aria-label="Navegación principal"
          {...heroProps(shouldReduceMotion)}
        >
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <img src="/images/logo-real.png" alt="" />
            <span>Pintando Aves Patagonia</span>
          </a>
          <nav className="nav-links" aria-label="Secciones">
            <a href="#inicio">Inicio</a>
            <a href="#contenido">Arte</a>
            <a href="#aves">Aves</a>
            <a href="#galeria">Galería</a>
            <a href="#personalizados">Personalizados</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'sun'}
            aria-label={`Cambiar a ${activeTheme.nextLabel}`}
          >
            <span>{activeTheme.label}</span>
            <strong>{activeTheme.nextLabel}</strong>
          </button>
        </motion.header>

        <div className="hero-layout">
          <motion.div className="hero-content" {...heroProps(shouldReduceMotion, 0.1)}>
            <p className="eyebrow">{activeTheme.eyebrow}</p>
            <h1 id="hero-title">{activeTheme.title}</h1>
            <p className="hero-copy">{activeTheme.subtitle}</p>
            <p className="hero-poem">{activeTheme.poem}</p>
            <div className="hero-actions">
              <a className="button primary" href="#galeria">
                Ver galería
              </a>
              <a className="button secondary" href="#contacto">
                Contactar
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero-brand-card"
            aria-label="Sello de marca y pieza destacada"
            {...heroProps(shouldReduceMotion, 0.24)}
          >
            <div className="brand-logo-panel">
              <img src="/images/logo-real.png" alt="Logo Pintando Aves Patagonia" />
            </div>
            <div className="hero-feature">
              <img src={featuredItem.src} alt={featuredItem.alt} />
              <div>
                <span>{featuredItem.category}</span>
                <p>{featuredItem.title}</p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="hero-signature"
            aria-label="Detalles de la experiencia"
            {...heroProps(shouldReduceMotion, 0.34)}
          >
            {activeTheme.notes.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </motion.div>
        </div>

        <a className="scroll-cue" href="#contenido" aria-label="Ir a la siguiente sección">
          Explorar
        </a>
      </section>

      <section className="story-section" id="contenido" aria-labelledby="oficio-title">
        <motion.div className="story-media" {...motionProps(shouldReduceMotion)}>
          <img src="/images/taza-chucao.jpg" alt="Taza pintada a mano con chucao." />
          <div className="story-mini-card">
            <span>Hecho a mano</span>
            <p>Vajilla, utensilios y objetos decorativos con aves pintadas una a una.</p>
          </div>
        </motion.div>
        <motion.div className="story-copy" {...motionProps(shouldReduceMotion, 0.08)}>
          <p className="eyebrow">Un oficio nacido entre bosques, aves y lluvia</p>
          <h2 id="oficio-title">Piezas que llevan el sur a la mesa cotidiana</h2>
          <p>
            Cada obra parte de una observación: el color de un ave entre ramas, el brillo
            del lago después de la lluvia, una tarde de cocina tibia o el silencio vegetal
            del bosque. Luego esa atmósfera se transforma en pintura sobre tazas, teteras,
            termos, vajilla y utensilios.
          </p>
          <p>
            No son objetos producidos en serie. Cada pieza conversa con su soporte, con la
            historia del encargo y con una manera muy sureña de mirar: pausada, sensible y
            atenta a los detalles pequeños.
          </p>
          <div className="story-notes" aria-label="Inspiraciones del oficio">
            <span>Bosque húmedo</span>
            <span>Aves del sur</span>
            <span>Lago y cordillera</span>
            <span>Vida de hogar</span>
          </div>
        </motion.div>
      </section>

      <section className="birds-section" id="aves" aria-labelledby="aves-title">
        <motion.div className="section-heading centered" {...motionProps(shouldReduceMotion)}>
          <p className="eyebrow">Aves que habitan la vajilla</p>
          <h2 id="aves-title">Pequeñas presencias que vuelven única cada pieza</h2>
        </motion.div>
        <div className="bird-grid">
          {birdStories.map((bird, index) => (
            <motion.article
              className="bird-card"
              key={bird.name}
              {...motionProps(shouldReduceMotion, index * 0.055, 0.16)}
              {...hoverLift(shouldReduceMotion, -7)}
            >
              <img src={bird.image} alt={bird.alt} loading="lazy" />
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{bird.name}</h3>
                <p>{bird.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="proceso-title">
        <motion.div className="section-heading" {...motionProps(shouldReduceMotion)}>
          <p className="eyebrow">Del paisaje a la pieza</p>
          <h2 id="proceso-title">Un proceso lento, visual y cercano</h2>
        </motion.div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.article
              className="process-card"
              key={step.title}
              {...motionProps(shouldReduceMotion, index * 0.055, 0.18)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria" aria-labelledby="galeria-title">
        <motion.div className="section-heading" {...motionProps(shouldReduceMotion)}>
          <p className="eyebrow">Galería editorial</p>
          <h2 id="galeria-title">Objetos reales pintados con aves y escenas del sur</h2>
        </motion.div>
        <div className="editorial-gallery">
          {galleryItems.map((item, index) => (
            <motion.article
              className={`gallery-card gallery-card-${index + 1}`}
              key={item.title}
              {...motionProps(shouldReduceMotion, index * 0.055, 0.14)}
              {...hoverLift(shouldReduceMotion, index === 0 ? -5 : -8)}
            >
              <div className="image-wrap">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="card-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="custom-section"
        id="personalizados"
        aria-labelledby="personalizados-title"
        {...motionProps(shouldReduceMotion, 0, 0.22)}
      >
        <div className="custom-content">
          <p className="eyebrow">Encargos personalizados</p>
          <h2 id="personalizados-title">Una conversación entre tu idea y la mano de la artista</h2>
          <p>
            Puedes pedir una pieza para regalar, para acompañar tu cocina o para transformar
            un objeto querido en algo profundamente personal. La elección del ave, el soporte,
            los colores y los detalles se conversa directamente con la artista.
          </p>
          <p className="important-note">
            Cada pieza se conversa directamente con la artista para definir ave, objeto,
            colores y detalles.
          </p>
          <div className="object-list" aria-label="Objetos disponibles para personalizar">
            {personalizedOptions.map((option) => (
              <span key={option}>{option}</span>
            ))}
          </div>
          <a className="button primary dark-text" href="#contacto">
            Conversar un encargo
          </a>
        </div>
        <div className="custom-collage" aria-label="Ejemplos de piezas personalizadas">
          <img src="/images/termo-aguila.jpg" alt="Termo pintado con águila y paisaje." />
          <img src="/images/tetera-gallo.jpg" alt="Tetera pintada con gallo." />
        </div>
      </motion.section>

      <section className="contact-section" id="contacto" aria-labelledby="contacto-title">
        <motion.div className="contact-panel" {...motionProps(shouldReduceMotion, 0, 0.24)}>
          <div className="contact-copy">
            <p className="eyebrow">Contacto directo</p>
            <h2 id="contacto-title">
              ¿Tienes un ave favorita o una pieza especial que te gustaría transformar?
            </h2>
            <p>
              Escríbenos para consultar disponibilidad, encargos especiales o ideas para
              pintar sobre tu objeto favorito. La página funciona como portafolio artístico:
              sin carrito, sin pagos y sin precios publicados.
            </p>
          </div>
          <div className="contact-card">
            <span>Conversemos tu pieza</span>
            <p>Comparte la idea, el objeto y el ave que imaginas. Desde ahí empieza el encargo.</p>
            <div className="contact-actions" aria-label="Canales de contacto">
              <a
                className="button whatsapp"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="button primary dark-text"
                href={contactLinks.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a className="button secondary" href={contactLinks.email}>
                Correo
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div>
          <strong>Pintando Aves Patagonia</strong>
          <p>Arte, aves y naturaleza del sur de Chile.</p>
        </div>
        <nav aria-label="Links de contacto del pie de página">
          <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={contactLinks.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={contactLinks.email}>Correo</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
