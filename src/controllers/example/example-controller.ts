import HttpError from '../../lib/utils/http-error';

class ExampleController {

  constructor() {
    // Initialise your fields here
  }

  public async sample(reqBody: any): Promise<string> {
    if (!this._validateReqBody(reqBody)) {
      throw new HttpError('Bad Request', 'Either "first" or "second" fields missing', 400);
    }
    try {
      return reqBody.first + reqBody.second;
    } catch (err) {
      throw new HttpError('Internal Error', 'Something went wrong here, uhm.. yeah', 500);
    }
  }

  private _validateReqBody(reqBody: any) {
    if (reqBody.hasOwnProperty('first') && reqBody.hasOwnProperty('second')) {
      return true;
    } else {
      return false;
    }
  }
}

export default ExampleController;
