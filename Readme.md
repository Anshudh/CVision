# CVision

CVision is a full-stack resume analysis app. Users upload a PDF resume, the backend extracts the text, sends it to Google Gemini for analysis, and stores the result in PostgreSQL. The frontend shows the analysis output and saved resume history.

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

### Backend Environment

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
- `GET /api/resumes/:id` - get a single resume analysis

## Notes

- The backend auto-creates the `resumes` table on startup.
- Frontend requests point to the local backend by default.
- The app uses the CVision title and dark theme branding.

## Deployment

### Backend on Render

Use the included [render.yaml](render.yaml) or create a new Web Service with:

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables: `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_SSL=true`, `GOOGLE_API_KEY`, `NODE_ENV=production`

### Frontend on Vercel

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `build`
- Set `REACT_APP_API_BASE_URL` to your Render backend URL

For local frontend testing, copy `frontend/.env.example` to `frontend/.env`.
