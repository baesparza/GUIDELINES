const baseURL = {
  base: '/GUIDELINES/'
  };

const nav = {
  nav: [
    {
      text: 'Buenas Practicas',
      link: '/guidelines/'
    },
    {
      text: 'GitHub',
      link: 'https://github.com/InDevelopmentCompany/Ascendere-Platform/'
    }
  ]
};

const sidebar = {
  sidebar: {
    '/guidelines/': [
      {
        title: 'Buenas Practicas',
        collapsable: false,
        children: ['git', 'database', 'document', 'frontend', 'api', 'angular', 'python']
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

    logo: 'https://innovaciondocente.utpl.edu.ec/assets/images/AscendereLogo.svg',

    ...nav,

    lastUpdated: 'Last Updated',

    ...sidebar,

    ...serviceWorker,

    ...git
  }
};

module.exports = {
  title: 'Buenas Practicas',
  description: 'Buenas Practicas para trabajar en proyectos del Laboratorio Ascendere.',

  serviceWorker: true,

  dest: 'dist',

  ...baseURL,
  
  ...themeConfig
};
