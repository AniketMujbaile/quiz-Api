 import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const homePage = (req, res) => {
    try {
        const htmlPath = path.join(__dirname, '..', 'views', 'index.html');
        res.sendFile(htmlPath);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
