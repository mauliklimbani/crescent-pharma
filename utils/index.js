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
    'Home': 'Crescent Pharma - APIs & Intermediates',
    'About': 'About Us - Crescent Pharma',
    'Products': 'Products - Crescent Pharma',
    'Manufacturing': 'Manufacturing Capabilities - Crescent Pharma',
    'Research': 'Research & Development - Crescent Pharma',
    'Contact': 'Contact Us - Crescent Pharma',
    'News': 'Latest News - Crescent Pharma',
    'Careers': 'Careers - Crescent Pharma'
  };
  
  return titles[pageName] || 'Crescent Pharma';
};
