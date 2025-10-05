# Modern Photo Gallery

A sleek, modern photo gallery application built with Angular, featuring category-based navigation and a responsive design.

## Features

- 🌙 Modern dark theme with sleek UI elements
- 📂 Category-based photo organization
- 📱 Fully responsive grid layout
- ✨ Smooth animations and hover effects
- 🖼️ Image descriptions and metadata
- 📺 Fullscreen image viewing capability
- 🎨 Beautiful gradient overlays and transitions

## Technology Stack

- Angular 17+
- SCSS for styling
- Bootstrap for grid and components
- FontAwesome icons
- ngx-lightbox for fullscreen viewing

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/nishant/modern-photo-gallery.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Navigate to `http://localhost:4200` in your browser

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── category/    # Category view component
│   │   ├── gallery/     # Main gallery component
│   │   └── navbar/      # Navigation component
│   ├── models/
│   │   └── photo.model.ts
│   └── services/
│       └── photo.ts     # Photo data service
└── assets/
    └── images/          # Categorized images
        ├── nature/
        ├── architecture/
        ├── portraits/
        └── travel/
```

## Adding New Photos

Place your photos in the appropriate category folder under `src/assets/images/`. The following categories are available:
- nature/
- architecture/
- portraits/
- travel/

## Features in Detail

- **Category Navigation**: Easy browsing through different photo categories via the navbar
- **Responsive Design**: Adapts seamlessly to different screen sizes
- **Image Descriptions**: Hover over images to view detailed descriptions
- **Fullscreen View**: Click the expand icon in category view for fullscreen image viewing
- **Modern Animations**: Smooth transitions and hover effects throughout the application

## License

MIT License - Feel free to use this project for your own purposes.
