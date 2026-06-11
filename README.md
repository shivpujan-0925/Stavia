# Stavia

> A full-stack web application for listing and discovering properties with real-time maps and cloud storage integration.

[![Node.js Version](https://img.shields.io/badge/node-22.18.0-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-5.1.0-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/mongodb-latest-green)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/license-ISC-blue)](#license)

## ✨ Features

- **User Authentication** - Secure login/signup with Passport.js
- **Property Listings** - Create, read, update, and delete property listings
- **Interactive Maps** - Integrated MapTiler for location visualization
- **Cloud Image Storage** - Cloudinary integration for seamless image uploads
- **Session Management** - MongoDB-backed session persistence
- **Responsive Design** - Clean and intuitive user interface
- **Real-time Updates** - Dynamic content management with method override support
- **Form Validation** - Robust input validation with Joi

## 🛠️ Tech Stack

### Backend
- **Framework**: [Express.js](https://expressjs.com/) v5.1.0 - Fast and minimal web framework
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) v8.19.0
- **Authentication**: [Passport.js](http://www.passportjs.org/) with local strategy
- **Session Storage**: [connect-mongo](https://github.com/jdesboeufs/connect-mongo) v5.1.0

### Frontend
- **Templating**: [EJS](https://ejs.co/) v3.1.10
- **Markup Helpers**: [ejs-mate](https://www.npmjs.com/package/ejs-mate) v4.0.0
- **Styling**: CSS for custom designs

### External Services
- **Image Storage**: [Cloudinary](https://cloudinary.com/) v2.7.0
- **File Upload**: [Multer](https://github.com/expressjs/multer) v2.0.2
- **Maps**: [MapTiler SDK](https://maptiler.com/) v3.8.0 and [@maptiler/client](https://www.npmjs.com/package/@maptiler/client) v2.5.1

### Additional Tools
- **Validation**: [Joi](https://joi.dev/) v18.0.1
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv) v17.2.3
- **Cookies**: [cookie-parser](https://www.npmjs.com/package/cookie-parser) v1.4.7
- **Flash Messages**: [connect-flash](https://www.npmjs.com/package/connect-flash) v0.1.1
- **HTTP Method Override**: [method-override](https://www.npmjs.com/package/method-override) v3.0.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** v22.18.0 or higher ([Download](https://nodejs.org/))
- **npm** v10.x or higher (comes with Node.js)
- **MongoDB** (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud service)
- **Cloudinary Account** (for image storage) - [Sign up free](https://cloudinary.com/users/register/free)
- **MapTiler Account** (for maps) - [Get API Key](https://www.maptiler.com/)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shivpujan-0925/Stavia.git
cd Stavia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/stavia
# Or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/stavia

# Session Secret
SESSION_SECRET=your_session_secret_here_change_this

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

# MapTiler Configuration
MAPTILER_API_KEY=your_maptiler_api_key

# Passport Configuration (optional)
PASSPORT_LOCAL_STRATEGY=true
```

### 4. Start the Application

**Development Mode:**
```bash
npm start
```

**With Auto-reload (nodemon recommended):**
```bash
npm install -D nodemon
npx nodemon app.js
```

The application will start on `http://localhost:3000`

## 📁 Project Structure

```
Stavia/
├── controllers/          # Request handlers and business logic
├── models/              # MongoDB schemas and models
├── routes/              # API and page routes
├── views/               # EJS templates
├── public/              # Static files (CSS, JS, images)
├── utils/               # Utility functions
├── init/                # Initialization scripts
├── app.js               # Express application entry point
├── middleware.js        # Custom middleware
├── cloudConfig.js       # Cloudinary configuration
├── schema.js            # Data validation schemas (Joi)
├── package.json         # Project dependencies
└── .env                 # Environment variables (create this)
```

## 🔑 Key Files Overview

### `app.js`
Main application file that configures Express, connects middleware, and starts the server.

### `middleware.js`
Contains custom middleware for authentication, error handling, and request processing.

### `cloudConfig.js`
Configures Cloudinary integration for image uploads and storage.

### `schema.js`
Defines Joi validation schemas for user input validation.

### `models/`
Contains Mongoose schemas for database entities (User, Listing, etc.)

### `controllers/`
Business logic for handling requests - user registration, listing management, etc.

### `routes/`
Defines application routes and maps them to controllers.

### `views/`
EJS template files for rendering HTML pages.

## 🔐 Authentication

Stavia uses Passport.js with local authentication strategy:

- **Sign Up**: Create new user account with username and password
- **Log In**: Authenticate with credentials
- **Session Management**: Secure session storage in MongoDB
- **Password Hashing**: Automatic password encryption with passport-local-mongoose

## 📸 Image Management

Images are stored on Cloudinary with Multer handling uploads:

1. User selects image during property listing creation
2. Multer processes the upload
3. Cloudinary stores the image and returns URL
4. URL is saved to database

**Supported Formats**: JPEG, PNG, GIF, WebP, etc.

## 🗺️ Maps Integration

MapTiler provides interactive maps for property locations:

- Display property locations on maps
- Interactive markers for listings
- Zoom and navigation controls
- Custom styling support

## 🧪 API Routes (Examples)

```
GET    /                     # Home page
GET    /signup               # Signup form
POST   /signup               # Create new user
GET    /login                # Login form
POST   /login                # Authenticate user
POST   /logout               # Destroy session

GET    /listings             # View all listings
GET    /listings/new         # New listing form
POST   /listings             # Create listing
GET    /listings/:id         # View listing details
GET    /listings/:id/edit    # Edit listing form
PUT    /listings/:id         # Update listing
DELETE /listings/:id         # Delete listing
```

## ⚙️ Configuration

### Database Connection

Configure MongoDB connection in `.env`:

```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/stavia

# MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/stavia?retryWrites=true&w=majority
```

### Cloudinary Setup

1. Create a [Cloudinary account](https://cloudinary.com/)
2. Get your API credentials from Dashboard
3. Add to `.env`:
   ```env
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_KEY=your_key
   CLOUDINARY_SECRET=your_secret
   ```

### MapTiler Setup

1. Sign up at [MapTiler](https://www.maptiler.com/)
2. Generate API key in account settings
3. Add to `.env`:
   ```env
   MAPTILER_API_KEY=your_api_key
   ```

## 🚨 Error Handling

The application includes comprehensive error handling:

- **Validation Errors**: Joi schema validation with user-friendly messages
- **Database Errors**: MongoDB connection and query error handling
- **Authentication Errors**: Failed login attempt handling
- **File Upload Errors**: Multer upload error management
- **Flash Messages**: User feedback through flash notifications

## 📦 Scripts

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  }
}
```

## 🔄 Workflow Example

### Creating a Property Listing

1. User navigates to `/listings/new`
2. Form is displayed with fields for property details and image
3. User fills form and uploads image
4. Multer processes image to Cloudinary
5. Joi validates all input
6. Controller creates listing in MongoDB
7. User is redirected to new listing page
8. Success message is flashed

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check MongoDB is running
mongod --version

# For Atlas, verify connection string in .env
# Format: mongodb+srv://username:password@cluster.mongodb.net/database
```

### Cloudinary Upload Errors
- Verify API credentials in `.env`
- Check folder permissions in Cloudinary dashboard
- Ensure image file size is within limits

### Port Already in Use
```bash
# Use different port
PORT=3001 npm start

# Or kill existing process
# macOS/Linux
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### MapTiler Not Loading
- Verify API key is valid
- Check browser console for errors
- Ensure key has proper permissions

## 🔐 Security Considerations

- Store sensitive data in `.env` only, never commit this file
- Use environment-specific configurations
- Validate all user inputs with Joi
- Implement CORS if needed
- Use HTTPS in production
- Set secure session cookies
- Implement rate limiting for login attempts
- Sanitize user inputs to prevent injection attacks

## 📝 Environment Variables Checklist

```
✓ MONGODB_URI          - Database connection string
✓ SESSION_SECRET       - Session encryption key
✓ CLOUDINARY_CLOUD_NAME - Cloudinary account name
✓ CLOUDINARY_KEY        - Cloudinary API key
✓ CLOUDINARY_SECRET     - Cloudinary API secret
✓ MAPTILER_API_KEY      - MapTiler API key
✓ PORT                  - Server port (default: 3000)
✓ NODE_ENV              - Environment (development/production)
```

## 🚀 Deployment

### Heroku
1. Create `Procfile`: `web: node app.js`
2. Set environment variables in Heroku dashboard
3. Deploy with Git

### MongoDB Atlas
Use cloud MongoDB service for production database stability.

### Cloudinary
Perfect for production image storage with CDN benefits.

### Vercel / Netlify
Consider for frontend-only deployments with API proxying.

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Passport.js Strategy](http://www.passportjs.org/packages/passport-local/)
- [EJS Templating](https://ejs.co/)
- [Cloudinary API](https://cloudinary.com/documentation)
- [MapTiler Maps](https://www.maptiler.com/cloud/maps/)
- [Joi Validation](https://joi.dev/api/)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Write clear commit messages
- Test changes locally before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the **ISC License** - see the LICENSE file for details.

## 👨‍💻 Author

**Shivpujan**
- GitHub: [@shivpujan-0925](https://github.com/shivpujan-0925)

## 📞 Support

For questions and support:
- Open an [Issue](https://github.com/shivpujan-0925/Stavia/issues)
- Check existing discussions
- Review the troubleshooting section above

## 🎯 Future Enhancements

- [ ] User profile system
- [ ] Advanced search filters
- [ ] Booking system
- [ ] Rating and reviews
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] API documentation (Swagger)
- [ ] Unit tests
- [ ] Docker containerization

## 📊 Project Stats

- **Language**: JavaScript (46.6%), EJS (29.8%), CSS (23.6%)
- **Total Commits**: 27
- **Latest Update**: February 2026
- **Node Version**: 22.18.0

---

**⭐ If you find this project useful, please consider giving it a star on GitHub!**

**Last Updated**: June 2026
