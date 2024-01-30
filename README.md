# The Recipe Finder App ©

The Recipe Finder App © is a web-based application designed to assist users in meal planning and discovering new recipes. It caters to various dietary preferences and simplifies the process of finding suitable recipes based on individual dietary plans. The app aims to make meal planning more accessible, personalized, and enjoyable for its users.


## Features

- **User Sign-Up Process:** Allows users to register using their email, with a secure password creation process.
- **Login System:** A secure login portal for returning users, featuring advanced authentica-tion methods.
- **Account Management:** Users can manage their profiles, including saving favourite reci-pes for quick access.
- **Filtering Results:** Users can apply various dietary filters (e.g., Vegetarian, Vegan, Mediter-ranean) to find recipes that suit their dietary preferences.
- **Meal Type Selection:** Users can select the type of meal they are interested in (breakfast, lunch, dinner, snack), and the app will display corresponding recipes.
- **Filtered Search Results:** The app shows recipes that match the user's dietary and meal type selections, complete with ingredient lists and cooking instructions.
## Tech Stack

**Client:** React

**Server:** Node, Express, MongoDB, JavaScript

**Dependencies:** Mongoose, Nodemon, Dotenv
## Authors

- [@Kiril Talalaiko](https://github.com/ervette)
- [@Adrian Nykiel](https://github.com/adrian9211)
- [@Adrian Leontescu](https://github.com/Ady119)
- [@Stefania Annunziata]()
- [@Mykyta Oleksenko](https://github.com/mykytaoleksenko)

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
  localhost:3000
```

## Branches

Methodology for branches in Recipe Finder project

- Use the main branch as the default branch, where the stable and tested code is stored. This branch should always be deployable and functional.
- Create a development branch from the main branch, where you can integrate and test the features from different branches before merging them to the main branch.
- For each feature or task, create a separate branch from the development branch, following the naming convention: 
```
development/client/feature_name
```
or 
```
development/server/feature_name
```
depending on which part of the stack you are working on. 
For example: 
```
development/client/login
 ```
or 
 ```
development/server/cart
 ```
- Work on your feature or task in your branch, committing your changes frequently and pushing them to the remote repository.
- When your feature or task is done, create a pull request to merge your branch to the development branch, after resolving any conflicts and ensuring that your code passes the tests and follows the coding standards.
- After your pull request is reviewed and approved by another developer, merge your branch to the master branch and leave your branch.