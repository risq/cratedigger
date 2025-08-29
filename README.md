# Cratedigger - 3D Music Collection Explorer

A modern, immersive 3D visualization of vinyl record collections built with Vite, Three.js, and PapaParse. Explore up to 250 records from your collection in an interactive 3D environment.

![Cratedigger Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=3D+Crate+Explorer)

## ✨ Features

- **3D Interactive Environment**: Navigate through vinyl crates in a beautiful 3D spiral arrangement
- **CSV Data Loading**: Automatically loads and displays the first 250 records from `cratediggerDB.csv`
- **Album Information**: Click or tap any crate to view detailed album information including cover art
- **Mobile Friendly**: Fully responsive design with touch controls for mobile devices
- **Modern Stack**: Built with Vite, Three.js, and modern web technologies
- **GitHub Pages Ready**: Deploys directly to GitHub Pages with zero configuration

## 🚀 Live Demo

View the live demo at: `https://yourusername.github.io/cratedigger`

## 📁 CSV Data Format

Place your `cratediggerDB.csv` file in the project root with the following columns:

```csv
title,artist,cover,year,id,hasSleeve
So What,Miles Davis,https://example.com/album-cover.jpg,1959,TRACK001,true
```

**Required columns:**
- `title` - Album/track title
- `artist` - Artist name  
- `cover` - URL to album cover image
- `year` - Release year
- `id` - Unique identifier
- `hasSleeve` - Boolean indicating if record has sleeve

The application will automatically load the first 250 records from your CSV file.

## 🛠️ Development Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/cratedigger.git
cd cratedigger
```

2. Install dependencies:
```bash
npm install
```

3. Place your `cratediggerDB.csv` file in the project root

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version to `/docs` folder
- `npm run preview` - Preview production build locally  
- `npm run deploy` - Build and prepare for GitHub Pages deployment

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. Enable GitHub Pages in your repository settings
2. Set source to "Deploy from a branch"
3. Select `main` branch and `/docs` folder
4. Run the deploy command:
```bash
npm run deploy
```
5. Commit and push the changes to trigger deployment

### Manual Deployment

The build output is automatically configured for GitHub Pages with:
- Output directory set to `/docs`
- `.nojekyll` file included to bypass Jekyll processing
- Proper asset paths for subdirectory deployment

## 🎮 Controls

- **Mouse/Touch Drag**: Rotate the camera around the scene
- **Mouse Wheel/Pinch**: Zoom in and out
- **Click/Tap**: Select a crate to view album details
- **Close Button**: Hide the album information panel

## 🔧 Customization

### Updating Your Collection

1. Update your `cratediggerDB.csv` file with new records
2. Run `npm run deploy` to rebuild and redeploy
3. Commit and push changes to update the live site

### Visual Customization

Key files to modify:
- `src/style.css` - UI styling and colors
- `src/main.js` - 3D scene configuration and crate arrangement
- `index.html` - Page structure and meta information

### Performance Notes

- The application loads only the first 250 records for optimal performance
- Images are loaded on-demand when crates are selected
- Three.js scene is optimized for smooth 60fps performance

## 🏗️ Project Structure

```
cratedigger/
├── src/
│   ├── main.js          # Main Three.js application
│   └── style.css        # Styling and responsive design
├── docs/                # Build output for GitHub Pages
├── public/              # Static assets
├── cratediggerDB.csv    # Your music collection data
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [Vite](https://vitejs.dev/) - Build tool and development server  
- [PapaParse](https://www.papaparse.com/) - CSV parsing library
- Original cratedigger.js concept for inspiration

---

**Made with ❤️ for vinyl enthusiasts and crate diggers everywhere**
