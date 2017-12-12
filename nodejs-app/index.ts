import * as express from 'express';

let app = express();
let router = express.Router();

router.get('/', (req, res) =>
  res.send('coucou')
);

router.post('/:id', (req, res) => {
  res.set('content-type', 'application/javascript');
  res.send(`
     params: ${request.params.id},
     query: ${request.query.fields},
     body: ${request.body}
   `);
});

app.use(router);
app.listen(5000, () => console.log('Server start'));
