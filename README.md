# React Portfolio Showcase

A modern, responsive portfolio application built with React and Vite. This project is designed for educational purposes to demonstrate deployment workflows and modern web development practices.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and hooks
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Interactive Navigation**: Smooth section switching with active states
- **Project Showcase**: Display projects with technologies and links
- **Skills Section**: Organized technical skills by category
- **Contact Information**: Contact details and social media links
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful, customizable icons
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript ES6+**: Modern JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kalviumcommunity/react-portfolio-showcase.git
cd react-portfolio-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

This application is configured for easy deployment on modern hosting platforms:

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Framework Preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages
- Use the `gh-pages` branch deployment method
- Build and deploy using GitHub Actions

## 📁 Project Structure

```
react-portfolio-showcase/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project-url.com"
  }
  // Add more projects...
]
```

### Updating Skills
Modify the `skillCategories` array in `src/components/Skills.jsx`:

```javascript
const skillCategories = [
  {
    category: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
  // Add more categories...
]
```

### Changing Contact Information
Update the contact details in `src/components/Contact.jsx`:

```javascript
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    content: "your-email@example.com",
    link: "mailto:your-email@example.com"
  }
  // Update other contact info...
]
```

## 📱 Responsive Design

The application is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation
- Optimized images and assets

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Contributing

This is an educational project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Learning Objectives

This project demonstrates:
- Modern React development patterns
- Component-based architecture
- State management with hooks
- CSS styling and responsive design
- Build tools and deployment workflows
- Git version control best practices

## 🚀 Next Steps

After successfully deploying this application, consider:
- Adding a blog section
- Implementing a contact form
- Adding animations and transitions
- Integrating a CMS for content management
- Adding unit tests with Jest and React Testing Library
- Implementing dark mode toggle
- Adding SEO optimization

---

**Happy Coding!** 🚀