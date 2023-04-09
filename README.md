# @iffyloop/sveltekit-starter

Template for web app with SvelteKit, Tailwind, Heroicons, Mongoose, and cookie-based JWT authentication.

## Creating a project

```bash
# create a new project in the current directory
npx degit iffyloop/sveltekit-starter

# create a new project in my-app
npx degit iffyloop/sveltekit-starter my-app
```

## Environment variables

Several environment variables need to be set in order to use this template. Copy the `.env.example` file and replace the values accordingly.

- `MONGODB_URI`: Connection string for a MongoDB database
- `JWT_SECRET`: A long, complex, secret encryption key which will be used to encrypt JSON Web Tokens used for authentication
- `REGISTRATION_KEY_ADMIN_PASSWORD`: A secret key which you can use to add registration keys to the database (see below...)

### Registration Keys

This template was designed to be an easy, all-in-one starting point for building app prototypes. Early in development, you may want to host your app at a publicly accessible URL but only allow invited users to sign up for the app. To facilitate this use case, this repository requires users to enter a "registration key" which you can send them when they're signing up. You can add registration keys by making an HTTP POST request to `/api/registration-key` with the following contents (JSON):

```json
{
  "value": "<registration key that must be entered by new users>",
  "password": "<REGISTRATION_KEY_ADMIN_PASSWORD>"
}
```

Registration keys have no set expiration date; they expire whenever any user signs up using the respective key.

## Developing

Once you've created a project and installed dependencies with `npm install -D` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Special Thanks

*This README was based on that of the [SvelteKit default template repo](https://github.com/sveltejs/kit-template-default).*
