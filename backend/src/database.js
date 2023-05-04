const mongoose = require('mongoose');

// Usar este codigo si sale el error: "current URL string parser is deprecated"
// mongoose.connect('mongodb://localhost/angular-auth', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect('mongodb://localhost/angular-auth')
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err))