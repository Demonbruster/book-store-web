# Book Store Web

Welcome to the Book Store Web project! This web application allows users to browse and purchase books from a wide selection.

## Getting Started

To get started with the project, follow these steps:

### Installation

First, clone the repository to your local machine:

```bash
git clone <repository-url>
```
Next, navigate into the project directory:

```bash
cd book-store-web
```
Then, install the dependencies using your preferred package manager. Here are some options:

```bash

npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
### Development Server
Once the dependencies are installed, you can start the development server:

```bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The development server will start running on `http://localhost:3000.` Open this URL in your web browser to view the application.

### Run as from docker

Dev server

```bash

npm run docker:up:dev
# or
yarn docker:up:dev
# or
pnpm docker:up:dev
# or
bun docker:up:dev
```
`http://localhost:3000.`


Production server
```bash

npm run docker:up:prod
# or
yarn docker:up:prod
# or
pnpm docker:up:prod
# or
bun docker:up:prod
```
`http://localhost:4000.`


## Navigation
Navigate through the application using the following URLs:

- Home page: `http://localhost:3000`
- Search page: `http://localhost:3000/search`
- Book details page: `http://localhost:3000/book/{book-id}`

## Features
- Browse and search for books
- View book details including title, author, genre, publication year, and price
- Add books to cart for purchase
- Checkout with payment details

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix: git checkout -b feature-name.
- Make your changes and commit them: git commit -am 'Add new feature'.
- Push to the branch: git push origin feature-name.
- Create a new pull request.
- Please make sure to follow the code of conduct and contribution guidelines when contributing to this project.

## License
This project is licensed under the MIT License.