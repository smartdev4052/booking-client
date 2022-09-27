---
## Features 

- **Pages Layout**

  - **Public**

    - Register

    - Email Confirm

    - Login

    - Forgot Password

    - Password Reset

    - Terms

  - **Private**

    - Bookings Manager

    - Hotel Profile

- **Manager**

  - **Hotel Profile**

    - Create, Read and Update

  - **Bookings**

    - Create, Read, Update and Delete

    - CheckIn and CheckOut Status

      - Pending

      - Active

      - Finished

- **Mobile-Friendly**

- **PWA Support**

## Tech Stack

- **Build**

  - [Vite](https://github.com/vitejs/vite)

- **HTML/JS**

  - [React](https://github.com/facebook/react)

  - [React Router](https://github.com/remix-run/react-router)

- **CSS**

  - [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)

  - [Prettier plugin for Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

  - [PostCSS](https://github.com/postcss/postcss)

  - [Autoprefixer](https://github.com/postcss/autoprefixer)

- **HTTP-Client**

  - [Axios](https://github.com/axios/axios)

## Run Locally

Install required

- [Node.js/npm](https://nodejs.org/en/download)


Add Environment Variables to `.env` file

- You must replace **"somevalue"** with your own values.

```bash
  echo $'VITE_SERVER_URL=somevalue' >> .env
```

Start the server

```bash
  npm run dev
```

In the browser, go to

```
  http://localhost:3000
```
