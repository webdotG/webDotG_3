// db.ts
// это запрос к бд
import { Pool } from 'pg';

const pool = new Pool({
  user: 'kirill',
  host: '178.67.245.227',
  database: 'kyrill',
  password: 'KirillGrantWebDotG250125',
  port: 11002,
});

export default pool;



