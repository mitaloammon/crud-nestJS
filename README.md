## CRUD project with Nest.js

This is an example project to briefly demonstrate the potential of the Nest.js framework in the development of an email registration system. The project uses JavaScript as the main language and Node.js as the execution environment.

[NestJS](https://pt.wikipedia.org/wiki/Nest.js) is an open source Node.js framework for developing server-side applications. It was created by Kamil Mysliwiec and released in 2017. Under the hood, by default, NestJS makes use of the Express.js framework and is also compatible with Fastify. Its architecture is heavily inspired by Angular.

### Requirements:

The project has the following features:

- Registration of users with name, email and password.
- Visualization of the list of registered users.
- Editing existing user information.
- Exclusion of users.

### Technologies

The project makes use of the following technologies and tools:

- NestJS: JavaScript framework for developing efficient and scalable back-end applications.
- Node.js: Server-side JavaScript runtime.

```No database was used in the project.```

### Configuration and Usage

- Make sure you have [Node.JS](https://nodejs.org/en) installed on your machine.
- Clone this repository to your local directory.
- Navigate to the root directory of the project and run the ```npm install``` command to install the dependencies.
- Configure required environment variables, such as database connection credentials.
- Run the command `npm run start:dev` in the terminal to start the server.
- Access [localhost:3001/users](http://localhost:3001/users) in your browser to view the system

### Routes

- ```GET``` [/users/](http://localhost:3001/users)
- ```GET``` [/users/:userId](http://localhost:3001/users/id)
- ```POST``` [/users/](http://localhost:3001/users)
- ```DELETE``` [/users/:userId](http://localhost:3001/users/id)
- ```UPDATE``` [/users/:userId](http://localhost:3001/users/id)


## License

Nest is [MIT licensed](LICENSE).
