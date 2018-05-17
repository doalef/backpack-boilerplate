import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export default (app) => {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());
}