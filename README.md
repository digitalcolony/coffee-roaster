# ☕ Coffee Roaster Map

> An interactive map tracking coffee roasters from all 50 U.S. states and Washington D.C.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eedfa1de-ec55-4e37-9e7f-dd7ee054305c/deploy-status)](https://app.netlify.com/sites/coffee-roaster-map/deploys)

## 📖 About

Coffee Roaster Map is a React-based web application that visualizes my personal journey to order coffee from every U.S. state and Washington D.C. Each completed state is highlighted on an interactive map, creating a visual progress tracker for this caffeinated quest.

### 🎯 Goal

Order coffee from roasters in all 50 states plus Washington D.C. and track progress visually on an interactive map.

## ✨ Features

- **Interactive U.S. Map**: Built with `react-usa-map` for smooth user interaction
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Real-time Updates**: Map updates as new states are added to the collection
- **State Highlighting**: Completed states are visually distinguished with custom styling

## 🛠️ Tech Stack

- **Frontend**: React 16.13.1
- **Map Library**: react-usa-map
- **Styling**: CSS3 with custom responsive design
- **Build Tool**: Create React App (react-scripts 4.0.3)
- **Deployment**: Netlify
- **Data Management**: Google Sheets integration (planned)

## 📊 Data Source

Coffee roaster data is currently tracked in a [Google Sheets document](https://docs.google.com/spreadsheets/d/1h-oqlqJ_G3UXuDSkdFHuEaCVuOXQOb68y2sduXQRTn4/edit?usp=sharing) and manually updated in the application. Future iterations will include direct Google Sheets API integration for automatic updates.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended due to webpack compatibility)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/coffee-roaster.git
cd coffee-roaster
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`

Runs the app in development mode with OpenSSL legacy provider for compatibility with newer Node.js versions.

### `npm run build`

Builds the app for production to the `build` folder with optimized performance.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run eject`

**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

## 🏗️ Project Structure

```
coffee-roaster/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Progress.js        # Progress bar component
│   │   └── Progress.css       # Progress bar styles
│   ├── data/
│   │   └── States.js          # Array of completed states
│   ├── hooks/
│   │   └── useWindowSize.js   # Custom hook for responsive design
│   ├── App.js                 # Main application component
│   ├── App.css                # Application styles
│   └── index.js               # Application entry point
└── package.json
```

## 🎨 Customization

### Adding New States

Update the `src/data/States.js` file with new state abbreviations:

```javascript
const states = new Set([
	"PA",
	"OR",
	"CA",
	"WA",
	"MD",
	// Add new states here
]);
```

### Styling

Modify `src/App.css` and `src/components/Progress.css` to customize the appearance.

## 🔧 Troubleshooting

### Node.js Compatibility Issues

If you encounter `ERR_OSSL_EVP_UNSUPPORTED` errors with newer Node.js versions, the project includes OpenSSL legacy provider flags in the npm scripts. Alternatively, use Node.js v16 LTS.

### Performance Optimization

The application uses React hooks and responsive design patterns for optimal performance across devices.

## 🌟 Future Enhancements

- [ ] Direct Google Sheets API integration
- [ ] Coffee roaster details modal on state click

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/coffee-roaster/issues).

---

**Happy brewing!** ☕✨
