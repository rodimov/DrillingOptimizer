var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rodimov/DrillingOptimizer.git', // Update to point to your repository
        user: {
            name: 'rodimov', // update to use your name
            email: 'rodimov.art@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)