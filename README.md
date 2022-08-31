[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=littil-frontend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=littil-frontend)
![Build image workflow status](https://github.com/Devoxx4Kids-NPO/littil-frontend/actions/workflows/publish-build-container.yml/badge.svg)
![Known Vulnerabilities](https://snyk.io/test/github/Devoxx4Kids-NPO/littil-frontend/badge.svg)

# LITTIL website

This project contains the sourcecode of the LITTIL website.

## Setup your local environment

For more information about setting up your local development environment, please read [set up your development environment](https://devoxx4kids-npo.github.io/littil-documentation/platform/local-development/set-up-frontend-environment).

## Project files organization

The project files are split into two main folders: 'components' and 'pages'.

- Components: re-useable UI-components
- Pages: page level components

## Styling rules with TailwindCSS

We are using [TailwindCSS](https://tailwindcss.com/) to style our application. Keep these few rules in mind when styling:

1. Tailwind classes first: use tailwind classes for all the styling. If you are missing something in tailwind: try to use arbitrary values [(example)](https://tailwindcss.com/docs/width#arbitrary-values) or check the config file for missing colors etc.
1. HTMl first: use as much as tailwind classes in the html. Do not add your own classes to add tailwind classes in the `.scss`.
1. Use `@apply`: if styling in the `.scss` is nesseccary, add ALL classes to the `.scss`. Tailwind classes can be added by using @apply:

```
body {
    @apply w-10;
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
