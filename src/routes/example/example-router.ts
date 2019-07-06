import {Request, Response, NextFunction, Router} from 'express';
import ExampleController from './../../controllers/example/example-controller';
import AuthMiddleware from '../../lib/middleware/auth-middleware';

class ExampleRouter {
  public router: Router;
  private exampleController: ExampleController;
  private auth: AuthMiddleware = new AuthMiddleware();

  // Contructor
  constructor() {
    this.router = Router({mergeParams: true});
    this.exampleController  = new ExampleController();
    this._setupRoutes();
  }

  private _setupRoutes() {
    // Endpoint: POST /api/example/update
    this.router.get('/sample', this.auth.authorizeRequest('example'), (req: Request, res: Response, next: NextFunction) => {
      this.exampleController.sample(req.body)
      .then((result) => res.json(result))
      .catch(next);
    });
  }
}

export default ExampleRouter;
