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
app.listen(3000);
