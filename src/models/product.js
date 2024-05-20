import joi from "joi";
import sql from "mssql";
import { getDbRequest } from "../config/db.js";

// Define a schema for product validation
const productSchema = joi.object({
  name: joi.string().min(1).max(100).required(),
  description: joi.string().allow(""),
  price: joi.number().greater(0).required(),
});

// Validate Product Using Schema
async function validateProduct(product) {
  try {
    await productSchema.validateAsync(product);
  } catch (err) {
    throw new Error(`Invalid product data: ${err.message}`);
  }
}

class Product {
  static async create(data) {
    await validateProduct(data);
    const { name, description, price } = data;
    const request = await getDbRequest();
    const result = await request
      .input("name", sql.NVarChar, name)
      .input("description", sql.NVarChar, description)
      .input("price", sql.Decimal, price)
      .query(
        "INSERT INTO Products(name, description, price) OUTPUT INSERTED.id VALUES(@name, @description, @price)"
      );
    return result.recordset[0];
  }

  static async getProducts() {
    const request = await getDbRequest();
    const result = await request.query("SELECT * FROM Products");
    return result.recordset;
  }

  static async getProduct(id) {
    const request = await getDbRequest();
    const result = await request
      .input("id", sql.Int, id)
      .query("SELECT * FROM Products WHERE id = @id");
    return result.recordset[0];
  }

  static async updateProduct(id, data) {
    await validateProduct(data);
    const { name, description, price } = data;
    const request = await getDbRequest();
    const result = await request
      .input("id", sql.Int, id)
      .input("name", sql.NVarChar, name)
      .input("description", sql.NVarChar, description)
      .input("price", sql.Decimal, price)
      .query(
        "UPDATE Products SET name = @name, description = @description, price = @price WHERE id = @id"
      )
      .catch((err) => {
        return err;
      });
      return result;
  }

  static async deleteProduct(id) {
    const request = await getDbRequest();
    const result = await request
      .input("id", sql.Int, id)
      .query("DELETE FROM Products WHERE id = @id");
      return result;
  }
}

export default Product;
