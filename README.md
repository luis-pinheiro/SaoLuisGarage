# São Luís Garagem - Oficina Mecânica

Web application for **Garagem São Luís**, a certified auto repair shop located in Oliveira de Azeméis, Portugal. This project is a modern, responsive landing page designed to showcase services, reliability, and provide easy contact options for customers.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Tech Stack

Built with the latest web technologies for performance and SEO:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email**: [Nodemailer](https://nodemailer.com/) (Contact Form Integration)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

- **Responsive Design**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Modern UI/UX**: clean, professional aesthetic matching the brand identity.
- **Contact Form**: Functional email dispatch using Nodemailer.
- **Google Maps Integration**: Direct location visualization.
- **SEO Optimized**: Built with Next.js best practices for search visibility.
- **Performance**: Fast loading times and optimized assets.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/saoluisgaragem.git
   cd saoluisgaragem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Environment Variables:
   Create a `.env.local` file in the root directory and add your email configuration:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── actions/          # Server actions (e.g., email sending)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── src/
│   └── components/       # Reusable UI components (Hero, Services, Contact, etc.)
├── public/               # Static assets (images, icons)
└── ...
```

## 📄 License

This project is licensed under the MIT License.
