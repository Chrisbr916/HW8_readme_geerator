const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) => {
    return `${answers.title}
    ## Table of Contents:
    - [Description](#description)
   
    
    
    
    ## discription
    
    https://github.com/${answers.github}



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
            name: 'descrition',
            message: 'Please eneter a description of the project.',
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}   
        },
        {
            type: "list",
            name: "faveColor",
            message: "Pick your fave color!",
            choices: ["red", "green", "blue"]
          }
    ])

    //this puts the answers into 
    .then((answers) => {
        const readmeContent = generateREADME(answers);
    

         fs.writeFile('READme.md', readmeContent, (err) =>
             err ? console.log(err) : console.log('Congrats you have created a READme file!')
         );
    });
