<p align="center">
  <img src="https://fairarena.blob.core.windows.net/fairarena/fairArenaLogo.png" alt="FairArena Logo" width="140" height="140">
</p>

---

<p align="center">
  <strong>Engineering deep dives, technical insights, and the story behind FairArena</strong>
</p>

<p align="center">
  <a href="https://github.com/FairArena/FairArena-Blogs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  </a>
  <a href="https://github.com/FairArena/FairArena-Blogs/issues">
    <img src="https://img.shields.io/github/issues/FairArena/FairArena-Blogs" alt="GitHub issues">
  </a>
  <a href="https://github.com/FairArena/FairArena-Blogs/stargazers">
    <img src="https://img.shields.io/github/stars/FairArena/FairArena-Blogs" alt="GitHub stars">
  </a>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 🚀 Overview

**FairArena-Blogs** is the official engineering blog repository for FairArena, a modern full-stack platform for fair and transparent skill assessment. This repository houses our technical content platform built with Next.js 15, showcasing our journey building a production-grade assessment platform.

The blog serves as a knowledge hub where we share:
- **Architecture decisions** and technical deep dives
- **Engineering challenges** and how we solve them
- **Best practices** from building scalable systems
- **Developer stories** from the FairArena team

Built with performance, SEO, and developer experience in mind, this blog demonstrates the same engineering excellence we apply to our core platform.

---

## ✨ Features

- **📝 MDX-Powered Content**: Write blog posts in Markdown with embedded React components for interactive content
- **🔍 Advanced SEO**: Full JSON-LD schema support, dynamic sitemaps, and optimized metadata for maximum discoverability
- **🖼️ Smart Image Handling**: Custom image component with automatic error handling, lazy loading, and Next.js optimization
- **⚡ Lightning Fast**: Static Site Generation (SSG) for instant page loads and optimal Core Web Vitals
- **🎨 Modern UI/UX**: Polished interface built with Tailwind CSS v4 and Shadcn UI components
- **🔒 Type-Safe**: Full TypeScript integration for content frontmatter, components, and data structures
- **📱 Responsive Design**: Seamless experience across all devices and screen sizes
- **🎯 Content Management**: Fumadocs MDX for type-safe, structured content processing

---

## 🛠 Tech Stack

| Category         | Technology      | Description                              |
| ---------------- | --------------- | ---------------------------------------- |
| **Framework**    | Next.js 15      | App Router & React Server Components    |
| **Styling**      | Tailwind CSS v4 | Utility-first CSS framework              |
| **UI Components** | Shadcn UI      | Customizable component library           |
| **Content**      | Fumadocs MDX    | Type-safe Markdown processing & routing  |
| **Images**       | Next.js Image   | Optimized image delivery & transformation |
| **Language**     | TypeScript      | Strict type safety throughout            |
| **Linting**      | ESLint          | Code quality and consistency             |
| **Formatting**   | Prettier        | Automated code formatting                |
| **Git Hooks**    | Husky           | Pre-commit quality checks                |
| **Package Manager** | pnpm         | Fast, disk space efficient package manager |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (v9.0.0 or higher)

```bash
# Check versions
node --version
pnpm --version
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/FairArena/FairArena-Blogs.git
   cd FairArena-Blogs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Navigate to the Blogs directory**

   ```bash
   cd Blogs
   ```

### Running the Application

**Development Server**

Start the development server with hot reload:

```bash
cd Blogs
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog in your browser.

**Production Build**

Build and run the optimized production version:

```bash
cd Blogs
pnpm build
pnpm start
```

**Linting and Formatting**

```bash
# Run linting
pnpm lint

# Format code
pnpm format
```

---

## 📁 Project Structure

```text
.
├── .github/             # GitHub workflows and configuration
├── .husky/              # Git hooks for code quality
├── Blogs/               # Main Next.js blog application
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components (SmartImage, Navbar, etc.)
│   ├── content/         # MDX source files for blogs and docs
│   │   ├── blogs/       # Blog post MDX files
│   │   └── docs/        # Documentation MDX files
│   ├── lib/             # Utility functions and source adapters
│   ├── public/          # Static assets and images
│   └── ...
├── scripts/             # Utility scripts for automation
├── CONTRIBUTING.md      # Contribution guidelines
├── CODE_OF_CONDUCT.md   # Community code of conduct
├── SECURITY.md          # Security policy
└── README.md            # This file
```

---

## 📝 Writing Blog Posts

To create a new blog post:

1. **Create a new MDX file** in `Blogs/content/blogs/`

   ```bash
   touch Blogs/content/blogs/my-new-post.mdx
   ```

2. **Add frontmatter** with required metadata:

   ```mdx
   ---
   title: "Your Blog Post Title"
   description: "A concise description of your post"
   date: 2026-01-25
   authors:
     - name: Your Name
       url: https://github.com/yourusername
   ---

   Your content here...
   ```

3. **Write your content** using Markdown and React components

4. **Preview locally** by running the development server

For detailed guidelines, see our [Contributing Guide](CONTRIBUTING.md).

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's:

- 📖 Writing blog posts about your experiences
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features or improvements
- 🔧 Submitting pull requests

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

### Quick Contribution Steps

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (follow our [commit message guidelines](Commit-message.md))
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🔒 Security

We take security seriously. If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md) for responsible disclosure.

---

## 👥 Team

**FairArena Engineering Team**

- 🌐 Website: [https://fair.sakshamg.me](https://fair.sakshamg.me)
- 💻 GitHub: [@FairArena](https://github.com/FairArena)
- 📧 Email: contact@fairarena.com

### Key Contributors

- **Saksham Goel** - [@Saksham-Goel1107](https://github.com/Saksham-Goel1107)

---

## 🔗 Related Projects

- [FairArena Main Platform](https://github.com/FairArena) - The core skill assessment platform

---

## 📊 Project Status

This project is actively maintained and regularly updated with new content and features.

- ✅ Production-ready
- ✅ Actively maintained
- ✅ Accepting contributions
- ✅ SEO optimized
- ✅ Performance optimized

---

## 💬 Support

Need help or have questions?

- 📖 Check our [documentation](https://github.com/FairArena/FairArena-Blogs/wiki)
- 💬 Open a [GitHub Discussion](https://github.com/FairArena/FairArena-Blogs/discussions)
- 🐛 Report issues in the [Issue Tracker](https://github.com/FairArena/FairArena-Blogs/issues)

---

<p align="center">
  <sub>Built with ❤️ by the FairArena Team</sub>
</p>
