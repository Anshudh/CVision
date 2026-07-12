# CVision

CVision is a full-stack resume analysis app. Users upload a PDF resume, the backend extracts text, sends it to Google Gemini for analysis, and stores the result in PostgreSQL. The frontend shows the analysis, resume history, and detailed feedback.

## Tech Stack

- Frontend: React, Axios, CSS
- Backend: Node.js, Express, Multer, pdf-parse
- Database: PostgreSQL
- AI: Google Gemini API

## Local Setup

### Requirements

- Node.js 14+
- PostgreSQL 12+
- Google Gemini API key

### Install

```bash
git clone https://github.com/Anshudh/CVision.git
cd CVision
cd backend && npm install
cd ../frontend && npm install
```

### Backend env

Create `backend/.env`:

```env
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=resume_analyzer
DB_SSL=false
GOOGLE_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=development
```

### Run

```bash
# terminal 1
cd backend
npm run dev

# terminal 2
cd frontend
npm start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Endpoints

- `GET /health` - health check
- `POST /api/resumes/upload` - upload and analyze a PDF resume
- `GET /api/resumes` - list saved resume analyses
- `GET /api/resumes/:id` - get one resume analysis

## Notes

- The backend auto-creates the `resumes` table on startup.
- Frontend requests point to the local backend by default.
- Deployed app links were removed here to keep the README focused on the repo itself.

**Backend to Render:**
1. Connect your GitHub repository to Render
2. Set up environment variables in Render dashboard
3. Deploy as a Web Service

**Frontend to Vercel:**
1. Connect your GitHub repository to Vercel
2. Set root directory to `frontend`
3. Deploy with automatic React detection

## 🔒 Security Features

- **File Validation** - Only PDF files up to 5MB accepted
- **SQL Injection Protection** - Parameterized queries with pg library
- **Environment Variables** - Sensitive data secured in environment
- **CORS Configuration** - Controlled cross-origin requests
- **SSL/TLS** - Encrypted database connections
- **Input Sanitization** - Validated and sanitized user inputs

## 🧪 Testing

### API Testing with cURL

```bash
# Health check
curl https://resume-analyzer-backend-h5fa.onrender.com/health

# Upload resume
curl -X POST -F "resume=@your_resume.pdf" \
  https://resume-analyzer-backend-h5fa.onrender.com/api/resumes/upload

# Get all resumes
curl https://resume-analyzer-backend-h5fa.onrender.com/api/resumes

# Get resume by ID
curl https://resume-analyzer-backend-h5fa.onrender.com/api/resumes/1
```

### Frontend Testing
- Upload various PDF resume formats
- Test drag & drop functionality
- Verify responsive design on mobile devices
- Test modal interactions and navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini API** for powerful AI analysis
- **Render** for reliable backend hosting
- **Vercel** for seamless frontend deployment
- **pdf-parse** library for PDF text extraction
- **React** community for excellent documentation

## 📞 Support

- **Live Application:** https://resume-analyzer-omega-steel.vercel.app/
- **Issues:** [GitHub Issues](https://github.com/Charanyedida/resume-analyzer/issues)
- **API Status:** https://resume-analyzer-backend-h5fa.onrender.com/health



**Built with ❤️ using React, Node.js, PostgreSQL, and Google Gemini AI**

⭐ Star this repository if you find it helpful!

