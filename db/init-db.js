const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function seedDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const seedSQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');

    await connection.query(seedSQL);
    console.log('Database seeded successfully.');

    await connection.end();
  } catch (error) {
    console.error('Failed to seed the database:', error);
    process.exit(1);
  }
}

seedDatabase();

