import utils from '../helpers/utils/utils';

const bio = () => {
  let domstring = '';

  domstring += '<div class="container-fluid">';
  domstring += '<div class="row">';
  domstring += '<div class="bio">';
  domstring += '<h1 class="text-center">Who is this Guy</h1>';
  domstring += '<div class="info">';
  // eslint-disable-next-line max-len
  domstring += '<p class="col-md- 6">Currently Im a Full-stack web development student studying at the Nashville Software School. I have graphic design photography music and video experience. In addition to those skill sets I also have experience in digital marketing and google analytics. Ive been surrounded by technology most of my life and it touches almost everything I do on a regular basis. I was in junior high when I wrote my first line of code, but I initially went the route of a graphic designer. now my life has come full circle and Im back to writing code. Im an artist and Im at my happiest when I create. Working with code gives me another medium to show my creativity.</p>';
  domstring += '</div>';
  domstring += '</div>';
  domstring += '</div>';
  domstring += '</div>';

  utils.printToDom('bio', domstring);
};


export default { bio };
