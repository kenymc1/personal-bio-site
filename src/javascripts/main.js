import 'bootstrap';
import navigation from './components/nav/nav';
import heroImage from './components/hero/hero';
import bio from './components/bio/bio';
import tech from './components/tec/tech';
import vlog from './components/vlogs/vlog';
import projects from './components/projects/projects';
import contact from './components/contact/contact';
import social from './components/social/social';

import '../styles/main.scss';
// import axios from 'axios';

const init = () => {
  navigation.navigation();
  heroImage.heroImage();
  bio.bio();
  tech.tech();
  vlog.vlog();
  projects.projects();
  contact.contact();
  social.social();
};

init();
