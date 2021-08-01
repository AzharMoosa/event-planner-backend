const places = [
  {
    name: "Grato",
    description:
      "Located at 9 Kensington Square, London — and just a short stroll from Hyde Park — grato is a chic Italian restaurant split over two levels. With a focus on regional cuisine and the freshest ingredients, every dish is imbued with culture. Our handmade pasta is crafted with love in our very own kitchen; our wines are sourced from artisan vineyards. Our evolving menus reflect the seasons and celebrate Italy’s culinary wonders. Sample ravioli, tagliolini, and organic sourdough bruschetta. Indulge in prosciutto di parma, veal scaloppine, and blood orange polenta cake. What’s more, our heavenly tiramisu has proved a hit with Italian natives. They claim our coffee-flavoured dessert is better than what they’ve had in the motherland. We’ve got to admit — it is irresistible!",
    image: "images/grato.png",
    location: {
      address: "9 Kensington Square",
      postalCode: "W8 5EP",
      city: "London",
      country: "United Kingdom",
    },
    keywords: ["Italian", "Dine In", "Takeaway"],
    rating: 4.9,
    info: "https://www.gratolondon.com/",
  },
  {
    name: "Core by Clare Smyth",
    description:
      "Core is an elegant fine dining restaurant with an emphasis on natural, sustainable food, sourced from the UK’s most dedicated farmers and food producers. We create beautifully crafted dishes, seeking out the best of British produce, with a passion to delight and share our curiosity and our love of delicious artisanal food. Since opening in August 2017, Core has received numerous awards including three stars in the 2021 Michelin Guide, 10/10 in the Good Food Guide, five AA rosettes, Best Restaurant at the GQ Food and Drink Awards, New Restaurant of the Year by The Craft Guild of Chefs, and the Service Award at the National Restaurant Awards. Clare also received the World’s Best Female Chef Award by the World’s 50 Best Restaurants.",
    image: "images/core-by-clare-smyth.png",
    location: {
      address: "92 Kensington Park Road",
      postalCode: "W11 2PN",
      city: "London",
      country: "United Kingdom",
    },
    keywords: ["Fine Dining", "No Takeaway"],
    rating: 4.8,
    info: "https://www.corebyclaresmyth.com/",
  },
  {
    name: "Galvin at Windows",
    description:
      "With stunning London views, the award winning Galvin at Windows Restaurant is the perfect setting for any memorable occasion.",
    image: "images/galvin-at-windows.png",
    location: {
      address: "22 Park Lane, Mayfair",
      postalCode: "W1K 1BE",
      city: "London",
      country: "United Kingdom",
    },
    keywords: ["Fine Dining", "Restaurant", "Bar"],
    rating: 4.6,
    info: "https://www.galvinatwindows.com/",
  },
  {
    name: "HIDE",
    description:
      "HIDE offers multiple private dining spaces. The Broken Room, The Shadow Room & The Reading Room are all located in subterranean vaults in The Bar Below. The rooms serve dishes from the main HIDE menu & are perfect for smaller gatherings. The Hide & Seek Rooms on the first floor offer a private dining experience individually for ten guests, or combined for up to 20 guests, serving menus from the Above at HIDE kitchen. ",
    image: "images/hide.png",
    location: {
      address: "85 Piccadilly",
      postalCode: "W1J 7NB",
      city: "London",
      country: "United Kingdom",
    },
    keywords: ["Modern European Restaurant", "Private Dining"],
    rating: 4.6,
    info: "https://www.hide.co.uk/",
  },
];

export default places;
