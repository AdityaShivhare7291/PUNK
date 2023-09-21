const express = require('express');
const app = express();
const cors = require("cors");

app.get(`/search/:key`, async (req, res) => {
    try {
      const regex = new RegExp(req.params.key, 'i');
      const result = await User.find({
        '$or': [
          { Name: { $regex: regex } },
          { Price: { $regex: regex } },
          { topic: { $regex: regex } },
          { insight: { $regex: regex } },
          { url: { $regex: regex } },
          { region: { $regex: regex } },
          { start_year: { $regex: regex } },
          { impact: { $regex: regex } },
          { added: { $regex: regex } },
          { published: { $regex: regex } },
          { country: { $regex: regex } },
          { pestle: { $regex: regex } },
          { source: { $regex: regex } },
          { title: { $regex: regex } },
        ]
      });
        res.json(result);
    } catch (err) {
      console.error('Error sending data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.listen(5000,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });