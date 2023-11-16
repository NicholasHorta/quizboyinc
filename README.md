# Brainsploog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `npm run quiz` for a dev server.
Run `npm run quiz-em` for a dev server running the firebase emulator.
Navigate to `http://localhost:8000/`.
The application will automatically reload if you change any of the source files.

## Branch name format

`goal/branch-name`

Preface a branch with the following goals:
- `fix`: Fixing a bug/issue.
- `chore`: For documentation, formatting & cleaning.
- `test`: Adding/removing a test.
- `feat`: Adding/removing a feature.
- `refactor`: Refactoring code.
- `update`: Single component/service/file change ONLY.
  - Must be prefaced with association: `update/<file>-<branch-description>` 
- `style`: Updates to styling

## TS component

#### Follow layout in order of below

- `@Input`
- `@Output`
- `Global variables: type;`
- `Global variables: type = value`
- `Constructor() { }`
- `Lifecycle methods - ngOnInit | ngOnChanges etc`
- `Public Methods`
- `Private Methods`

#### Using services in TS component
- Name services with the following abbreviation: `private exampleSVC: ExampleService`
