// Function to dynamically inject stylesheets into <head>
function injectLinks() {
  const head = document.head;

  // Array of links to inject
  const links = [
    // GOOGLE FONT MONTSERRAT
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
    },
    // GOOGLE ICONS
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    },
    // SWIPER  JS
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
    },
    // FONT AWESOME FOR SOCIAL MEDIA ICONS -->
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    },
  ];

  // Inject each link
  links.forEach((linkInfo) => {
    const link = document.createElement("link");
    Object.keys(linkInfo).forEach((key) => {
      link[key] = linkInfo[key];
    });
    head.appendChild(link);
  });
}

// Call the function
injectLinks();
