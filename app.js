const express = require('express');
const mongoose = require('mongoose');
const app = express();
const axios = require('axios')

// Connect to MongoDB
const dbUrl = 'mongodb+srv://bradleyekhodiahi:JmFaJLHvqVsPc335@cs230codingexam.zpingyi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
  .then(() => 
  {
    console.log('Connected to MongoDB');
    // Start your server or perform any other actions after successful connection
    app.listen(3000, () => 
    {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => 
  {
    console.log('Failed to connect to MongoDB:', error);
  });
  
  // Set up EJS as the view engine
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');
  
  // Middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/public'));
  
  // Routes
  
  // Home page
  app.get('/', async (req, res) => 
  {
    try {
      // Fetch all tutors from the API
      const tutorsResponse = await axios.get('http://localhost:3000/tutors');
      const tutors = tutorsResponse.data;
  
      // Fetch all tutorials from the API
      const tutorialsResponse = await axios.get('http://localhost:3000/tutorials');
      const tutorials = tutorialsResponse.data;
  
      // Fetch all students from the API
      const studentsResponse = await axios.get('http://localhost:3000/students');
      const students = studentsResponse.data;
  
      res.render('index', { tutors, tutorials, students });
    } catch (error) 
    {
      console.error(error);
      res.render('index', { tutors: [], tutorials: [], students: [] });
    }
  });
  
  // Add tutor form
  app.get('/tutors/add', (req, res) => 
  {
    res.render('add_tutor');
  });
  
  // Create tutor
  app.post('/tutors', async (req, res) => 
  {
    try {
      // Send a POST request to the API to create a new tutor
      await axios.post('http://localhost:3000/tutors', req.body);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Edit tutor form
  app.get('/tutors/edit/:id', async (req, res) => 
  {
    try {
      // Fetch the tutor data from the API
      const response = await axios.get(`http://localhost:3000/tutors/${req.params.id}`);
      const tutor = response.data;
      res.render('edit_tutor', { tutor });
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Update tutor
  app.post('/tutors/update/:id', async (req, res) => 
  {
    try 
    {
      // Send a PUT request to the API to update the tutor
      await axios.put(`http://localhost:3000/tutors/${req.params.id}`, req.body);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Delete tutor
  app.get('/tutors/delete/:id', async (req, res) => 
  {
    try {
      // Send a DELETE request to the API to delete the tutor
      await axios.delete(`http://localhost:3000/tutors/${req.params.id}`);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Add tutorial form
  app.get('/tutorials/add', (req, res) => 
  {
    res.render('add_tutorial');
  });
  
  // Create tutorial
  app.post('/tutorials', async (req, res) => 
  {
    try {
      // Send a POST request to the API to create a new tutorial
      await axios.post('http://localhost:3000/tutorials', req.body);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Edit tutorial form
  app.get('/tutorials/edit/:id', async (req, res) => 
  {
    try {
      // Fetch the tutorial data from the API
      const response = await axios.get(`http://localhost:3000/tutorials/${req.params.id}`);
      const tutorial = response.data;
      res.render('edit_tutorial', { tutorial });
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Update tutorial
  app.post('/tutorials/update/:id', async (req, res) => 
  {
    try {
      // Send a PUT request to the API to update the tutorial
      await axios.put(`http://localhost:3000/tutorials/${req.params.id}`, req.body);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Delete tutorial
  app.get('/tutorials/delete/:id', async (req, res) => 
  {
    try {
      // Send a DELETE request to the API to delete the tutorial
      await axios.delete(`http://localhost:3000/tutorials/${req.params.id}`);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Add student form
  app.get('/students/add', (req, res) => 
  {
    res.render('add_student');
  });
  
  // Create student
  app.post('/students', async (req, res) => 
  {
    try 
    {
      // Send a POST request to the API to create a new student
      await axios.post('http://localhost:3000/students', req.body);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Edit student form
  app.get('/students/edit/:id', async (req, res) => 
  {
    try {
      // Fetch the student data from the API
      const response = await axios.get(`http://localhost:3000/students/${req.params.id}`);
      const student = response.data;
      res.render('edit_student', { student });
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Update student
  app.post('/students/update/:id', async (req, res) => 
  {
    try {
      // Send a PUT request to the API to update the student
      await axios.put(`http://localhost:3000/students/${req.params.id}`, req.body);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Delete student
  app.get('/students/delete/:id', async (req, res) => 
  {
    try {
      // Send a DELETE request to the API to delete the student
      await axios.delete(`http://localhost:3000/students/${req.params.id}`);
      res.redirect('/');
    } catch (error) 
    {
      console.error(error);
      res.redirect('/');
    }
  });
  
  // Start the server
  app.listen(3000, () => 
  {
    console.log('Server is running on http://localhost:3000');
  });
  