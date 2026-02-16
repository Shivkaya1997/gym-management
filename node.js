    app.get('/api/data', (req, res) => {
        con.query("SELECT * FROM your_table", (err, result) => {
            if (err) throw err;
            res.json(result); // Send data as JSON to the frontend
        });
    });

    app.post('/api/add-item', (req, res) => {
        const newItem = req.body.item; // Assuming you're sending data in the request body
        // ... insert newItem into database ...
        res.send('Item added successfully!');
    });