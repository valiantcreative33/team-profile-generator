const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const formatName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const addEmployee = employeeInfo => {

    let allCards = '';

    employeeInfo.forEach(employee => {    

        const { firstName, lastName, id, role } = employee;
        let newEmployee = 0;

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(formatName(firstName), formatName(lastName), id, employee.officeNumber);
                break;
            case 'Engineer': 
                newEmployee = new Engineer(formatName(firstName), formatName(lastName), id, employee.github);
                break;
            case 'Intern':
                newEmployee = new Intern(formatName(firstName), formatName(lastName), id, employee.school);
        };

        allCards += `
<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${newEmployee.getName()}</p>
                    <p class="subtitle is-6">${newEmployee.getRole()}</p>
                </div>
            </div>
            <div class="content">
                ${newEmployee.getEmail()}
            </div>
        </div>
    </div>
</div>`  
    });
    return allCards;
};

const generatePage = templateData => {
    // HTML template goes here
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
    </head>
    <body>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">My Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                ${addEmployee(templateData)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = generatePage;