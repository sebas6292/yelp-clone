const pool = new Pool();

module.exports = {
    query: (text, params) => pool.query(text, params)
}