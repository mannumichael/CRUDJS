const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database:'customer',
    password:'password',
    port:5432,
});

pool.connect()
  .then(() => console.log('Connected to the PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack))

const getUsers = (request, response) => {
    const { name, city, postalcode } = request.query;

    let queryString = 'SELECT * FROM customer';
    let params = [];

    if (name) {
        params.push(`name = '${name}'`);
    }
    if (city) {
        params.push(`city = '${city}'`);
    }
    if (postalcode) {
        params.push(`postalcode = '${postalcode}'`);
    }

    if (params.length > 0) {
        queryString += ' WHERE ' + params.join(' AND ');
    }

    queryString += ' ORDER BY id ASC';

    pool.query(queryString, (error, results) => {
        if (error) {
        throw error;
        }
        response.json(results.rows);
    });
    }


    const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, city, postalcode } = request.body;

    if (!name || !city || !postalcode) {
        return response.status(400).json({ error: 'name, city, and postalcode are required' });
    }

    pool.query('INSERT INTO customer (name, city, postalcode) VALUES ($1, $2, $3)', [name, city, postalcode], (error, results) => {
        if (error) {
            console.error(error)
            response.status(500).json({ error: "Error occurred while inserting the user" });
        }else{
            response.status(201).send(`Customer added with ID: ${results.insertId}`)
        }
    });
}
  

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, city, postalcode } = request.body;

    pool.query(
        'UPDATE customer SET name = $1, city = $2, postalcode = $3 WHERE id = $4',
        [name, city, postalcode, id],
        (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Customer modified with ID: ${id}`);
        }
    );
}
  

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Customer deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
