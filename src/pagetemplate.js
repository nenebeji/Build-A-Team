const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="col">
        <div class="card h-400">
          <div class="jumbotron manager-head">
              <h5 class="card-title" id="name">${manager.getName()}</h5>
              <p class="lead" id="role"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</p>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">ID:</div>
                        ${manager.getID()}
                      </div>
                  </li>
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Email:</div>
                        <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                      </div>
                  </li>
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Office Number:</div>
                        ${manager.getOfficeNumber()}
                      </div>
                  </li>
              </ul>
          </div>
        </div>
      </div>`;
    }

    const generateEngineer = (engineer) => {
        return `
        <div class="col">
        <div class="card h-400">
          <div class="jumbotron engineer-head">
              <h5 class="card-title" id="name">${engineer.getName()}</h5>
              <p class="lead" id="role"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</p>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">ID:</div>
                        ${engineer.getID()}
                      </div>
                  </li>
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Email:</div>
                        <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                      </div>
                  </li>
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Github:</div>
                        <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
      </div>`;
    }
    
    const generateIntern = (intern) => {
        return `
        <div class="col">
        <div class="card h-400">
          <div class="jumbotron intern-head">
              <h5 class="card-title" id="name">${intern.getName()}</h5>
              <p class="lead" id="role"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</p>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">ID:</div>
                        ${intern.getID()}
                      </div>
                  </li>
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Email:</div>
                        <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                      </div>
                  </li>
                  <li class="list-group-itemd-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">School:</div>
                        ${intern.getSchool()}
                      </div>
                  </li>
              </ul>
          </div>
        </div>
      </div>`;
    }

    if (data.role === 'Manager') {
        $('.card-container').append(generateManager());
    }
    if (data.role === 'Engineer') {
        $('.card-container').append(generateEngineer());
    }
    if (data.role === 'Intern') {
        $('.card-container').append(generateIntern());
    }
}

const generatepage = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Build A Team</title>
  </head>

  <body>
    <div class="jumbotron header">
        <h1 class="display-4">The A Team! 🏆</h1>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4 card-container">
    ${generateTeam()}
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/0ca80f36f5.js" crossorigin="anonymous"></script>

    <script src="./index.js"></script>
  </body>
</html>`
}

module.exports = generatepage;