// Utility functions for Next.js routing
export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'About': '/about',
    'Products': '/products',
    'Manufacturing': '/manufacturing',
    'Research': '/research',
    'Contact': '/contact',
    'News': '/news',
    'Careers': '/careers'
  };
  
  return routes[pageName] || '/';
};

export const getPageTitle = (pageName) => {
  const titles = {
    'Home': 'Vubrix Pharma - APIs & Intermediates',
    'About': 'About Us - Vubrix Pharma',
    'Products': 'Products - Vubrix Pharma',
    'Manufacturing': 'Manufacturing Capabilities - Vubrix Pharma',
    'Research': 'Research & Development - Vubrix Pharma',
    'Contact': 'Contact Us - Vubrix Pharma',
    'News': 'Latest News - Vubrix Pharma',
    'Careers': 'Careers - Vubrix Pharma'
  };
  
  return titles[pageName] || 'Vubrix Pharma';
};
