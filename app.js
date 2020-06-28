const express = require("express");
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Online Image Bootcamp API",
      description: "API Document",
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /createUserAccount:
 *  post:
 *    description: Use to register users Account
 *    responses:
 *       '200':
 *         description: user registered to json
 *           
 */
app.post("/createUserAccount", (req, res) => {
  res.status(200).send(res.headers);
});


//instructor routes

/**
 * @swagger
 * /createInstructorAccount:
 *  post:
 *    description: Use to register instructor's Account
 *    responses:
 *       '200':
 *         description: instructor registered to json
 *           
 */
app.post("/createInstructorAccount", (req, res) => {
  res.status(200).send(res.headers);
});

//editing task route

/**
 * @swagger
 * /createEditingTask:
 *  post:
 *    description: Use to Create Editing task for users
 *    responses:
 *       '200':
 *         description:Editing Task posted to json
 *           
 */
app.post("/createEditingTask", (req, res) => {
  res.status(200).send(res.headers);
});

//accestask

/**
 * @swagger
 * /accessTask:
 *  get:
 *    description: Use to Acces Editing task 
 *    responses:
 *       '200':
 *         description:Editing Task accesed from json
 *           
 */
app.get("/accessTask", (req, res) => {
  res.status(200).send(res.headers);
});


//uploadImage

/**
 * @swagger
 * /uploadImage:
 *  post:
 *    description: Use to upload Image 
 *    responses:
 *       '200':
 *         description: Uploaded Sucessfully !
 *           
 */
app.post("/uploadImage", (req, res) => {
  res.status(200).send(res.headers);
});

//downloadImage

/**
 * @swagger
 * /downloadImage:
 *  get:
 *    description: Use to download Image 
 *    responses:
 *       '200':
 *         description: Download Sucessfully !
 *           
 */
app.get("/downloadImage", (req, res) => {
  res.status(200).send(res.headers);
});

//gradeImage

/**
 * @swagger
 * /gradeImage:
 *  get:
 *    description: Use to Grade Image 
 *    responses:
 *       '200':
 *         description: Graded Sucessfully !
 *           
 */
app.get("/gradeImage", (req, res) => {
  res.status(200).send(res.headers);
});

//stats

/**
 * @swagger
 * /stats:
 *  get:
 *    description: Use to Access Stats 
 *    responses:
 *       '200':
 *         description: Stats Displayed !
 *           
 */
app.get("/stats", (req, res) => {
  res.status(200).send(res.headers);
});


app.listen(port, () => {
    console.log(`Server up and running on port ${ port }`); 
});
