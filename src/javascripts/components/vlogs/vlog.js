import utils from '../helpers/utils/utils';


const vlog = () => {
  let domString = '';

  domString += '<div class="container">';
  domString += '<div>';
  domString += '<h1 class="text-center">My Videos</h1>';
  domString += '<h4 class="text-center">A few videos from my Vlog </h4>';
  // eslint-disable-next-line max-len
  domString += '<p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nisi hic tenetur blanditiis nostrum dicta, placeat exercitationem, sint repellendus quas sit nam eaque fugiat quasi. Explicabo placeat velit molestiae rerum.</p>';
  domString += '</div>';
  domString += '<div class="row">';
  domString += '<div class="col-md-6 text-center">';
  domString += '<div class="profile">';
  // eslint-disable-next-line max-len
  domString += '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6623321594657857536?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="col-md-6 text-center">';
  domString += '<div class="profile">';

  // eslint-disable-next-line max-len
  domString += '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6625488079543164928?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';
  domString += '</div>';
  domString += '</section>';

  utils.printToDom('vlog', domString);
};


export default { vlog };
