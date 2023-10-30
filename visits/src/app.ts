import express, { Request, Response } from 'express';
import Redis from 'ioredis';

const app = express();
const client = new Redis({
    host: 'redis-server',
    port: 6379,
});
client.set('visits', 0)

app.get('/', (_req: Request, res: Response) => {
    // use client connection to get the current number the page has been visited
    client.get('visits', (err: any, visits: any) => {
        if(err) 
        {
            console.log(err);
            res.status(500).send('Error retrieving the visit count.');
        }
        else 
        {
            res.send(`Number of visits is ${visits}`);
            client.set('visits', parseInt(visits) + 1);
        }
    });
});


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    
})