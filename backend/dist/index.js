"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// In-memory data storage for simplicity
const items = [];
// GET route to retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
});
// POST route to add a new item
app.post('/items', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ error: 'Name is required' });
    }
    else {
        const newItem = { id: items.length + 1, name };
        items.push(newItem);
        res.status(201).json(newItem);
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
