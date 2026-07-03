import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './uploads/';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});
const upload = multer({ storage: storage });

// Database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

// Enquiry Model
export const Enquiry = sequelize.define('Enquiry', {
    type: { type: DataTypes.ENUM('CONTACT', 'CAREER'), allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: true },
    message: { type: DataTypes.TEXT, allowNull: false },
    experienceYears: { type: DataTypes.STRING, allowNull: true },
    experienceMonths: { type: DataTypes.STRING, allowNull: true },
    resumePath: DataTypes.STRING
});

// Job Model
export const Job = sequelize.define('Job', {
    title: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    jobType: { type: DataTypes.STRING, allowNull: false },
    experience: { type: DataTypes.STRING, allowNull: true, defaultValue: 'Fresher' },
    description: { type: DataTypes.TEXT, allowNull: false }
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// --- ENQUIRIES API ---
app.post('/api/enquiries', upload.single('resume'), async (req, res) => {
    try {
        const { type, name, email, phone, subject, message, experienceYears, experienceMonths } = req.body;
        const resumePath = req.file ? `/uploads/${req.file.filename}` : null;

        const newEnquiry = await Enquiry.create({
            type, name, email, phone, subject, message, experienceYears, experienceMonths, resumePath
        });

        res.status(201).json({ success: true, data: newEnquiry });
    } catch (error) {
        console.error('Error creating enquiry:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.get('/api/enquiries', async (req, res) => {
    try {
        const enquiries = await Enquiry.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json({ success: true, data: enquiries });
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// --- JOBS API ---
app.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await Job.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json({ success: true, data: jobs });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/api/jobs', async (req, res) => {
    try {
        const { title, location, jobType, experience, description } = req.body;
        const newJob = await Job.create({ title, location, jobType, experience, description });
        res.status(201).json({ success: true, data: newJob });
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.delete('/api/jobs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findByPk(id);
        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }
        await job.destroy();
        res.status(200).json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve the React app for non-API requests
app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
        next();
    }
});

// Sync database and start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

export { app, sequelize };
