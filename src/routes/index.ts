import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/api/images', images);

routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    response.send(
      '<p>Listening on <code><a href="/api/images">/api/images</a></code>...</p><p>Examples:<ul><li><a href="/api/images?filename=palmtunnel">/api/images?filename=palmtunnel</a></li><li><a href="/api/images?filename=palmtunnel&width=100&height=100">/api/images?filename=palmtunnel&width=100&height=100</a></li></ul></p>'
    );
  }
);

export default routes;
