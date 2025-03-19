# React Frontend Application

A modern React application with a responsive layout and clean design.

## Features

- Modern React with TypeScript
- Responsive layout with styled-components
- React Router for navigation
- Clean and modular component structure
- ESLint and Prettier for code quality

## Media Management

This project uses a dedicated `NextPhaseElectMediaLibrary` directory for storing media files. However, to optimize deployment:

- Media files are excluded from Git using the `.gitignore` file
- During deployment, media files are excluded using `.deployment_ignore`
- A placeholder SVG image is served for any missing media references
- For production, you will need to selectively include essential media files

## Project Structure

```
frontend/
├── public/             # Static files
│   └── assets/         # Public assets including placeholder images
├── NextPhaseElectMediaLibrary/ # Media files (excluded from deployment)
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   └── layout/     # Layout components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and theme
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── .prettierrc         # Prettier configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
# or
yarn lint
```

## Customization

### Styling

The project uses styled-components for styling. The theme configuration is located in `src/styles/theme.ts`.

### Adding New Pages

1. Create a new page component in the `src/pages` directory
2. Add a new route in `src/App.tsx`

## Deployment

This project is configured for deployment to Azure Static Web Apps. The deployment process:

1. Excludes the media library directory to keep deployment size small
2. Uses a placeholder image for any missing media references
3. Configures routes in `staticwebapp.config.json` to handle media requests appropriately

For production deployment, you'll need to:
1. Update the `.gitignore` to selectively include essential media files
2. Modify the GitHub workflow to copy needed media files to the deployment directory

## License

This project is licensed under the MIT License.
