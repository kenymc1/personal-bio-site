import utils from '../helpers/utils/utils';


const social = () => {
  let domString = '';

  domString += '<div class="container-fluid text-center">';
  domString += '<p class="title">FIND Me ON SOCIAL MEDIA</p>';
  domString += '</div>';
  domString += '<div class="container-fluid">';
  domString += '<div class="row offset-4">';
  domString += '<div class="social-icons">';
  domString += '<a href="#"><img src="/src/img/social_0000_twitter.png"></a>';

  domString += '<a href="#"><img src="/src/img/social_0001_facebopok.png"></a>';

  domString += '<a href="#"><img src="/src/img/social_0002_instagram.png"></a>';

  domString += '<a href="#"><img src="/src/img/social_0003_snapChat.png"></a>';

  domString += '<a href="#"><img src="/src/img/social_0004_whats.png"></a>';

  domString += '<a href="#"><img src="/src/img/social_0005_youTube.png"></a>';

  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  utils.printToDom('social', domString);
};

export default { social };
