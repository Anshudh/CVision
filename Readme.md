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

## Deployment

- Backend deploys as a Node web service.
- Frontend deploys as a React app with the root directory set to `frontend`.

