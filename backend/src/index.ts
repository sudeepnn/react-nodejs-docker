import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

// In-memory data storage for simplicity
const items: { id: number; name: string }[] = [];

// GET route to retrieve all items
app.get('/items', (req: Request, res: Response) => {
  res.json(items);
});

// POST route to add a new item
app.post('/items', (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
     res.status(400).json({ error: 'Name is required' });
  }

  else{
    const newItem = { id: items.length + 1, name };
  items.push(newItem);

  res.status(201).json(newItem);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
