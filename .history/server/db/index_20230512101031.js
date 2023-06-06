const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: "Yelp",
    password: "June21992!",
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}