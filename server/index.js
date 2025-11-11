import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const publicDir = path.join(process.cwd(), 'public');
//ignore this error. This persists when not in runtime

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

// Logging endpoint: append JSON lines to app.log in project root
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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
