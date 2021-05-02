import {
  pomodoro,
  delibery,
  todo,
  ahorcado,
  sion,
  payment,
  lirycs,
  weather,
} from '../img/proyects/';
import {
  html,
  css,
  js,
  webpack,
  git,
  react,
  hooks,
  redux,
  bootstrap,
  materialui,
  styled,
  node,
  express,
  mongo,
  ps,
  hand,
  ai,
  wordpress,
  xd,
  prototype,
  designT,
} from '../img/skills';

export const resume = {
  habilidades: {
    basics: [
      {
        icon: `${html}`,
        title: 'HTML',
      },
      {
        icon: `${css}`,
        title: 'CSS',
      },
      {
        icon: `${js}`,
        title: 'JAVASCRIPT',
      },
      {
        icon: `${webpack}`,
        title: 'WEBPACK',
      },
      {
        icon: `${bootstrap}`,
        title: 'BOOTSTRAP',
      },
      {
        icon: `${git}`,
        title: 'GIT/GITHUB',
      },
    ],
    dgWeb: [
      {
        icon: `${ps}`,
        title: 'PHOTOSHOP',
      },
      {
        icon: `${ai}`,
        title: 'ILLUSTRATOR',
      },
      {
        icon: `${hand}`,
        title: 'SKETCH',
      },
      {
        icon: `${wordpress}`,
        title: 'WORDPRESS',
      },
    ],
    uxui: [
      {
        icon: `${xd}`,
        title: 'ADOBE XD',
      },
      {
        icon: `${prototype}`,
        title: 'PROTOTIPOS',
      },
      {
        icon: `${designT}`,
        title: 'DESIGN THINKING',
      },
    ],
    node: [
      {
        icon: `${node}`,
        title: 'NODE JS',
      },
      {
        icon: `${express}`,
        title: 'EXPRESS',
      },
      {
        icon: `${mongo}`,
        title: 'MONGO DB',
      },
    ],
    react: [
      {
        icon: `${hooks}`,
        title: 'HOOKS',
      },
      {
        icon: `${redux}`,
        title: 'REDUX',
      },
      {
        icon: `${react}`,
        title: 'ROUTER',
      },
      {
        icon: `${bootstrap}`,
        title: 'REACT BOOTSTRAP',
      },
      {
        icon: `${materialui}`,
        title: 'MATERIAL UI',
      },
      {
        icon: `${styled}`,
        title: 'STYLED COMPONENTS',
      },
    ],
  },
  formacion: [
    {
      id: 2,
      date: '2020 - hoy',
      title: 'Bootcamp Fullstack Javascript',
      institution: 'NUCBA',
      certified: false,
    },
    {
      id: 3,
      date: '2019 - hoy',
      title: 'Cursos varios',
      institution: 'Udemy',
      certified: true,
      link:
        'https://drive.google.com/drive/folders/1X6f4Eoij-TWS7BbEy2P9LzN8TjVmGE0N?usp=sharing',
    },
    {
      id: 4,
      date: '2020',
      title: 'Trabajo en entornos colaborativos',
      institution: 'CIVET',
      certified: true,
      link:
        'https://drive.google.com/file/d/1xea3zYK25cS6Vn9vIJIM8mRZAuuk6cpE/view?usp=sharing',
    },
    {
      id: 5,
      date: '2020',
      title: 'Javascript y Estructuras de Datos',
      institution: 'Free-code-camp',
      certified: true,
      link:
        'https://drive.google.com/file/d/12N1QDO16-wKAgXXSaHfroOLpQG66TmGd/view?usp=sharing',
    },
    {
      id: 6,
      date: '2020',
      title: 'Aprende Wordpress',
      institution: 'Fundación Telefónica Movistar',
      certified: true,
      link:
        'https://drive.google.com/file/d/1qQm7dF2PBLpJhBrIyMRKK24-5-PDY9gH/view?usp=sharing',
    },
    {
      id: 7,
      date: '2019',
      title: 'Bootcamp Frontend Javascript',
      institution: 'Fundación Telefónica Movistar',
      certified: true,
      link:
        'https://drive.google.com/file/d/12oNr7ZzSCZSVhDbIPnP1TlFTVZAy7cih/view?usp=sharing',
    },
    {
      id: 8,
      date: '2017 - 2019',
      title: 'Profesional Gastronómico',
      institution: 'IAG Martinez',
      certified: false,
    },
    {
      id: 9,
      date: '2010 - 2016',
      title: 'Diseño Gráfico',
      institution: 'FADU UBA',
      certified: false,
    },
    {
      id: 10,
      date: '2001 - 2008',
      title: 'Técnico Electricista',
      institution: 'EPET N°11',
      certified: true,
      link:
        'https://drive.google.com/file/d/1n2RogodpkoASNSgyYuHQbVmYbcwHWgaE/view?usp=sharing',
    },
  ],
  experiencia: [
    {
      id: 1,
      title: 'Diseñador Gráfico / pre-prensa',
      place: 'Pneuma SRL',
      date: '2018 - 2019',
    },
  ],
};

export const proyects = [
  {
    title: 'Weather Node',
    description:
      'Sencilla y vistosa App, utilizando node conectada a una api que muestra datos climáticos.',
    photo: `${weather}`,
    link1: 'https://weather-dam.herokuapp.com/',
    link2: 'https://github.com/dam788/app-clima-node',
    tecnology: ['Node JS'],
  },
  {
    title: 'Pomodoro React',
    description:
      'Sencilla cuenta regresiva, pueden setearse los valores y parar cuando sea necesario.',
    photo: `${pomodoro}`,
    link1: 'https://pomodoro-dam.netlify.app/',
    link2: 'https://github.com/dam788/Pomodoro/tree/main/src',
    tecnology: ['React JS'],
  },
  {
    title: 'Delibery Foods',
    description:
      'Interfaz de App de comidas rápidas construida en React Hooks y Redux. ',
    photo: `${delibery}`,
    link1: 'https://delibery-app-dam.netlify.app/',
    link2: 'https://github.com/dam788/deliberyApp',
    tecnology: ['React JS'],
  },
  {
    title: 'React TodoList',
    description:
      'Sencilla App para agregar tareas, tachar y borrarlas, creada con React Redux. ',
    photo: `${todo}`,
    link1: 'https://todo-list-dam.netlify.app/',
    link2: 'https://github.com/dam788/reactTodoList',
    tecnology: ['React JS'],
  },
  {
    title: 'Juego Ahorcado',
    description:
      'Ingresa una palabra para que la adivine alguien mas. Solo puede jugarse en PC, con teclado.',
    photo: `${ahorcado}`,
    link1: 'https://ahorcado-juego-dam.netlify.app/',
    link2: 'https://github.com/dam788/ahorcado',
    tecnology: ['Javascript'],
  },
  {
    title: 'Página Web SION GRAFIX',
    description:
      'Una Página Web Porfolio de un cliente construida con HTML, CSS, Javascript, PHP y Bootstrap',
    photo: `${sion}`,
    link1: 'https://sion-muestra.netlify.app/',
    link2: 'https://github.com/dam788/paginaSION',
    tecnology: ['Bootstrap', 'Maquetado'],
  },
  {
    title: 'Data payment',
    description:
      'Maqueta de pasarela de pago, hecha en css grid y flexbox. No funcional.',
    photo: `${payment}`,
    link1: 'https://ui-payment.netlify.app/',
    link2: 'https://github.com/dam788/uiPayment',
    tecnology: ['Maquetado'],
  },
  {
    title: 'Buscador de Letras',
    description:
      'Un buscador de letras de temas de artistas musicales, con una vista previa del tema.',
    photo: `${lirycs}`,
    link1: 'https://music-find-lyrics-dam.netlify.app/',
    link2: 'https://github.com/dam788/fetch-find-lyrics-morales',
    tecnology: ['Javascript'],
  },
];

export const filters = [
  'Bootstrap',
  'Javascript',
  'Maquetado',
  'Node JS',
  'React JS',
];
