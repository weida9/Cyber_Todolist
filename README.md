<div align="center">

<h1 align="center">🌟 Cyberpunk Todolist</h1>

![GitHub License](https://img.shields.io/github/license/yourusername/cyberpunk-todolist)
![GitHub Stars](https://img.shields.io/github/stars/yourusername/cyberpunk-todolist?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/cyberpunk-todolist)
[![Build Status](https://img.shields.io/github/actions/workflow/status/yourusername/cyberpunk-todolist/ci.yml?branch=main)](https://github.com/yourusername/cyberpunk-todolist/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**A futuristic Cyberpunk-styled todolist for the digital age.**

[View Demo](https://yourusername.github.io/cyberpunk-todolist) | [Report Bug](https://github.com/yourusername/cyberpunk-todolist/issues/new?template=bug_report.md) | [Request Feature](https://github.com/yourusername/cyberpunk-todolist/issues/new?template=feature_request.md)

<img src="docs/screenshots/demo.png" alt="Cyberpunk Todo Screenshot" width="600">

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Getting Started](#-getting-started-1)
- [🧰 Development](#-development)
- [🔧 Customization](#-customization)
- [🔄 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Authors](#-authors)
- [📝 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

## ✨ Features

<img src="docs/screenshots/features.gif" alt="Feature demonstration" width="300" align="right">

### Task Management
- **Create** new tasks with a futuristic input interface
- **Edit** tasks through a custom cyberpunk-styled modal
- **Delete** tasks with sleek disappearing animations
- **Mark as Complete** with animated neon checkboxes

### User Experience
- **Persistent Storage** using localStorage for session retention
- **Filtering System** (All/Active/Completed) for task organization
- **Responsive Design** adapting to any device or screen size
- **Offline Functionality** - no internet required

### Cyberpunk UI Elements
- Neon glow effects and color transitions
- Text glitch animations for cyberpunk aesthetic
- CRT scan line overlay simulating retro-futuristic displays
- Futuristic boot sequence animation on startup
- Ambient hover and interaction effects

<div align="center">
<details>
<summary>🖼️ View More Screenshots</summary>
<br>
<img src="docs/screenshots/mobile-view.png" alt="Mobile View" width="250">
<img src="docs/screenshots/dark-mode.png" alt="Dark Mode" width="400">
<img src="docs/screenshots/task-editing.png" alt="Task Editing" width="400">
</details>
</div>

## 🚀 Live Demo

Experience the Cyberpunk Todolist in action at our [live demo site](https://yourusername.github.io/cyberpunk-todolist).

The demo is automatically updated with the latest features from the main branch.

## 🛠️ Tech Stack

- **Frontend Fundamentals**
  - ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) - Semantic structure
  - ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) - Custom animations and effects
  - ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) - Vanilla JS for functionality

- **UI/Styling**
  - ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) - Utility-first CSS framework
  - ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white) - Orbitron font for cyberpunk typography

- **Storage & State**
  - ![LocalStorage](https://img.shields.io/badge/LocalStorage-999999?style=flat&logo=&logoColor=white) - Browser-based data persistence

- **Development Tools**
  - ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) - Code quality
  - ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white) - Testing
  - ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) - CI/CD

## 📋 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or server required!

### Browser Compatibility

| Browser | Supported Versions |
|---------|-------------------|
| Chrome  | 60+ ✅            |
| Firefox | 60+ ✅            |
| Safari  | 12+ ✅            |
| Edge    | 79+ ✅            |
| IE      | Not Supported ❌  |

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cyberpunk-todolist.git
   ```

2. **Navigate to project directory**
   ```bash
   cd cyberpunk-todolist
   ```

3. **Open in browser**
   ```bash
   # Linux/macOS
   open index.html
   
   # Windows
   start index.html
   ```

### For Developers

If you want to make changes and run a development server:

```bash
# Install development dependencies
npm install

# Start development server
npm start
```

## 🧰 Development

### Project Structure

```
cyberpunk-todolist/
├── index.html              # Main HTML file
├── src/
│   ├── js/                 # JavaScript files
│   │   └── app.js          # Main app logic
│   ├── css/                # Stylesheets
│   │   └── styles.css      # Custom styles
│   └── assets/             # Images, fonts, etc.
├── docs/                   # Documentation
├── tests/                  # Test files
└── .github/                # GitHub specific files
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage
```

### Linting

```bash
# Run linting checks
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## 🔧 Customization

### Color Scheme

The cyberpunk theme can be customized by modifying the Tailwind configuration:

```js
// In index.html - Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'cyber-yellow': '#f9f002', // Change to your preferred yellow
        'cyber-pink': '#ff2a6d',   // Change to your preferred pink
        'cyber-blue': '#05d9e8',   // Change to your preferred blue
        // ...more colors
      }
    }
  }
}
```

### Animation Effects

Modify animation timing and effects in `src/css/styles.css`:

```css
/* Adjust glitch effect intensity */
.glitch-text {
  animation: glitch 0.5s infinite; /* Change timing for faster/slower effect */
}

/* Customize glow effects */
.cyber-checkbox:checked {
  box-shadow: 0 0 15px #05d9e8; /* Increase for more intense glow */
}
```

## 🔄 Roadmap

We're constantly working to improve Cyberpunk Todolist. Here's what's coming:

- [ ] Dark/Light theme toggle
- [ ] Task categories and tags
- [ ] Drag-and-drop task reordering
- [ ] Due dates and reminders
- [ ] Data export/import functionality
- [ ] PWA support for offline installation
- [ ] More cyberpunk visual themes

See the [open issues](https://github.com/yourusername/cyberpunk-todolist/issues) for a full list of proposed features and known issues.

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Don't forget to give the project a star! Thanks again!

For more details, please read our [Contributing Guidelines](CONTRIBUTING.md).

## 👨‍💻 Authors

- **Weida** - *Initial work* - [@weida9](https://github.com/weida9)

See also the list of [contributors](https://github.com/yourusername/cyberpunk-todolist/contributors) who participated in this project.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cyberpunk 2077](https://www.cyberpunk.net/) for design inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) for the Orbitron font
- All [contributors](https://github.com/yourusername/cyberpunk-todolist/contributors) and supporters

## 🤖 AI-Generated Project

This project was 99% created by prompting in the Cursor AI with Claude 3.7 Sonnet Extended Thinking. Approximately 95% of the code, documentation, and design decisions were made by artificial intelligence, with minimal human intervention.

The AI model generated the:
- HTML structure and UI design
- CSS styling and animations
- JavaScript functionality
- Project documentation
- File structure and organization

Human contributions were limited to providing initial prompts, reviewing the output, and making minor adjustments.

---

<div align="center">
  
Made with ❤️ for the cyberpunk lovers and productivity enthusiasts

[⬆ Back to Top](#-cyberpunk-todolist)

</div> 
