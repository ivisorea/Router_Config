import pg from './pg.js';

const {Pool} = db;
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

export default pool;