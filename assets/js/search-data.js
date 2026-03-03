// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of projects I have done over time",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-papers",
          title: "papers",
          description: "A collection of cool and interesting papers I have read over time",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "post-markovian-bikes",
        
          title: "Markovian Bikes",
        
        description: "Modeling Citibike station transitions using Markov chains.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/citibike-markov/";
          
        },
      },{id: "post-attention-is-all-you-need",
        
          title: "Attention Is All You Need",
        
        description: "The paper that introduced the Transformer architecture, replacing RNNs with self-attention.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/attention-is-all-you-need/";
          
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/curtisjchen", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/curtisjchen", "_blank");
        },
      },{
        id: 'social-strava',
        title: 'Strava',
        section: 'Socials',
        handler: () => {
          window.open("https://www.strava.com/athletes/111371507", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
