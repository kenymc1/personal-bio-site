
import './cards.scss';

const buildCards = (portfolios) => {
  let domString = '';

  domString += '<div class="col-3">';
  domString += '<div class="card d-flex flex-wrap  mt-5 mb-5">';
  domString += `<h2 class="card-title"><strong>${portfolios.title}</strong></h2>`;
  domString += `<img src="${portfolios.screenshot}" class="card-img-top" alt="project"/>`;
  domString += `<p class="card-text">${portfolios.description}</p>`;
  domString += `<p class="card-text">Technologies Used:${portfolios.technologiesUsed}</p>`;
  domString += `<p class="card-text">${portfolios.url}</p>`;
  domString += `<p class="card-text"><a class="" href="${portfolios.url}"><h3>${portfolios.title} Deployed Site View</h3></a></p>`;
  domString += `<p class="card-text"><a class="" href="${portfolios.githubUrl}">Kenny M's github link</h3></a></p>`;
  domString += '</div>';
  domString += '</div>';
  // domString += '</div>';
  return domString;
  //   });
  // });
};

export default { buildCards };
