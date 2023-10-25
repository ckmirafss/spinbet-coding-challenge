import fs from 'fs';
import path from 'path';

// Export a default function (API endpoint)
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      // Define the data directory and file path
      const dataDirectory = path.join(process.cwd(), 'data');
      const filePath = path.join(dataDirectory, 'sports.json');

      // Read and parse JSON data from the file
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const sportsData = JSON.parse(jsonData);

      // Find the match with the specified id
      const match = sportsData.find((m) => m.id === id);

      if (!match) {
        res.status(404).json({ error: 'Match not found' });
      } else {
        res.status(200).json(match);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching match details' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
