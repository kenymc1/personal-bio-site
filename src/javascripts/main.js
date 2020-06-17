import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './components/helpers/apiKeys.json';


import navigation from './components/nav/nav';
import heroImage from './components/hero/hero';
import bio from './components/bio/bio';
import tech from './components/tec/tech';
import vlog from './components/vlogs/vlog';
import port from './components/port/port';
import projects from './components/projects/projects';
import contact from './components/contact/contact';
import socialMedia from './components/social/social';

import '../styles/main.scss';
// import axios from 'axios';

const init = () => {
  navigation.navigation();
  heroImage.heroImage();
  bio.bio();
  tech.tech();
  vlog.vlog();
  port.port();
  projects.projects();
  contact.contact();
  socialMedia.social();
  firebase.initializeApp(apiKeys.firebaseKeys);
};

init();
