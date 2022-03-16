
//do PG setup: will eventually be in a separate module:
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    //config to talk to Postgres!
    database: 'music_library',
    host: 'localHost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000 //30 seconds to give up. 
});

pool.on('connect', () => {
    console.log('PG CONNECTED!');
});

pool.on('error', (err) => {
    console.log('PG ERROR', err);
});

module.exports = pool;