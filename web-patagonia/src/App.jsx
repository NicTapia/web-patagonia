import { motion, useReducedMotion } from 'framer-motion'
import './App.css'

const contactLinks = {
  instagram: 'https://www.instagram.com/',
  whatsapp: 'https://wa.me/56912345678',
  email: 'mailto:hola@artepatagonia.cl',
}

// Reemplaza estas URLs por archivos locales cuando tengas fotos reales:
// /images/nombre-del-archivo.jpg
const galleryItems = [
  {
    title: 'Loica sobre madera nativa',
    type: 'Aves del sur',
    description:
      'Rojo intenso, trazo fino y vetas visibles para una pieza que conserva el pulso del bosque.',
    image:
      'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1100&q=85',
    featured: true,
  },
  {
    title: 'Tabla patagónica pintada',
    type: 'Utensilios',
    description:
      'Un objeto cotidiano transformado en una escena íntima de lago, madera y viento austral.',
    image:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Montañas y lenga',
    type: 'Paisajes',
    description:
      'Capas de azul profundo, nieve suave y verdes apagados para una atmósfera de silencio.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Adorno de temporada austral',
    type: 'Objetos pintados',
    description:
      'Detalles pequeños con acabado artesanal, pensados para regalar presencia y memoria.',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Carpintero negro',
    type: 'Aves',
    description:
      'Retrato de carácter fuerte, con contraste oscuro y acentos rojos inspirados en fauna nativa.',
    image:
      'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=1100&q=85',
    featured: true,
  },
  {
    title: 'Encargo con paisaje familiar',
    type: 'Personalizado',
    description:
      'Una composición hecha desde una historia propia: un lugar querido, un ave o una fecha.',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85',
  },
]

const categories = [
  {
    name: 'Utensilios de cocina',
    detail: 'Tablas, cucharas y bandejas intervenidas con escenas delicadas y sellado decorativo.',
  },
  {
    name: 'Adornos',
    detail: 'Piezas pequeñas para sumar textura, calidez y un gesto de territorio al hogar.',
  },
  {
    name: 'Aves',
    detail: 'Loicas, chucaos, carpinteros y especies observadas en bosques del sur chileno.',
  },
  {
    name: 'Paisajes',
    detail: 'Montañas, lagos, lengas, nieve y cielos cambiantes traducidos a color y textura.',
  },
  {
    name: 'Personalizados',
    detail: 'Encargos con nombres, fechas, recuerdos, aves favoritas o lugares significativos.',
  },
]

const transition = { duration: 0.78, ease: [0.22, 1, 0.36, 1] }

function motionProps(shouldReduceMotion, delay = 0, amount = 0.22) {
  if (shouldReduceMotion) {
    return { initial: false, whileInView: undefined }
  }

  return {
    initial: { opacity: 0, y: 30 },
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
    initial: { opacity: 0, y: 34 },
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
      transition: { duration: 0.26, ease: [0.2, 0.7, 0.2, 1] },
    },
  }
}

function App() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <motion.nav
          className="topbar"
          aria-label="Navegación principal"
          {...heroProps(shouldReduceMotion)}
        >
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            Arte Patagonia
          </a>
          <div className="nav-links">
            <a href="#galeria">Galería</a>
            <a href="#categorias">Categorías</a>
            <a href="#contacto">Contacto</a>
          </div>
        </motion.nav>

        <div className="hero-layout">
          <motion.div className="hero-content" {...heroProps(shouldReduceMotion, 0.12)}>
            <p className="eyebrow">Arte hecho a mano en el sur de Chile</p>
            <h1 id="hero-title">La Patagonia convertida en piezas únicas</h1>
            <p className="hero-copy">
              Aves nativas, paisajes australes y objetos cotidianos pintados a mano
              con una mirada íntima, natural y profundamente sureña.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#galeria">
                Ver portafolio
              </a>
              <a className="button secondary" href="#contacto">
                Encargar una pieza
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero-art-card"
            aria-label="Detalle del portafolio"
            {...heroProps(shouldReduceMotion, 0.28)}
          >
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=760&q=85"
              alt="Paisaje patagónico de montañas y agua"
              fetchPriority="high"
            />
            <div>
              <span>Catálogo visual</span>
              <p>Aves, utensilios, adornos y encargos personalizados.</p>
            </div>
          </motion.aside>

          <motion.div
            className="hero-signature"
            aria-label="Sello artístico"
            {...heroProps(shouldReduceMotion, 0.42)}
          >
            <span>Puerto, bosque y cordillera</span>
            <span>Pintura sobre madera y objetos</span>
          </motion.div>
        </div>

        <a className="scroll-cue" href="#contenido" aria-label="Ir a la siguiente sección">
          Explorar
        </a>
      </section>

      <motion.section
        className="section intro-section"
        id="contenido"
        aria-labelledby="inspiracion-title"
        {...motionProps(shouldReduceMotion)}
      >
        <div>
          <p className="eyebrow">Inspiración austral</p>
          <h2 id="inspiracion-title">Un oficio lento, nacido entre bosque y viento</h2>
        </div>
        <div className="intro-copy">
          <p>
            Cada obra parte de una escena del sur: el vuelo breve de una loica, el
            silencio de una montaña nevada, el brillo frío de un lago o la textura de
            una tabla que todavía guarda memoria de madera.
          </p>
          <p>
            El resultado es un portafolio de piezas cálidas y contemplativas, creadas
            para decorar, regalar con sentido o convertir un recuerdo personal en una
            obra hecha a medida.
          </p>
          <div className="material-notes" aria-label="Materiales e inspiración">
            <span>Madera</span>
            <span>Aves nativas</span>
            <span>Paisaje austral</span>
          </div>
        </div>
      </motion.section>

      <section className="section gallery-section" id="galeria" aria-labelledby="galeria-title">
        <motion.div className="section-heading" {...motionProps(shouldReduceMotion)}>
          <p className="eyebrow">Portafolio visual</p>
          <h2 id="galeria-title">Piezas de muestra con carácter de sur</h2>
        </motion.div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.article
              className={`gallery-card${item.featured ? ' featured' : ''}`}
              key={item.title}
              {...motionProps(shouldReduceMotion, index * 0.055, 0.16)}
              {...hoverLift(shouldReduceMotion, -8)}
            >
              <div className="image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="card-content">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        className="section categories-section"
        id="categorias"
        aria-labelledby="categorias-title"
      >
        <motion.div className="section-heading" {...motionProps(shouldReduceMotion)}>
          <p className="eyebrow">Catálogo artístico</p>
          <h2 id="categorias-title">Categorías de trabajo</h2>
        </motion.div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.article
              className="category-card"
              key={category.name}
              {...motionProps(shouldReduceMotion, index * 0.055, 0.2)}
              {...hoverLift(shouldReduceMotion, -6)}
            >
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{category.name}</h3>
              <p>{category.detail}</p>
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
        <div className="custom-media">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
            alt="Paisaje natural con bosque y agua"
            loading="lazy"
          />
        </div>
        <div className="custom-content">
          <p className="eyebrow">Encargos especiales</p>
          <h2 id="personalizados-title">Una pieza creada desde tu idea</h2>
          <p>
            Un encargo puede partir desde una fotografía, un ave favorita, un paisaje
            familiar o una combinación de colores. La idea es construir una pieza con
            intención, cuidando el soporte, el tono y los detalles que la vuelven tuya.
          </p>
          <div className="process-list" aria-label="Proceso de encargo">
            <span>Idea</span>
            <span>Boceto</span>
            <span>Pintura</span>
            <span>Entrega</span>
          </div>
          <a className="button primary dark-text" href="#contacto">
            Cotizar personalizado
          </a>
        </div>
      </motion.section>

      <section className="section contact-section" id="contacto" aria-labelledby="contacto-title">
        <motion.div className="contact-panel" {...motionProps(shouldReduceMotion, 0, 0.24)}>
          <div className="contact-copy">
            <p className="eyebrow">Contacto directo</p>
            <h2 id="contacto-title">Hablemos de la próxima pieza</h2>
            <p>
              Esta web funciona como portafolio y catálogo artístico. Para consultar
              disponibilidad, pedir una obra personalizada o conversar una idea, escribe
              por el canal que te acomode.
            </p>
          </div>
          <div className="contact-card">
            <span>Respuesta directa</span>
            <p>Cuéntame qué objeto, ave o paisaje tienes en mente.</p>
            <div className="contact-actions" aria-label="Canales de contacto">
              <a
                className="button primary dark-text"
                href={contactLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram en una nueva pestaña"
              >
                Instagram
              </a>
              <a
                className="button whatsapp"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Escribir por WhatsApp"
              >
                WhatsApp
              </a>
              <a className="button secondary" href={contactLinks.email}>
                Correo
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <p>Arte Patagonia - Portafolio artístico inspirado en el sur de Chile.</p>
      </footer>
    </main>
  )
}

export default App
