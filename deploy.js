const ghpages = require('gh-pages');

ghpages.publish(
  'out',
  {
    repo: 'https://github.com/santosfrancisco/santosfrancisco.github.io.git',
  },
  console.log
);

