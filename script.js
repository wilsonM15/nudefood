  
  /*================LOADING SCREEN================*/
  
  // This waits for the entire page to load
  
  window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
  
    // Simulate a delay before hiding the loading screen (e.g., 3 seconds)
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
  });
  
  
  
  
  
  
  
  /*=====================LANGUAGES TRANSLATOR=================*/
  
  // Add event listener to language switcher
    const translations = {
        en: {
            nav:"About",
            title: "",
            description: "Where every sip is an experience, and every moment feels like the best day of summer. We’re not just about great coffee; we serve delicious, healthy food that nourishes your body while delighting your taste buds. Vibrant, fresh, and full of life, NUDE is your charming escape!",
            text: "Swing by for a coffee or savor a healthy meal",
            opening: "Opening hours 9am to 4pm Monday to Friday",
            social: "Social media",
            fr_visit:"Visit us",
            fr_call:"Call",
            fr_location:"Location",
            fr_coffee:"Coffee",
        },
        fr: {
            nav:"À propos",
            title: "",
            description: "Bienvenue chez NUDE Coffee Shop – où chaque gorgée est une expérience, et chaque moment ressemble au meilleur jour d'été. Nous ne nous contentons pas de servir un excellent café ; nous proposons une nourriture délicieuse et saine qui nourrit votre corps tout en régalant vos papilles. Dynamique, frais et plein de vie, NUDE est votre charmante escapade !",
            text: "Passez pour un café ou savourez un repas sain.",
            opening: "Horaires d'ouverture de 9h à 16h du lundi au vendredi",
            social: "Réseaux sociaux",
            fr_visit:"Visitez-nous",
            fr_call:"Appellez-nous",
            fr_location:"Adresse",
            fr_coffee:"Café",
        }
    };




    function switchLanguage(lang) {
        // Update both title and description
        document.getElementById('nav').innerText = translations[lang].nav;
        document.getElementById('title').innerText = translations[lang].title;
        document.getElementById('description').innerText = translations[lang].description;
        document.getElementById('text').innerText = translations[lang].text; 
        document.getElementById('opening').innerText = translations [lang].opening;
        document.getElementById('social').innerText = translations [lang].social;// Add this line to update the text
        document.getElementById('fr_visit').innerText = translations[lang].fr_visit; // Add this line to update the text
        document.getElementById('fr_call').innerText = translations[lang].fr_call; // Add this line to update the text
        document.getElementById('fr_location').innerText = translations[lang].fr_location; // Add this line to update the text
        document.getElementById('fr_coffee').innerText = translations[lang].fr_coffee; // Add this line to update the text
 
    }

