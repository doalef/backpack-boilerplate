import express from 'express';
import colors from './config/colors';
import db from './config/database';
import ip from 'ip';
import clipboardy  from 'clipboardy';
import common from './app/middlewares/common';
import { validateRegister } from './app/middlewares/validator';

//Setting Up Web Server
let app = express();
//Connecting To The Database
db();
// Setting Up Common Middlewares
common(app);
app.listen(3000 , (err) => {
    console.log(
        (err) ? err : `http://localhost:3000\nhttp://${ip.address()}:3000`
    )
    if (!err) {
        clipboardy.write(`http://${ip.address()}:3000`)
            .then((res) => {
                console.log('\nURL copied to clipboard\n',);
            })
    }
})