import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (_req: Request, res: Response) => {
    res.render('index');
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})