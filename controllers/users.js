import pg from 'pg';

export const getAllUsers = (req, res) => {
    const client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    client.query('SELECT * FROM users ORDER BY id ASC', (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        res.status(404).json(result.rows);
        client.end();
    });
};

export const getUserById = (req, res) => {
    const client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    client.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        res.status(200).json(result.rows);
        client.end();
    }
    );
};

export const createUser = (req, res) => {
    const client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    client.query('INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3)', [req.body.first_name, req.body.last_name, req.body.age], (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        res.status(201).json(result.rows);
        client.end();
    }
    );
};
