# The Recipe Finder App ©

The Recipe Finder App © is a web-based application designed to assist users in meal planning and discovering new
recipes. It caters to various dietary preferences and simplifies the process of finding suitable recipes based on
individual dietary plans. The app aims to make meal planning more accessible, personalized, and enjoyable for its users.

## Features

- **User Sign-Up Process:** Allows users to register using their email, with a secure password creation process.
- **Login System:** A secure login portal for returning users, featuring advanced authentica-tion methods.
- **Account Management:** Users can manage their profiles, including saving favourite reci-pes for quick access.
- **Filtering Results:** Users can apply various dietary filters (e.g., Vegetarian, Vegan, Mediter-ranean) to find
  recipes that suit their dietary preferences.
- **Meal Type Selection:** Users can select the type of meal they are interested in (breakfast, lunch, dinner, snack),
  and the app will display corresponding recipes.
- **Filtered Search Results:** The app shows recipes that match the user's dietary and meal type selections, complete
  with ingredient lists and cooking instructions.

## Tech Stack

**Client:** React

**Server:** Node, Express, MongoDB, JavaScript, Auth0

**Dependencies:** Mongoose, Nodemon, Bootstrap, React-bootstrap

## Authors

- [@Kiril Talalaiko](https://github.com/ervette)
- [@Adrian Leontescu](https://github.com/Ady119)
- [@Stefania Annunziata]()
- [@Mykyta Oleksenko](https://github.com/mykytaoleksenko)

## Visit the App on

https://recipe-finder-healthy.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/a1e9fb68-4fd1-477b-add1-90684fe75d26/deploy-status)](https://app.netlify.com/sites/recipe-finder-healthy/deploys)

## Deployment

To run the current version of the app follow those steps:

```bash
  git clone https://github.com/recipe-finder-group-project/recipe-finder.git
```

```bash
  cd recipe-finder/server; npm run dev
```

```bash
  cd ..; cd client; npm start;
```

Access the server app via:

```
  localhost:5050
```

Access the react app via:

```
  localhost:3000/home
```

## File Tree
```
recipe-finder
├── LICENSE
├── README.md
├── client
│   ├── README.md
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.js
│       ├── components
│       │   ├── Banner.js
│       │   ├── LoginButton.js
│       │   ├── LogoutButton.js
│       │   ├── Navbar.js
│       │   ├── Profile.js
│       │   ├── Recipe.js
│       │   ├── RecipeFinder.js
│       │   ├── ReviewCard.js
│       │   ├── SingleRecipe.js
│       │   ├── css
│       │   │   ├── BannerComponent.css
│       │   │   └── Recipefinder.css
│       │   ├── dietTypeFilter.js
│       │   └── mealCategoryFilter.js
│       ├── images
│       │   ├── medi-lunch.png
│       │   ├── vegan-lunch.png
│       │   └── veggie-lunch.png
│       ├── index.css
│       ├── index.js
│       ├── pages
│       │   └── Home.js
│       ├── setupProxy.js
│       └── utils
│           └── APIRoutes.js
└── server
    ├── controllers
    │   ├── profileController.js
    │   └── recipeController.js
    ├── models
    │   ├── profileModel.js
    │   └── recipeModel.js
    ├── routes
    │   ├── profiles.js
    │   └── recipes.js
    └── server.js

13 directories, 38 files
```
