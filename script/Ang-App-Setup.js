//!! Setup of Angular Applications


//. TSCONFIG.JSON
//> Replace baseUrl to be 'src'
//> Now we can add additional paths which make out imports seamless
//:
//> Adding resolveJsonModule & esModuleInterop will help us work with Dictionaries


//. ENVIRONMENTS
//> An app should have at least DEV & PROD env files - env/env.prod.ts + env.dev.ts
//> Go to angular.json and change build/outputPath - and change to dist/
//@ Do this because we only have one project, after successful build, all build files will go directly to the DIST folder
//. Package.json
// Now we can apply these processes to our scripts object
