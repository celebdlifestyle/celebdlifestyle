# CELEBD LIFESTYLE 🌟

> **The world's new class designed exclusively for the achievers, the dreamers, and the relentlessly ambitious.**

Celebd is a "new identity" where status isn't inherited—it is built through personal branding, high-level impact, and social influence.

---

## 📖 About

**Celebd Lifestyle** is a premium e-commerce platform offering exclusive lifestyle products tailored for modern achievers and trendsetters. Our platform combines sophisticated design with cutting-edge technology to deliver an exceptional shopping experience.

### Key Features

- 🛍️ **Curated Product Collections** - Men's, Women's, and Teens collections
- 👤 **User Authentication** - Secure login and registration system
- 🏷️ **Special Collections** - Trending, Bestselling, and Plate-specific collections
- 🎨 **Multiple Plate Finishes** - Gold, Silver, White, and Black plated options
- 📦 **Order Management** - Track and manage your orders effortlessly
- 🎁 **Gift Cards** - Purchase and check gift card balances
- 🔍 **Advanced Search** - Find products quickly with search panel
- 📊 **Admin Dashboard** - Comprehensive product and category management
- 🖼️ **Image Protection** - Secure image display with ImageGuard
- 🎯 **Dynamic Routing** - SEO-friendly URLs for products and categories
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js 14 App Router
- 🎨 **Custom Typography** - Elegant Didot font family
- 📄 **Rich Content Pages** - Help center, size guides, shipping info, and more
- 🛡️ **Route Protection** - Secure admin routes
- 🎪 **Interactive Carousels** - Showcase products beautifully
- 📐 **Multiple Image Ratios** - 16:9, 21:9, 1:1, and 4:5 aspect ratios
- 💼 **Brand Initiatives** - Celebd Access, Celebd Gives, Celebd Moves

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Zustand** - State management
- **Lucide Icons** - Modern icon library

### Backend & Database

- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Next.js API Routes** - Serverless API endpoints

### Image Management

- **Cloudinary** - Cloud-based image storage and optimization

---

## 📁 Project Structure

```
celebd-lifestyle/
├── src/
│   ├── app/
│   │   ├── (shop)/              # Shop frontend pages
│   │   │   ├── collections/     # Product collections
│   │   │   │   ├── [slug]/     # Dynamic collection pages
│   │   │   │   ├── men/        # Men's collection
│   │   │   │   ├── women/      # Women's collection
│   │   │   │   └── teens/      # Teens collection
│   │   │   │
│   │   │   ├── products/        # Product pages
│   │   │   │   ├── [category]/[slug]/  # Product detail pages
│   │   │   │   │   └── ownit/          # Purchase page
│   │   │   │   ├── bestsellings/       # Bestselling products
│   │   │   │   ├── trending/           # Trending products
│   │   │   │   ├── celebd-gold-plated/   # Gold plated collection
│   │   │   │   ├── celebd-silver-plated/ # Silver plated collection
│   │   │   │   ├── celebd-white-plated/  # White plated collection
│   │   │   │   └── celebd-black-plated/  # Black plated collection
│   │   │   │
│   │   │   ├── pages/           # Static pages
│   │   │   │   ├── login-or-register/
│   │   │   │   ├── help-center/
│   │   │   │   ├── order-history/
│   │   │   │   ├── track-my-order/
│   │   │   │   ├── shipping-&-billing/
│   │   │   │   ├── returns-&-exchanges/
│   │   │   │   ├── size-guide/
│   │   │   │   ├── gift-card/
│   │   │   │   ├── celebd-access/
│   │   │   │   ├── celebd-gives/
│   │   │   │   ├── celebd-moves/
│   │   │   │   ├── we-are-celebd/
│   │   │   │   ├── blog/
│   │   │   │   ├── careers/
│   │   │   │   ├── reviews/
│   │   │   │   ├── privacy/
│   │   │   │   ├── terms/
│   │   │   │   └── cookie-policy/
│   │   │   │
│   │   │   ├── layout.tsx       # Shop layout
│   │   │   └── page.tsx         # Homepage
│   │   │   └── README.md        # 📄 Shop pages documentation
│   │   │
│   │   ├── admin/               # Admin dashboard
│   │   │   ├── products/        # Product management
│   │   │   ├── categories/      # Category management
│   │   │   ├── layout.tsx       # Admin layout
│   │   │   └── page.tsx         # Admin dashboard home
│   │   │
│   │   ├── api/                 # API endpoints
│   │   │   ├── products/        # Product CRUD operations
│   │   │   │   ├── [id]/        # Single product operations
│   │   │   │   └── route.ts     # Products list
│   │   │   ├── categories/      # Category management
│   │   │   │   ├── [id]/        # Single category operations
│   │   │   │   └── route.ts     # Categories list
│   │   │   └── README.md        # 📄 API documentation
│   │   │
│   │   ├── fonts/               # Custom fonts
│   │   │   ├── Didot.otf
│   │   │   ├── DidotBold.otf
│   │   │   ├── DidotItalic.otf
│   │   │   └── DidotTitle.otf
│   │   │
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── favicon.ico
│   │
│   ├── components/              # Reusable components
│   │   ├── admin/              # Admin-specific components
│   │   │   ├── ImageUploader.tsx    # Cloudinary image uploader
│   │   │   ├── RouteProtector.tsx   # Protected routes
│   │   │   └── Sidebar.tsx          # Admin sidebar
│   │   │
│   │   ├── shop/               # Shop-specific components
│   │   │   ├── Navbar.tsx           # Navigation bar
│   │   │   ├── Footer.tsx           # Footer
│   │   │   ├── Sidebar.tsx          # Shop sidebar
│   │   │   ├── ProductCard.tsx      # Product display card
│   │   │   ├── CategoryCard.tsx     # Category card
│   │   │   ├── Banner.tsx           # Hero banners
│   │   │   ├── Carousels.tsx        # Product carousels
│   │   │   ├── SearchPanel.tsx      # Search functionality
│   │   │   ├── ShopByLooks.tsx      # Curated looks
│   │   │   ├── ImageGuard.tsx       # Image protection
│   │   │   ├── NavButtons.tsx       # Navigation buttons
│   │   │   └── Skeletons.tsx        # Loading skeletons
│   │   │
│   │   └── ui/                 # Common UI components
│   │       ├── button.tsx
│   │       ├── carousel.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── scroll-area.tsx
│   │       └── tabs.tsx
│   │
│   ├── store/                   # Zustand state management
│   │   ├── product.store.ts    # Product state
│   │   └── categories.store.ts # Category state
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── product.type.ts     # Product interfaces
│   │   └── category.type.ts    # Category interfaces
│   │
│   ├── lib/                     # Utility functions
│   │   ├── mongodb.ts          # Database connection
│   │   └── utils.ts            # Helper functions
│   │
│   └── assets/                  # Static assets
│       ├── images_16_9/        # 16:9 aspect ratio images
│       ├── images_21_9/        # 21:9 aspect ratio images
│       └── images_1_1/         # 1:1 aspect ratio images
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/celebd-lifestyle.git
   cd celebd-lifestyle
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📚 Documentation

For detailed documentation on specific parts of the application:

- **Shop Pages & Features**: See [`app/(shop)/README.md`](<./app/(shop)/README.md>)
- **API Endpoints**: See [`app/api/README.md`](./app/api/README.md)

---

## 🎨 Product Features

### Collections

- **Men's Collection** - Exclusive products for men
- **Women's Collection** - Curated items for women
- **Teens Collection** - Trendy pieces for teens
- **Bestselling** - Top-rated products
- **Trending** - What's hot right now

### Plate Types

Each product is available in exclusive plate finishes:

- 🥇 **Gold Plated** - Premium luxury finish
- 🥈 **Silver Plated** - Classic elegance
- ⚪ **White Plated** - Modern sophistication
- ⚫ **Black Plated** - Bold statement

### Product Pages

- Dynamic category and product pages
- Product detail with "Own It" purchase flow
- Quick view and detailed specifications
- Image galleries with multiple angles
- Size guides and fit recommendations

### Customer Pages

- 🔐 **Login/Register** - Secure authentication
- 📦 **Order History** - Track past purchases
- 🚚 **Track My Order** - Real-time shipping updates
- 💳 **Shipping & Billing** - Manage addresses and payments
- 🔄 **Returns & Exchanges** - Easy return process
- 📏 **Size Guide** - Find your perfect fit
- 🎁 **Gift Cards** - Purchase and check balances
- ⭐ **Reviews** - Customer feedback and ratings

### Brand Pages

- **We Are Celebd** - Our story and mission
- **Celebd Access** - Exclusive member benefits
- **Celebd Gives** - Social responsibility initiatives
- **Celebd Moves** - Latest news and updates
- **Blog** - Lifestyle content and inspiration
- **Careers** - Join our team

---

## 🔑 Admin Features

The admin dashboard provides comprehensive management tools:

- ✅ **Product Management** - Create, edit, delete products
- ✅ **Category Management** - Organize product categories
- ✅ **Image Upload** - Cloudinary integration with 4:5 aspect ratio
- ✅ **Inventory Tracking** - Monitor stock levels
- ✅ **Order Management** - Process and track orders
- ✅ **Search & Filter** - Quick product discovery
- ✅ **Trending/Bestselling** - Mark featured products

---

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/celebd-lifestyle)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Celebd Lifestyle Team**

- Website: [https://celebdlifestyle.com](https://celebdlifestyle.com)
- Email: [support@celebdlifestyle.com]

---

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Vercel for hosting and deployment
- MongoDB for reliable database solutions
- Cloudinary for image management
- All our contributors and supporters

---

## 💫 Final Note

Built with ❤️ for achievers, dreamers, and the relentlessly ambitious

⭐ Star us on GitHub — it motivates us a lot!

---
