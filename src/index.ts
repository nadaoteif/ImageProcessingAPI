import express from 'express';
import routes from './routes/index';
import File from './file';

const app: express.Application = express();
const port: number = 5000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
  await File.createThumbPath();

  const url: string = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
  console.log(`Go to:${url}`);
});

export default app;
