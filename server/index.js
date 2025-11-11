import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

//using express framework
const app = express();
app.use(cors());
app.use(express.json());


const publicDir = path.join(process.cwd(), 'public');
//ignore this error. This persists when not in runtime

//mapping subjects to their json files
const mapping = {
    calculus: 'calculusQ.json',
    algebra: 'algebraQ.json',
    geometry: 'geometryQ.json',
    canada: 'canadaHistoryQ.json',
    japan: 'japanHistoryQ.json',
    us: 'usHistoryQ.json',
    physics: 'physics.json',
    chemistry: 'chemistry.json',
    biology: 'biologyQ.json',
    plays: 'plays.json',
    novels: 'novels.json',
    poetry: 'poetry.json',
};

//route to get quiz data based on topic
app.get('/api/quiz/:topic', (req, res) => {
    const topic = req.params.topic;
    const fileName = mapping[topic];
    if (!fileName) return res.status(404).json({ error: 'Topic not found' });

    const filePath = path.join(publicDir, fileName);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read file', filePath, err);
            return res.status(500).json({ error: 'Failed to read quiz file' });
        }
        res.type('application/json').send(data);
    });
});

// Logging which returns JSON lines to app.log in project root (line 54)
app.post('/api/logs', (req, res) => {
    const entry = {
        timestamp: new Date().toISOString(),
        ...req.body,
    };
    const line = JSON.stringify(entry) + '\n';
    const outPath = path.join(process.cwd(), 'app.log');
    fs.appendFile(outPath, line, (err) => {
        if (err) {
            console.error('Failed to append log', err);
            return res.status(500).json({ error: 'Failed to write log' });
        }
        res.status(201).json({ ok: true });
    });
});

//defining port and starting server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
