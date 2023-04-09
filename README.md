# risd-hackportal-2

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

_This README was based on that of the [SvelteKit default template repo](https://github.com/sveltejs/kit-template-default)._
