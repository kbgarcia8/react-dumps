const rawData = {
    icedDrinks: [
        {
            id: 1,
            name: "Caramel Macchiato",
            description: "A perfect balance of coffee, vanilla, milk, and caramel makes a sweet and creamy summer drink.",
            image: "https://www.allrecipes.com/thmb/f6PPqsjkI8-XvRgBJLWrCx5GEO0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4538360_20Iced20Caramel20Macchiato20Photo20by20Lela20650x465-21dd58b096bc43ce8452ad1e8becaed4.jpg"
        },
        {
            id: 2,
            name: "Nitro Cold Brew",
            description: "This innovative concoction is essentially cold brew coffee imbued with nitrogen gas.",
            image: "https://www.tastingtable.com/img/gallery/15-types-of-iced-coffee-explained/nitro-1687369765.webp"
        },
        {
            id: 3,
            name: "Vietnamese Coffee",
            description: "This coffee has a delightful hint of chocolate flavor and is made using robusta coffee beans, along with a phin.",
            image: "https://www.tastingtable.com/img/gallery/15-types-of-iced-coffee-explained/vietnamese-iced-coffee-1687369765.webp"
        },
        {
            id: 4,
            name: "Iced Latte",
            description: "Renowned for their harmonious blend of frothed milk, foam, and espresso, possess a cold counterpart in iced lattes.",
            image: "https://www.tastingtable.com/img/gallery/15-types-of-iced-coffee-explained/iced-latte-1687369765.webp"
        },
        {
            id: 5,
            name: "Mazagran",
            description: "Citrus might not be the first flavor that springs to mind when considering coffee, but a foray into the world of Algerian mazagran will convince you of its enjoyable compatibility.",
            image: "https://www.tastingtable.com/img/gallery/15-types-of-iced-coffee-explained/mazagran-1687369765.webp"
        },
        {
            id: 6,
            name: "Frappucino",
            description: "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup.",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG"
        },
        {
            id: 7,
            name: "Strawberry and Cream",
            description: "Frappuccino crème syrup blended with milk, strawberry sauce and ice. Topped with whipped cream.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7guHl-10F7DH-cju9JGML-harZJc8iY1VA&s"
        },
        {
            id: 8,
            name: "Spanish Latte",
            description: "Iced coffee drink that's made with milk (any kind, I ordered soy milk), condensed milk, and fresh espresso.",
            image: "https://thehintofrosemary.com/wp-content/uploads/2023/11/Spanish-iced-latte-recipe-cover-photo-720x720.jpg"
        },
        {
            id: 9,
            name: "Iced Mocha",
            description: "An espresso-based drink with chocolate and warm milk for the right blend of creaminess and sweetness, served over ice.",
            image: "https://vibrantlygfree.com/wp-content/uploads/2023/07/iced-mocha-1.jpg"
        },
        {
            id: 10,
            name: "Iced Chocolate",
            description: " It's easy, super chocolate-y, and hydrating. Plus, it's got a rich enough chocolate flavor that it's something that you'll sip slowly.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3Ue0aHM2X0Q5gybGbzk9t0TyYuJidXBGrw&s"
        }
    ],
    hotDrinks: [
        {
            id: 1,
            name: "Matcha Latte",
            description: "Made from finely ground green tea leaves that are mixed with steamed milk.",
            image: "https://feelgoodfoodie.net/wp-content/uploads/2023/08/Matcha-Latte-TIMG.jpg"
        },
        {
            id: 2,
            name: "Hot Chocolate",
            description: "made with dark, semisweet, or bittersweet chocolate grated or chopped into small pieces and stirred into milk with the addition of sugar.",
            image: "https://www.wellplated.com/wp-content/uploads/2014/12/French-Hot-Chocolate.-Classic-dark-European-style-hot-chocolate.jpg"
        },
        {
            id: 3,
            name: "Hot Toddy",
            description: "It's a quick solve to a chilly evening that simply requires hot water, honey, lemon, and whiskey!",
            image: "https://hips.hearstapps.com/hmg-prod/images/hot-drinks-hot-toddy-6501eae8d6435.jpeg?crop=0.9981290926099158xw:1xh;center,top&resize=980:*"
        },
        {
            id: 4,
            name: "Pumpkin Spice Latte",
            description: "Made with real pumpkin puree—this latte is a must-have when the weather turns chilly.",
            image: "https://hips.hearstapps.com/hmg-prod/images/hot-drinks-pumpkin-spice-latte-6501ed8884793.jpeg?crop=0.563xw:1.00xh;0.293xw,0&resize=980:*"
        },
        {
            id: 5,
            name: "Chai Latte",
            description: "Made by mixing steamed milk with black tea that has been infused with spices",
            image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/02/Chai-Latte-5.jpg"
        },
        {
            id: 6,
            name: "Caramel Latte",
            description: "A velvety coffee indulgence featuring freshly brewed espresso, steamed milk, and a generous drizzle of luscious caramel syrup.",
            image: "https://www.nescafe.com/ph/sites/default/files/2023-04/RecipeHero_CaramelLatte_1066x1066.jpg"
        },
        {
            id: 7,
            name: "Caffè Americano",
            description: "A classic favorite prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
            image: "https://www.coffeeness.de/wp-content/uploads/2023/09/hot-americano-coffee.jpg"
        },
        {
            id: 8,
            name: "Hot buttered rum",
            description: "Mixed drink containing rum, butter, hot water or cider, a sweetener, and various spices.",
            image: "https://www.liquor.com/thmb/O1ET7pKvz0v1OznBOz3XsWJ3cMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-caramel-buttered-rum-720x720-primary-9ae83dcacaec4c8e97b395ca6974e809.jpg"
        },
        {
            id: 9,
            name: "Irish Coffee",
            description: "A caffeinated alcoholic drink consisting of Irish whiskey, hot coffee and sugar, which has been stirred and topped with cream.",
            image: "https://www.acouplecooks.com/wp-content/uploads/2021/02/Irish-Coffee-005.jpg"
        },
        {
            id: 10,
            name: "Asiático Coffee",
            description: "Coffee with condensed milk and cognac; a few drops of Licor 43 as well as a couple of coffee beans, lemon rind and cinnamon may be added.",
            image: "https://yourspanishcorner.com/modules/prestablog/views/img/grid-for-1-7/up-img/4.jpg"
        }
    ],
    cakes:[
        {
            id: 1,
            name: "Pancakes",
            description: "A breakfast dish, a flat cake that's made by pouring batter into a hot pan and frying it on both sides. Many people like to eat their pancakes with a drizzle of maple syrup.",
            image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
        },
        {
            id: 2,
            name: "Carrot Cake",
            description: "A sweet and moist spice cake, full of cut carrots and toasted nuts, and covered in cream cheese icing.",
            image: "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg"
        },
        {
            id: 3,
            name: "New York Cheesecake",
            description: "This easy, foolproof cheesecake recipe creates a dense, rich, and creamy dessert with irresistible flavor—perfect for any occasion and sure to impress.",
            image: "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg"
        },
        {
            id: 4,
            name: "Vegan Chocolate Cake",
            description: "This ultra lush and rich vegan chocolate cake is the definition of decadence with a soft and tender moist crumb.",
            image: "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg"
        },
        {
            id: 5,
            name: "Tunisian Orange Cake",
            description: "Made with fresh orange and ground almonds, this Tunisian Orange Cake is a masterpiece whilst also being probably the simplest cake ever.",
            image: "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg"
        },
        {
            id: 6,
            name: "Choc Chip Pecan Pie",
            description: "Pie of pecan nuts mixed with a filling of eggs, butter and sugar.",
            image: "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg"
        },
        {
            id: 7,
            name: "Key Lime Pie",
            description: "Made of Key lime juice, egg yolks, and sweetened condensed milk.",
            image: "https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg"
        },
        {
            id: 8,
            name: "Red Velvet Cake",
            description: "Tangy and buttery, with a mild cocoa and sweet vanilla flavor.",
            image: "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg"
        },
        {
            id: 9,
            name: "Strawberry Shortcake",
            description: "A tender vanilla cake filled with layers of whipped cream frosting and juicy strawberries.",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/1993690/strawberry-shortcake-mc-1x1-230511.jpg"
        },
        {
            id: 10,
            name: "Molten Lava Cake",
            description: "A French dessert that consists of a chocolate cake with a liquid chocolate core.",
            image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
        }
    ],
    pastries:[
        {
            id: 1,
            name: "Tarte Tatin",
            description: "Dark and sticky caramel, sweet apples and crisp pastry combine to make this heavenly French dessert.",
            image: "https://greatfood.ie/wp-content/uploads/2024/08/a-beautifully-presented-tarte-tatin-on-a-rustic-wo-YSDGksR2TmeixgDiHnjwog-LrjC_1BHSU21_qbCJEZc3w.png"
        },
        {
            id: 2,
            name: "Pain au chocolat",
            description: "A Yeasted puff pastry dough wrapped around a stick of chocolate",
            image: "https://sallysbakingaddiction.com/wp-content/uploads/2018/03/chocolate-croissants-2.jpg"
        },
        {
            id: 3,
            name: "Tiramisu",
            description: "Classic Italian dessert renowned for its heavenly layers of coffee-soaked ladyfingers and velvety mascarpone cream.",
            image: "https://fhahoreca.com/wp-content/uploads/2023/08/A-tiramisu-portion-topped-with-strawberry.jpg"
        },
        {
            id: 4,
            name: "Croissant",
            description: "A laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture.",
            image: "https://fhahoreca.com/wp-content/uploads/2023/08/Two-croissants-on-a-platter.jpg"
        },
        {
            id: 5,
            name: "Cinnamon Roll",
            description: "Made with yeasted dough that is rolled into a rectangle, spread with butter, then sprinkled heavily with a mix of sugar and cinnamon and rolled into a log that is cut into slices.",
            image: "https://www.tasteatlas.com/images/dishes/5a7b78ad0a3744cabc9c2f8fd94d1e55.jpg?mw=1300"
        },
        {
            id: 6,
            name: "Everything Bagel",
            description: "The bagel underneath the everything topping is just a plain bagel—until it's transformed by the addition of a spice mix right before it's baked.",
            image: "https://thebusybaker.ca/wp-content/uploads/2020/05/homemade-everything-bagels-fb-ig-7-scaled.jpg"
        },
        {
            id: 7,
            name: "Glazed Donut",
            description: "Light and fluffy, covered in a simple glaze.",
            image: "https://assets.epicurious.com/photos/54b0226d766062b20344580a/1:1/w_2560%2Cc_limit/51160200_glazed-doughnuts_1x1.jpg"
        },
        {
            id: 8,
            name: "Danish Pastry",
            description: "Made with laminated dough, where the dough is repeatedly covered with butter and folded over itself.",
            image: "https://www.tasteatlas.com/Images/Dishes/fefa53468acc4221b66593471638502d.jpg?mw=1300"
        },
        {
            id: 9,
            name: "Éclair",
            description: "These elongated pastries with an appealing glaze, a crispy exterior, a soft doughy interior, and a sweet, creamy center",
            image: "https://www.tasteatlas.com/Images/Dishes/5af8a479dedb4d53a7718ca752a536eb.jpg?mw=1300"
        },
        {
            id: 10,
            name: "Baklava",
            description: "Luscious dessert created with layers of thin phyllo dough intertwined with chopped nuts, all doused in a sweet, viscous syrup.",
            image: "https://www.tasteatlas.com/Images/Dishes/4632111123f642a7a1867909ed5426f5.jpg?mw=1300"
        }
    ],
    pasta:[
        {
            id: 1,
            name: "Lasagne",
            description: "Layered with a rich meat sauce and a creamy parmesan white sauce, plus the perfect amount of mozzarella cheese.",
            image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg"
        },
        {
            id: 2,
            name: "Carbonara",
            description: "Italian main course consisting of spaghetti with bacon and a creamy sauce made from eggs, Pecorino or Parmesan and black pepper.",
            image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
        },
        {
            id: 3,
            name: "Chili prawin linguine",
            description: "Pasta tossed with a rich tomato sauce with a tingle of spicy heat and plump prawns (shrimp). ",
            image: "https://www.themea,ldb.com/images/media/meals/usywpp1511189717.jpg"
        },
        {
            id: 4,
            name: "Macaroni Cheese",
            description: "The dish consists of macaroni (short, tubular) pasta, baked in a cheesy bechamel sauce (also known as a Mornay sauce) in the oven.",
            image: "https://www.datocms-assets.com/20941/1635348486-adobestock224148008.jpeg?auto=compress&dpr=0.95&fm=jpg&w=850"
        },
        {
            id: 5,
            name: "Aglio Olio",
            description: "Deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti.",
            image: "https://www.sharmispassions.com/wp-content/uploads/2021/12/spaghetti-aglio-e-olio4.jpg"
        },
        {
            id: 6,
            name: "Baked Penne With Chicken and Sun-Dried Tomatoes",
            description: "It has chicken breasts, mushrooms, and sun-dried tomatoes. Shredded provolone and grated Parmesan make it super creamy.",
            image: "https://www.errenskitchen.com/wp-content/uploads/2022/05/Chicken-Sundried-Tomato-Pasta-1-4.jpg"
        },
        {
            id: 7,
            name: "One-Pan Creamy Tuna Pasta",
            description: "This one-pot wonder inspired by Tuna Helper has tuna, tender noodles, and peas cooked together in a creamy sauce.",
            image: "https://www.marthastewart.com/thmb/ojZtnIjwwH0zT62cky2nf_9pQzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-one-pan-creamy-tuna-pasta-hero-1866-b0847e3b8c1a4786a122af224868b5bf.jpeg"
        },
        {
            id: 8,
            name: "Mushroom Ragu",
            description: "A hearty and deeply flavorful mushroom ragù featuring finely chopped mushrooms, tomatoes, white wine, and aromatics slow-cooked in an oven.",
            image: "https://cookingwithcocktailrings.com/wp-content/uploads/2024/03/Creamy-Mushroom-Ragu-Sauce-with-Short-Rib-Ravioli-30-scaled.webp"
        },
        {
            id: 9,
            name: "Garlic Cream Sauce Ravioli",
            description: "Sauce is made to be drenched over ravioli and compliments so many different fillings.",
            image: "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2021/07/garlic-cream-sauce-for-ravioli-744x828.jpg"
        },
        {
            id: 10,
            name: "Beef Stroganoff",
            description: "Features juicy beef, hearty mushrooms, mustard, white wine, and sour cream for the most tender and delicious results.",
            image: "https://www.foodandwine.com/thmb/WDzimnme-7nOe_wBVXYxVyGNVBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-beef-stroganoff-hero-06-5dc1fb98ed9f4eea97bab613d212eead.jpg"
        }
    ],
    mains:[
        {
            id: 1,
            name: "Tonkatsu Pork",
            description: "A pork chop breaded with flour, egg, and Panko (bread crumbs), then deep fried.",
            image: "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg"
        },
        {
            id: 2,
            name: "Sweet and Sour Pork",
            description: "A Chinese stir-fry dish made with juicy pieces of pork tenderloin, bell peppers, onion, and pineapple.",
            image: "https://www.themealdb.com/images/media/meals/1529442316.jpg"
        },
        {
            id: 3,
            name: "Roasted Pork Belly",
            description: "This roasted pork belly is juicy and succulent with a crispy crackling layer on top that takes it to the next level. ",
            image: "https://pinchandswirl.com/wp-content/uploads/2024/07/Pork-Belly-Recipe-sq.jpg"
        },
        {
            id: 4,
            name: "Kung Pao Chicken",
            description: "Chinese-style stir-fried chicken cubes with dried chili peppers.",
            image: "https://www.themealdb.com/images/media/meals/1525872624.jpg"
        },
        {
            id: 5,
            name: "General Tso's Chicken",
            description: "Perfect combination of sweet, savoury, spicy and tangy with crispy Chinese chicken bites.",
            image: "https://www.themealdb.com/images/media/meals/1529444113.jpg"
        },
        {
            id: 6,
            name: "Thai Green Curry",
            description: "Undoubtedly a unique curry of all since it gives the soup a light green colour and incredible flavour, making it stand out from the rest.",
            image: "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg"
        },
        {
            id: 7,
            name: "Beef Caldareta",
            description: "Beef stew cooked with tomato sauce and liver spread.",
            image: "https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg"
        },
        {
            id: 8,
            name: "Szechuan Beef",
            description: "Spicy stir fry made with tender pieces of beef and colorful vegetables, all tossed in a sweet and savory sauce.",
            image: "https://www.themealdb.com/images/media/meals/1529443236.jpg"
        },
        {
            id: 9,
            name: "Beef Brisket Pot Roast",
            description: "It's essentially a pot roast—a slow braise with lots and lots of onions.",
            image: "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg"
        },
        {
            id: 10,
            name: "Baked salmon with fennel & tomatoes",
            description: "Aniseedy fennel and juicy cherry tomatoes cut through the richness of salmon fillets.",
            image: "https://www.themealdb.com/images/media/meals/1548772327.jpg"
        },
        {
            id: 11,
            name: "Kung Po Prawns",
            description: "A delicious stir fry that combines jumbo shrimp in a salty almost sweet sauce loaded with dried chillies, Szechuan pepper and peanuts.",
            image: "https://www.themealdb.com/images/media/meals/1525873040.jpg"
        },
        {
            id: 12,
            name: "Fried Calamari",
            description: "Crispy, succulent calamari rings, coated in seasoned flour and quickly fried to crispy perfection.",
            image: "https://www.themediterraneandish.com/wp-content/uploads/2021/02/fried-calamari-recipe-7.jpg"
        }
    ],
    sides:[
        {
            id: 1,
            name: "Prawn & Fennel Bisque",
            description: "This smooth and creamy seafood soup made with saffron and fennel makes an impressive starter or light supper.",
            image: "https://www.themealdb.com/images/media/meals/rtwwvv1511799504.jpg"
        },
        {
            id: 2,
            name: "Cream of Mushroom Soup",
            description: "Full flavoured with garlic, onions and herbs, subtle enough to shine through and compliment the natural flavour of the mushrooms.",
            image: "https://www.simplyrecipes.com/thmb/KpdPCxnwtFQCWD6u2Ww0urN8xwU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__12__cream-of-mushroom-soup-horiz-d-1600-35c4020aaa6543e7b6fcecf5e30865e0.jpg"
        },
        {
            id: 3,
            name: "Shakshouka",
            description: "a Maghrebi (North African) dish, popular throughout the region, featuring poached eggs in a spicy tomato sauce, seasoned with peppers, onion, garlic, and various spices.",
            image: "https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg"
        },
        {
            id: 4,
            name: "Poutine",
            description: "Dish of french fries and cheese curds topped with a brown gravy.",
            image: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg"
        },
        {
            id: 5,
            name: "Cheesy Beef Nachos",
            description: "Cheesy Beef Nachos are a classic appetizer staple that's perfect for solo munching, or turn into a sharing platter for the holidays or parties!",
            image: "https://farahjeats.com/wp-content/uploads/2023/02/IMG_5399-768x1024.jpg"
        },
        {
            id: 6,
            name: "Ceasar Salad",
            description: "Made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
            image: "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg"
        },
        {
            id: 7,
            name: "Cheesy Garlic Bread with dip",
            description: "Roasted garlic and shallots in a creamy cheesy dip with fresh herbs like parsley and chives, served with toasty bread.",
            image: "https://i0.wp.com/kennascooks.com/wp-content/uploads/2024/07/img_8628.jpg?resize=1080%2C1440&ssl=1"
        },
        {
            id: 8,
            name: "Mozarella Sticks",
            description: "This classic appetizer consists of sticks of mozzarella cheese that are coated in seasoned Italian breadcrumbs, then deep fried until golden brown.",
            image: "https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-2-of-5.jpg"
        },
        {
            id: 9,
            name: "Chicken Parm Sliders",
            description: "Succulent store-bought rotisserie chicken layered with tangy marinara sauce, gooey mozzarella cheese, and fragrant fresh basil, all nestled between soft, pillowy dinner rolls.",
            image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Parmesan-Slider-Bake_EXPS_FT24_204498_JR_0124_1.jpg?fit=300,300&webp=1"
        },
        {
            id: 10,
            name: "Clam Chowder",
            description: "Creamy broth that’s loaded with delicious clams, savory bacon, simple seasonings, and perfectly cooked potatoes.",
            image: "https://thecozycook.com/wp-content/uploads/2022/10/Clam-Chowder-1.jpg"
        }
    ]
}

export default rawData