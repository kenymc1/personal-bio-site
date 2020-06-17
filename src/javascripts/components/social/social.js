import utils from '../helpers/utils/utils';


const socialMedia = () => {
  let domString = '';

  domString += '<footer>';
  domString += '<div class="jumbotron jumbotron-fluid bg-secondary p-4 mt-5 mb-0">';
  domString += '<div class="container">';
  domString += '<div class="row">';
  domString += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">';
  domString += '<div class="card bg-secondary border-0">';
  domString += '<div class="card-body text-light text-center">';
  domString += '<h5 class="card-title text-white display-4" style="font-size:30px">Telif Hakkı</h5>';
  domString += '<p class="d-inline lead">Tüm Hakları Saklıdır © 2018<br>';
  domString += '<a href="#" class="text-light d-block lead">Blog</a>';
  domString += '</p>';

  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">';
  domString += '<div class="card bg-secondary border-0">';
  domString += '<div class="card-body text-center">';
  domString += '<h5 class="card-title text-white display-4" style="font-size:30px">İletişim</h5>';
  domString += '<a class="text-light d-block lead" style="margin-left: -20px" href="#"><i class="fa fa-phone mr-2"></i>+90 (000) 000 0 000</a>';
  domString += '<a class="text-light d-block lead" href="#"><i class="fa fa-envelope mr-2"></i>admin@localhost.com</a>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">';
  domString += '<div class="card bg-secondary border-0">';
  domString += '<div class="card-body text-center">';
  domString += '<h5 class="card-title text-white display-4" style="font-size:30px">Sosyal Medya</h5>';

  domString += '<a class="text-light" href="#"><i class="fa fa-facebook-square fa-fw fa-2x"></i></a>';

  domString += '<a class="text-light" href="#"><i class="fa fa-twitter-square fa-fw fa-2x"></i></a>';

  domString += '<a class="text-light" href="#"><i class="fa fa-instagram fa-fw fa-2x"></i></a>';

  domString += '<a class="text-light" href="#"><i class="fa fa-linkedin fa-fw fa-2x"></i></a>';

  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</footer>';

  utils.printToDom('socialMedia', domString);
};

export default { socialMedia };
