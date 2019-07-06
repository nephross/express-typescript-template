// initialize environment
import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import HttpError from './lib/utils/http-error';
// routes
import Api from './routes/api';

class App {
  public express: express.Application;
  private _api: Api;

  // Run configurationmethods for the Express instance.
  constructor() {
    this.express = express();
    this._api = new Api();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.express.locals.ENV = process.env.NODE_ENV;
    this.express.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';

    this.express.disable('x-powered-by');
    this.express.use(logger('dev'));
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes() {
    // Setup api router
    this.express.use('/api', this._api.router);

    // Base route
    this.express.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send('Hello world\n');
    });

    // throw error for 404 not found
    this.express.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      throw new HttpError('Not found', 'Ressource not found, please check your uri and try agian.', 404);
    });

    // Error handling
    this.express.use((err, req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (err instanceof HttpError) {
        res.status(err.httpStatus);
        if (err.body) {
          return res.json(err.body);
        } else {
          return res.end(err.message);
        }
      } else {
        console.log(err);
        res.sendStatus(500);
      }
    });
  }
}

export default App;
