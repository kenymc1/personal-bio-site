import utils from '../helpers/utils/utils';


const contact = () => {
  let domString = '';

  domString += '<p class="title">contact Me Directly</p>';

  domString += '<div class="container">';
  domString += '<div class="row">';
  domString += '<form action="/action_page.php">';
  domString += 'First name:<br>';
  domString += '<input type="text" name="firstname" value=""><br>';
  domString += 'Last name:<br>';
  domString += '<input type="text" name="lastname" value=""><br><br>';
  domString += '<input type="submit" value="Hit Me Up">';
  domString += '</form>';
  domString += '</div>';
  domString += '</div>';

  utils.printToDom('contact', domString);
};

export default { contact };
