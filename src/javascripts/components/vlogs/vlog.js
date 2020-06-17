import utils from '../helpers/utils/utils';


const vlog = () => {
  let domString = '';

  domString += '<div class="container">';
  domString += '<div>';
  domString += '<h1 class="text-center">My Videos</h1>';
  domString += '<h4 class="text-center">A few videos from my Vlog </h4>';
  // eslint-disable-next-line max-len
  domString += '<p>Below are a couple episodes of my vlog. I had decided to do it as a journal of my journey at NSS and to showcase my work.</p>';
  domString += '</div>';
  domString += '<div class="row">';
  domString += '<div class="col-md-6">';
  domString += '<div class="profile">';
  // eslint-disable-next-line max-len
  domString += '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6674076283284066304?compact=1" height="300" width="98%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="col-md-6">';
  domString += '<div class="profile">';

  // eslint-disable-next-line max-len
  domString += '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6664331466303950848?compact=1" height="300" width="98%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';
  domString += '</div>';

  domString += '</section>';

  utils.printToDom('vlog', domString);
};


export default { vlog };
