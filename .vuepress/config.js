const baseURL =
  process.env.DEPLOY_ENV_DOCS === 'GH_PAGES'
    ? {
        base: '/GUIDELINES/'
      }
    : {};

const nav = {
  nav: [
    {
      text: 'StyleGuides',
      link: '/styleguides/'
    },
    {
      text: 'Reglas',
      link: '/rules/'
    },
    {
      text: 'Formatos',
      link: '/formats/'
    },
    {
      text: 'Tecnologías',
      link: '/technology/'
    },
    {
      text: 'Herramientas',
      link: '/tools/'
    },
    {
      text: 'GitHub',
      link: 'https://github.com/baesparza/GUIDELINES/'
    }
  ]
};

const sidebar = {
  sidebar: {
    '/styleguides/': [
      {
        title: 'Estándares de Programación',
        collapsable: false,
        children: ['git', 'database', 'document', 'frontend', 'api']
      }
    ]
  }
};

const git = {
  repo: 'baesparza/GUIDELINES',

  repoLabel: 'Contribuye!',

  docsDir: '.',

  docsBranch: 'master',

  editLinks: true,

  editLinkText: 'Ayudanos a mejorar esta pagina!'
};

const serviceWorker = {
  serviceWorker: {
    updatePopup: {
      message: 'Hay una nueva version disponible.',
      buttonText: 'Actualizar'
    }
  }
};

const themeConfig = {
  themeConfig: {
    home: true,

    logo: '/logo.png',

    ...nav,

    lastUpdated: 'Last Updated',

    ...sidebar,

    ...serviceWorker,

    ...git
  }
};

module.exports = {
  title: 'Guidelines',
  description: 'Guiás del Laboratorio Ascendere',

  serviceWorker: true,

  dest: 'dist',

  ...baseURL,

  ...themeConfig,

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ]
};
