import utils from '../helpers/utils/utils';
import data from '../helpers/data/data';
import buildCards from '../cards/cards';

import './port.scss';

const port = () => {
  let domString = '<h1 class="headingProjects text-center mt-5 mb-1">Git Hub Projects </h1>';
  domString += '<div class="d-flex flex-wrap col">';
  data.getPort()
    .then((portfolios) => {
      portfolios.forEach((portfolio) => {
        console.log(portfolio);
        domString += buildCards.buildCards(portfolio);
      });
      domString += '</div>';
      utils.printToDom('port', domString);
    })
    .catch((error) => console.error(error));
};

export default { port };
