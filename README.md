# Tech-Blog-MVC
# MVC-Tech-Blog

Week-14 Challenge (Model-View-Controller)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)
  
- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Questions](#questions)

## Description

This full-stack application was developed so that users could come create and interact with content regarding the tech industry. The application gives users a space to store created content via the dashboard page, comment on other users posts, as well as edit and delete their own posts. When arriving to the homepage, users will be able to see all current posts without needing an account, however will be directed to login or create an account when trying to access the dashboard, or in trying to create or view specific posts. User authentication via session storage and cookies is utilized in the application and offers a secure profile through specific routing and page protection. Users passwords are hashed through the bcrypt dependency before being entered into the MySQL database giving additional safeguards to users.

This project implements a model-view-control (MVC) specific set up, uses the object-relational-mapping (ORM) dependency Sequelize to connect the front-end code (UI) to the database, and Express routing. This project also utilizes handlebars templating engine which allowed data to be passed from the database and appended to the front-end in a DRY and simplified way.

Challenges faced when creating this application were the use of the handlebars template engine. This was my first time using one, and it took quite a bit of tinkering to find the best way to give certain partials access to the data I wanted to pass to the page. I also still struggle a bit with routing, and middleware in regards to the syntax used. This was the first full-stack web application I have built, so there was definitely a few times where I felt overwhelmed with the amount of files I was needing to comb through, however I eventually did get the feel for how all the different parts connected resulting in the completed application!

## Live URL
https://tech-blog-carolyn-5601a2ad3048.herokuapp.com/

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MySQL, Sequelize (ORM), and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.31.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (v16.0.3), nodemon (v2.0.22), bcrypt (v.5.1.0), bootstrap (v5.2.3), connect-session-sequelize(v.7.1.6), express-handlebars (v7.0.7), and express-session (v1.17.3). Jest (v.29.5.0) is installed for future unit testing. Also, the Insomnia application was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Installation

1. Clone the Repository: Start by cloning the repository. Use the following command to do so: git clone (repository URL).

2. Open in Visual Studio Code: If you don't already have Visual Studio Code installed, make sure to install it. You'll need it for the next steps.

3. Install Node.js (Version 16): Ensure you have Node.js version 16 installed. If you have Homebrew, you can use this command: brew install node@16.

4. Initialize Package.json: In your terminal, run npm init -y to create a package.json file for managing your project's dependencies.

5. Install Dependencies: Use npm i to install the project dependencies. Here are the individual commands for each dependency:

Sequelize: npm i sequelize
MySQL2: npm i mysql2
Express: npm i express@4.18.2
dotenv: npm i dotenv
Nodemon: npm i nodemon
Bcrypt: npm i bcrypt
Bootstrap: npm i bootstrap
connect-session-sequelize: npm i connect-session-sequelize
Express Handlebars: npm i express-handlebars
Express Session: npm i express-session
Jest: npm i jest
Create .env File: Make sure you have a .env file in your repository's root directory. Inside this file, provide your environmental variables, including the database name, MySQL username, and MySQL password.

6. MySQL Account: If you don't have a MySQL account, you can create one by following the instructions at https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/.

7. Database Creation: After installing dependencies, create the database. Navigate to the db directory that contains the schema.sql file. Open a MySQL shell with the command mysql -u root -p. You'll be prompted to enter your password. Once in the MySQL shell, run source schema.sql to create the database.

8. Database Seeding: Seed the database to create the table structures. Go back to the root directory and run npm run seed. This should be done from the root directory since the .env file is located there.

9. Start the Server: After seeding the database, you can start the server by running npm start from the root directory. If you have Nodemon installed, you can use npm run watch to automatically restart the server during code edits.

10. Testing and Edits: Use tools like Insomnia to test your routes and make changes to both the front-end and back-end of your codebase as needed.

## Features

This application offers a user-friendly experience with several noteworthy features. Users can create accounts securely, with their login information being hashed and stored for future validation. Visitors enjoy unrestricted access to the homepage and public feed but are prompted to create accounts when trying to access specific blogs or create posts. Once registered, users gain access to a dashboard where they can conveniently store their own content, engage with other users' posts by leaving comments, and maintain control over their posts with editing and deletion capabilities. This blend of user registration, personalized spaces, and interaction fosters an engaging and dynamic environment for both new and returning users.

## Usage Information

Using this application is an intuitive experience, primarily conducted through the frontend user interface. Upon visiting the site, users encounter a public-facing feed and a prominent login button that guides them to either log in or create a new account seamlessly. Once logged in, users have full access to the application's features, enabling them to navigate, contribute, and start creating content effortlessly. This straightforward approach ensures a user-friendly experience for anyone interacting with the platform.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

