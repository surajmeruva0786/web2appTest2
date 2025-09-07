# Saveur - Fine Dining Restaurant Website

## Overview

Saveur is a static website for a fine dining restaurant that provides an elegant online presence showcasing the restaurant's culinary offerings, reservation system, and contact information. The project focuses on creating a sophisticated user experience that reflects the high-end nature of the establishment through carefully crafted visual design and smooth interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: Single-page application built with vanilla web technologies for maximum performance and simplicity
- **Component-based CSS**: Modular styling approach using CSS custom properties (CSS variables) for consistent theming
- **Mobile-first responsive design**: Adaptive layout that works seamlessly across all device sizes
- **Progressive enhancement**: Core functionality works without JavaScript, with enhanced interactions layered on top

### Design System
- **Typography hierarchy**: Combination of Playfair Display (serif) for headings and Open Sans (sans-serif) for body text
- **Color palette**: Sophisticated brown and gold theme (`--primary-color: #2C1810`, `--secondary-color: #D4AF37`) that evokes luxury dining
- **CSS custom properties**: Centralized theming system for consistent colors, transitions, and spacing
- **Smooth animations**: CSS transitions and JavaScript-powered smooth scrolling for polished user experience

### Navigation & User Experience
- **Fixed navigation bar**: Persistent header with smooth scroll navigation between sections
- **Mobile hamburger menu**: Collapsible navigation for mobile devices with toggle functionality
- **Single-page layout**: All content accessible without page reloads, organized into distinct sections (Home, Menu, Reservations, Contact)

### Interactive Features
- **Menu category switching**: Dynamic content filtering for different menu sections (appears to be incomplete in current implementation)
- **Reservation form**: Integrated booking system for table reservations
- **Responsive interactions**: Touch-friendly interface elements optimized for both desktop and mobile use

### Performance Considerations
- **Minimal dependencies**: Uses only Google Fonts as external dependency, keeping the site lightweight
- **Optimized loading**: CSS and JavaScript are kept minimal and efficiently structured
- **Browser compatibility**: Uses modern CSS features with fallbacks for broader browser support

## External Dependencies

### Fonts
- **Google Fonts**: Playfair Display and Open Sans font families loaded via CDN for typography

### Potential Integrations
- **Reservation system backend**: The reservation form structure suggests integration with a booking management system
- **Content management**: Menu items and restaurant information could be dynamically loaded from a backend API
- **Analytics**: Ready for integration with web analytics tools for tracking user engagement

### Browser APIs
- **Smooth scrolling**: Utilizes native `window.scrollTo()` with smooth behavior
- **DOM manipulation**: Standard JavaScript DOM APIs for interactive functionality
- **CSS custom properties**: Modern CSS variable support for dynamic theming