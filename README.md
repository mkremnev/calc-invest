# Telegram Finance Informer

A Telegram Mini App for investment calculations and financial planning. This application helps users calculate compound interest, plan investments, and analyze potential returns on their financial investments.

## Features

🧮 **Investment Calculator**
- Calculate compound interest with regular monthly contributions
- Adjustable interest rates from 0.1% to 15% per month
- Investment period planning (1-12 months)
- Real-time calculation updates
- Visual breakdown of invested capital vs. earned interest

💰 **Financial Planning**
- Initial capital input with validation
- Monthly contribution planning
- Expected return calculations
- Total investment summary

🎨 **Modern UI/UX**
- Clean, intuitive interface using Telegram UI components
- Dark/light theme support
- Responsive design for all devices
- Native Telegram Mini App integration

## Tech Stack

This application is built using modern web technologies:

- **Frontend**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/) with SWC compiler
- **UI Library**: [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI) + [Radix UI](https://www.radix-ui.com/)
- **SDK**: [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with BEM methodology
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) with React Testing Library
- **Linting**: ESLint with TypeScript and Prettier integration

> This project uses [npm](https://www.npmjs.com/) as the package manager. Using other package managers may cause compatibility issues.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd telegram-finance-informer/telegram-app/frontend
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Runs the application in development mode (HTTP) |
| `npm run dev:https` | Runs the application in development mode with SSL certificates |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run lint:fix` | Automatically fixes ESLint issues where possible |
| `npm run test` | Runs tests in watch mode |
| `npm run test:run` | Runs all tests once (for CI) |
| `npm run deploy` | Deploys the application to GitHub Pages |

## Development

### Setting up Telegram Bot

Before using this application in Telegram, you need to create a Telegram Bot and Mini App. Follow the [comprehensive guide](https://docs.telegram-mini-apps.com/platform/creating-new-app) for detailed instructions.

### Running the Application

The application can be run both inside and outside of Telegram during development:

#### HTTPS Development (Recommended)

For full Telegram Mini App functionality, use HTTPS:

```bash
npm run dev:https
```

> **Note**: On first run, you may be prompted for administrator password to install SSL certificates via [vite-plugin-mkcert](https://www.npmjs.com/package/vite-plugin-mkcert).

#### HTTP Development

For basic development without SSL:

```bash
npm run dev
```

### Accessing the Application

After starting the development server, you'll see output similar to:

```bash
VITE v6.2.4 ready in 237 ms

➜  Local:   https://localhost:5173/
➜  Network: https://192.168.1.100:5173/
```

- **Local**: Access from your development machine
- **Network**: Access from other devices on the same network (useful for mobile testing)

### Development Environment

The application includes a mock Telegram environment (`src/mockEnv.ts`) that allows development outside of Telegram. This simulates the Telegram SDK functionality for development purposes.

> **Warning**: The mock environment should not be used in production. It's automatically disabled when the app runs inside actual Telegram clients.

## Deployment

The application is configured for deployment to GitHub Pages, which provides fast CDN delivery. You can also deploy to other platforms like [Vercel](https://vercel.com) or [Netlify](https://netlify.com).

### GitHub Pages Deployment

#### Configuration

Before deploying, ensure the following configuration is correct:

1. **package.json**: Update the `homepage` field to match your GitHub Pages URL:
```json
{
  "homepage": "https://yourusername.github.io/repository-name"
}
```

2. **vite.config.ts**: Set the `base` field to your repository name:
```ts
export default defineConfig({
  base: '/repository-name/',
  // ...
});
```

#### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

#### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys when changes are pushed to the `master` branch.

To enable automatic deployment:

1. Go to your repository settings: `https://github.com/username/repository/settings/environments`
2. Create or edit the `github-pages` environment
3. Add `master` to the deployment branches list

## Project Structure

```
src/
├── components/          # React components
│   ├── App.tsx         # Main application component
│   └── Root.tsx        # Application root wrapper
├── pages/              # Page components
│   └── IndexPage/      # Investment calculator page
├── helpers/            # Utility functions
│   └── numbers.ts      # Number formatting and validation
├── navigation/         # Routing configuration
├── css/               # CSS utilities and styles
├── test/              # Test configuration
├── index.tsx          # Application entry point
└── init.ts            # Telegram SDK initialization
```

## Useful Links

- [Platform documentation](https://docs.telegram-mini-apps.com/)
- [@telegram-apps/sdk-react documentation](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react)
- [Telegram developers community chat](https://t.me/devs)
