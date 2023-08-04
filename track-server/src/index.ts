import express from 'express';

const app = express();

const PORT : number = 8080;

app.get('/', ({req, res} : {req: any, res: any}) => {
    res.send('Hello, World!');
    }
);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    }
);
