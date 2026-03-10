# Mentora - Mentorship Platform Backend

A simplified backend for a mentorship platform where Parents, Students, and Mentors interact. Built as a core feature simulation for the Mentora platform.

## 🚀 Features
- **Role-Based Authentication**: Secure JWT-based auth for Parents, Mentors, and Students.
- **Student Management**: Parents can create and manage student accounts under their profile.
- **Lesson System**: Mentors can create lessons and detailed sessions.
- **Booking System**: Parents can assign students to specific lessons.
- **AI Integration**: LLM-powered text summarization for lesson notes/sessions using Google Gemini.

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Auth**: JSON Web Tokens (JWT) & Bcrypt.js
- **AI**: Google Generative AI (Gemini Pro)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mentora-backend.git
   cd mentora-backend
   Install dependencies:
code
Bash
npm install
Environment Variables:
Create a .env file in the root directory and add the following:
code
Env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
Run the application:
code
Bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
📖 API Documentation
Authentication
Method	Endpoint	Access	Description
POST	/auth/signup	Public	Register Parent or Mentor
POST	/auth/login	Public	Login and receive JWT
GET	/auth/me	Private	Get current user profile
Students (Parent Only)
Method	Endpoint	Access	Description
POST	/students	Parent	Create a student account
GET	/students	Parent	List all students under parent
Lessons & Sessions
Method	Endpoint	Access	Description
POST	/lessons	Mentor	Create a new lesson
POST	/sessions	Mentor	Create a session for a lesson
POST	/bookings	Parent	Assign a student to a lesson
AI Feature (LLM)
Method	Endpoint	Access	Description
POST	/llm/summarize	Private	Summarize text (3-6 bullet points)
Example LLM Request:
code
Bash
curl -X POST http://localhost:5000/llm/summarize \
-H "Authorization: Bearer <TOKEN>" \
-H "Content-Type: application/json" \
-d '{"text": "Enter at least 50 characters of text here..."}'