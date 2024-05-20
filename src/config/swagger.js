import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
    openapi: "3.0.0",
    info: {
    title: "E-commerce Backend API",
    version: "1.0.0",
    description: "This is a simple CRUD API for an e-commerce platform",
    },
    servers: [
        {
        url: `http://localhost:${process.env.PORT}`,
        description: "Development server",
        },
    ],
    },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

