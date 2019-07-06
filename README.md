# express-typescript-template
A NodeJS Express template using Typescript


## Technology
Node version: ^10.12.0

## Installing the project
PLEASE NOTE!
This project has not been tested on windows environments. It will likely not work on anything other than unix based systems, ie. OSX or a linux based distro.

To install locally simply do `npm install` while being in the root folder.

Also be sure to create a `.env` file in the root of the project based on the `.env.example` file.

## Testing
To run all test use the following command:
`npm test`

## Running the project
To run the project locally, just run the command `npm run clear:dist && npm run build && npm start` - this will clear any old build you have in dist, build the newest version of the source and run it on node.
