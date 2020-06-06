import utils from '../helpers/utils/utils';
import heroImg from '../../../img/heroImage.png';

const heroImage = () => {
  let domString = '';
  domString += `<div class="hero"><img src=${heroImg} alt=""></div>`;
  utils.printToDom('heroImage', domString);
};

export default { heroImage };
