import {Router} from 'express';

// Base routers
import ExampleRouter from './example/example-router';

class Api {
  public router: Router;
  private exampleRouter: ExampleRouter;

  constructor() {
    this.router = Router();
    this.exampleRouter = new ExampleRouter();
    this._setupRoutes();
  }

  private _setupRoutes() {
    // Example - Endpoint: /api/example/
    this.router.use('/example', this.exampleRouter.router);
  }
}

export default Api;
