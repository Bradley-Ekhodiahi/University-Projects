const express = require('express')
const mongoose = require('mongoose')
const app = express()
const tutor_routes = require('./routes/tutor_routes'); 
const student_routes = require('./routes/student_routes');
const tutorial_routes = require('./routes/tutorial_routes');

// Middleware
app.use(express.json());

// Routes
app.use('/tutors', tutor_routes); // Use tutor_routes as middleware for tutor routes
app.use('/students', student_routes); // Use student_routes as middleware for student routes
app.use('/tutorials', tutorial_routes); // Use tutorialRoutes as middleware for tutorial routes

mongoose.connect('mongodb+srv://bradleyekhodiahi:JmFaJLHvqVsPc335@cs230codingexam.zpingyi.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000,()=> 
{
    console.log('Node API is running')
})
}).catch(() => {
    console.log(error)
})


//The database design for this REST API includes three collections: "tutors", "students", and "tutorials". Each collection has its own schema that defines the structure of the document.
//The "tutors" collection stores tutor information, including their personal details and address. The "students" collection stores student information, including their name and contact details. The "tutorials" collection stores tutorial information, such as title, description, duration, instructor, and enrolled students.

//The database design has influenced the development of the REST API in several ways. First, it determined the endpoints for CRUD operations on tutors, students, and tutorials. These endpoints interact with the respective collections to perform the necessary operations.
//Next, the schemas ensure data validation by enforcing required fields and data types. This helped to maintain data integrity and consistency.
//And, the database design allows establishing relationships between tutorials, tutors, and students. For example, a tutorial can have multiple enrolled students, and a tutor can be associated with multiple tutorials. These relationships are facilitated through the use of student and tutor IDs in the appropriate collections.
//Finally, the database design guides the creation of models used in the REST API. These models provide an abstraction layer for interacting with the database and handle data operations, which ensures data consistency and structured data management.
//In summary, the database design plays a vital role in shaping the REST API development. It provides structure for data storage, enforces data validation, enables relationship establishment, and guides the implementation of models and endpoints.

// References: These YT videos https://www.youtube.com/watch?v=9OfL9H6AmhQ&ab_channel=Devtamin & https://www.youtube.com/watch?v=fgTGADljAeg&t=498s&ab_channel=WebDevSimplified
// I also used Insomnia to test my CRUD and it worked perfectly with my database. I also did not manage to get part c done if at all but part a & b work fine and work together perfectly.
//I also used ChatGPT in order to create fake info like names for my database and models , and also to troubleshoot bugs and errors