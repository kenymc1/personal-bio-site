import utils from '../helpers/utils/utils';

const heroImage = () => {
  let domString = '';
  domString += '<div class="hero"><img src="/src/img/heroImage.png" alt=""></div>';
  utils.printToDom('heroImage', domString);
};

export default { heroImage };
