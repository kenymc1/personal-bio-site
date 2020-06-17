import utils from '../helpers/utils/utils';


const tech = () => {
  let domString = '';
  domString += '<div class="title"><h1 class="text-center">Here Is What I Use</h1></div>';
  domString += '<div class="container-fluid"><div class="row">';
  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-html5"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>HTML5</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-css3-alt"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>CSS3</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-js"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Javascript</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-react"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>React</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-bootstrap"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>BootStrap</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-github-alt"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Git Hub</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-git-square"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Git</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fab fa-adobe"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>Adobe CC</p>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-md-4">';
  domString += '<div class="tech text-center">';
  domString += '<i class="fas fa-photo-video"></i>';
  // eslint-disable-next-line max-len
  domString += '<p>DaVinci Resolve</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  utils.printToDom('tech', domString);
};


export default { tech };
