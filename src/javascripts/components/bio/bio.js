import utils from '../helpers/utils/utils';

const bio = () => {
  let domstring = '';

  domstring += '<div class="container-fluid">';
  domstring += '<div class="row">';
  domstring += '<div class="bio">';
  domstring += '<h1 class="text-center">Who is this Guy</h1>';
  domstring += '<div class="info">';
  // eslint-disable-next-line max-len
  domstring += '<p class="col-md- 6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni hic officia dicta dolores quo eligendi dolor, quaerat et ad voluptas at expedita. Tenetur perferendis, alias expedita assumenda velit amet exercitationem. recusandae molestias veritatis! Ipsum, saepe ipsa consequuntur dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, reprehenderit dicta. Atque officiis rem eos provident Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sed eveniet libero error nostrum omnis nobis rerum ea porro aut. Quibusdam fuga ad, repudiandae dolor iste maiores quam qui consequatur!  quos quidem ad autem sit architecto, error, dolorem reprehenderit nobis repellat dolor accusantium alias? praesentium vitae, officia fugiat tempore ratione commodi necessitatibus ab architecto similique molestiae sunt?</p>';
  domstring += '</div>';
  domstring += '</div>';
  domstring += '</div>';
  domstring += '</div>';

  utils.printToDom('bio', domstring);
};


export default { bio };
