# MegaBlog - Modern React Blog Application

A full-featured, modern blogging platform built with React, Tailwind CSS, and Appwrite backend services.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Authentication**: Secure user login/signup with Appwrite
- **Blog Management**: Create, read, update, and delete blog posts
- **Rich Text Editor**: TinyMCE integration for content creation
- **Image Upload**: Featured image support with preview
- **State Management**: Redux Toolkit for global state
- **Routing**: React Router for seamless navigation
- **Responsive Design**: Mobile-first approach
- **Search Functionality**: Search through blog posts
- **User Dashboard**: Personal post management

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Backend**: Appwrite (BaaS)
- **Rich Text**: TinyMCE
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanketsMane/MegaBlog.git
   cd MegaBlog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   VITE_TINYMCE_API_KEY=your_tinymce_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
MegaBlog/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── post-form/
│   │   └── index.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AllPosts.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   ├── Store/
│   │   ├── authSlice.js
│   │   └── store.js
│   └── App.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🔧 Configuration

### Appwrite Setup
1. Create an Appwrite project
2. Set up authentication
3. Create a database with posts collection
4. Configure storage bucket for images
5. Set up proper permissions

### TinyMCE Setup
1. Get API key from TinyMCE
2. Add to environment variables
3. Configure in RTE component

## 🎨 UI Components

- **Header**: Navigation with auth status
- **Footer**: Links and branding
- **PostCard**: Blog post preview cards
- **PostForm**: Create/edit post form
- **RTE**: Rich text editor
- **Button**: Reusable button component
- **Input**: Form input component
- **Container**: Layout wrapper

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts
- Touch-friendly interface

## 🔐 Authentication

- User registration and login
- Protected routes
- Session management
- Logout functionality

## 📝 Blog Features

- Create new posts
- Edit existing posts
- Delete posts
- View all posts
- Search posts
- Featured images
- Rich text content

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sanket Patil**
- GitHub: [@SanketsMane](https://github.com/SanketsMane)
- Email: sanketpatil@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Appwrite for backend services
- Tailwind CSS for styling
- TinyMCE for rich text editing

---

**⭐ Star this repository if you found it helpful!**