const { Pool } = require('pg');
require('dotenv').config();

const useDatabaseUrl = Boolean(process.env.DATABASE_URL);
const useSsl = process.env.DB_SSL === 'true' || useDatabaseUrl || process.env.NODE_ENV === 'production';

const pool = useDatabaseUrl
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: useSsl ? { rejectUnauthorized: false } : false
    })
  : new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      ssl: useSsl ? { rejectUnauthorized: false } : false
    });

const initializeDatabase = async () => {
  const createResumesTableQuery = `
    CREATE TABLE IF NOT EXISTS resumes (
      id SERIAL PRIMARY KEY,
      file_name VARCHAR(255) NOT NULL,
      uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      name VARCHAR(255),
      email VARCHAR(255),
      phone VARCHAR(50),
      linkedin_url VARCHAR(255),
      portfolio_url VARCHAR(255),
      summary TEXT,
      work_experience JSONB,
      education JSONB,
      technical_skills JSONB,
      soft_skills JSONB,
      projects JSONB,
      certifications JSONB,
      resume_rating INTEGER,
      improvement_areas TEXT,
      upskill_suggestions JSONB
    )
  `;

  try {
    await pool.query(createResumesTableQuery);
    console.log('✅ Database schema ready');
    return true;
  } catch (error) {
    console.error('❌ Error initializing database schema:', error.message);
    return false;
  }
};

// Test the connection when the module is loaded
const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('✅ PostgreSQL connected successfully at:', result.rows[0].now);
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Error connecting to PostgreSQL:', error.message);
    return false;
  }
};

// Event listeners for connection monitoring
pool.on('connect', (client) => {
  console.log('🔗 New client connected to PostgreSQL');
});

pool.on('error', (err, client) => {
  console.error('❌ Unexpected error on idle PostgreSQL client:', err);
});

module.exports = { pool, testConnection, initializeDatabase };
