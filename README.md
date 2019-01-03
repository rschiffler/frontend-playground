# [Form validation problem](https://github.com/Inquisitive-Learners/form-validation-problem)

This is a solution to the problem linked above by Rose Pollock. The technologies used in this solution are:

`create-react-app` `react` `javascript` `npm`

## Installing the solution

1. Run `npm install` in the root of the folder to install the required dependencies
1. Run `npm start` to start up the development server
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Further information

- Documentation
Due to this being a small application, all the documentation needed to install, run and understand it is available in this readme file. 

- Decisions that were made
React was chosen to solve this form validation problem because it is great at handling form state and provides quick feedback to the user without the need for sizable validation libraries (or writing a lot of javascript). Facebook's create-react-app was used to quickly get a site up and running.

- Accessibility
To make this form more accessible, a coloured input box for errors doesn't cut it. I would need to add error messages and be clear which field it refers to i.e. for people who are colour blind

- Progressive enhancement
As this is a small form, I'm not sure what progressive enhancement would be required. If the browser doesn't have javascript enabled, a message will be displayed.

- Browser support
I have used some HTML5 validation attributes on the form however there is custom validation over the top in case the browser doesn't support these features.

- Testing
I didn't have time to add javascript testing to the solution but a good place to add it would be the email regex, this could also move into a utils javascript file for re-use that could be unit tested with a tool like Chai

- Tooling
The following tools were used to develop this solution: Node version 10.14.2, Visual Studio code, React version 16 and create-react-app which utilises a bunch of predefined build scripts

- Todo
1. Add in react router
1. Add in styled components
1. Unit test sagas
1. Airbnb linting
1. Typescript
1. Build with circle ci

