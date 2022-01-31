# Book List App
This project is developed as a takehome project. It is a basic library application. This project has two sides: 'dent-api' and 'client'. 'dent-api' is the back-end Api where the information of books are stored. 'client' has a form enabling users to make new book entries and a books-display-screen.

![screenshot](https://github.com/necmigunduz/ir-dent/blob/master/screenShot.png)

## dent-api is Built With

- NodeJS,
- ExpressJS,
- MongoDB,
- Nodemon.

## client is Built With

- React,
- React-Bootstrap,
- Redux.

## Getting Started
* Prepare back-end for operation:
- `git clone git@github.com:necmigunduz/ir-dent.git`,
- `cd ir-dent/dent-api`,
- `npm install`.

* To run the back-end application:

- `service mongod start`,
- `npm start`.

* Prepare front-end for operation: (Open a new terminal)
- `cd ir-dent/client`,
- `npm install`,
- `npm start`.

## Usage
- When the application is active, a form and books recorded in the app will be displayed on the screen. To make a new book entry, a user is required to fill all input fields and select a category. Otherwise, recording process will end up with a failure. The front-end uses `http://localhost:3000` and the back-end uses `http://localhost:5000`. To view the recorded books in the back-end, a user needs to visit `http://localhost:5000/books`.

## Author

👤 **Necmi Gunduz**

- LinkedIn: [Necmi Gunduz](https://www.linkedin.com/in/necmigunduz/)
- Github: [@necmigunduz](https://github.com/necmigunduz/)
- Twitter: [@necm_gun](https://twitter.com/necm_gun)
- Mail: [necmigunduz@gmail.com](necmigunduz@gmail.com)

## Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!!

## 📝 [License](https://creativecommons.org/licenses/by-nc-nd/4.0/)