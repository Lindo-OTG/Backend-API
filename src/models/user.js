import { hashSync } from 'bcrypt';
import sql from 'mssql';
import { getDbRequest } from '../config/db.js';

class User {
  static async findByUsername(username) {
    try {
        const request = await getDbRequest();
        const result = await request
            .input('username', sql.NVarChar, username)
            .query('SELECT * FROM Users WHERE username = @username');
        return result.recordset[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
  }

  static async createUser(data) {
    try {
        const { username, password, email } = data;
        const hashedPassword = hashSync(password, 10);
        const request = await getDbRequest();
        const result = await request
            .input('username', sql.NVarChar, username)
            .input('password', sql.NVarChar, hashedPassword)
            .input('email', sql.NVarChar, email)
            .query('INSERT INTO Users(username, password, email) OUTPUT INSERTED.id VALUES(@username, @password, @email)');
        return result.recordset[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
  }

  static async findById(id) {
    try {
      const request = await getDbRequest();
        const result = await request
            .input('id', sql.NVarChar, id)
            .query('SELECT * FROM Users WHERE id = @id');
        return result.recordset[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
  }
}

export default User;
