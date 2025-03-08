# Buffopotamus Website

A creative storytelling website for the fictional Buffopotamus creature - a hybrid between a buffalo and hippopotamus. This project showcases the unique creature through an interactive story, information about its characteristics, and a gallery.

![Buffopotamus Hero Image](src/assets/buffopotamus-closeup.jpg)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌩️ Deployment to Cloudflare Pages

This project is configured for deployment to Cloudflare Pages using GitHub Actions.

### GitHub Secrets Required

For the GitHub Actions workflow to deploy to Cloudflare Pages, you need to set up the following secrets in your repository:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### Manual Deployment

You can also deploy manually to Cloudflare Pages by connecting your GitHub repository to Cloudflare Pages:

1. Go to Cloudflare Dashboard > Pages
2. Click "Create a project"
3. Connect your GitHub account and select this repository
4. Configure the build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"
