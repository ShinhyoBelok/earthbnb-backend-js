<a name="readme-top"></a>

<div align="center">

<img src='./logo-w-background.svg' style="border-radius: 200px; width="400"/>

</div>


<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
- [🛠 Built With](#built-with)
  - [Key Features](#key-features)
  - [Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
- [Setup](#setup)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Project Name

## EarthBnb Backend API

## About this project

This web application is built to enable users browser through different houses which they can reserve on choice basis. The users can add their own houses to let other users reserve that for extra income. Users can register an account to use the website with full access with a unique username. The whole application is built in two major parts. The [Earthbnb_backend](https://github.com/PrangonGhose/Earthbnb-backend) holds code for the API backend that returns and handles the database on API request from the frontend of this website. The database working behind the screen is a relational database developed with `PostgreSQL`. The [Earthbnb_frontend](https://github.com/PrangonGhose/Earthbnb-frontend) contains the user interface of the website where the users can interact with the database. The backend of the website is created with `Nodejs expressjs` and the frontend is created with `ReactJS` and `Redux`.

## 🛠 Built With <a name="built-with"></a>

- Nodejs
- Expressjs
- MongoDB
- Mongoose

<!-- Features -->

### Key Features <a name="key-features"></a>

> Key features of the application.

- A full stack webapp where users can register and sign in using a unique username.
- Users can add, delete and browse through the reigstered houses and reserve any house on choice.
- API endpoints `/houses` and `/houses/:id` are available publicly whereas API endpoints `/reservations` and `/reservations/:username` is private only to registered and logged in users.
- Users will be able to reserve a house in an available date. It is made sure by the developers that a user cannot reserve a house within a date range if any other user has already reserved it.
- Users reservation data is private to every user and none can access each others data.
- The API returns different type of organized errors for bad requests. 
- The UI of the website is built following this [design guidelines](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign).
- The API is documented using `rswag` [here](./swagger/v1/swagger.yaml).
- The databse tables are generated using this [ER diagram](./erdiagram.png).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

 Live demo is available [here](https://earthbnb-api.cyclic.cloud).

<!-- GETTING STARTED -->

## 💻 Getting Started
To clone the repository in local environment try following steps.

### Prerequisites

- [x] A code editor like Visual Studio Code with Git, Ruby, and Gem.

You can check if Git is installed by running the following command in the terminal.
```
$ git --version
```
`npm` for package installation.

Clone the repository using [this link](https://github.com/ShinhyoBelok/earthbnb-backend-js).

### Install

In the terminal, go to your file directory and run this command.
```
$ git clone https://github.com/ShinhyoBelok/earthbnb-backend-js
```
### Get into development

In the terminal, run these commands to get into development.
```
$ npm install

$ npm run dev

```
**Note: You might need to update [mongoose.js](./database/mongoose.js) for development and testing environments with necessary username and password for your database in their respective positions.**

### Usage <a href="usage" name="usage"></a>

This website is applicable for both mobile and desktop version.

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Shinhyo Belliard**

- GitHub: [@ShinhyoBelok](https://github.com/ShinhyoBelok)
- Twitter: [@Bell_iraki](https://twitter.com/Bell_iraki)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/shinhyo-belliard-okazaki-807a38249/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add animation to create smooth user experience.**
- [ ] **Enable only admin users to add or delete houses.**
- [ ] **Implement proper user authentication from the front-end to the server.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome! Add suggestions by opening new issues.

Feel free to check the [issues page](https://github.com/PrangonGhose/Earthbnb_backend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Authors would like to thank:
- [Murat Korkmaz](https://www.behance.net/muratk)
- [Microverse](https://www.microverse.org/)
- Code Reviewers
- Coding Partners

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.
