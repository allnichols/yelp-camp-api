import dotenv from 'dotenv';
import app from '../config/express';

dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});