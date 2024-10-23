  
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
    fr: {
        en_title: "Notre Menu",
        en_food: "NOURRITURE",
        tr_price: "Petit 10,90€ Grand 12,90€",
        tr_1st_dish:"Vinaigre de riz, saumon frais, concombre, edamame, chou, avocat & mangue +1€",
        tr_2nd_dish:"Vinaigre de riz, crème de thon maison, concombre, edamame, chou, avocat & mangue",
        tr_3rd_dish:"Vinaigre de riz, poulet teriyaki, concombre, carotte, chou, avocat, mangue & herbes",
        tr_price_2nd:"Petit 10,90€ Grand 12,90€",
        tr_4th_dish:"Mesclun, tomate, concombre, poivron, feta, olives Kalamata & oignons rouges",
        tr_5th_dish:"Mesclun, creme de thon maison, avocat, concombre, edamame, poivrons & olives",
        tr_6th_dish:"Mesclun, poulet teriyaki, avocat, mangue, tomates, concombre, carotte, chou & oignons frits",
        tr_7th_dish:"Mesclun, avocat, concombre, carotte, chou, tomate, poivrons, olives Kalamata & oignons rouges",
        tr_8th_dish:"Pain aux céréales, poulet teriyaki, pickles de carottes, concombre, sauce curry mangue, oignons frits & coriandre",
        tr_9th_dish:"Pain aux céréales, crème de thon maison, pickles de carottes, concombre, oignons frits & coriandre",

        tr_1st_treat:"Pulpe d’açaí glacée, banane, beurre de cacahuète, granola maison, fruits",
        tr_2nd_treat:"Salade de fruits",
        tr_3rd_treat:"Banana bread comme chez mamie",
        tr_4th_treat:"Yaourt grec, miel, granola maison, banane & fruits rouges",
        tr_5th_treat:"Fais Maison",

        tr_1st_smoothie:"Pulpe d’açaí du Brésil, banane, myrtilles, lait de coco",
        tr_2nd_smoothie:"Banane, avoine, datte, lait d’avoine",
        tr_3rd_smoothie:"Épinard, banane, ananas, eau de coco",
        tr_4th_smoothie:"Ananas, mangue, banane, lait de coco & spiruline",
        tr_5th_smoothie:"Épinard, banane, eau de coco & charbon actif",
        tr_6th_smoothie:"Ananas, citron vert, lait de coco & Collagen",
        tr_7th_smoothie:"Espresso shot, cacao pure, banane, datte, lait d'amande",

        tr_1st_shake:"Protein powder, banane, peanut butter, lait d'avoine",
        tr_2nd_shake:"Protein powder, banane, lait de coco, coco râpée",

        tr_1st_juice:"Carotte, orange, citron",
        tr_2nd_juice:"Pomme Granny Smith, citron vert, gingembre",
        tr_3rd_juice:"omme Granny Smith, celeri, concombre, citron vert",
        tr_4th_juice:" Pamplemousse, orange, citron",
        tr_5th_juice:"Ananas, pomme Granny Smith, menthe, citron vert",
        tr_6th_juice:" Carotte, orange, pomme, gingembre",
        tr_7th_juice:" Celeri, épinard, concombre, citron, gingembre",
        tr_8th_juice:"Pomme Granny Smith, pamplemousse, gingembre",

        tr_coffee_title:"CAFE",

        tr_milk:"Lait vegetaux +1€",
        tr_ice:"Make it ice +1€"
     



        
        
    },
    en: {
        en_title: "Our Menu",
        en_food: "FOOD",
        tr_price: "Small 10,90€ Large 12,90€",
        tr_1st_dish:" Rice vinegar, fresh salmon, cucumber, edamame, cabbage, avocado & mango +1€",
        tr_2nd_dish:"Rice vinegar, homemade tuna cream, cucumber, edamame, cabbage, avocado & mango",
        tr_3rd_dish:"Rice vinegar, teriyaki chicken, cucumber, carrot, cabbage, avocado, mango & herbs",
        tr_price_2nd:"Small 10,90€ Large 12,90€",
        tr_4th_dish:"Mixed greens, tomato, cucumber, pepper, feta, Kalamata olives & red onions",
        tr_5th_dish:"Mixed greens, homemade tuna cream, avocado, cucumber, edamame, peppers & olives",
        tr_6th_dish:"Mixed greens, teriyaki chicken, avocado, mango, tomatoes, cucumber, carrot, cabbage & fried onions",
        tr_7th_dish:"Mixed greens, avocado, cucumber, carrot, cabbage, tomato, peppers, Kalamata olives & red onions",
        tr_8th_dish:"Cereal bread, teriyaki chicken, pickled carrots, cucumber, mango curry sauce, fried onions & coriander",
        tr_9th_dish:"Cereal bread, homemade tuna cream, pickled carrots, cucumber, fried onions & coriander",

        tr_1st_treat:"Frozen açaí pulp, banana, peanut butter, homemade granola, fruits",
        tr_2nd_treat:"Fruit salad",
        tr_3rd_treat:"Banana bread like grandma's",
        tr_4th_treat:"Greek yogurt, honey, homemade granola, banana & red fruits",
        tr_5th_treat:"Homemade",

        tr_1st_smoothie:"Brazilian açaí pulp, banana, blueberries, coconut milk",
        tr_2nd_smoothie:"Banana, oats, date, oat milk",
        tr_3rd_smoothie:"Spinach, banana, pineapple, coconut water",
        tr_4th_smoothie:"Pineapple, mango, banana, coconut milk & spirulina",
        tr_5th_smoothie:"Spinach, banana, coconut water & activated charcoal",
        tr_6th_smoothie:"Pineapple, lime, coconut milk & collagen",
        tr_7th_smoothie:"Espresso shot, pure cocoa, banana, date, almond milk",

        tr_1st_shake:"Protein powder, banana, peanut butter, oat milk",
        tr_2nd_shake:"Protein powder, banana, coconut milk, shredded coconut",

        tr_1st_juice:"Carrot, orange, lime",
        tr_2nd_juice:"Granny Smith apple, lime, ginger",
        tr_3rd_juice:"Granny Smith apple, celery, cucumber, lime",
        tr_4th_juice:"Grapefruit, orange, lemon",
        tr_5th_juice:"Pineapple, Granny Smith apple, mint, lime",
        tr_6th_juice:"Carrot, orange, apple, ginger",
        tr_7th_juice:"Celery, spinach, cucumber, lemon, ginger",
        tr_8th_juice:"Granny Smith apple, grapefruit, ginger",

        tr_coffee_title:"COFFEE",

        tr_milk:" PLANT-BASED MILK +€1",
        tr_ice:"MAKE IT ICE +€1"
      

        





        
    },
  
};




function switchLanguage(lang) {
    // Update both title and prices and dish items
    document.getElementById('en_title').innerText = translations[lang].en_title;
    document.getElementById('en_food').innerText = translations[lang].en_food; 
    document.getElementById('tr_price').innerText = translations[lang].tr_price;  // Add this line to update the text
    document.getElementById('tr_1st_dish').innerText = translations[lang].tr_1st_dish; // Add this line to update the text
    document.getElementById('tr_2nd_dish').innerText = translations[lang].tr_2nd_dish; // Add this line to update the text
    document.getElementById('tr_3rd_dish').innerText = translations[lang].tr_3rd_dish; // Add this line to update the text
    document.getElementById('tr_price_2nd').innerText = translations[lang].tr_price_2nd;  // Add this line to update the text
    document.getElementById('tr_4th_dish').innerText = translations[lang].tr_4th_dish; // Add this line to update the text
    document.getElementById('tr_5th_dish').innerText = translations[lang].tr_5th_dish; // Add this line to update the text
    document.getElementById('tr_6th_dish').innerText = translations[lang].tr_6th_dish; // Add this line to update the text
    document.getElementById('tr_7th_dish').innerText = translations[lang].tr_7th_dish; // Add this line to update the text
    document.getElementById('tr_8th_dish').innerText = translations[lang].tr_8th_dish; // Add this line to update the text
    document.getElementById('tr_9th_dish').innerText = translations[lang].tr_9th_dish; // Add this line to update the text

    // Update treats
    document.getElementById('tr_1st_treat').innerText = translations[lang].tr_1st_treat; // Add this line to update the text
    document.getElementById('tr_2nd_treat').innerText = translations[lang].tr_2nd_treat; // Add this line to update the text
    document.getElementById('tr_3rd_treat').innerText = translations[lang].tr_3rd_treat; // Add this line to update the text
    document.getElementById('tr_4th_treat').innerText = translations[lang].tr_4th_treat; // Add this line to update the text
    document.getElementById('tr_5th_treat').innerText = translations[lang].tr_5th_treat; // Add this line to update the text

    // Update smoothies
    document.getElementById('tr_1st_smoothie').innerText = translations[lang].tr_1st_smoothie; // Add this line to update the text
    document.getElementById('tr_2nd_smoothie').innerText = translations[lang].tr_2nd_smoothie; // Add this line to update the text
    document.getElementById('tr_3rd_smoothie').innerText = translations[lang].tr_3rd_smoothie; // Add this line to update the text
    document.getElementById('tr_4th_smoothie').innerText = translations[lang].tr_4th_smoothie; // Add this line to update the text
    document.getElementById('tr_5th_smoothie').innerText = translations[lang].tr_5th_smoothie; // Add this line to update the text
    document.getElementById('tr_6th_smoothie').innerText = translations[lang].tr_6th_smoothie;
    document.getElementById('tr_7th_smoothie').innerText = translations[lang].tr_7th_smoothie; // Add this line to update the text

    // Update shakes
    document.getElementById('tr_1st_shake').innerText = translations[lang].tr_1st_shake; // Add this line to update the text
    document.getElementById('tr_2nd_shake').innerText = translations[lang].tr_2nd_shake; // Add this line to update the text

    // Update juices
    document.getElementById('tr_1st_juice').innerText = translations[lang].tr_1st_juice; // Add this line to update the text
    document.getElementById('tr_2nd_juice').innerText = translations[lang].tr_2nd_juice; // Add this line to update the text
    document.getElementById('tr_3rd_juice').innerText = translations[lang].tr_3rd_juice; // Add this line to update the text
    document.getElementById('tr_4th_juice').innerText = translations[lang].tr_4th_juice;
    document.getElementById('tr_5th_juice').innerText = translations[lang].tr_5th_juice; // Add this line to update the text
    document.getElementById('tr_6th_juice').innerText = translations[lang].tr_6th_juice; // Add this line to update the text
    document.getElementById('tr_7th_juice').innerText = translations[lang].tr_7th_juice; // Add this line to update the text
    document.getElementById('tr_8th_juice').innerText = translations[lang].tr_8th_juice; // Add this line to update the text

    // update coffee
    document.getElementById('tr_coffee_title').innerText = translations[lang].tr_coffee_title; // Add this line to update the text

    // Update milk and ice
    document.getElementById('tr_milk').innerText = translations[lang].tr_milk; // Add this line to update the text
    document.getElementById('tr_ice').innerText = translations[lang].tr_ice; // Add this line to update the text




    
   // Add this line to update the text

}
