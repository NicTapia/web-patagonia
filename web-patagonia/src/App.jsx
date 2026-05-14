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
    title: 'Loica sobre madera',
    type: 'Aves del sur',
    description: 'Pieza decorativa pintada a mano con detalles inspirados en plumaje nativo.',
    image:
      'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Tabla de cocina patagónica',
    type: 'Utensilios',
    description: 'Objeto cotidiano convertido en una pequeña escena de bosque, agua y viento.',
    image:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Montañas y lenga',
    type: 'Paisajes',
    description: 'Pintura de atmósfera fría con verdes profundos, nieve y horizonte austral.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Adorno de temporada',
    type: 'Objetos pintados',
    description: 'Detalle artesanal para regalar, coleccionar o sumar calidez al hogar.',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Carpintero negro',
    type: 'Aves',
    description: 'Retrato expresivo de fauna del sur chileno sobre soporte personalizado.',
    image:
      'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Encargo familiar',
    type: 'Personalizado',
    description: 'Composición creada desde una historia, un lugar querido o una especie favorita.',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
  },
]

const categories = [
  {
    name: 'Utensilios de cocina',
    detail: 'Tablas, cucharas, bandejas y piezas funcionales con pintura decorativa.',
  },
  {
    name: 'Adornos',
    detail: 'Objetos pequeños, colgantes y detalles para espacios con identidad austral.',
  },
  {
    name: 'Aves',
    detail: 'Loicas, chucaos, carpinteros y especies que habitan bosques del sur.',
  },
  {
    name: 'Paisajes',
    detail: 'Montañas, lagos, bosques, nieve y cielos cambiantes de la Patagonia.',
  },
  {
    name: 'Personalizados',
    detail: 'Encargos con nombres, fechas, recuerdos o motivos significativos.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="inicio">
        <nav className="topbar" aria-label="Navegacion principal">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            Arte Patagonia
          </a>
          <div className="nav-links">
            <a href="#galeria">Galeria</a>
            <a href="#categorias">Categorias</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-content reveal">
          <p className="eyebrow">Arte hecho a mano en el sur de Chile</p>
          <h1>Patagonia pintada sobre objetos con historia</h1>
          <p className="hero-copy">
            Obras inspiradas en aves australes, paisajes fríos y la calidez de los
            objetos cotidianos transformados en piezas únicas.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#galeria">
              Ver portafolio
            </a>
            <a className="button secondary" href="#contacto">
              Pedir encargo
            </a>
          </div>
        </div>
      </section>

      <section className="section intro-section reveal" id="inspiracion">
        <div>
          <p className="eyebrow">Inspiración austral</p>
          <h2>Entre bosque, viento y oficio manual</h2>
        </div>
        <div className="intro-copy">
          <p>
            Cada pieza nace de la observación del territorio: aves que cruzan el
            bosque, montañas cubiertas de nieve, lagos profundos y texturas de madera
            que invitan a pintar con calma.
          </p>
          <p>
            El resultado es un catálogo artístico cercano y natural, pensado para
            decorar hogares, regalar con sentido o convertir un recuerdo personal en
            una obra única.
          </p>
        </div>
      </section>

      <section className="section gallery-section" id="galeria">
        <div className="section-heading reveal">
          <p className="eyebrow">Portafolio visual</p>
          <h2>Trabajos recientes y piezas de muestra</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card reveal" key={item.title}>
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
          <h2>Categorias de trabajo</h2>
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
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
            alt="Paisaje natural con bosque y agua"
            loading="lazy"
          />
        </div>
        <div className="custom-content">
          <p className="eyebrow">Encargos especiales</p>
          <h2>Una pieza creada desde tu idea</h2>
          <p>
            Los trabajos personalizados pueden incluir aves favoritas, nombres,
            fechas, colores especiales, paisajes significativos o una composición
            pensada para regalar.
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
          <p className="eyebrow">Contacto directo</p>
          <h2>Conversemos sobre una pieza para ti</h2>
          <p>
            Por ahora la web funciona como portafolio. Para comprar una pieza
            disponible o pedir un trabajo a medida, escribe por el canal que prefieras.
          </p>
          <div className="contact-actions">
            <a className="button primary" href={contactLinks.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="button whatsapp" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="button secondary" href={contactLinks.email}>
              Correo
            </a>
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
