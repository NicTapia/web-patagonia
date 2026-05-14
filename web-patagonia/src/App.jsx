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

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="inicio">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            Arte Patagonia
          </a>
          <div className="nav-links">
            <a href="#galeria">Galería</a>
            <a href="#categorias">Categorías</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-content reveal">
            <p className="eyebrow">Arte hecho a mano en el sur de Chile</p>
            <h1>La Patagonia convertida en piezas únicas</h1>
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
          </div>

          <aside className="hero-art-card reveal" aria-label="Detalle del portafolio">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=760&q=85"
              alt="Paisaje patagónico de montañas y agua"
            />
            <div>
              <span>Catálogo visual</span>
              <p>Aves, utensilios, adornos y encargos personalizados.</p>
            </div>
          </aside>

          <div className="hero-signature reveal" aria-label="Sello artístico">
            <span>Puerto, bosque y cordillera</span>
            <span>pintura sobre madera y objetos</span>
          </div>
        </div>

        <a className="scroll-cue" href="#inspiracion" aria-label="Ir a la siguiente sección">
          Explorar
        </a>
      </section>

      <section className="section intro-section reveal" id="inspiracion">
        <div>
          <p className="eyebrow">Inspiración austral</p>
          <h2>Un oficio lento, nacido entre bosque y viento</h2>
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
      </section>

      <section className="section gallery-section" id="galeria">
        <div className="section-heading reveal">
          <p className="eyebrow">Portafolio visual</p>
          <h2>Piezas de muestra con carácter de sur</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article
              className={`gallery-card reveal${item.featured ? ' featured' : ''}`}
              key={item.title}
            >
              <div className="image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="card-content">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section categories-section" id="categorias">
        <div className="section-heading reveal">
          <p className="eyebrow">Catálogo artístico</p>
          <h2>Categorías de trabajo</h2>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <article className="category-card reveal" key={category.name}>
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{category.name}</h3>
              <p>{category.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="custom-section reveal" id="personalizados">
        <div className="custom-media">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
            alt="Paisaje natural con bosque y agua"
            loading="lazy"
          />
        </div>
        <div className="custom-content">
          <p className="eyebrow">Encargos especiales</p>
          <h2>Una pieza creada desde tu idea</h2>
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
          <a className="button primary" href="#contacto">
            Cotizar personalizado
          </a>
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <p className="eyebrow">Contacto directo</p>
            <h2>Hablemos de la próxima pieza</h2>
            <p>
              Esta web funciona como portafolio y catálogo artístico. Para consultar
              disponibilidad, pedir una obra personalizada o conversar una idea, escribe
              por el canal que te acomode.
            </p>
          </div>
          <div className="contact-card">
            <span>Respuesta directa</span>
            <p>Cuéntame qué objeto, ave o paisaje tienes en mente.</p>
            <div className="contact-actions">
              <a
                className="button primary"
                href={contactLinks.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="button whatsapp"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="button secondary" href={contactLinks.email}>
                Correo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Arte Patagonia - Portafolio artístico inspirado en el sur de Chile.</p>
      </footer>
    </main>
  )
}

export default App
