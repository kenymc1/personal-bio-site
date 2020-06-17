import utils from '../helpers/utils/utils';


const contact = () => {
  let domString = '';

  domString += '<h1 class="title">contact Me Directly</h1>';
  domString += '<div class="text-center">';
  domString += '<h3 class="text-center">Kenneth McEastland</h3>';
  domString += '<h6 class="text-center">Email: kenymc1@gmail.com</h6>';
  domString += '</div>';


  utils.printToDom('contact', domString);
};

export default { contact };
