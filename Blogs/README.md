<p align="center">
  <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin" alt="FairArena Logo" width="140" height="140">
</p>

---

<p align="center">
  <strong>Engineering deep dives, architecture decisions, and developer stories.</strong>
</p>

---

# FairArena Engineering Blog

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Docs</a>
</p>

---

## 🚀 Overview

The **FairArena Engineering Blog** is a production-grade content platform built to share our technical journey. It is designed to be fast, SEO-optimized, and aesthetically aligned with our main product.

---

## ✨ Features

- **MDX-Powered Content**: Write blog posts in Markdown with React components.
- **Advanced SEO**: Full JSON-LD schema support, dynamic sitemaps, and optimized metadata.
- **Smart Images**: Custom image component with automatic error handling and Next.js optimization.
- **Type-Safe**: Full TypeScript integration for content frontmatter and components.
- **Performance**: Static generation (SSG) for lightning-fast page loads.

---

## 🛠 Tech Stack

| Category     | Technology      | Description                          |
| ------------ | --------------- | ------------------------------------ |
| **Frontend** | Next.js 15      | App Router & Server Components       |
| **Styling**  | Tailwind CSS v4 | Utility-first styling with Shadcn UI |
| **Content**  | Fumadocs MDX    | Type-safe Markdown processing        |
| **Assets**   | Next.js Image   | Optimized image delivery             |
| **Language** | TypeScript      | Strict type safety                   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+)
- **pnpm** (v9+)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/FairArena/FairArena-Blogs.git
   cd FairArena-Blogs/Blogs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Configuration**

   No `.env` file is required for the blog as it uses static content generation.

### Running the Application

You can start the services using the following commands:

**Development Server**

```bash
pnpm dev
```

**Production Build**

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```text
.
├── app/                # Next.js App Router pages
├── components/         # React components (SmartImage, Navbar, etc.)
├── content/            # MDX source files for blogs and docs
├── lib/                # Utility functions and source adapters
└── public/             # Static assets
```

---

## 📚 Documentation

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

---

## 📄 License

This blog content is licensed under the **MIT License**.

---

## 👤 Author

**FairArena Engineering Team**

- Website: [https://fairarena.app](https://fairarena.app)
- GitHub: [https://github.com/FairArena](https://github.com/FairArena)
- Email: contact@fairarena.com

<p align="center">
  <sub>Built with ❤️ by the FairArena Team</sub>
</p>
