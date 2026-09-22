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
      disclaimer2: 'La información del atractivo se contrasta con fuentes públicas de la Municipalidad Provincial del Cusco, la Gerencia Regional de Comercio Exterior, Turismo y Artesanía del Cusco y el Ministerio de Comercio Exterior y Turismo del Perú (MINCETUR). No contiene recomendaciones comerciales.',
      copyright: '© 2026 Guía Cultural del Mercado San Pedro de Cusco. Todos los derechos reservados.',
      sub: 'Guía no oficial del Mercado Central de San Pedro, distrito y provincia del Cusco, Perú.',
      legal: [ { label: 'Privacidad', key: 'privacidad' }, { label: 'Términos', key: 'terminos' }, { label: 'Cookie', key: 'cookies' } ]
    },
    home: {
      heroKicker: 'Mercado histórico · Centro Histórico del Cusco',
      heroTitle: `Mercado Central de San Pedro <span class="text-[#f1b83b]">(Cusco)</span>`,
      heroLead: 'San Pedro, el mercado donde Cusco sigue conversando. Frutas, panes, granos, hierbas, comidas populares y artesanía bajo una gran cubierta: una puerta directa a la vida cotidiana andina, a pocas cuadras del corazón monumental de la ciudad.',
      heroCta1: 'Planificar la visita',
      heroCta2: 'Conocer su historia',
      facts: {
        ingreso: { label: 'Ingreso', value: 'Libre' },
        referencia: { label: 'Referencia de visita', value: '06:00–18:00', sub: 'Horario de referencia de inventario turístico; puede variar.' },
        altitud: { label: 'Altitud', value: '≈ 3,400 m' },
        direccion: { label: 'Dirección', value: 'Ca. Thupaq Amaru 477, Cusco' }
      },
      acerca: {
        eyebrow: 'Acerca del atractivo',
        h2: 'Bienvenido al Mercado Central de San Pedro',
        p1: 'Bienvenido al <strong>Mercado Central de San Pedro</strong>, ampliamente conocido como el <strong>Mercado San Pedro</strong>. Ubicado en el corazón de <strong>Cusco</strong>, <strong>Cusco</strong>, <strong>Perú</strong>, este destino es un polo principal para quienes visitan la región y una puerta directa a la vida cotidiana andina.',
        hierarchy: [ 'Mercado Central de San Pedro', 'Cusco', 'Cusco', 'Perú' ],
        p2: 'Al visitar el <strong>Mercado Central de San Pedro</strong>, se pueden recorrer con facilidad otros hitos y puntos de interés históricos de los alrededores, entre ellos la <strong>Plazoleta e Iglesia de San Pedro</strong> y la <strong>Plaza de Armas del Cusco</strong>.'
      },
      historia: {
        eyebrow: 'Historia y contexto',
        h2: 'Un mercado moderno dentro de un barrio con siglos de memoria.',
        p1: 'San Pedro es uno de los barrios tradicionales del centro histórico cusqueño. La documentación municipal recuerda que en este sector existió desde el siglo XVI el Hospital de Naturales y que el barrio fue consolidando una identidad propia alrededor de sus espacios religiosos, comerciales y de conexión con otras zonas de la ciudad.',
        p2: 'A comienzos del siglo XX, las autoridades impulsaron el traslado del abastecimiento que se realizaba en las plazas del centro hacia un recinto específico. El mercado fue inaugurado en 1925 durante la gestión municipal de Manuel Silvestre Frisancho, convirtiéndose en el mercado cerrado de abastos más antiguo del Cusco.',
        noteTitle: 'Importante sobre la autoría arquitectónica',
        noteBody: 'La atribución popular a Gustave Eiffel aparece de forma muy extendida en guías y bases colaborativas. Para una guía de divulgación rigurosa conviene presentarla como una atribución discutida, no como un hecho documental inequívoco.',
        p3: 'El barrio de San Pedro también guarda relatos populares: se cuenta que la vida del mercado se entrelaza con la devoción a San Pedro —patrón de los pescadores y, en el imaginario local, también de quienes recorren los pasillos del abasto— y con las procesiones y ferias que la ciudad ha sostenido durante siglos. Como en toda plaza antigua, las leyendas circulan de boca en boca; las presentamos como relato popular, no como historia documentada.',
        imgInside: 'Mercado Central de San Pedro - Interior con puestos de frutas y visitantes en Cusco, Perú',
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
          [ 'Mejor franja: mañana', 'Para observar el abastecimiento, mayor variedad de productos frescos y un ritmo más local. Evita ir con prisa: los pasillos pueden estar concurridos.' ],
          [ 'Tiempo recomendado: 60–90 min', 'Suficiente para recorrer los sectores principales. Añade tiempo si vas a comer, tomar un jugo o conversar con vendedores.' ],
          [ 'Altura y clima', 'Cusco supera los 3,000 m s. n. m. Avanza despacio si acabas de llegar. El mercado es cubierto, pero las calles exteriores pueden ser frías y lluviosas según la temporada.' ],
          [ 'Dinero y respeto', 'Lleva soles y billetes pequeños. Pide permiso antes de fotografiar personas. Mantén tus pertenencias cerca en zonas de mucha circulación.' ]
        ]
      },
      clima: {
        eyebrow: 'Clima en tiempo real',
        h2: 'El clima hoy en Cusco y el pronóstico de varios días.',
        lead: 'Cusco está a más de 3,000 m s. n. m.: las mañanas pueden ser frías y soleadas, y las tardes, variables según la época. Revisa la condición actual y el pronóstico antes de salir.',
        loading: 'Cargando el clima actual…',
        error: 'No pudimos obtener el clima en este momento. Puedes consultar el pronóstico en tu aplicación habitual antes de salir.',
        now: 'Ahora',
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
          [ 'En autobús urbano', 'Diversas rutas RTU/RTI pasan por Calle Nueva, Concevidayoc, Santa Clara y Av. del Ejército, a pocos minutos a pie. La red puede cambiar; verifica señalización y destino con el conductor o una fuente local actualizada.' ],
          [ 'En taxi', 'Indica “Mercado de San Pedro” o “Plazoleta San Pedro”. En horas de congestión, puede ser más eficiente bajar a unas cuadras y completar el tramo caminando. Acuerda tarifa cuando corresponda y usa servicios autorizados.' ],
          [ 'A pie y en tren', 'Desde la Plaza de Armas el recorrido peatonal es corto, por Mantas, Marqués y Santa Clara. La estación ferroviaria de San Pedro está frente/al lado del entorno del mercado y sirve de referencia urbana.' ]
        ],
        note: 'Los tiempos y rutas dependen del tránsito, obras y ajustes operativos. Para conexiones ferroviarias o aeroportuarias, verifica siempre la información del operador antes de viajar.'
      },
      servicios: {
        eyebrow: 'Servicios útiles, sin recomendaciones comerciales',
        h2: 'Lo que conviene saber alrededor del mercado.',
        cards: [
          [ 'WC y lavamanos', 'Busca servicios higiénicos señalizados dentro o en equipamientos públicos del entorno. Llevar monedas y alcohol gel puede ser práctico.' ],
          [ 'Estacionamiento', 'El centro histórico tiene calles estrechas, regulación de tránsito y oferta limitada de estacionamiento. Si llegas en auto, prioriza estacionamientos formales en el perímetro y continúa a pie.' ],
          [ 'Alimentación', 'Dentro del mercado hay sectores de comida, panes, jugos y productos frescos. Para seguridad alimentaria, elige puestos con alta rotación, superficies limpias y alimentos bien cocidos.' ],
          [ 'Alojamiento', 'El centro de Cusco dispone de múltiples categorías de alojamiento. Compara ubicación, accesibilidad, políticas y registros en fuentes oficiales o plataformas independientes; esta guía no recomienda establecimientos concretos.' ],
          [ 'Compras y abarrotes', 'El propio mercado funciona como gran centro de abasto. En calles vecinas encontrarás tiendas y comercios de conveniencia; evita comprar productos regulados o de origen dudoso.' ],
          [ 'Combustible y carga', 'Las estaciones de combustible se ubican principalmente fuera del núcleo más peatonal del centro. Los puntos de carga para vehículos eléctricos son aún menos frecuentes; planifica la recarga con antelación.' ]
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
          { eyebrow: 'Entrada y gastos', title: 'Sin boleto de acceso', body: 'El mercado es un espacio de abasto con ingreso libre. Presupuesta solo tus consumos y compras. Evitamos publicar precios concretos porque cambian con producto, temporada y puesto.' },
          { eyebrow: 'Compra responsable', title: 'Pregunta, compara, respeta.', body: 'Consulta el precio antes de pedir, no manipules alimentos sin permiso y evita presionar para fotografiar. Si compras artesanía, pregunta por materiales y procedencia.' },
          { eyebrow: 'Seguridad práctica', title: 'Atención a tus pertenencias.', body: 'Como en cualquier mercado concurrido, usa bolso cerrado, evita exhibir objetos de valor y mantén especial atención al cruzar calles alrededor del recinto.' }
        ]
      },
      ubicacion: {
        eyebrow: 'Ubicación',
        h2: 'Mercado Central de San Pedro',
        addr: 'Ca. Thupaq Amaru 477, Cusco 08002, Perú',
        mapsCta: 'Abrir en Google Maps',
        govtText: 'Para novedades oficiales e información regional de turismo, visita el',
        govtName: 'Perú / Cusco Portal Oficial de Turismo'
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        h2: 'Antes de ir',
        items: [
          [ '¿Dónde está ubicado el Mercado Central de San Pedro?', 'El Mercado Central de San Pedro se encuentra en Ca. Thupaq Amaru 477, Cusco, Cusco, Perú (F2H8+JW Cusco), a pocas cuadras a pie de la Plaza de Armas.' ],
          [ '¿Qué es el Mercado de San Pedro?', 'Mercado San Pedro es la denominación habitual del Mercado Central de San Pedro, el mercado de abastos cubierto más antiguo del Cusco, en el barrio tradicional de San Pedro.' ],
          [ '¿La entrada al Mercado San Pedro tiene costo?', 'No. El ingreso al mercado es libre. Los alimentos, artesanías y demás productos se pagan directamente en cada puesto.' ],
          [ '¿Cuál es el mejor momento para visitarlo?', 'La mañana suele ofrecer una lectura más completa de la actividad cotidiana y de los productos frescos. Si deseas comer allí, el tramo entre media mañana y primeras horas de la tarde suele ser práctico.' ],
          [ '¿Cuánto tiempo conviene quedarse?', 'Reserva entre 60 y 90 minutos para recorrer con calma los pasillos; suma más tiempo si piensas sentarte a comer o conversar con comerciantes.' ],
          [ '¿Se puede fotografiar dentro?', 'Sí, pero por respeto conviene pedir permiso antes de fotografiar a personas o primeros planos de los puestos.' ],
          [ '¿Es recomendable llevar efectivo?', 'Sí. En un mercado tradicional muchos pagos siguen realizándose en soles y no todos los puestos aceptan tarjeta. Llevar billetes de baja denominación facilita compras pequeñas.' ],
          [ '¿Hay baños y servicios básicos?', 'El entorno del mercado cuenta con servicios urbanos y sanitarios, pero su disponibilidad, accesibilidad y condiciones pueden variar. Conviene confirmar in situ y llevar cambio.' ],
          [ '¿Está cerca del centro histórico?', 'Sí. Se encuentra en el barrio tradicional de San Pedro, dentro del Centro Histórico del Cusco y a una caminata corta del núcleo monumental.' ],
          [ '¿Cómo afecta la altura?', 'El mercado está en Cusco, a más de 3,000 m s. n. m. Camina a ritmo tranquilo, hidrátate y evita sobreesfuerzos si aún no te has aclimatado.' ]
        ]
      },
      fuentes: {
        h2: 'Fuentes y criterio editorial',
        lead: 'La ficha se elaboró contrastando el Inventario Nacional de Recursos Turísticos de MINCETUR, la catalogación del Centro Histórico de la Municipalidad Provincial del Cusco y fuentes públicas de movilidad. Los horarios, rutas y servicios pueden cambiar; los datos críticos deben verificarse antes de viajar.',
        photos: 'Fotografías: fachada — Ordzonhyd Rudyard Tarco Palomino / Wikimedia Commons (CC BY 4.0); jugos — sergejf / Wikimedia Commons (CC BY 2.0); interior — Ashim D’Silva / Unsplash, archivo en Wikimedia Commons (CC0).'
      }
    },
    seasonal: {
      eyebrow: 'Cuándo conviene ir',
      h2: 'Estrategia de visita por temporada.',
      lead: 'En los Andes cusqueños se distinguen dos grandes épocas. Las cifras son promedios climáticos de largo plazo (normales de 30 años) y sirven de orientación; el pronóstico real debe revisarse antes de cada viaje.',
      cols: [ 'Época', 'Meses', 'Clima típico', 'Día / noche', 'Para visitar el mercado', 'Recomendaciones' ],
      rows: [
        { epoca: 'Temporada seca', epocaSub: 'invierno austral', meses: 'mayo – septiembre', clima: 'Días mayormente despejados y soleados; cielos limpios, mejor visibilidad para fotografiar. Lluvia escasa.', diaNoche: '18–21 °C / 0–5 °C', mercado: 'La mejor ventana: calles secas, menos interrupciones por lluvia y cómodo recorrido a pie entre el mercado y el centro.', recom: 'Abrígado para la mañana y la noche. Sol fuerte a la altura: protector solar y gorra.' },
        { epoca: 'Temporada de lluvias', epocaSub: 'verano austral', meses: 'octubre – abril (dic–feb, más húmedo)', clima: 'Mañanas a menudo despejadas; lluvias por la tarde, nubosidad y suelos húmedos. Enero y febrero suelen ser los meses con más precipitación.', diaNoche: '19–22 °C / 7–10 °C', mercado: 'Visita temprano: recorre el mercado por la mañana y deja la tarde libre por si llueve. El mercado cubierto protege de la lluvia.', recom: 'Calzado antideslizante, paraguas o impermeable y bolsa resistente para compras.' },
        { epoca: 'Meses de transición', epocaSub: '', meses: 'abril, octubre', clima: 'Tiempo variable, menos extremo que los picos de cada temporada. Buenos días para quienes prefieren menos gente.', diaNoche: '18–21 °C / 4–8 °C', mercado: 'Equilibrio entre sol y lluvia; conviene llevar ambas opciones de ropa.', recom: 'Ropa por capas: mañana fría, mediodía templado.' }
      ],
      noteTitle: 'Lectura de altitud y clima',
      noteBody: 'Cusco se encuentra a cerca de 3,400 m s. n. m. La radiación solar es intensa durante el día y las noches pueden ser frías todo el año. La diferencia entre el clima del mercado cubierto y las calles exteriores es notable: planea tus caminatas con margen para el sol, la lluvia y el frío.'
    },
    itineraries: {
      eyebrow: 'Cómo recorrerlo',
      h2: 'Itinerarios según el tipo de visitante.',
      lead: 'El Mercado San Pedro se recorre a pie y combina bien con los espacios históricos del barrio de San Pedro y el núcleo monumental de Cusco. Estas propuestas son orientativas y se adaptan al ritmo de cada persona.',
      cards: [
        { eyebrow: 'Familias con niños', title: 'Recorrido corto y con descansos', items: [ 'Entra por la mañana, cuando hay más variedad y menos aglomeración.', 'Prioriza los sectores de frutas, jugos y panes: actividades visuales y de prueba.', 'Planifica una parada para comer dentro del mercado (platos cocidos, caldos).', 'Lleva efectivo en pequeño y una muda si llueve.' ], time: 'Tiempo sugerido: 60–90 min' },
        { eyebrow: 'Fotografía y naturaleza', title: 'Luz temprana y detalle', items: [ 'La mejor luz suele ser entre 08:00 y 10:30; lleva permiso antes de fotografiar personas.', 'Busca texturas: granos andinos, hierbas, frutas y el juego de luces en la cubierta.', 'Sube hacia la Plazoleta e Iglesia de San Pedro para encuadrar el mercado y el entorno.', 'Combina con la Plaza de Armas para planos urbanos más amplios.' ], time: 'Tiempo sugerido: 90–120 min' },
        { eyebrow: 'Movilidad reducida / bajo esfuerzo', title: 'Pausado y sin prisa', items: [ 'El mercado es cubierto y de acceso a nivel desde la calle; evita las horas pico.', 'Identifica bancas o zonas de descanso y un punto de encuentro fijo.', 'Usa pasillos principales y evita cargar bultos pesados.', 'Hidrátate y avanza despacio por la altura.' ], time: 'Tiempo sugerido: 45–75 min' }
      ],
      rutasTitle: 'Rutas sugeridas',
      rutas: [
        { eyebrow: 'Medio día', title: 'Mercado + núcleo de San Pedro', items: [ 'Recorrido de productos andinos y jugos en el Mercado San Pedro (60–90 min).', 'Para comer o tomar un jugo dentro del mercado.', 'Salida hacia la Plazoleta e Iglesia de San Pedro y su frente urbano.', 'Caminata corta por Santa Clara hasta el Arco San Francisco.' ], time: 'Total: unas 3–4 h, a pie' },
        { eyebrow: 'Día completo', title: 'Mercado + centro monumental', items: [ 'Mañana en el Mercado San Pedro y la Plazoleta e Iglesia de San Pedro (90–120 min).', 'Corredor Santa Clara – Arco San Francisco hacia el centro.', 'Almuerzo en el entorno del centro histórico (cocina cusqueña, menús del día).', 'Tarde en la Plaza de Armas, catedral y calles aledañas.', 'Regreso tranquilo al barrio de San Pedro al atardecer.' ], time: 'Total: unas 6–7 h, a pie y con pausas' }
      ],
      note: 'Las distancias y tiempos dependen del tránsito, la afluencia y el clima. Ajusta el recorrido al ritmo del grupo y reserva margen para descansar por la altura.'
    },
    responsibility: {
      eyebrow: 'Ciencia y visita responsable',
      h2: 'Entender el lugar, cuidarlo al visitarlo.',
      lead: 'El Mercado Central de San Pedro es un espacio de abasto vivo, no un museo. Conocer un poco de su contexto físico y social ayuda a una visita más respetuosa y segura.',
      cards: [
        { title: 'Altura y clima andino', body: 'Cusco está a cerca de 3,400 m s. n. m. La presión del aire es menor y el esfuerzo físico se siente más. La radiación ultravioleta es alta durante el día, incluso con frío. Camina despacio los primeros días, bebe agua y usa protección solar.' },
        { title: 'Ecología de la despensa', body: 'El mercado concentra productos de distintos pisos ecológicos: papas nativas, maíz, quinua y tubérculos de zonas altas, y frutas llegadas desde valles más cálidos. Observar esa diversidad es una forma directa de entender la agricultura andina.' },
        { title: 'Aclimatación y energía', body: 'El cuerpo tarda días en ajustarse a la altura. Evita sobreesfuerzos, alcohol y comidas muy pesadas al llegar. Una caminata corta y pausada por el mercado es una buena primera actividad de ajuste.' },
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
        intro: 'El Mercado Central de San Pedro abre temprano y cierra al caer la tarde. Es un mercado de abasto cubierto, a un par de cuadras de la Plaza de Armas, en el barrio tradicional de San Pedro.',
        facts: [
          { label: 'Horario de referencia', value: '06:00 – 18:00', sub: 'Inventario turístico de referencia; puestos y sectores pueden variar.' },
          { label: 'Entrada', value: 'Libre', sub: 'Sin boleto de acceso.' },
          { label: 'Altitud', value: '≈ 3,400 m' },
          { label: 'Dirección', value: 'Ca. Thupaq Amaru 477, Cusco 08002' }
        ],
        sections: [
          { id: 'mejor-momento', eyebrow: 'Cuándo ir', h2: 'El mejor momento del día', lead: 'La mañana es la franja más completa para observar el abastecimiento y la mayor variedad de productos frescos.', body: [ 'Entre media mañana y primeras horas de la tarde suele ser práctico si piensas sentarte a comer dentro del mercado.', 'Evita ir con prisa: los pasillos pueden estar concurridos, sobre todo en temporada alta.' ] },
          { id: 'como-llegar', eyebrow: 'Cómo llegar', h2: 'Opciones para llegar', cards: [ [ 'Desde el aeropuerto', 'Desde el Aeropuerto Internacional Alejandro Velasco Astete, taxi o aplicación suele ser lo más directo. El transporte público urbano también conecta con el centro.' ], [ 'En autobús urbano', 'Varias rutas pasan cerca, por Calle Nueva, Santa Clara y Av. del Ejército. Verifica la ruta vigente con el conductor.' ], [ 'A pie', 'Desde la Plaza de Armas es un paseo corto por Mantas, Marqués y Santa Clara.' ], [ 'En tren', 'La estación ferroviaria de San Pedro queda frente al entorno del mercado y sirve de referencia.' ] ] },
          { id: 'altura', eyebrow: 'Altura y clima', h2: 'Visita con calma a la altura', body: [ 'Cusco supera los 3,000 m s. n. m. Camina despacio si acabas de llegar.', 'El mercado es cubierto, pero las calles exteriores pueden estar frías y lluviosas según la temporada.' ] }
        ],
        faqTitle: 'Antes de ir',
        faqEyebrow: 'Preguntas frecuentes',
        faq: [
          [ '¿A qué hora abre el Mercado San Pedro?', 'Como referencia de inventario turístico, el horario es 06:00–18:00. Los puestos y sectores pueden abrir o cerrar en otros horarios.' ],
          [ '¿La entrada tiene costo?', 'No. El ingreso es libre; se paga lo que se consume o compra en cada puesto.' ],
          [ '¿Está lejos de la Plaza de Armas?', 'No. Está a un par de cuadras, en el barrio de San Pedro, dentro del Centro Histórico del Cusco.' ],
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
          { id: 'comprar', eyebrow: 'Comprar', h2: 'Qué llevar de recuerdo', cards: [ [ 'Textiles de alpaca', 'Tejidos y prendas de fibra de alpaca; pregunta por materiales y procedencia.' ], [ 'Granos andinos', 'Papas nativas, maíz, quinua y chuño conectan con la agricultura de la región.' ], [ 'Hierbas y coca', 'Plantas medicinales y hoja de coca forman parte de prácticas andinas; úsalas con criterio.' ], [ 'Artesanía y objetos', 'Objetos de uso simbólico y artesanía local ayudan a entender la continuidad cultural.' ] ] },
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
          [ '¿Es seguro el Mercado San Pedro?', 'Es un mercado vivo y concurrido. Con precaución básica con tus pertenencias y atención al tránsito, la visita es tranquila.' ],
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
        updated: 'Última actualización: agosto de 2026',
        intro: 'Esta guía cultural es un proyecto informativo independiente y sin fines de lucro. Aplicamos el principio de minimización de datos: solo tratamos la información necesaria para operar, proteger y mejorar el sitio.',
        blocks: [
          { h2: 'Información que podemos recopilar', items: [ { type: 'ul', items: [ 'Datos técnicos de navegación, como dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha aproximada de acceso y datos de diagnóstico.', 'Cookies o tecnologías similares estrictamente necesarias para recordar preferencias de privacidad y, únicamente si usted lo autoriza, datos analíticos.', 'Información que usted proporcione voluntariamente al contactar por correo electrónico u otro canal publicado.' ] } ] },
          { h2: 'Cómo utilizamos la información', items: [ { type: 'ul', items: [ 'Mejorar el contenido, la accesibilidad y la experiencia de uso.', 'Analizar tendencias generales de tráfico cuando exista consentimiento para analítica.', 'Responder solicitudes y comunicaciones.', 'Prevenir abuso, resolver incidencias técnicas y cumplir obligaciones legales.' ] } ] },
          { h2: 'Base jurídica y consentimiento', items: [ { type: 'p', text: 'Las cookies necesarias se emplean para funciones esenciales. Las cookies analíticas no se activan por defecto: requieren una elección afirmativa en la página de configuración de cookies. Cuando el tratamiento se base en consentimiento, usted puede retirarlo en cualquier momento.' } ] },
          { h2: 'Servicios de terceros', items: [ { type: 'p', text: 'El sitio puede integrar Google Maps para mostrar ubicación, Google Analytics para medición de tráfico solo cuando usted lo autoriza y recursos fotográficos procedentes de Wikimedia Commons o Unsplash. Cada proveedor aplica sus propias condiciones y políticas de privacidad. La carga de un mapa incrustado puede implicar una conexión directa con Google.' } ] },
          { h2: 'Conservación y seguridad', items: [ { type: 'p', text: 'No mantenemos perfiles publicitarios propios ni una base de datos de usuarios. Los datos técnicos conservados por proveedores de infraestructura o analítica se rigen por sus plazos y controles. Aplicamos medidas razonables para reducir recopilación innecesaria y exposición de datos.' } ] },
          { h2: 'Sus derechos', items: [ { type: 'p', text: 'Según la normativa aplicable —incluido el Reglamento General de Protección de Datos (GDPR) cuando corresponda— usted puede solicitar acceso, rectificación, supresión, limitación u oposición al tratamiento y, cuando proceda, portabilidad. También puede retirar su consentimiento y presentar una reclamación ante la autoridad de control competente.' } ] },
          { h2: 'Menores', items: [ { type: 'p', text: 'Este sitio no está diseñado para recopilar conscientemente datos personales de menores. Si detectamos información de este tipo obtenida de forma indebida, procuraremos eliminarla.' } ] },
          { h2: 'Cambios en esta política', items: [ { type: 'p', text: 'Podemos actualizar esta política para reflejar cambios técnicos, legales o editoriales. La versión publicada en esta página será la aplicable.' } ] }
        ]
      },
      terminos: {
        eyebrow: 'Información legal',
        h1: 'Términos de servicio',
        updated: 'Última actualización: agosto de 2026',
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
        updated: 'Última actualización: agosto de 2026',
        intro: 'Usamos cookies y almacenamiento local para funciones esenciales y, si usted lo autoriza, para comprender de forma agregada cómo se utiliza el sitio. Puede cambiar su elección en cualquier momento desde esta página.',
        blocks: [
          { h2: 'Gestión del consentimiento', items: [ { type: 'p', text: 'La preferencia se guarda en el almacenamiento local de su navegador con la clave msp-cookie-preferences. Borrar los datos del sitio eliminará esta elección. Desactivar cookies o almacenamiento local puede afectar algunas funciones, pero el contenido principal seguirá siendo accesible.' } ] }
        ],
        form: {
          necessaryTitle: 'Cookies necesarias',
          necessaryBody: 'Imprescindibles para recordar su configuración de privacidad y mantener funciones básicas. No pueden desactivarse desde este panel.',
          analyticsTitle: 'Cookies analíticas',
          analyticsBody: 'Permiten activar Google Analytics para obtener estadísticas de uso agregadas. Se mantienen desactivadas hasta que usted las acepte.',
          prefsTitle: 'Cookies de preferencias',
          prefsBody: 'Permiten recordar ajustes no esenciales de interfaz en este dispositivo, como el idioma de la guía.',
          marketingTitle: 'Cookies de marketing',
          marketingBody: 'Este proyecto no utiliza publicidad personalizada ni cookies de marketing. Esta categoría permanece inactiva.',
          save: 'Guardar preferencias',
          reject: 'Rechazar lo no esencial',
          saved: 'Preferencias guardadas. Los cambios se aplicarán por completo al recargar la página.',
          rejected: 'Se han rechazado todas las cookies no esenciales.',
          prefsNote: 'El sitio ofrece guía en español e inglés; su elección de idioma se recuerda en este dispositivo.',
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
      disclaimer2: 'Attraction information is cross-checked against public sources from the Provincial Municipality of Cusco, the Cusco Regional Directorate of Foreign Trade, Tourism and Handicrafts, and Peru’s Ministry of Foreign Trade and Tourism (MINCETUR). It contains no commercial recommendations.',
      copyright: '© 2026 Cultural Guide to the San Pedro Market of Cusco. All rights reserved.',
      sub: 'Unofficial guide to the Mercado Central de San Pedro, Cusco district and province, Peru.',
      legal: [ { label: 'Privacy', key: 'privacidad' }, { label: 'Terms', key: 'terminos' }, { label: 'Cookies', key: 'cookies' } ]
    },
    home: {
      heroKicker: 'Historic market · Historic Centre of Cusco',
      heroTitle: `Mercado Central de San Pedro <span class="text-[#f1b83b]">(Cusco)</span>`,
      heroLead: 'San Pedro, the market where Cusco keeps talking. Fruit, bread, grains, herbs, everyday food and handicrafts under one great roof: a direct door into Andean daily life, just a few blocks from the city’s monumental heart.',
      heroCta1: 'Plan your visit',
      heroCta2: 'Discover its history',
      facts: {
        ingreso: { label: 'Entry', value: 'Free' },
        referencia: { label: 'Reference hours', value: '06:00–18:00', sub: 'Reference tourism inventory hours; may vary.' },
        altitud: { label: 'Altitude', value: '≈ 3,400 m' },
        direccion: { label: 'Address', value: 'Ca. Thupaq Amaru 477, Cusco' }
      },
      acerca: {
        eyebrow: 'About the attraction',
        h2: 'Welcome to the Mercado Central de San Pedro',
        p1: 'Welcome to the <strong>Mercado Central de San Pedro</strong>, widely known as <strong>Mercado San Pedro</strong>. Located in the heart of <strong>Cusco</strong>, <strong>Cusco</strong>, <strong>Peru</strong>, it is a main hub for visitors to the region and a direct door into Andean daily life.',
        hierarchy: [ 'Mercado Central de San Pedro', 'Cusco', 'Cusco', 'Peru' ],
        p2: 'While visiting the <strong>Mercado Central de San Pedro</strong>, you can easily walk to other nearby historic landmarks, including the <strong>Plazoleta e Iglesia de San Pedro</strong> and the <strong>Plaza de Armas of Cusco</strong>.'
      },
      historia: {
        eyebrow: 'History and context',
        h2: 'A modern market in a neighbourhood with centuries of memory.',
        p1: 'San Pedro is one of the traditional neighbourhoods of the historic centre of Cusco. Municipal records note that the Hospital de Naturales stood in this area from the 16th century, and the neighbourhood built its own identity around its religious, commercial and connecting spaces.',
        p2: 'In the early 20th century, authorities moved the supply activity held in the central plazas into a dedicated building. The market opened in 1925 under the municipal administration of Manuel Silvestre Frisancho, becoming the oldest covered food market in Cusco.',
        noteTitle: 'On the architectural authorship',
        noteBody: 'The popular attribution to Gustave Eiffel is widespread in guides and collaborative databases. For a rigorous guide, it is best presented as a disputed attribution, not an undisputed documented fact.',
        p3: 'The San Pedro neighbourhood also holds popular stories: it is said the market’s life is intertwined with devotion to Saint Peter — patron of fishermen and, in local imagination, also of those who walk the market aisles — and with the processions and fairs the city has kept for centuries. As in any old square, legends travel by word of mouth; we present them as popular lore, not documented history.',
        imgInside: 'Mercado Central de San Pedro - Interior with fruit stands and visitors in Cusco, Peru',
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
          [ 'Best window: morning', 'To see the supply activity, the widest variety of fresh products and a more local rhythm. Avoid rushing: the aisles can be busy.' ],
          [ 'Recommended time: 60–90 min', 'Enough to walk the main sections. Add time if you plan to eat, have a juice or chat with vendors.' ],
          [ 'Altitude and weather', 'Cusco is above 3,000 m. Walk slowly if you just arrived. The market is covered, but outside streets can be cold and rainy by season.' ],
          [ 'Money and respect', 'Bring soles and small bills. Ask before photographing people. Keep your belongings close in busy areas.' ]
        ]
      },
      clima: {
        eyebrow: 'Live weather',
        h2: 'Today’s weather in Cusco and the multi-day forecast.',
        lead: 'Cusco is above 3,000 m: mornings can be cold and sunny, afternoons variable by season. Check the current condition and forecast before you head out.',
        loading: 'Loading current weather…',
        error: 'We could not get the weather right now. You can check the forecast in your usual app before leaving.',
        now: 'Now',
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
          [ 'By city bus', 'Several RTU/RTI routes pass Calle Nueva, Concevidayoc, Santa Clara and Av. del Ejército, a few minutes’ walk away. The network can change; check signage and destination with the driver or an updated local source.' ],
          [ 'By taxi', 'Say “Mercado de San Pedro” or “Plazoleta San Pedro”. In congested hours, it can be more efficient to get off a few blocks away and walk the rest. Agree the fare when appropriate and use authorised services.' ],
          [ 'On foot and by train', 'From the Plaza de Armas the walk is short, via Mantas, Marqués and Santa Clara. The San Pedro train station is in front of / beside the market area and serves as an urban reference.' ]
        ],
        note: 'Times and routes depend on traffic, works and operational changes. For rail or airport connections, always verify the operator’s information before travelling.'
      },
      servicios: {
        eyebrow: 'Useful services, no commercial recommendations',
        h2: 'What helps to know around the market.',
        cards: [
          [ 'Toilets and washrooms', 'Look for signed sanitary facilities inside or in nearby public buildings. Coins and hand sanitiser can be handy.' ],
          [ 'Parking', 'The historic centre has narrow streets, traffic rules and limited parking. If you drive, prefer formal perimeter parking and continue on foot.' ],
          [ 'Food', 'Inside the market there are food, bread, juice and fresh-produce sections. For food safety, choose stalls with high turnover, clean surfaces and well-cooked food.' ],
          [ 'Lodging', 'Central Cusco offers many lodging categories. Compare location, accessibility, policies and records on official or independent platforms; this guide does not recommend specific establishments.' ],
          [ 'Shopping and groceries', 'The market itself is a large supply centre. On neighbouring streets you will find shops and convenience stores; avoid regulated or dubious-origin products.' ],
          [ 'Fuel and charging', 'Fuel stations sit mainly outside the most walkable core. Charging points for electric vehicles are even rarer; plan charging ahead.' ]
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
          { eyebrow: 'Entry and costs', title: 'No entry ticket', body: 'The market is a supply space with free entry. Budget only for what you consume and buy. We avoid publishing exact prices because they change with product, season and stall.' },
          { eyebrow: 'Responsible shopping', title: 'Ask, compare, respect.', body: 'Ask the price before ordering, do not handle food without permission and avoid pressuring for photos. If you buy handicrafts, ask about materials and origin.' },
          { eyebrow: 'Practical safety', title: 'Mind your belongings.', body: 'As in any busy market, use a closed bag, avoid showing valuables and pay extra attention when crossing streets around the venue.' }
        ]
      },
      ubicacion: {
        eyebrow: 'Location',
        h2: 'Mercado Central de San Pedro',
        addr: 'Ca. Thupaq Amaru 477, Cusco 08002, Peru',
        mapsCta: 'Open in Google Maps',
        govtText: 'For official news and regional tourism information, visit the',
        govtName: 'Peru / Cusco Official Tourism Portal'
      },
      faq: {
        eyebrow: 'Frequently asked questions',
        h2: 'Before you go',
        items: [
          [ 'Where is the Mercado Central de San Pedro located?', 'The Mercado Central de San Pedro is at Ca. Thupaq Amaru 477, Cusco, Cusco, Peru (F2H8+JW Cusco), a few blocks’ walk from the Plaza de Armas.' ],
          [ 'What is the Mercado de San Pedro?', 'Mercado San Pedro is the usual name for the Mercado Central de San Pedro, the oldest covered food market in Cusco, in the traditional San Pedro neighbourhood.' ],
          [ 'Is there a fee to enter the Mercado San Pedro?', 'No. Entry to the market is free. Food, handicrafts and other products are paid directly at each stall.' ],
          [ 'What is the best time to visit?', 'The morning usually offers the fullest read of daily activity and fresh products. If you want to eat there, late morning to early afternoon is practical.' ],
          [ 'How long should I stay?', 'Plan 60 to 90 minutes to walk the aisles calmly; add time if you sit down to eat or talk with vendors.' ],
          [ 'Can I photograph inside?', 'Yes, but out of respect it is best to ask permission before photographing people or close-ups of stalls.' ],
          [ 'Should I bring cash?', 'Yes. In a traditional market many payments are still in soles and not all stalls accept cards. Small bills make small purchases easier.' ],
          [ 'Are there toilets and basic services?', 'The market area has urban and sanitary services, but availability, access and conditions can vary. Confirm on site and bring change.' ],
          [ 'Is it close to the historic centre?', 'Yes. It is in the traditional San Pedro neighbourhood, within the Historic Centre of Cusco and a short walk from the monumental core.' ],
          [ 'How does altitude affect the visit?', 'The market is in Cusco, above 3,000 m. Walk at an easy pace, hydrate and avoid overexertion if you are not yet acclimatised.' ]
        ]
      },
      fuentes: {
        h2: 'Sources and editorial criteria',
        lead: 'This sheet was built by cross-checking MINCETUR’s National Tourism Resources Inventory, the Historic Centre catalogue of the Provincial Municipality of Cusco, and public mobility sources. Hours, routes and services can change; critical data should be verified before travelling.',
        photos: 'Photographs: façade — Ordzonhyd Rudyard Tarco Palomino / Wikimedia Commons (CC BY 4.0); juices — sergejf / Wikimedia Commons (CC BY 2.0); interior — Ashim D’Silva / Unsplash, file on Wikimedia Commons (CC0).'
      }
    },
    seasonal: {
      eyebrow: 'When to go',
      h2: 'Season-by-season visiting strategy.',
      lead: 'The Cusco Andes have two main seasons. Figures are long-term climate averages (30-year normals) for orientation only; check the real forecast before each trip.',
      cols: [ 'Season', 'Months', 'Typical climate', 'Day / night', 'For visiting the market', 'Recommendations' ],
      rows: [
        { epoca: 'Dry season', epocaSub: 'austral winter', meses: 'May – September', clima: 'Mostly clear, sunny days; clean skies, better visibility for photos. Little rain.', diaNoche: '18–21 °C / 0–5 °C', mercado: 'The best window: dry streets, fewer rain interruptions and a comfortable walk between market and centre.', recom: 'Warm layers for morning and night. Strong high-altitude sun: sunscreen and hat.' },
        { epoca: 'Rainy season', epocaSub: 'austral summer', meses: 'October – April (Dec–Feb wettest)', clima: 'Often clear mornings; afternoon rain, cloud and wet ground. January and February are usually the wettest.', diaNoche: '19–22 °C / 7–10 °C', mercado: 'Go early: walk the market in the morning and keep the afternoon free in case it rains. The covered market shields you from rain.', recom: 'Non-slip footwear, umbrella or raincoat and a sturdy bag for shopping.' },
        { epoca: 'Transition months', epocaSub: '', meses: 'April, October', clima: 'Variable weather, less extreme than each season’s peak. Good days for those who prefer fewer crowds.', diaNoche: '18–21 °C / 4–8 °C', mercado: 'A balance of sun and rain; bring both clothing options.', recom: 'Layer up: cold morning, mild midday.' }
      ],
      noteTitle: 'Altitude and climate reading',
      noteBody: 'Cusco is about 3,400 m above sea level. Solar radiation is intense during the day and nights can be cold all year. The difference between the covered market’s climate and the outside streets is notable: plan your walks with margin for sun, rain and cold.'
    },
    itineraries: {
      eyebrow: 'How to walk it',
      h2: 'Itineraries by visitor type.',
      lead: 'The Mercado San Pedro is walked on foot and pairs well with the historic spaces of the San Pedro neighbourhood and Cusco’s monumental core. These are suggestions that adapt to each person’s pace.',
      cards: [
        { eyebrow: 'Families with children', title: 'Short walk with breaks', items: [ 'Enter in the morning, when there is more variety and fewer crowds.', 'Prioritise the fruit, juice and bread sections: visual and tasting activities.', 'Plan a meal stop inside the market (cooked dishes, broths).', 'Bring small cash and a change of clothes if it rains.' ], time: 'Suggested time: 60–90 min' },
        { eyebrow: 'Photography and nature', title: 'Early light and detail', items: [ 'Best light is usually 08:00–10:30; ask permission before photographing people.', 'Look for textures: Andean grains, herbs, fruit and the play of light on the roof.', 'Climb toward the Plazoleta e Iglesia de San Pedro to frame the market and surroundings.', 'Combine with the Plaza de Armas for wider urban shots.' ], time: 'Suggested time: 90–120 min' },
        { eyebrow: 'Reduced mobility / low effort', title: 'Slow and unhurried', items: [ 'The market is covered and level with the street; avoid peak hours.', 'Spot benches or rest areas and a fixed meeting point.', 'Use main aisles and avoid carrying heavy loads.', 'Hydrate and walk slowly because of the altitude.' ], time: 'Suggested time: 45–75 min' }
      ],
      rutasTitle: 'Suggested routes',
      rutas: [
        { eyebrow: 'Half day', title: 'Market + San Pedro core', items: [ 'Andean products and juices at the Mercado San Pedro (60–90 min).', 'Eat or have a juice inside the market.', 'Walk out to the Plazoleta e Iglesia de San Pedro and its urban front.', 'Short walk via Santa Clara to the Arco San Francisco.' ], time: 'Total: about 3–4 h, on foot' },
        { eyebrow: 'Full day', title: 'Market + monumental centre', items: [ 'Morning at the Mercado San Pedro and the Plazoleta e Iglesia de San Pedro (90–120 min).', 'Santa Clara – Arco San Francisco corridor toward the centre.', 'Lunch around the historic centre (Cusqueñan cuisine, daily menus).', 'Afternoon at the Plaza de Armas, cathedral and side streets.', 'Calm return to the San Pedro neighbourhood at dusk.' ], time: 'Total: about 6–7 h, on foot with breaks' }
      ],
      note: 'Distances and times depend on traffic, crowding and weather. Adjust the route to the group’s pace and leave margin to rest for altitude.'
    },
    responsibility: {
      eyebrow: 'Science and responsible visiting',
      h2: 'Understand the place, care for it when you visit.',
      lead: 'The Mercado Central de San Pedro is a living supply space, not a museum. Knowing a little of its physical and social context helps make the visit more respectful and safe.',
      cards: [
        { title: 'Altitude and Andean climate', body: 'Cusco is about 3,400 m above sea level. Air pressure is lower and physical effort feels greater. UV radiation is high during the day, even when cold. Walk slowly the first days, drink water and use sun protection.' },
        { title: 'Pantry ecology', body: 'The market gathers products from different ecological floors: native potatoes, corn, quinoa and tubers from high zones, and fruit from warmer valleys. Observing that diversity is a direct way to understand Andean agriculture.' },
        { title: 'Acclimatisation and energy', body: 'The body takes days to adjust to altitude. Avoid overexertion, alcohol and heavy meals on arrival. A short, slow walk through the market is a good first adjustment activity.' },
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
        intro: 'The Mercado Central de San Pedro opens early and closes in the late afternoon. It is a covered food market a couple of blocks from the Plaza de Armas, in the traditional San Pedro neighbourhood.',
        facts: [
          { label: 'Reference hours', value: '06:00 – 18:00', sub: 'Reference tourism inventory; stalls and sections may vary.' },
          { label: 'Entry', value: 'Free', sub: 'No entry ticket.' },
          { label: 'Altitude', value: '≈ 3,400 m' },
          { label: 'Address', value: 'Ca. Thupaq Amaru 477, Cusco 08002' }
        ],
        sections: [
          { id: 'best-time', eyebrow: 'When to go', h2: 'Best time of day', lead: 'The morning is the fullest window to see the supply activity and the widest variety of fresh products.', body: [ 'Late morning to early afternoon is practical if you plan to sit and eat inside the market.', 'Avoid rushing: the aisles can be crowded, especially in high season.' ] },
          { id: 'getting-there', eyebrow: 'How to get there', h2: 'Ways to arrive', cards: [ [ 'From the airport', 'From Alejandro Velasco Astete International Airport, a taxi or app is usually most direct. Urban public transport also connects with the centre.' ], [ 'By city bus', 'Several routes pass nearby, via Calle Nueva, Santa Clara and Av. del Ejército. Confirm the current route with the driver.' ], [ 'On foot', 'From the Plaza de Armas it is a short walk via Mantas, Marqués and Santa Clara.' ], [ 'By train', 'The San Pedro train station is in front of the market area and serves as a reference.' ] ] },
          { id: 'altitude', eyebrow: 'Altitude and weather', h2: 'Visit calmly at altitude', body: [ 'Cusco is above 3,000 m. Walk slowly if you just arrived.', 'The market is covered, but outside streets can be cold and rainy by season.' ] }
        ],
        faqTitle: 'Before you go',
        faqEyebrow: 'Frequently asked questions',
        faq: [
          [ 'What time does the Mercado San Pedro open?', 'As a reference tourism inventory, hours are 06:00–18:00. Stalls and sections may open or close at other times.' ],
          [ 'Is there a fee to enter?', 'No. Entry is free; you pay for what you consume or buy at each stall.' ],
          [ 'Is it far from the Plaza de Armas?', 'No. It is a couple of blocks away, in the San Pedro neighbourhood, within the Historic Centre of Cusco.' ],
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
          { id: 'buy', eyebrow: 'Shop', h2: 'What to take home', cards: [ [ 'Alpaca textiles', 'Alpaca-fibre weavings and garments; ask about materials and origin.' ], [ 'Andean grains', 'Native potatoes, corn, quinoa and chuño connect with the region’s agriculture.' ], [ 'Herbs and coca', 'Medicinal plants and coca leaf are part of Andean practices; use them with judgement.' ], [ 'Handicrafts and objects', 'Symbolic-use objects and local handicrafts help explain cultural continuity.' ] ] },
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
          [ 'Is the Mercado San Pedro safe?', 'It is a lively, busy market. With basic care for your belongings and attention to traffic, the visit is relaxed.' ],
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
        updated: 'Last updated: August 2026',
        intro: 'This cultural guide is an independent, non-profit information project. We apply the data-minimisation principle: we process only the information needed to operate, protect and improve the site.',
        blocks: [
          { h2: 'Information we may collect', items: [ { type: 'ul', items: [ 'Technical browsing data such as IP address, browser type, operating system, pages visited, approximate access date and diagnostic data.', 'Strictly necessary cookies or similar technologies to remember privacy preferences and, only if you authorise it, analytics data.', 'Information you voluntarily provide when contacting us by email or another published channel.' ] } ] },
          { h2: 'How we use the information', items: [ { type: 'ul', items: [ 'Improve content, accessibility and the user experience.', 'Analyse general traffic trends when there is consent for analytics.', 'Respond to requests and communications.', 'Prevent abuse, resolve technical incidents and meet legal obligations.' ] } ] },
          { h2: 'Legal basis and consent', items: [ { type: 'p', text: 'Necessary cookies are used for essential functions. Analytics cookies are not enabled by default: they require an affirmative choice on the cookie settings page. When processing is based on consent, you may withdraw it at any time.' } ] },
          { h2: 'Third-party services', items: [ { type: 'p', text: 'The site may embed Google Maps to show location, Google Analytics for traffic measurement only when you authorise it, and photographic resources from Wikimedia Commons or Unsplash. Each provider applies its own terms and privacy policy. Loading an embedded map may involve a direct connection to Google.' } ] },
          { h2: 'Retention and security', items: [ { type: 'p', text: 'We keep no own advertising profiles or user database. Technical data retained by infrastructure or analytics providers is governed by their periods and controls. We apply reasonable measures to reduce unnecessary collection and data exposure.' } ] },
          { h2: 'Your rights', items: [ { type: 'p', text: 'Under applicable law — including the General Data Protection Regulation (GDPR) where relevant — you may request access, rectification, erasure, restriction or objection to processing and, where applicable, portability. You may also withdraw consent and lodge a complaint with the competent supervisory authority.' } ] },
          { h2: 'Minors', items: [ { type: 'p', text: 'This site is not designed to knowingly collect personal data from minors. If we detect such information obtained improperly, we will seek to delete it.' } ] },
          { h2: 'Changes to this policy', items: [ { type: 'p', text: 'We may update this policy to reflect technical, legal or editorial changes. The version published on this page will apply.' } ] }
        ]
      },
      terminos: {
        eyebrow: 'Legal information',
        h1: 'Terms of service',
        updated: 'Last updated: August 2026',
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
        updated: 'Last updated: August 2026',
        intro: 'We use cookies and local storage for essential functions and, if you authorise it, to understand aggregated site usage. You can change your choice at any time from this page.',
        blocks: [
          { h2: 'Consent management', items: [ { type: 'p', text: 'The preference is stored in your browser’s local storage under the key msp-cookie-preferences. Clearing site data will remove this choice. Disabling cookies or local storage may affect some functions, but the main content remains accessible.' } ] }
        ],
        form: {
          necessaryTitle: 'Necessary cookies',
          necessaryBody: 'Essential to remember your privacy settings and keep basic functions. They cannot be disabled from this panel.',
          analyticsTitle: 'Analytics cookies',
          analyticsBody: 'Enable Google Analytics for aggregated usage statistics. They stay disabled until you accept them.',
          prefsTitle: 'Preference cookies',
          prefsBody: 'Remember non-essential interface settings on this device, such as the guide’s language.',
          marketingTitle: 'Marketing cookies',
          marketingBody: 'This project uses no personalised advertising or marketing cookies. This category stays inactive.',
          save: 'Save preferences',
          reject: 'Reject non-essential',
          saved: 'Preferences saved. Changes will fully apply after reloading the page.',
          rejected: 'All non-essential cookies have been rejected.',
          prefsNote: 'The site offers the guide in Spanish and English; your language choice is remembered on this device.',
          consentTitle: 'Consent management',
          consentBody: 'The preference is stored in your browser’s local storage under the key msp-cookie-preferences.',
          key: 'msp-cookie-preferences'
        }
      }
    }
  }
};

export type { SubPage, LegalDoc, GuideContent };
