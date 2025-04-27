// swagger.js

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify OpenAPI version
    info: {
      title: 'POS System API',  // 🔥 Your Project Title
      version: '1.0.0',
      description: 'This is the API documentation for the POS system backend.',
    },
    servers: [
      {
        url: 'http://localhost:5000',  // 🔥 Your backend URL
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js', './controllers/*.js'], // 🔥 Files where you write Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
