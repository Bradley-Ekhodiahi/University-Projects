const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor_models');

// Create a new tutor entry
router.post('/', async (req, res) => 
{
  try 
  {
    const tutor = new Tutor(req.body);
    await tutor.save();
    res.status(201).json(tutor);
  } catch (error) 
  {
    res.status(500).json({ error: 'Failed to add tutor entry' });
  }
});

// Retrieve all tutor entries
router.get('/', async (req, res) => 
{
  try 
  {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (error) 
  {
    res.status(500).json({ error: 'Failed to retrieve tutor entries' });
  }
});

// Retrieve a specific tutor entry by ID
router.get('/:id', async (req, res) => 
{
  try 
  {
    const tutor = await Tutor.findById(req.params.id);
    if (!tutor) 
    {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) 
  {
    res.status(500).json({ error: 'Failed to retrieve tutor entry' });
  }
});

// Update a tutor entry by ID
router.put('/:id', async (req, res) => 
{
  try 
  {
    const tutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tutor) 
    {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) 
  {
    res.status(500).json({ error: 'Failed to update tutor entry' });
  }
});

// Delete a tutor entry by ID
router.delete('/:id', async (req, res) => 
{
  try {
    const tutor = await Tutor.findByIdAndDelete(req.params.id);
    if (!tutor) 
    {
      return res.status(404).json({ error: 'Tutor not found' });
    }
    res.json({ message: 'Tutor deleted successfully' });
  } catch (error) 
  {
    res.status(500).json({ error: 'Failed to delete tutor entry' });
  }
});

module.exports = router;