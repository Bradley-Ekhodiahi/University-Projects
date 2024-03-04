const express = require('express');
const router = express.Router();
const Tutorial = require('../models/tutor_models');

// Get all tutorials
router.get('/', async (req, res) => 
{
  try 
  {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (error) 
  {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific tutorial by ID
router.get('/:id', async (req, res) => 
{
  try 
  {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) 
    {
      return res.status(404).json({ error: 'Tutorial not found' });
    }
    res.json(tutorial);
  } catch (error) 
  {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new tutorial
router.post('/', async (req, res) => 
{
  try 
  {
    const tutorial = await Tutorial.create(req.body);
    res.status(201).json(tutorial);
  } catch (error) 
  {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a tutorial
router.put('/:id', async (req, res) => 
{
  try 
  {
    const tutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tutorial) 
    {
      return res.status(404).json({ error: 'Tutorial not found' });
    }
    res.json(tutorial);
  } catch (error) 
  {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a tutorial
router.delete('/:id', async (req, res) => 
{
  try 
  {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.id);
    if (!tutorial) 
    {
      return res.status(404).json({ error: 'Tutorial not found' });
    }
    res.sendStatus(204);
  } catch (error) 
  {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;