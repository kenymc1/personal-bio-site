import utils from '../helpers/utils/utils';


const navigation = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">';
  domString += '<a class="navbar-brand" href="#">';
  domString += '<img src="/src/img/future devloper logo.png" width="75"></a>';
  domString += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">';
  domString += '<span class="navbar-toggler-icon"></span></button>';
  domString += '<div class="collapse navbar-collapse" id="navbarNav">';
  domString += '<ul class="navbar-nav ml-auto">';
  domString += '<li class="nav-item">';
  domString += '<a class="nav-link hoverable" href="#bio">bio <span class="sr-only">(current)</span></a>';
  domString += '</li>';

  domString += '<li class="nav-item hoverable">';
  domString += '<a class="nav-link" href="#tech">Technologies</a>';
  domString += '</li>';

  domString += '<li class="nav-item hoverable">';
  domString += '<a class="nav-link" href="#vlog">videos</a>';
  domString += '</li>';

  domString += '<li class="nav-item hoverable">';
  domString += '<a class="nav-link" href="#projects">Projects</a>';
  domString += '</li>';


  domString += '<li class="nav-item hoverable">';
  domString += '<a class="nav-link" href="#socialMedia">contact</a>';
  domString += '</li>';
  domString += '</ul>';
  domString += '</div>';
  domString += '</nav>';
  utils.printToDom('navigation', domString);
};

export default { navigation };
