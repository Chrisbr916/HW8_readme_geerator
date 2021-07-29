const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) => {
    return `${answers.title}
    ## Table of Contents:
    - [Description](#description)
    - [Instalation](#istalation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
   
    
    
    
    ## description
    ${answers.description}

    ## istalation
    ${answers.instalation}

    ## usage
    ${answers.usage}

    ## license
    ${answers.license}

    ## contributing
    ${answers.contributing}

    ## tests
    ${answers.test}

    ## questions
    You can find me on github at https://github.com/${answers.github}
    If you have any questions about th code or would like to get into contact with me please email me at ${answers.email}


    `;
}




//this creates an array that will allow a function to flip through and pull specific answers and messages to creat the readme
inquirer
    .prompt([
        //this fills the array with wht will be used later 
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
            //this checks to see if the user entered a value correctly and will not let them go further unless something is entered 
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}} 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please eneter a description of the project.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: "list",
            name: "license",
            message: "Pick your license",
            choices: ["none", "not sure what this is", "idk"]
          },
          {
            type: 'input',
            name: 'instalation',
            message: 'Please eneter how it was installed',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please eneter how your project is used.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please eneter all people who contributed to this project.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please eneter the tests that were run.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please eneter your github user name.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please eneter your email.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
    ])

    //this puts the answers into 
    .then((answers) => {
        const readmeContent = generateREADME(answers);
    

         fs.writeFile('READme.md', readmeContent, (err) =>
             err ? console.log(err) : console.log('Congrats you have created a READme file!')
         );
    });
