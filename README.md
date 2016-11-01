# Development Environment Set Up
## NewRocket

### Smith & Nephew Site

1)  To install Node.js.  
2)  Install Git.  
3) Clone directory from Git
- `git clone <repository-url>` (eg.https://github.com/EskoCruz/smith-nephew.git)  

	Open command prompt and change path to destination directory.
- `npm install`
- `npm install -g bower`
- `bower install`

4) To run server:
- `gulp serve`
- Visit your app at [http://localhost:3000](http://localhost:3000)

5) Other helpful commands:
- `gulp` or `gulp build` to build an optimized version of your application in /dist
- `gulp serve` to launch a browser sync server on your source files
- `gulp test` to launch your unit tests with Karma
- `gulp protractor` to launch your e2e tests with Protractor
