import fs from 'fs';
import path from 'path';

// Export a default function (API endpoint)
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  if (req.method === 'GET') {
    try {
      // Define the data directory and file path
      const dataDirectory = path.join(process.cwd(), 'data');
      const filePath = path.join(dataDirectory, 'sports.json');

      // Read and parse JSON data from the file
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const sportsData = JSON.parse(jsonData);

      // Return the entire sportsData or specific data as needed
      res.status(200).json(sportsData);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
