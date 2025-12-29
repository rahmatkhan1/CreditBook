const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//file listing home route
app.get('/', (req, res) => {
    fs.readdir('files', (err, files) => {
        res.render('index', { files: files });
})
});

//file creation route
app.get('/create', (req, res) => {
    //get current date
const currentDate = new Date();
const day=String(currentDate.getDate()).padStart(2, '0');
const month=String(currentDate.getMonth()+1).padStart(2, '0');
const year=currentDate.getFullYear();
//create file with date as name
const formattedDate = `${day}-${month}-${year}.txt`;

//write file to the files directory

fs.writeFile(`files/${formattedDate}` , 'This is a sample file.', function(err){

        if (err) 
            return res.send('Error creating file.'  + err);
            else
            return res.send('File created successfully:');
        })
});

// file edit route
app.get('/edit/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, data) {
        if (err) 
            return res.send('Error reading file: ' + err);
        
    res.render('edit', { data: data, filename: req.params.filename });
});
});

// file update route
app.post('/update/:filename', (req, res) => {
    fs.writeFile(`./files/${req.params.filename}`, req.body.content, (err) => {
        if (err)
            return res.send('Error updating file: ' + err);
        
        res.send('File updated successfully.');
    });
});

//file delete route
app.get('/delete/:filename', (req, res) => {
    fs.unlink(`./files/${req.params.filename}`, (err) => {
        if (err)
            return res.send('Error deleting file: ' + err); 
        res.send('File deleted successfully.');
    });
});

// start server
app.listen(3000);
