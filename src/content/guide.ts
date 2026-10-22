// All visitor-facing copy, keyed by locale. Spanish (es) is the source language.
// English (en) mirrors every section so the static site can render either locale
// from the same components. Keep both sides in sync when editing copy.
import type { Locale } from '../i18n';

type Card = [string, string];
type FAQ = [string, string][];

interface SubSection {
  id?: string;
  eyebrow: string;
  h2: string;
  lead?: string;
  body?: string[];
  cards?: Card[];
  note?: string;
}

interface SubPage {
  eyebrow: string;
  h1: string;
  intro: string;
  facts: { label: string; value: string; sub?: string }[];
  sections: SubSection[];
  faqTitle: string;
  faqEyebrow: string;
  faq: FAQ;
  faqNote?: string;
}

type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

interface LegalDoc {
  eyebrow: string;
  h1: string;
  updated: string;
  intro: string;
  blocks: { h2: string; items: LegalBlock[] }[];
}

interface GuideContent {
  nav: { home: string; horario: string; comida: string; seguridad: string; maps: string };
  footer: { disclaimer1: string; disclaimer2: string; copyright: string; sub: string; legal: { label: string; key: 'privacidad' | 'terminos' | 'cookies' }[] };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroLead: string;
    heroCta1: string;
    heroCta2: string;
    facts: { ingreso: { label: string; value: string }; referencia: { label: string; value: string; sub: string }; altitud: { label: string; value: string }; direccion: { label: string; value: string } };
    acerca: { eyebrow: string; h2: string; p1: string; hierarchy: string[]; p2: string };
    historia: { eyebrow: string; h2: string; p1: string; p2: string; noteTitle: string; noteBody: string; p3: string; imgInside: string; imgFruit: string; culturalTitle: string; culturalBody: string };
    queObservar: { eyebrow: string; h2: string; cards: Card[] };
    visita: { eyebrow: string; h2: string; cards: Card[] };
    clima: { eyebrow: string; h2: string; lead: string; loading: string; error: string; now: string; next: string; advice: string; note: string; blocks: { travel: string; play: string; items: string; risk: string } };
    transporte: { eyebrow: string; h2: string; cards: Card[]; note: string };
    servicios: { eyebrow: string; h2: string; cards: Card[] };
    comer: { eyebrow: string; h2: string; lead: string; tags: string[]; cercaTitle: string; cercaItems: { strong: string; text: string }[] };
    entrada: { cards: { eyebrow: string; title: string; body: string }[] };
    ubicacion: { eyebrow: string; h2: string; addr: string; mapsCta: string; govtText: string; govtName: string };
    faq: { eyebrow: string; h2: string; items: FAQ };
    fuentes: { h2: string; lead: string; photos: string };
  };
  seasonal: {
    eyebrow: string;
    h2: string;
    lead: string;
    cols: string[];
    rows: { epoca: string; epocaSub: string; meses: string; clima: string; diaNoche: string; mercado: string; recom: string }[];
    noteTitle: string;
    noteBody: string;
  };
  itineraries: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: { eyebrow: string; title: string; items: string[]; time: string }[];
    rutasTitle: string;
    rutas: { eyebrow: string; title: string; items: string[]; time: string }[];
    note: string;
  };
  responsibility: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: { title: string; body: string }[];
    note: string;
  };
  sub: {
    horario: SubPage;
    comida: SubPage;
    seguridad: SubPage;
  };
  legal: {
    privacidad: LegalDoc;
    terminos: LegalDoc;
    cookies: LegalDoc & { form: { necessaryTitle: string; necessaryBody: string; analyticsTitle: string; analyticsBody: string; prefsTitle: string; prefsBody: string; marketingTitle: string; marketingBody: string; save: string; reject: string; saved: string; rejected: string; prefsNote: string; consentTitle: string; consentBody: string; key: string } };
  };
}

export const guide: Record<Locale, GuideContent> = {
  es: {
    nav: { home: 'Inicio', horario: 'Horario y cómo llegar', comida: 'Comida y compras', seguridad: 'Seguridad', maps: 'Abrir mapa' },
    footer: {
      disclaimer1: 'Este sitio es un proyecto independiente y sin fines de lucro de información para visitantes. No está afiliado a la Municipalidad Provincial del Cusco, a organismos gubernamentales ni a organizaciones oficiales.',
      disclaimer2: 'Fuentes consultadas el 22 de octubre de 2026 (UTC): inventario MINCETUR, PROMPERÚ y ficha de Google Maps. Los horarios publicados difieren; consulta las fuentes y vuelve a confirmar antes de ir.',
      copyright: '© 2026 Guía Cultural del Mercado San Pedro de Cusco. Todos los derechos reservados.',
      sub: 'Guía no oficial del Mercado Central de San Pedro, distrito y provincia del Cusco, Perú.',
      legal: [ { label: 'Privacidad', key: 'privacidad' }, { label: 'Términos', key: 'terminos' }, { label: 'Cookie', key: 'cookies' } ]
    },
    home: {
      heroKicker: 'Mercado histórico · Centro Histórico del Cusco',
      heroTitle: `Mercado Central de San Pedro <span class="text-[#f1b83b]">(Cusco)</span>`,
      heroLead: 'Un mercado de abastos cubierto del barrio de San Pedro: frutas, panes, granos, jugos, comidas y artesanía. Esta guía independiente distingue el mercado de sus puestos y reúne ubicación, horarios de referencia y consejos para planificar la visita.',
      heroCta1: 'Planificar la visita',
      heroCta2: 'Conocer su historia',
      facts: {
        ingreso: { label: 'Ingreso', value: 'Libre' },
        referencia: { label: 'Referencia de visita', value: 'L–S 06:30–18:00', sub: 'Dom. 06:30–16:00 · Google Maps, 22 oct. 2026 UTC. Confirma; cada puesto puede variar.' },
        altitud: { label: 'Altitud', value: '≈ 3,400 m' },
        direccion: { label: 'Dirección', value: 'Ca. Thupaq Amaru 477, Cusco' }
      },
      acerca: {
        eyebrow: 'Acerca del atractivo',
        h2: 'Bienvenido al Mercado Central de San Pedro',
        p1: 'El <strong>Mercado Central de San Pedro</strong>, conocido como <strong>Mercado San Pedro</strong>, es un mercado de abastos del barrio tradicional de San Pedro, en el centro histórico de Cusco, Perú. La guía se refiere al recinto completo y no representa ni recomienda un puesto específico.',
        hierarchy: [ 'Mercado Central de San Pedro', 'Cusco', 'Cusco', 'Perú' ],
        p2: 'El inventario MINCETUR sitúa el mercado frente a la estación de San Pedro y estima unos 700 m a pie desde la <strong>Plaza de Armas</strong>. El tiempo depende de la ruta, el tránsito y las necesidades de cada persona.'
      },
      historia: {
        eyebrow: 'Historia y contexto',
        h2: 'Un mercado moderno dentro de un barrio con siglos de memoria.',
        p1: 'El inventario turístico de MINCETUR ubica el mercado en el barrio tradicional de San Pedro, frente a la estación ferroviaria. Es un espacio de abastecimiento cotidiano, además de una visita cultural.',
        p2: 'Según ese inventario, se inauguró el 7 de junio de 1925 durante la gestión del alcalde Manuel Silvestre Frisancho y es el mercado cerrado de abastos más antiguo del Cusco.',
        noteTitle: 'Importante sobre la autoría arquitectónica',
        noteBody: 'El inventario MINCETUR y PROMPERÚ atribuyen el diseño a Gustave Eiffel. Presentamos esa atribución con sus fuentes; esta guía no ha realizado una investigación de archivo independiente.',
        p3: 'La ficha MINCETUR recoge su declaración como Monumento integrante del Patrimonio Cultural de la Nación mediante la Resolución Viceministerial 0331-2024-VMPCIC/MC. Su valor también reside en las relaciones cotidianas entre comerciantes, productos y compradores.',
        imgInside: 'Comensales y puestos de comida en el interior del Mercado San Pedro de Cusco',
        imgFruit: 'Puesto de frutas y jugos en el Mercado San Pedro de Cusco',
        culturalTitle: 'Lectura cultural',
        culturalBody: 'El valor del mercado está en observar relaciones, productos y ritmos cotidianos, no solo en comprar.'
      },
      queObservar: {
        eyebrow: 'Qué observar',
        h2: 'Una introducción práctica a la despensa de los Andes.',
        cards: [
          [ 'Productos andinos', 'Papas nativas, maíz, quinua, habas, chuño y otros ingredientes que conectan el mercado con los pisos ecológicos de la región.' ],
          [ 'Jugos y frutas', 'Filas de puestos de jugos preparados al momento permiten reconocer frutas locales y productos llegados desde zonas más cálidas del país.' ],
          [ 'Comida cotidiana', 'Caldos, desayunos y platos populares muestran una cocina de mercado orientada tanto a trabajadores locales como a visitantes.' ],
          [ 'Textiles, hierbas y ritualidad', 'Tejidos, plantas medicinales, hojas de coca y objetos de uso simbólico ayudan a entender la continuidad de prácticas andinas.' ]
        ]
      },
      visita: {
        eyebrow: 'Planifica bien',
        h2: 'Cuándo ir y cuánto tiempo quedarse.',
        cards: [
          [ 'Planifica con margen', 'Elige una franja dentro del horario de referencia y confirma con el puesto si buscas un producto o comida en particular. La afluencia y la oferta varían.' ],
          [ 'Tiempo recomendado: 60–90 min', 'Como propuesta de planificación, reserva 60–90 minutos y añade margen para comer o conversar. No es un tiempo de recorrido garantizado.' ],
          [ 'Altura y clima', 'Cusco supera los 3,000 m s. n. m. Avanza despacio si acabas de llegar. El mercado es cubierto, pero las calles exteriores pueden ser frías y lluviosas según la temporada.' ],
          [ 'Dinero y respeto', 'Lleva soles y billetes pequeños. Pide permiso antes de fotografiar personas. Mantén tus pertenencias cerca en zonas de mucha circulación.' ]
        ]
      },
      clima: {
        eyebrow: 'Pronóstico del tiempo',
        h2: 'Tiempo modelado en Cusco y próximos días.',
        lead: 'Consulta los datos modelados de Open-Meteo para la ubicación del mercado. No son una observación de una estación dentro del recinto ni un aviso oficial; revisa la hora del dato y el pronóstico antes de salir.',
        loading: 'Cargando el pronóstico…',
        error: 'No pudimos obtener el pronóstico. Consulta SENAMHI o tu fuente habitual antes de salir.',
        now: 'Dato modelado actual',
        next: 'Próximos días',
        advice: 'Recomendaciones según el clima',
        note: 'Sugerencias generadas a partir del pronóstico; no sustituyen la información oficial de protección civil ni de las autoridades locales.',
        blocks: { travel: '💡 Cómo salir', play: '🗺️ Qué hacer', items: '🎒 Qué llevar', risk: '⚠️ Riesgo' }
      },
      transporte: {
        eyebrow: 'Transporte detallado',
        h2: 'Cómo llegar al Mercado San Pedro.',
        cards: [
          [ 'Desde el aeropuerto', 'Desde el Aeropuerto Internacional Alejandro Velasco Astete, taxi o vehículo por aplicación suele ser la opción más directa. El transporte público urbano también conecta el eje del aeropuerto con el centro; confirma la ruta y el paradero vigentes antes de subir.' ],
          [ 'En autobús urbano', 'Confirma la ruta, el paradero y el sentido de circulación con el operador antes de subir. Esta guía no mantiene un listado verificado de líneas de autobús.' ],
          [ 'En taxi', 'Indica “Mercado de San Pedro” o “Plazoleta San Pedro”. En horas de congestión, puede ser más eficiente bajar a unas cuadras y completar el tramo caminando. Acuerda tarifa cuando corresponda y usa servicios autorizados.' ],
          [ 'A pie y en tren', 'El inventario MINCETUR estima unos 700 m desde la Plaza de Armas (aproximadamente 9 minutos como referencia, sin garantizar accesibilidad ni tiempo). La estación de San Pedro queda frente al mercado; verifica billetes y servicios con el operador ferroviario.' ]
        ],
        note: 'Los tiempos y rutas dependen del tránsito, obras y ajustes operativos. Para conexiones ferroviarias o aeroportuarias, verifica siempre la información del operador antes de viajar.'
      },
      servicios: {
        eyebrow: 'Servicios útiles, sin recomendaciones comerciales',
        h2: 'Lo que conviene saber alrededor del mercado.',
        cards: [
          [ 'WC y lavamanos', 'Pregunta a la administración por la ubicación, disponibilidad, accesibilidad y posibles cobros de los baños. La ficha MINCETUR de 2025 señalaba la necesidad de mejorar los servicios higiénicos; no garantizamos sus condiciones actuales.' ],
          [ 'Estacionamiento', 'El centro histórico tiene calles estrechas, regulación de tránsito y oferta limitada de estacionamiento. Si llegas en auto, prioriza estacionamientos formales en el perímetro y continúa a pie.' ],
          [ 'Alimentación', 'Dentro del mercado hay sectores de comida, panes, jugos y productos frescos. Para seguridad alimentaria, elige puestos con alta rotación, superficies limpias y alimentos bien cocidos.' ],
          [ 'Alojamiento', 'El centro de Cusco dispone de múltiples categorías de alojamiento. Compara ubicación, accesibilidad, políticas y registros en fuentes oficiales o plataformas independientes; esta guía no recomienda establecimientos concretos.' ],
          [ 'Compras y abarrotes', 'El propio mercado funciona como gran centro de abasto. En calles vecinas encontrarás tiendas y comercios de conveniencia; evita comprar productos regulados o de origen dudoso.' ],
          [ 'Combustible y carga', 'No se ha verificado un punto de combustible o recarga junto al mercado. Si lo necesitas, consulta ubicación, disponibilidad y horario directamente antes del viaje.' ]
        ]
      },
      comer: {
        eyebrow: 'Comer en los alrededores',
        h2: 'Sabores que puedes buscar, no locales que debas elegir.',
        lead: 'Como guía sin fines de lucro, recomendamos categorías y criterios, no negocios concretos. En el área de San Pedro y el centro histórico puedes encontrar cocina cusqueña, menús del día, panadería tradicional, juguerías y propuestas de cocina peruana contemporánea.',
        tags: [ 'caldo y sopas', 'choclo y queso', 'tamales', 'pan chuta', 'jugos de fruta', 'quinua y granos andinos', 'platos de mercado' ],
        cercaTitle: 'Cerca, a pie',
        cercaItems: [
          { strong: 'Plazoleta e Iglesia de San Pedro:', text: 'el frente urbano inmediato del mercado y una clave para leer el barrio.' },
          { strong: 'Arco y calle Santa Clara:', text: 'corredor histórico hacia el centro, con arquitectura republicana y colonial.' },
          { strong: 'Plaza San Francisco:', text: 'gran espacio público entre San Pedro y el núcleo monumental.' },
          { strong: 'Plaza de Armas y entorno monumental:', text: 'centro cívico y simbólico del Cusco histórico.' }
        ]
      },
      entrada: {
        cards: [
          { eyebrow: 'Entrada y gastos', title: 'Sin boleto de acceso', body: 'El inventario MINCETUR indica ingreso libre al mercado. Los consumos y las compras se pagan en cada puesto; confirma precios y condiciones antes de pedir. No se garantizan servicios ni disponibilidad.' },
          { eyebrow: 'Compra responsable', title: 'Pregunta, compara, respeta.', body: 'Consulta el precio antes de pedir, no manipules alimentos sin permiso y evita presionar para fotografiar. Si compras artesanía, pregunta por materiales y procedencia.' },
          { eyebrow: 'Seguridad práctica', title: 'Atención a tus pertenencias.', body: 'Como en cualquier mercado concurrido, usa bolso cerrado, evita exhibir objetos de valor y mantén especial atención al cruzar calles alrededor del recinto.' }
        ]
      },
      ubicacion: {
        eyebrow: 'Ubicación',
        h2: 'Mercado Central de San Pedro',
        addr: 'Ca. Thupaq Amaru 477, Cusco 08002, Perú',
        mapsCta: 'Abrir en Google Maps',
        govtText: 'Consulta la ficha del mercado en',
        govtName: 'Inventario Turístico de MINCETUR'
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        h2: 'Antes de ir',
        items: [
          [ '¿Dónde está ubicado el Mercado Central de San Pedro?', 'Está en Ca. Thupaq Amaru 477, Cusco 08002, Perú, según la ficha de Google Maps consultada el 22 de octubre de 2026 (UTC). El inventario MINCETUR lo ubica frente a la estación de San Pedro.' ],
          [ '¿Qué es el Mercado de San Pedro?', 'Mercado San Pedro es la denominación habitual del Mercado Central de San Pedro, el mercado de abastos cubierto más antiguo del Cusco, en el barrio tradicional de San Pedro.' ],
          [ '¿La entrada al Mercado San Pedro tiene costo?', 'El inventario MINCETUR indica ingreso libre al recinto. Alimentos, artesanías y otros productos se pagan por separado en cada puesto; confirma las condiciones actuales.' ],
          [ '¿Cuál es el mejor momento para visitarlo?', 'Elige una hora dentro de las referencias publicadas y vuelve a confirmar si buscas un puesto o producto concreto. No hay una franja con afluencia u oferta garantizadas.' ],
          [ '¿Cuánto tiempo conviene quedarse?', 'Reserva entre 60 y 90 minutos para recorrer con calma los pasillos; suma más tiempo si piensas sentarte a comer o conversar con comerciantes.' ],
          [ '¿Se puede fotografiar dentro?', 'Pide permiso antes de fotografiar a personas o puestos y respeta cualquier negativa o indicación de la administración.' ],
          [ '¿Es recomendable llevar efectivo?', 'Sí. En un mercado tradicional muchos pagos siguen realizándose en soles y no todos los puestos aceptan tarjeta. Llevar billetes de baja denominación facilita compras pequeñas.' ],
          [ '¿Hay baños y servicios básicos?', 'Confirma con la administración la ubicación, disponibilidad, accesibilidad y cobros de los baños. El inventario MINCETUR de 2025 señalaba mejoras pendientes; esta guía no certifica su estado actual.' ],
          [ '¿Está cerca del centro histórico?', 'Sí. Se encuentra en el barrio tradicional de San Pedro, dentro del Centro Histórico del Cusco y a una caminata corta del núcleo monumental.' ],
          [ '¿Cómo afecta la altura?', 'El mercado está en Cusco, a más de 3,000 m s. n. m. Camina a ritmo tranquilo, hidrátate y evita sobreesfuerzos si aún no te has aclimatado.' ]
        ]
      },
      fuentes: {
        h2: 'Fuentes y criterio editorial',
        lead: 'Revisión de fuentes: 22 de octubre de 2026 (UTC). La ficha MINCETUR y PROMPERÚ respaldan la identidad y el contexto del mercado. Los horarios de sus páginas y de Google Maps no coinciden; se detallan abajo.',
        photos: 'Fotografías: fachada — Ordzonhyd Rudyard Tarco Palomino / Wikimedia Commons (CC BY 4.0); jugos — sergejf / Wikimedia Commons (CC BY 2.0); interior — Ashim D’Silva / Unsplash, archivo en Wikimedia Commons (CC0).'
      }
    },
    seasonal: {
      eyebrow: 'Cuándo conviene ir',
      h2: 'Estrategia de visita por temporada.',
      lead: 'Orientación regional de PROMPERÚ, publicada el 19 de noviembre de 2021: época más seca de abril a septiembre y lluviosa de octubre a marzo. No son normales climáticas de 30 años ni un pronóstico actual del mercado.',
      cols: [ 'Época', 'Meses', 'Clima típico', 'Día / noche', 'Para visitar el mercado', 'Recomendaciones' ],
      rows: [
        { epoca: 'Temporada seca', epocaSub: 'invierno austral', meses: 'abril – septiembre', clima: 'Días mayormente despejados y soleados; cielos limpios, mejor visibilidad para fotografiar. Lluvia escasa.', diaNoche: 'Consulta el pronóstico', mercado: 'La lluvia sigue siendo posible. Decide los tramos exteriores según el pronóstico del día.', recom: 'Abrígado para la mañana y la noche. Sol fuerte a la altura: protector solar y gorra.' },
        { epoca: 'Temporada de lluvias', epocaSub: 'verano austral', meses: 'octubre – marzo', clima: 'Mayor probabilidad estacional de lluvia; no implica que llueva a una hora fija cada día.', diaNoche: 'Sin rango verificado aquí', mercado: 'El recinto es cubierto, pero los trayectos exteriores siguen expuestos. Comprueba el pronóstico antes de salir.', recom: 'Calzado antideslizante, paraguas o impermeable y bolsa resistente para compras.' },
        { epoca: 'Meses de transición', epocaSub: '', meses: 'abril, octubre', clima: 'Los límites entre épocas son orientativos. No permiten predecir la afluencia ni el tiempo de una visita concreta.', diaNoche: 'Tiempo variable', mercado: 'Equilibrio entre sol y lluvia; conviene llevar ambas opciones de ropa.', recom: 'Ropa por capas: mañana fría, mediodía templado.' }
      ],
      noteTitle: 'Lectura de altitud y clima',
      noteBody: 'Cusco se encuentra a cerca de 3,400 m s. n. m. La radiación solar es intensa durante el día y las noches pueden ser frías todo el año. La diferencia entre el clima del mercado cubierto y las calles exteriores es notable: planea tus caminatas con margen para el sol, la lluvia y el frío.'
    },
    itineraries: {
      eyebrow: 'Cómo recorrerlo',
      h2: 'Itinerarios según el tipo de visitante.',
      lead: 'El Mercado San Pedro se recorre a pie y combina bien con los espacios históricos del barrio de San Pedro y el núcleo monumental de Cusco. Estas propuestas son orientativas y se adaptan al ritmo de cada persona.',
      cards: [
        { eyebrow: 'Familias con niños', title: 'Recorrido corto y con descansos', items: [ 'Comprueba el horario del mercado y los puestos que te interesan; la afluencia varía.', 'Prioriza los sectores de frutas, jugos y panes: actividades visuales y de prueba.', 'Planifica una parada para comer dentro del mercado (platos cocidos, caldos).', 'Lleva efectivo en pequeño y una muda si llueve.' ], time: 'Tiempo sugerido: 60–90 min' },
        { eyebrow: 'Fotografía y naturaleza', title: 'Luz temprana y detalle', items: [ 'Observa la luz disponible y pide permiso antes de fotografiar personas o puestos.', 'Busca texturas: granos andinos, hierbas, frutas y el juego de luces en la cubierta.', 'Busca un encuadre desde zonas públicas permitidas, sin obstruir el paso.', 'Combina con la Plaza de Armas para planos urbanos más amplios.' ], time: 'Tiempo sugerido: 90–120 min' },
        { eyebrow: 'Movilidad reducida / bajo esfuerzo', title: 'Pausado y sin prisa', items: [ 'Confirma con la administración la entrada adecuada, escalones y anchura de pasillos antes de ir. No se ha verificado una ruta sin barreras.', 'Confirma lugares de descanso y baños accesibles; acuerda un punto de encuentro.', 'Usa pasillos principales y evita cargar bultos pesados.', 'Hidrátate y avanza despacio por la altura.' ], time: 'Tiempo sugerido: 45–75 min' }
      ],
      rutasTitle: 'Rutas sugeridas',
      rutas: [
        { eyebrow: 'Medio día', title: 'Mercado + núcleo de San Pedro', items: [ 'Recorrido de productos andinos y jugos en el Mercado San Pedro (60–90 min).', 'Para comer o tomar un jugo dentro del mercado.', 'Salida hacia la Plazoleta e Iglesia de San Pedro y su frente urbano.', 'Si continúas por Santa Clara, comprueba antes el recorrido y las condiciones de las calles.' ], time: 'Total: unas 3–4 h, a pie' },
        { eyebrow: 'Día completo', title: 'Mercado + centro monumental', items: [ 'Mañana en el Mercado San Pedro y la Plazoleta e Iglesia de San Pedro (90–120 min).', 'Considera Santa Clara como continuación opcional, tras comprobar el recorrido.', 'Almuerzo en el entorno del centro histórico (cocina cusqueña, menús del día).', 'Tarde en la Plaza de Armas, catedral y calles aledañas.', 'Planifica el regreso según transporte, condiciones y horario confirmado.' ], time: 'Total: unas 6–7 h, a pie y con pausas' }
      ],
      note: 'Propuestas de planificación, no recorridos guiados ni garantías de acceso. Los lugares del entorno son visitas separadas: verifica sus horarios, entradas, rutas y accesibilidad. Adapta tiempos y descansos al grupo.'
    },
    responsibility: {
      eyebrow: 'Ciencia y visita responsable',
      h2: 'Entender el lugar, cuidarlo al visitarlo.',
      lead: 'El Mercado Central de San Pedro es un espacio de abasto vivo, no un museo. Conocer un poco de su contexto físico y social ayuda a una visita más respetuosa y segura.',
      cards: [
        { title: 'Altura y clima andino', body: 'Cusco está a cerca de 3,400 m s. n. m. La presión del aire es menor y el esfuerzo físico se siente más. La radiación ultravioleta es alta durante el día, incluso con frío. Camina despacio los primeros días, bebe agua y usa protección solar.' },
        { title: 'Ecología de la despensa', body: 'El mercado concentra productos de distintos pisos ecológicos: papas nativas, maíz, quinua y tubérculos de zonas altas, y frutas llegadas desde valles más cálidos. Observar esa diversidad es una forma directa de entender la agricultura andina.' },
        { title: 'Planificación personal', body: 'Esta guía no evalúa la aptitud para visitar lugares de altura. Adapta el recorrido a tus necesidades y consulta a un profesional sanitario si tienes dudas de salud.' },
        { title: 'Comprar con respeto', body: 'Pregunta el precio antes de pedir, no manipules alimentos sin permiso y evita regatear de forma agresiva. Si compras artesanía, pregunta por materiales y procedencia: ayuda a valorar el trabajo de quienes venden.' },
        { title: 'Menos residuos', body: 'Lleva una bolsa reutilizable y, si es posible, una botella. El mercado genera mucha basura orgánica y plástica; tu ejemplo reduce el impacto en un espacio tan concurrido.' },
        { title: 'Seguridad práctica', body: 'Como en cualquier mercado con afluencia, usa bolso cerrado, no exhibas objetos de valor y mantén atención al cruzar calles. La altura y el sol también son factores de riesgo: hidrátate y usa gorra.' }
      ],
      note: 'Esta guía es informativa y sin fines de lucro. No sustituye la información oficial de las autoridades locales ni la de los operadores de transporte o servicios.'
    },
    sub: {
      horario: {
        eyebrow: 'Horario y cómo llegar',
        h1: 'Horario, ubicación y cómo llegar al Mercado San Pedro',
        intro: 'Mercado de abastos cubierto del barrio de San Pedro, frente a la estación ferroviaria. Los horarios de referencia publicados difieren; no equivalen al horario de cada puesto.',
        facts: [
          { label: 'Horario de referencia', value: 'L–S 06:30–18:00', sub: 'Dom. 06:30–16:00 · Maps, 22 oct. 2026 UTC; vuelve a confirmar.' },
          { label: 'Entrada', value: 'Libre', sub: 'Según MINCETUR; compras y consumos aparte.' },
          { label: 'Altitud', value: '≈ 3,400 m' },
          { label: 'Dirección', value: 'Ca. Thupaq Amaru 477, Cusco 08002' }
        ],
        sections: [
          { id: 'mejor-momento', eyebrow: 'Cuándo ir', h2: 'Elegir una hora', lead: 'Consulta las referencias de horario y confirma con el puesto si quieres una comida o producto concreto.', body: [ 'Entre media mañana y primeras horas de la tarde suele ser práctico si piensas sentarte a comer dentro del mercado.', 'Evita ir con prisa: los pasillos pueden estar concurridos, sobre todo en temporada alta.' ] },
          { id: 'como-llegar', eyebrow: 'Cómo llegar', h2: 'Opciones para llegar', cards: [ [ 'Desde el aeropuerto', 'Desde el Aeropuerto Internacional Alejandro Velasco Astete, taxi o aplicación suele ser lo más directo. El transporte público urbano también conecta con el centro.' ], [ 'En autobús urbano', 'Confirma con el operador la línea, el paradero y el sentido vigentes. No se han verificado líneas concretas en esta guía.' ], [ 'A pie', 'MINCETUR estima aproximadamente 700 m desde la Plaza de Armas y 9 minutos a pie como referencia, sin garantizar tiempo ni accesibilidad.' ], [ 'En tren', 'La estación ferroviaria de San Pedro queda frente al entorno del mercado y sirve de referencia.' ] ] },
          { id: 'altura', eyebrow: 'Altura y clima', h2: 'Visita con calma a la altura', body: [ 'Cusco supera los 3,000 m s. n. m. Camina despacio si acabas de llegar.', 'El mercado es cubierto, pero las calles exteriores pueden estar frías y lluviosas según la temporada.' ] }
        ],
        faqTitle: 'Antes de ir',
        faqEyebrow: 'Preguntas frecuentes',
        faq: [
          [ '¿A qué hora abre el Mercado San Pedro?', 'Google Maps, consultado el 22 de octubre de 2026 (UTC), indica lunes a sábado 06:30–18:00 y domingo 06:30–16:00. MINCETUR y PROMPERÚ publican otras referencias. Confirma antes de ir; cada puesto puede variar.' ],
          [ '¿La entrada tiene costo?', 'No. El ingreso es libre; se paga lo que se consume o compra en cada puesto.' ],
          [ '¿Está lejos de la Plaza de Armas?', 'El inventario MINCETUR estima unos 700 m a pie desde la Plaza de Armas. El tiempo y la accesibilidad dependen del trayecto y de cada persona.' ],
          [ '¿Cómo llego desde el aeropuerto?', 'En taxi o aplicación suele ser lo más directo; el transporte público urbano también conecta el eje del aeropuerto con el centro.' ]
        ]
      },
      comida: {
        eyebrow: 'Comida y compras',
        h1: 'Qué comer y qué comprar en el Mercado San Pedro',
        intro: 'El mercado reúne la despensa andina y la cocina cusqueña de todos los días: jugos, caldos, panes, granos y artesanía. Recomendamos categorías y criterios, no negocios concretos.',
        facts: [
          { label: 'Para comer', value: 'Jugos, caldos, pan' },
          { label: 'Para comprar', value: 'Artesanía, granos, hierbas' },
          { label: 'Pago', value: 'Efectivo preferido', sub: 'Lleva soles y billetes pequeños.' },
          { label: 'Estilo', value: 'Sin recomendaciones de marca' }
        ],
        sections: [
          { id: 'comer', eyebrow: 'Comer dentro', h2: 'Qué puedes buscar para comer', cards: [ [ 'Jugos y batidos', 'Filas de puestos preparan jugos al momento con frutas locales y productos llegados de zonas más cálidas.' ], [ 'Caldo y sopas', 'Caldos y sopas calientes son parte de la cocina de mercado, orientada a trabajadores y visitantes.' ], [ 'Pan y repostería', 'Pan chuta y panadería tradicional cusqueña suelen estar presentes en los sectores de pan.' ], [ 'Platos de mercado', 'Platos populares y menús del día muestran la cocina cotidiana de la región.' ] ] },
          { id: 'comprar', eyebrow: 'Comprar', h2: 'Qué llevar de recuerdo', cards: [ [ 'Textiles de alpaca', 'Tejidos y prendas de fibra de alpaca; pregunta por materiales y procedencia.' ], [ 'Granos andinos', 'Papas nativas, maíz, quinua y chuño conectan con la agricultura de la región.' ], [ 'Hierbas y coca', 'Las hierbas y hojas se venden como productos del mercado, no como recomendación médica de esta guía. Comprueba las restricciones aplicables antes de transportar productos.' ], [ 'Artesanía y objetos', 'Objetos de uso simbólico y artesanía local ayudan a entender la continuidad cultural.' ] ] },
          { id: 'consejos', eyebrow: 'Consejos', h2: 'Comprar con respeto', body: [ 'Consulta el precio antes de pedir y compara entre puestos.', 'No manipules alimentos sin permiso y evita presionar para fotografiar.', 'Lleva una bolsa reutilizable para reducir residuos.' ] }
        ],
        faqTitle: 'Dudas frecuentes',
        faqEyebrow: 'Preguntas frecuentes',
        faq: [
          [ '¿Se puede comer dentro del mercado?', 'Sí. Hay sectores de comida, panes y jugos; elige puestos con alta rotación y alimentos bien cocidos.' ],
          [ '¿Aceptan tarjeta?', 'Muchos pagos siguen en efectivo. Lleva soles y billetes pequeños para compras menores.' ],
          [ '¿Qué productos son típicos?', 'Papas nativas, maíz, quinua, chuño, frutas, pan chuta, caldos y artesanía de alpaca.' ],
          [ '¿Se regatea?', 'Evita regatear de forma agresiva. Pregunta el precio antes de pedir y valora el trabajo de quien vende.' ]
        ]
      },
      seguridad: {
        eyebrow: 'Seguridad',
        h1: 'Consejos de seguridad para visitar el Mercado San Pedro',
        intro: 'Como cualquier mercado concurrido, conviene precaución con pertenencias y con el tránsito en las calles aledañas. Aquí van recomendaciones prácticas.',
        facts: [
          { label: 'Pertenencias', value: 'Bolso cerrado' },
          { label: 'Valor', value: 'No exhibir' },
          { label: 'Altura', value: 'Camina despacio' },
          { label: 'Calles', value: 'Cuidado al cruzar' }
        ],
        sections: [
          { id: 'pertenencias', eyebrow: 'Dentro del mercado', h2: 'Cuida tus pertenencias', body: [ 'Usa un bolso cerrado y llévalo al frente en zonas de mucha circulación.', 'No exhibas objetos de valor (cámaras costosas, relojes, billeteras a la vista).', 'Mantén especial atención al cruzar calles alrededor del recinto.' ] },
          { id: 'altura', eyebrow: 'Altura y sol', h2: 'Factores de riesgo silenciosos', cards: [ [ 'Altura', 'Cusco está a más de 3,000 m s. n. m. La altura cansa y deshidrata; camina despacio y bebe agua.' ], [ 'Sol', 'La radiación ultravioleta es alta durante el día, incluso con frío. Usa protector solar y gorra.' ], [ 'Lluvia', 'Las calles exteriores pueden estar resbalosas; calzado antideslizante ayuda.' ] ] },
          { id: 'transito', eyebrow: 'Alrededores', h2: 'Tránsito y calles', body: [ 'El centro histórico tiene calles estrechas y mucho tránsito peatonal.', 'Cruza por donde corresponde y evita distraerte con el teléfono al cruzar.', 'Si llegas en auto, prefiere estacionamientos formales en el perímetro y continúa a pie.' ] }
        ],
        faqTitle: 'Seguridad',
        faqEyebrow: 'Preguntas frecuentes',
        faq: [
          [ '¿Es seguro el Mercado San Pedro?', 'Es un mercado concurrido; esta guía no garantiza la seguridad de una visita. Cuida tus pertenencias, presta atención al tránsito y sigue indicaciones locales.' ],
          [ '¿Hay que tener cuidado con la altura?', 'Sí. Cusco supera los 3,000 m s. n. m.; camina despacio, hidrátate y evita sobreesfuerzos al llegar.' ],
          [ '¿Se aceptan tarjetas?', 'Muchos puestos solo efectivo; lleva soles y billetes pequeños.' ],
          [ '¿Qué hago si llueve?', 'El mercado es cubierto y protege de la lluvia; usa calzado antideslizante en las calles exteriores.' ]
        ]
      }
    },
    legal: {
      privacidad: {
        eyebrow: 'Información legal',
        h1: 'Política de privacidad',
        updated: 'Última actualización: 22 de octubre de 2026',
        intro: 'Esta guía cultural es un proyecto informativo independiente y sin fines de lucro. Aplicamos el principio de minimización de datos: solo tratamos la información necesaria para operar, proteger y mejorar el sitio.',
        blocks: [
          { h2: 'Información que podemos recopilar', items: [ { type: 'ul', items: [ 'Datos técnicos de navegación, como dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha aproximada de acceso y datos de diagnóstico.', 'Cookies o tecnologías similares estrictamente necesarias para recordar preferencias de privacidad y, únicamente si usted lo autoriza, datos analíticos.', 'Esta guía no dispone de cuentas, reservas ni formulario o correo de contacto propio.' ] } ] },
          { h2: 'Cómo utilizamos la información', items: [ { type: 'ul', items: [ 'Mejorar el contenido, la accesibilidad y la experiencia de uso.', 'Analizar tendencias generales de tráfico cuando exista consentimiento para analítica.', 'Mostrar información y el pronóstico solicitado en la página.', 'Prevenir abuso, resolver incidencias técnicas y cumplir obligaciones legales.' ] } ] },
          { h2: 'Base jurídica y consentimiento', items: [ { type: 'p', text: 'Las cookies necesarias se emplean para funciones esenciales. Las cookies analíticas no se activan por defecto: requieren una elección afirmativa en la página de configuración de cookies. Cuando el tratamiento se base en consentimiento, usted puede retirarlo en cualquier momento.' } ] },
          { h2: 'Servicios de terceros', items: [ { type: 'p', text: 'El mapa incrustado conecta con Google al cargarse. Google Analytics se solicita solo cuando la opción de analítica es efectiva. El alojamiento de Cloudflare recibe las solicitudes del sitio y sus datos técnicos. El pronóstico se solicita al mismo sitio, que consulta Open-Meteo en el servidor; las fotos se sirven desde este sitio. El control de Google Analytics no controla el mapa ni los registros técnicos del alojamiento.' } ] },
          { h2: 'Conservación y seguridad', items: [ { type: 'p', text: 'No mantenemos perfiles publicitarios propios ni una base de datos de usuarios. Los datos técnicos conservados por proveedores de infraestructura o analítica se rigen por sus plazos y controles. Aplicamos medidas razonables para reducir recopilación innecesaria y exposición de datos.' } ] },
          { h2: 'Sus derechos', items: [ { type: 'p', text: 'Según la normativa aplicable —incluido el Reglamento General de Protección de Datos (GDPR) cuando corresponda— usted puede solicitar acceso, rectificación, supresión, limitación u oposición al tratamiento y, cuando proceda, portabilidad. También puede retirar su consentimiento y presentar una reclamación ante la autoridad de control competente.' } ] },
          { h2: 'Menores', items: [ { type: 'p', text: 'Este sitio no está diseñado para recopilar conscientemente datos personales de menores. Si detectamos información de este tipo obtenida de forma indebida, procuraremos eliminarla.' } ] },
          { h2: 'Cambios en esta política', items: [ { type: 'p', text: 'Podemos actualizar esta política para reflejar cambios técnicos, legales o editoriales. La versión publicada en esta página será la aplicable.' } ] }
        ]
      },
      terminos: {
        eyebrow: 'Información legal',
        h1: 'Términos de servicio',
        updated: 'Última actualización: 22 de octubre de 2026',
        intro: 'Al acceder y utilizar esta guía, usted acepta estos términos. Si no está de acuerdo, puede dejar de utilizar el sitio.',
        blocks: [
          { h2: 'Naturaleza del proyecto', items: [ { type: 'p', text: 'Somos una guía turística y cultural independiente, sin fines de lucro y de carácter divulgativo. No representamos al Mercado Central de San Pedro, a la Municipalidad Provincial del Cusco, al Gobierno Regional del Cusco, a MINCETUR ni a operadores comerciales.' } ] },
          { h2: 'Uso del contenido', items: [ { type: 'p', text: 'El contenido editorial se ofrece únicamente con fines informativos y educativos. No constituye asesoramiento profesional, sanitario, jurídico, financiero ni una garantía de disponibilidad de servicios turísticos.' } ] },
          { h2: 'Exactitud y actualidad', items: [ { type: 'p', text: 'Procuramos contrastar la información con fuentes públicas y confiables, pero no podemos garantizar que horarios, rutas, precios, condiciones de acceso, servicios o normativas permanezcan sin cambios. Antes de desplazarse, verifique información crítica en fuentes oficiales o con el operador correspondiente.' } ] },
          { h2: 'Neutralidad comercial', items: [ { type: 'p', text: 'Esta guía no publica recomendaciones comerciales pagadas ni posiciona negocios específicos en los apartados de servicios. Cuando describimos alimentación, alojamiento, estacionamiento u otras necesidades, lo hacemos por categorías y criterios generales.' } ] },
          { h2: 'Propiedad intelectual', items: [ { type: 'p', text: 'El diseño, la organización y los textos originales del sitio están protegidos por la legislación aplicable. Las fotografías pertenecen a sus autores originales y se utilizan según las licencias o condiciones indicadas en los créditos. Google Maps y sus datos se muestran conforme a los términos de Google.' } ] },
          { h2: 'Enlaces y servicios externos', items: [ { type: 'p', text: 'Los enlaces a mapas, organismos públicos u otras fuentes externas se proporcionan como referencia. No controlamos el contenido, la disponibilidad ni las prácticas de privacidad de esos sitios.' } ] },
          { h2: 'Limitación de responsabilidad', items: [ { type: 'p', text: 'El sitio se ofrece “tal cual”, sin garantías expresas o implícitas. En la medida permitida por la ley, no asumimos responsabilidad por pérdidas, daños, retrasos, cambios de itinerario o decisiones de viaje basadas exclusivamente en esta guía.' } ] },
          { h2: 'Uso aceptable', items: [ { type: 'p', text: 'No utilice el sitio para interferir con su funcionamiento, intentar acceder de forma no autorizada a sistemas, distribuir código malicioso o infringir derechos de terceros.' } ] },
          { h2: 'Modificaciones', items: [ { type: 'p', text: 'Podemos modificar estos términos cuando sea necesario. La versión vigente será la publicada en esta página.' } ] }
        ]
      },
      cookies: {
        eyebrow: 'Privacidad y preferencias',
        h1: 'Configuración de cookies',
        updated: 'Última actualización: 22 de octubre de 2026',
        intro: 'Usamos cookies y almacenamiento local para funciones esenciales y, si usted lo autoriza, para comprender de forma agregada cómo se utiliza el sitio. Puede cambiar su elección en cualquier momento desde esta página.',
        blocks: [
          { h2: 'Gestión del consentimiento', items: [ { type: 'p', text: 'Puedes permitir o rechazar Google Analytics aquí; el cambio se aplica a las solicitudes futuras de esta página, sin deshacer datos ya enviados. Si el navegador impide guardar o leer la elección, la analítica queda desactivada en esta página y se informa del alcance de la negativa. No se garantiza su propagación a otras pestañas o navegadores. Borrar los datos del sitio elimina las elecciones guardadas.' } ] }
        ],
        form: {
          necessaryTitle: 'Almacenamiento de la elección',
          necessaryBody: 'La elección se guarda en este navegador. Una negativa también usa almacenamiento de sesión y una marca de pestaña si están disponibles. No se necesita aceptar analítica para leer la guía.',
          analyticsTitle: 'Cookies analíticas',
          analyticsBody: 'Permiten activar Google Analytics para obtener estadísticas de uso agregadas. Se mantienen desactivadas hasta que usted las acepte.',
          prefsTitle: 'Cookies de preferencias',
          prefsBody: 'El idioma se elige mediante los enlaces Español/English y la URL; no se guarda una preferencia de idioma.',
          marketingTitle: 'Cookies de marketing',
          marketingBody: 'Este proyecto no utiliza publicidad personalizada ni cookies de marketing. Esta categoría permanece inactiva.',
          save: 'Guardar preferencias',
          reject: 'Rechazar lo no esencial',
          saved: 'Google Analytics: elección guardada.',
          rejected: 'Se han rechazado todas las cookies no esenciales.',
          prefsNote: 'El idioma se elige mediante enlaces, sin una cookie de idioma.',
          consentTitle: 'Gestión del consentimiento',
          consentBody: 'La preferencia se guarda en el almacenamiento local de su navegador con la clave msp-cookie-preferences.',
          key: 'msp-cookie-preferences'
        }
      }
    }
  },
  en: {
    nav: { home: 'Home', horario: 'Hours & getting there', comida: 'Food & shopping', seguridad: 'Safety', maps: 'Open map' },
    footer: {
      disclaimer1: 'This is an independent, non-profit visitor information project. It is not affiliated with the Provincial Municipality of Cusco, government agencies, or official organizations.',
      disclaimer2: 'Sources checked 22 October 2026 (UTC): MINCETUR inventory, PROMPERÚ and the Google Maps listing. Published hours differ; consult the sources and check again before visiting.',
      copyright: '© 2026 Cultural Guide to the San Pedro Market of Cusco. All rights reserved.',
      sub: 'Unofficial guide to the Mercado Central de San Pedro, Cusco district and province, Peru.',
      legal: [ { label: 'Privacy', key: 'privacidad' }, { label: 'Terms', key: 'terminos' }, { label: 'Cookies', key: 'cookies' } ]
    },
    home: {
      heroKicker: 'Historic market · Historic Centre of Cusco',
      heroTitle: `Mercado Central de San Pedro <span class="text-[#f1b83b]">(Cusco)</span>`,
      heroLead: 'A covered food market in the San Pedro neighbourhood, with fruit, bread, grains, juices, meals and handicrafts. This independent guide distinguishes the market from its individual stalls and brings together location, reference hours and planning tips.',
      heroCta1: 'Plan your visit',
      heroCta2: 'Discover its history',
      facts: {
        ingreso: { label: 'Entry', value: 'Free' },
        referencia: { label: 'Reference hours', value: 'Mon–Sat 06:30–18:00', sub: 'Sun 06:30–16:00 · Google Maps, 22 Oct 2026 UTC. Recheck; individual stalls may vary.' },
        altitud: { label: 'Altitude', value: '≈ 3,400 m' },
        direccion: { label: 'Address', value: 'Ca. Thupaq Amaru 477, Cusco' }
      },
      acerca: {
        eyebrow: 'About the attraction',
        h2: 'Welcome to the Mercado Central de San Pedro',
        p1: 'The <strong>Mercado Central de San Pedro</strong>, commonly called <strong>Mercado San Pedro</strong>, is a food market in the traditional San Pedro neighbourhood of Cusco, Peru. This guide covers the whole market and does not represent or endorse an individual stall.',
        hierarchy: [ 'Mercado Central de San Pedro', 'Cusco', 'Cusco', 'Peru' ],
        p2: 'The MINCETUR inventory places the market opposite San Pedro station and estimates about 700 m on foot from the <strong>Plaza de Armas</strong>. Time depends on the route, traffic and individual access needs.'
      },
      historia: {
        eyebrow: 'History and context',
        h2: 'A modern market in a neighbourhood with centuries of memory.',
        p1: 'The MINCETUR tourism inventory places the market in the traditional San Pedro neighbourhood, opposite the railway station. It remains an everyday food market as well as a cultural visit.',
        p2: 'According to that inventory, it opened on 7 June 1925 under mayor Manuel Silvestre Frisancho and is Cusco’s oldest enclosed food market.',
        noteTitle: 'On the architectural authorship',
        noteBody: 'The MINCETUR inventory and PROMPERÚ attribute the design to Gustave Eiffel. We present this as a sourced attribution; this guide has not carried out independent archival research.',
        p3: 'The MINCETUR record cites its declaration as a monument forming part of Peru’s national cultural heritage under Vice-Ministerial Resolution 0331-2024-VMPCIC/MC. Its value also lies in everyday relationships between traders, products and shoppers.',
        imgInside: 'Diners and food counters inside San Pedro Market in Cusco',
        imgFruit: 'Fruit and juice stand at the Mercado San Pedro in Cusco',
        culturalTitle: 'Cultural reading',
        culturalBody: 'The market’s value lies in observing relationships, products and daily rhythms — not only in buying.'
      },
      queObservar: {
        eyebrow: 'What to observe',
        h2: 'A practical introduction to the Andean pantry.',
        cards: [
          [ 'Andean products', 'Native potatoes, corn, quinoa, fava beans, chuño and other ingredients connect the market to the region’s ecological floors.' ],
          [ 'Juices and fruit', 'Rows of made-to-order juice stands let you recognise local fruits and produce brought from warmer valleys.' ],
          [ 'Everyday food', 'Broths, breakfasts and popular dishes show a market cuisine aimed at both local workers and visitors.' ],
          [ 'Textiles, herbs and ritual', 'Weavings, medicinal plants, coca leaves and symbolic objects help explain the continuity of Andean practices.' ]
        ]
      },
      visita: {
        eyebrow: 'Plan ahead',
        h2: 'When to go and how long to stay.',
        cards: [
          [ 'Leave time to explore', 'Choose a time within the reference hours and check with the stall if you want a particular product or meal. Crowds and availability vary.' ],
          [ 'Recommended time: 60–90 min', 'As a planning suggestion, allow 60–90 minutes and extra time for a meal or conversation. This is not a guaranteed walking time.' ],
          [ 'Altitude and weather', 'Cusco is above 3,000 m. Walk slowly if you just arrived. The market is covered, but outside streets can be cold and rainy by season.' ],
          [ 'Money and respect', 'Bring soles and small bills. Ask before photographing people. Keep your belongings close in busy areas.' ]
        ]
      },
      clima: {
        eyebrow: 'Weather forecast',
        h2: 'Modelled weather in Cusco and the days ahead.',
        lead: 'Check Open-Meteo model data for the market location. These are not measurements from a station inside the market or official warnings; check the data time and forecast before setting out.',
        loading: 'Loading the forecast…',
        error: 'We could not load the forecast. Check SENAMHI or your usual forecast source before setting out.',
        now: 'Current model data',
        next: 'Next days',
        advice: 'Recommendations by weather',
        note: 'Suggestions generated from the forecast; they do not replace official civil-protection or local-authority information.',
        blocks: { travel: '💡 Getting around', play: '🗺️ What to do', items: '🎒 What to bring', risk: '⚠️ Risk' }
      },
      transporte: {
        eyebrow: 'Getting there in detail',
        h2: 'How to reach the Mercado San Pedro.',
        cards: [
          [ 'From the airport', 'From Alejandro Velasco Astete International Airport, a taxi or ride app is usually the most direct option. Urban public transport also connects the airport axis with the centre; confirm the current route and stop before boarding.' ],
          [ 'By city bus', 'Confirm the route, stop and direction with the operator before boarding. This guide does not maintain a verified list of bus services.' ],
          [ 'By taxi', 'Say “Mercado de San Pedro” or “Plazoleta San Pedro”. In congested hours, it can be more efficient to get off a few blocks away and walk the rest. Agree the fare when appropriate and use authorised services.' ],
          [ 'On foot and by train', 'The MINCETUR inventory estimates about 700 m from Plaza de Armas (roughly 9 minutes as a reference, with no guarantee of access or walking time). San Pedro station is opposite the market; check tickets and services with the train operator.' ]
        ],
        note: 'Times and routes depend on traffic, works and operational changes. For rail or airport connections, always verify the operator’s information before travelling.'
      },
      servicios: {
        eyebrow: 'Useful services, no commercial recommendations',
        h2: 'What helps to know around the market.',
        cards: [
          [ 'Toilets and washrooms', 'Ask the administration about toilet location, availability, accessibility and any charge. The 2025 MINCETUR record noted a need to improve sanitary facilities; we cannot guarantee their current condition.' ],
          [ 'Parking', 'The historic centre has narrow streets, traffic rules and limited parking. If you drive, prefer formal perimeter parking and continue on foot.' ],
          [ 'Food', 'Inside the market there are food, bread, juice and fresh-produce sections. For food safety, choose stalls with high turnover, clean surfaces and well-cooked food.' ],
          [ 'Lodging', 'Central Cusco offers many lodging categories. Compare location, accessibility, policies and records on official or independent platforms; this guide does not recommend specific establishments.' ],
          [ 'Shopping and groceries', 'The market itself is a large supply centre. On neighbouring streets you will find shops and convenience stores; avoid regulated or dubious-origin products.' ],
          [ 'Fuel and charging', 'No fuel or charging point beside the market has been verified. If needed, check location, availability and hours directly before travelling.' ]
        ]
      },
      comer: {
        eyebrow: 'Eating nearby',
        h2: 'Flavours to look for, not places to pick.',
        lead: 'As a non-profit guide, we recommend categories and criteria, not specific businesses. Around San Pedro and the historic centre you can find Cusqueñan cuisine, daily menus, traditional bakeries, juice bars and contemporary Peruvian proposals.',
        tags: [ 'broths and soups', 'corn and cheese', 'tamales', 'pan chuta', 'fruit juices', 'quinoa and Andean grains', 'market dishes' ],
        cercaTitle: 'Nearby, on foot',
        cercaItems: [
          { strong: 'Plazoleta e Iglesia de San Pedro:', text: 'the market’s immediate urban front and a key to reading the neighbourhood.' },
          { strong: 'Arco and Santa Clara street:', text: 'a historic corridor toward the centre, with republican and colonial architecture.' },
          { strong: 'Plaza San Francisco:', text: 'a large public space between San Pedro and the monumental core.' },
          { strong: 'Plaza de Armas and monumental surroundings:', text: 'the civic and symbolic centre of historic Cusco.' }
        ]
      },
      entrada: {
        cards: [
          { eyebrow: 'Entry and costs', title: 'No entry ticket', body: 'The MINCETUR inventory lists free entry to the market. Meals and purchases are paid at each stall; check prices and conditions before ordering. Services and availability are not guaranteed.' },
          { eyebrow: 'Responsible shopping', title: 'Ask, compare, respect.', body: 'Ask the price before ordering, do not handle food without permission and avoid pressuring for photos. If you buy handicrafts, ask about materials and origin.' },
          { eyebrow: 'Practical safety', title: 'Mind your belongings.', body: 'As in any busy market, use a closed bag, avoid showing valuables and pay extra attention when crossing streets around the venue.' }
        ]
      },
      ubicacion: {
        eyebrow: 'Location',
        h2: 'Mercado Central de San Pedro',
        addr: 'Ca. Thupaq Amaru 477, Cusco 08002, Peru',
        mapsCta: 'Open in Google Maps',
        govtText: 'See the market record in the',
        govtName: 'MINCETUR tourism inventory'
      },
      faq: {
        eyebrow: 'Frequently asked questions',
        h2: 'Before you go',
        items: [
          [ 'Where is the Mercado Central de San Pedro located?', 'It is at Ca. Thupaq Amaru 477, Cusco 08002, Peru, according to the Google Maps listing checked 22 October 2026 (UTC). The MINCETUR inventory places it opposite San Pedro station.' ],
          [ 'What is the Mercado de San Pedro?', 'Mercado San Pedro is the usual name for the Mercado Central de San Pedro, the oldest covered food market in Cusco, in the traditional San Pedro neighbourhood.' ],
          [ 'Is there a fee to enter the Mercado San Pedro?', 'The MINCETUR inventory lists free entry to the market. Food, handicrafts and other products are paid for separately at each stall; check current conditions.' ],
          [ 'What is the best time to visit?', 'Choose a time within the published references and check again if you want a particular stall or product. No time slot guarantees crowds or product availability.' ],
          [ 'How long should I stay?', 'Plan 60 to 90 minutes to walk the aisles calmly; add time if you sit down to eat or talk with vendors.' ],
          [ 'Can I photograph inside?', 'Ask before photographing people or stalls and respect refusals and any instructions from the administration.' ],
          [ 'Should I bring cash?', 'Yes. In a traditional market many payments are still in soles and not all stalls accept cards. Small bills make small purchases easier.' ],
          [ 'Are there toilets and basic services?', 'Check toilet location, availability, accessibility and charges with the administration. The 2025 MINCETUR inventory noted improvements were needed; this guide does not certify their current condition.' ],
          [ 'Is it close to the historic centre?', 'Yes. It is in the traditional San Pedro neighbourhood, within the Historic Centre of Cusco and a short walk from the monumental core.' ],
          [ 'How does altitude affect the visit?', 'The market is in Cusco, above 3,000 m. Walk at an easy pace, hydrate and avoid overexertion if you are not yet acclimatised.' ]
        ]
      },
      fuentes: {
        h2: 'Sources and editorial criteria',
        lead: 'Source review: 22 October 2026 (UTC). MINCETUR and PROMPERÚ support the market’s identity and context. Their published hours and Google Maps differ; details follow below.',
        photos: 'Photographs: façade — Ordzonhyd Rudyard Tarco Palomino / Wikimedia Commons (CC BY 4.0); juices — sergejf / Wikimedia Commons (CC BY 2.0); interior — Ashim D’Silva / Unsplash, file on Wikimedia Commons (CC0).'
      }
    },
    seasonal: {
      eyebrow: 'When to go',
      h2: 'Season-by-season visiting strategy.',
      lead: 'Regional orientation from PROMPERÚ, published 19 November 2021: a drier period from April to September and a rainy period from October to March. These are not 30-year climate normals or a current market forecast.',
      cols: [ 'Season', 'Months', 'Typical climate', 'Day / night', 'For visiting the market', 'Recommendations' ],
      rows: [
        { epoca: 'Dry season', epocaSub: 'austral winter', meses: 'April – September', clima: 'Mostly clear, sunny days; clean skies, better visibility for photos. Little rain.', diaNoche: 'Check the forecast', mercado: 'Rain remains possible. Plan outdoor sections using the day’s forecast.', recom: 'Warm layers for morning and night. Strong high-altitude sun: sunscreen and hat.' },
        { epoca: 'Rainy season', epocaSub: 'austral summer', meses: 'October – March', clima: 'Seasonally greater chance of rain; it does not imply rain at a fixed time every day.', diaNoche: 'No verified range here', mercado: 'The market is covered, but outside routes remain exposed. Check the forecast before setting out.', recom: 'Non-slip footwear, umbrella or raincoat and a sturdy bag for shopping.' },
        { epoca: 'Transition months', epocaSub: '', meses: 'April, October', clima: 'Season boundaries are approximate. They do not predict crowds or weather for an individual visit.', diaNoche: 'Variable conditions', mercado: 'A balance of sun and rain; bring both clothing options.', recom: 'Layer up: cold morning, mild midday.' }
      ],
      noteTitle: 'Altitude and climate reading',
      noteBody: 'Cusco is about 3,400 m above sea level. Solar radiation is intense during the day and nights can be cold all year. The difference between the covered market’s climate and the outside streets is notable: plan your walks with margin for sun, rain and cold.'
    },
    itineraries: {
      eyebrow: 'How to walk it',
      h2: 'Itineraries by visitor type.',
      lead: 'The Mercado San Pedro is walked on foot and pairs well with the historic spaces of the San Pedro neighbourhood and Cusco’s monumental core. These are suggestions that adapt to each person’s pace.',
      cards: [
        { eyebrow: 'Families with children', title: 'Short walk with breaks', items: [ 'Check market hours and the stalls you want to visit; crowd levels vary.', 'Prioritise the fruit, juice and bread sections: visual and tasting activities.', 'Plan a meal stop inside the market (cooked dishes, broths).', 'Bring small cash and a change of clothes if it rains.' ], time: 'Suggested time: 60–90 min' },
        { eyebrow: 'Photography and nature', title: 'Early light and detail', items: [ 'Work with the available light and ask before photographing people or stalls.', 'Look for textures: Andean grains, herbs, fruit and the play of light on the roof.', 'Choose a viewpoint from permitted public areas without blocking passage.', 'Combine with the Plaza de Armas for wider urban shots.' ], time: 'Suggested time: 90–120 min' },
        { eyebrow: 'Reduced mobility / low effort', title: 'Slow and unhurried', items: [ 'Check the suitable entrance, steps and aisle widths with the administration before visiting. A step-free route has not been verified.', 'Confirm resting places and accessible toilets; agree on a meeting point.', 'Use main aisles and avoid carrying heavy loads.', 'Hydrate and walk slowly because of the altitude.' ], time: 'Suggested time: 45–75 min' }
      ],
      rutasTitle: 'Suggested routes',
      rutas: [
        { eyebrow: 'Half day', title: 'Market + San Pedro core', items: [ 'Andean products and juices at the Mercado San Pedro (60–90 min).', 'Eat or have a juice inside the market.', 'Walk out to the Plazoleta e Iglesia de San Pedro and its urban front.', 'If continuing along Santa Clara, check the route and street conditions first.' ], time: 'Total: about 3–4 h, on foot' },
        { eyebrow: 'Full day', title: 'Market + monumental centre', items: [ 'Morning at the Mercado San Pedro and the Plazoleta e Iglesia de San Pedro (90–120 min).', 'Consider Santa Clara as an optional continuation after checking the route.', 'Lunch around the historic centre (Cusqueñan cuisine, daily menus).', 'Afternoon at the Plaza de Armas, cathedral and side streets.', 'Plan the return using confirmed transport, conditions and hours.' ], time: 'Total: about 6–7 h, on foot with breaks' }
      ],
      note: 'Planning ideas, not guided routes or guarantees of access. Nearby places are separate visits: check their hours, admission, routes and accessibility. Adapt timing and breaks to the group.'
    },
    responsibility: {
      eyebrow: 'Science and responsible visiting',
      h2: 'Understand the place, care for it when you visit.',
      lead: 'The Mercado Central de San Pedro is a living supply space, not a museum. Knowing a little of its physical and social context helps make the visit more respectful and safe.',
      cards: [
        { title: 'Altitude and Andean climate', body: 'Cusco is about 3,400 m above sea level. Air pressure is lower and physical effort feels greater. UV radiation is high during the day, even when cold. Walk slowly the first days, drink water and use sun protection.' },
        { title: 'Pantry ecology', body: 'The market gathers products from different ecological floors: native potatoes, corn, quinoa and tubers from high zones, and fruit from warmer valleys. Observing that diversity is a direct way to understand Andean agriculture.' },
        { title: 'Personal planning', body: 'This guide does not assess fitness for high-altitude visits. Adapt the route to your needs and consult a health professional if you have health concerns.' },
        { title: 'Buy with respect', body: 'Ask the price before ordering, do not handle food without permission and avoid aggressive haggling. If you buy handicrafts, ask about materials and origin: it helps value the seller’s work.' },
        { title: 'Less waste', body: 'Bring a reusable bag and, if possible, a bottle. The market generates much organic and plastic waste; your example reduces the impact in such a busy space.' },
        { title: 'Practical safety', body: 'As in any crowded market, use a closed bag, do not show valuables and pay attention when crossing streets. Altitude and sun are also risk factors: hydrate and wear a hat.' }
      ],
      note: 'This guide is informational and non-profit. It does not replace official information from local authorities or from transport or service operators.'
    },
    sub: {
      horario: {
        eyebrow: 'Hours & getting there',
        h1: 'Hours, location and how to reach the Mercado San Pedro',
        intro: 'A covered food market in the San Pedro neighbourhood, opposite the railway station. Published reference hours differ and do not establish individual stall hours.',
        facts: [
          { label: 'Reference hours', value: 'Mon–Sat 06:30–18:00', sub: 'Sun 06:30–16:00 · Maps, 22 Oct 2026 UTC; check again.' },
          { label: 'Entry', value: 'Free', sub: 'According to MINCETUR; purchases and meals are separate.' },
          { label: 'Altitude', value: '≈ 3,400 m' },
          { label: 'Address', value: 'Ca. Thupaq Amaru 477, Cusco 08002' }
        ],
        sections: [
          { id: 'best-time', eyebrow: 'When to go', h2: 'Choosing a time', lead: 'Consult the reference hours and check with the stall if you want a particular meal or product.', body: [ 'Late morning to early afternoon is practical if you plan to sit and eat inside the market.', 'Avoid rushing: the aisles can be crowded, especially in high season.' ] },
          { id: 'getting-there', eyebrow: 'How to get there', h2: 'Ways to arrive', cards: [ [ 'From the airport', 'From Alejandro Velasco Astete International Airport, a taxi or app is usually most direct. Urban public transport also connects with the centre.' ], [ 'By city bus', 'Check the current service, stop and direction with the operator. Specific bus lines have not been verified in this guide.' ], [ 'On foot', 'MINCETUR estimates about 700 m from Plaza de Armas and 9 minutes on foot as a reference, with no guarantee of time or accessibility.' ], [ 'By train', 'The San Pedro train station is in front of the market area and serves as a reference.' ] ] },
          { id: 'altitude', eyebrow: 'Altitude and weather', h2: 'Visit calmly at altitude', body: [ 'Cusco is above 3,000 m. Walk slowly if you just arrived.', 'The market is covered, but outside streets can be cold and rainy by season.' ] }
        ],
        faqTitle: 'Before you go',
        faqEyebrow: 'Frequently asked questions',
        faq: [
          [ 'What time does the Mercado San Pedro open?', 'Google Maps, checked 22 October 2026 (UTC), lists Monday–Saturday 06:30–18:00 and Sunday 06:30–16:00. MINCETUR and PROMPERÚ publish other references. Check before visiting; individual stalls may vary.' ],
          [ 'Is there a fee to enter?', 'No. Entry is free; you pay for what you consume or buy at each stall.' ],
          [ 'Is it far from the Plaza de Armas?', 'The MINCETUR inventory estimates about 700 m on foot from Plaza de Armas. Time and accessibility depend on the route and each person.' ],
          [ 'How do I get from the airport?', 'A taxi or app is usually most direct; urban public transport also connects the airport axis with the centre.' ]
        ]
      },
      comida: {
        eyebrow: 'Food & shopping',
        h1: 'What to eat and what to buy at the Mercado San Pedro',
        intro: 'The market brings together the Andean pantry and everyday Cusqueñan cuisine: juices, broths, bread, grains and handicrafts. We recommend categories and criteria, not specific businesses.',
        facts: [
          { label: 'To eat', value: 'Juices, broths, bread' },
          { label: 'To buy', value: 'Handicrafts, grains, herbs' },
          { label: 'Payment', value: 'Cash preferred', sub: 'Bring soles and small bills.' },
          { label: 'Style', value: 'No brand endorsements' }
        ],
        sections: [
          { id: 'eat', eyebrow: 'Eat inside', h2: 'What to look for to eat', cards: [ [ 'Juices and smoothies', 'Rows of stands prepare juices to order with local fruit and produce from warmer zones.' ], [ 'Broths and soups', 'Hot broths and soups are part of market cuisine, aimed at workers and visitors.' ], [ 'Bread and pastry', 'Pan chuta and traditional Cusqueñan bakery are usually present in the bread sections.' ], [ 'Market dishes', 'Popular dishes and daily menus show the region’s everyday cooking.' ] ] },
          { id: 'buy', eyebrow: 'Shop', h2: 'What to take home', cards: [ [ 'Alpaca textiles', 'Alpaca-fibre weavings and garments; ask about materials and origin.' ], [ 'Andean grains', 'Native potatoes, corn, quinoa and chuño connect with the region’s agriculture.' ], [ 'Herbs and coca', 'Herbs and leaves are market products, not medical recommendations from this guide. Check applicable restrictions before transporting products.' ], [ 'Handicrafts and objects', 'Symbolic-use objects and local handicrafts help explain cultural continuity.' ] ] },
          { id: 'tips', eyebrow: 'Tips', h2: 'Buy with respect', body: [ 'Ask the price before ordering and compare between stalls.', 'Do not handle food without permission and avoid pressuring for photos.', 'Bring a reusable bag to reduce waste.' ] }
        ],
        faqTitle: 'Common questions',
        faqEyebrow: 'Frequently asked questions',
        faq: [
          [ 'Can you eat inside the market?', 'Yes. There are food, bread and juice sections; choose stalls with high turnover and well-cooked food.' ],
          [ 'Do they accept cards?', 'Many payments are still cash. Bring soles and small bills for minor purchases.' ],
          [ 'What products are typical?', 'Native potatoes, corn, quinoa, chuño, fruit, pan chuta, broths and alpaca handicrafts.' ],
          [ 'Do people haggle?', 'Avoid aggressive haggling. Ask the price before ordering and value the seller’s work.' ]
        ]
      },
      seguridad: {
        eyebrow: 'Safety',
        h1: 'Safety tips for visiting the Mercado San Pedro',
        intro: 'Like any busy market, take care with belongings and with traffic on the surrounding streets. Here are practical recommendations.',
        facts: [
          { label: 'Belongings', value: 'Closed bag' },
          { label: 'Valuables', value: 'Do not display' },
          { label: 'Altitude', value: 'Walk slowly' },
          { label: 'Streets', value: 'Care when crossing' }
        ],
        sections: [
          { id: 'belongings', eyebrow: 'Inside the market', h2: 'Mind your belongings', body: [ 'Use a closed bag and keep it in front in high-traffic areas.', 'Do not display valuables (expensive cameras, watches, visible wallets).', 'Pay special attention when crossing streets around the venue.' ] },
          { id: 'altitude', eyebrow: 'Altitude and sun', h2: 'Silent risk factors', cards: [ [ 'Altitude', 'Cusco is above 3,000 m. Altitude tires and dehydrates; walk slowly and drink water.' ], [ 'Sun', 'UV radiation is high during the day, even when cold. Use sunscreen and a hat.' ], [ 'Rain', 'Outside streets can be slippery; non-slip footwear helps.' ] ] },
          { id: 'traffic', eyebrow: 'Surroundings', h2: 'Traffic and streets', body: [ 'The historic centre has narrow streets and heavy pedestrian traffic.', 'Cross where appropriate and avoid distraction on your phone while crossing.', 'If you arrive by car, prefer formal parking on the perimeter and continue on foot.' ] }
        ],
        faqTitle: 'Safety',
        faqEyebrow: 'Frequently asked questions',
        faq: [
          [ 'Is the Mercado San Pedro safe?', 'It is a busy market; this guide cannot guarantee safety. Mind your belongings, watch traffic and follow local instructions.' ],
          [ 'Should I worry about altitude?', 'Yes. Cusco is above 3,000 m; walk slowly, hydrate and avoid overexertion on arrival.' ],
          [ 'Do they accept cards?', 'Many stalls are cash only; bring soles and small bills.' ],
          [ 'What if it rains?', 'The market is covered and shields you from rain; use non-slip footwear on outside streets.' ]
        ]
      }
    },
    legal: {
      privacidad: {
        eyebrow: 'Legal information',
        h1: 'Privacy policy',
        updated: 'Last updated: 22 October 2026',
        intro: 'This cultural guide is an independent, non-profit information project. We apply the data-minimisation principle: we process only the information needed to operate, protect and improve the site.',
        blocks: [
          { h2: 'Information we may collect', items: [ { type: 'ul', items: [ 'Technical browsing data such as IP address, browser type, operating system, pages visited, approximate access date and diagnostic data.', 'Strictly necessary cookies or similar technologies to remember privacy preferences and, only if you authorise it, analytics data.', 'This guide has no accounts, booking service or own contact form or email address.' ] } ] },
          { h2: 'How we use the information', items: [ { type: 'ul', items: [ 'Improve content, accessibility and the user experience.', 'Analyse general traffic trends when there is consent for analytics.', 'Display information and the forecast requested by the page.', 'Prevent abuse, resolve technical incidents and meet legal obligations.' ] } ] },
          { h2: 'Legal basis and consent', items: [ { type: 'p', text: 'Necessary cookies are used for essential functions. Analytics cookies are not enabled by default: they require an affirmative choice on the cookie settings page. When processing is based on consent, you may withdraw it at any time.' } ] },
          { h2: 'Third-party services', items: [ { type: 'p', text: 'The embedded map connects to Google when loaded. Google Analytics is requested only when the analytics choice is effective. Cloudflare hosting receives site requests and technical data. The forecast is requested from this site, which contacts Open-Meteo server-side; photographs are served by this site. The Google Analytics control does not control the map or hosting technical logs.' } ] },
          { h2: 'Retention and security', items: [ { type: 'p', text: 'We keep no own advertising profiles or user database. Technical data retained by infrastructure or analytics providers is governed by their periods and controls. We apply reasonable measures to reduce unnecessary collection and data exposure.' } ] },
          { h2: 'Your rights', items: [ { type: 'p', text: 'Under applicable law — including the General Data Protection Regulation (GDPR) where relevant — you may request access, rectification, erasure, restriction or objection to processing and, where applicable, portability. You may also withdraw consent and lodge a complaint with the competent supervisory authority.' } ] },
          { h2: 'Minors', items: [ { type: 'p', text: 'This site is not designed to knowingly collect personal data from minors. If we detect such information obtained improperly, we will seek to delete it.' } ] },
          { h2: 'Changes to this policy', items: [ { type: 'p', text: 'We may update this policy to reflect technical, legal or editorial changes. The version published on this page will apply.' } ] }
        ]
      },
      terminos: {
        eyebrow: 'Legal information',
        h1: 'Terms of service',
        updated: 'Last updated: 22 October 2026',
        intro: 'By accessing and using this guide, you accept these terms. If you disagree, you may stop using the site.',
        blocks: [
          { h2: 'Nature of the project', items: [ { type: 'p', text: 'We are an independent, non-profit, informational tourism and culture guide. We do not represent the Mercado Central de San Pedro, the Provincial Municipality of Cusco, the Regional Government of Cusco, MINCETUR or commercial operators.' } ] },
          { h2: 'Use of content', items: [ { type: 'p', text: 'Editorial content is provided solely for informational and educational purposes. It is not professional, medical, legal, financial advice nor a guarantee of availability of tourism services.' } ] },
          { h2: 'Accuracy and currency', items: [ { type: 'p', text: 'We strive to cross-check information with public, reliable sources, but cannot guarantee that hours, routes, prices, access conditions, services or regulations remain unchanged. Before travelling, verify critical information with official sources or the relevant operator.' } ] },
          { h2: 'Commercial neutrality', items: [ { type: 'p', text: 'This guide does not publish paid commercial recommendations nor position specific businesses in its service sections. When we describe food, lodging, parking or other needs, we do so by category and general criteria.' } ] },
          { h2: 'Intellectual property', items: [ { type: 'p', text: 'The design, organisation and original texts of the site are protected by applicable law. Photographs belong to their original authors and are used under the licences or conditions stated in the credits. Google Maps and its data are shown under Google’s terms.' } ] },
          { h2: 'External links and services', items: [ { type: 'p', text: 'Links to maps, public bodies or other external sources are provided as reference. We do not control the content, availability or privacy practices of those sites.' } ] },
          { h2: 'Limitation of liability', items: [ { type: 'p', text: 'The site is provided “as is”, without express or implied warranties. To the extent permitted by law, we are not liable for losses, damages, delays, itinerary changes or travel decisions based solely on this guide.' } ] },
          { h2: 'Acceptable use', items: [ { type: 'p', text: 'Do not use the site to interfere with its operation, attempt unauthorised access to systems, distribute malicious code or infringe third-party rights.' } ] },
          { h2: 'Modifications', items: [ { type: 'p', text: 'We may modify these terms as needed. The version in force is the one published on this page.' } ] }
        ]
      },
      cookies: {
        eyebrow: 'Privacy and preferences',
        h1: 'Cookie settings',
        updated: 'Last updated: 22 October 2026',
        intro: 'We use cookies and local storage for essential functions and, if you authorise it, to understand aggregated site usage. You can change your choice at any time from this page.',
        blocks: [
          { h2: 'Consent management', items: [ { type: 'p', text: 'Allow or reject Google Analytics here; the change applies to future requests on this page and does not undo data already sent. If the browser blocks storing or reading the choice, analytics stays off on this page and the refusal scope is explained. Propagation to other tabs or browsers is not guaranteed. Clearing site data removes stored choices.' } ] }
        ],
        form: {
          necessaryTitle: 'Choice storage',
          necessaryBody: 'The choice is stored in this browser. Refusal also uses session storage and a tab marker where available. Analytics acceptance is not needed to read the guide.',
          analyticsTitle: 'Analytics cookies',
          analyticsBody: 'Enable Google Analytics for aggregated usage statistics. They stay disabled until you accept them.',
          prefsTitle: 'Preference cookies',
          prefsBody: 'Language is chosen through the Español/English links and URL; no language preference is stored.',
          marketingTitle: 'Marketing cookies',
          marketingBody: 'This project uses no personalised advertising or marketing cookies. This category stays inactive.',
          save: 'Save preferences',
          reject: 'Reject non-essential',
          saved: 'Google Analytics: choice saved.',
          rejected: 'All non-essential cookies have been rejected.',
          prefsNote: 'Language is chosen through links, without a language cookie.',
          consentTitle: 'Consent management',
          consentBody: 'The preference is stored in your browser’s local storage under the key msp-cookie-preferences.',
          key: 'msp-cookie-preferences'
        }
      }
    }
  }
};

export type { SubPage, LegalDoc, GuideContent };
