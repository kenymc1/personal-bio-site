import utils from '../helpers/utils/utils';


const projects = () => {
  let domString = '';

  domString += '<h1 class="text-center">The Projects</h1>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Below are a few of my design projects. you can find the code for these on Git Hub also.</p>';


  domString += '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">';
  domString += '<div class="carousel-inner">';
  domString += '<div class="carousel-item active">';
  domString += '<img src="/src/img/port_0000_Layer-10.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0001_Layer-9.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0003_Layer-7.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0006_Layer-4.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0005_Layer-5.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0007_Layer-3.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0006_Layer-4.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0008_Layer-2.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '<div class="carousel-item">';
  domString += '<img src="/src/img/port_0009_Layer-1.png" class="d-block w-100" alt="...">';
  domString += '</div>';
  domString += '</div>';
  domString += '<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">';
  domString += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
  domString += '<span class="sr-only">Previous</span>';
  domString += '</a>';
  domString += '<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">';
  domString += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
  domString += '<span class="sr-only">Next</span>';
  domString += '</a>';
  domString += '</div>';


  utils.printToDom('projects', domString);
};

export default { projects };
