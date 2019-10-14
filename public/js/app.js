import 'materialize-css/dist/css/materialize.min.css';
import '../css/styles';

import Router from 'vanilla-router';

const homeTemplate = require('../../templates/views/home');
const contributorsTemplate = require('../../templates/views/contributors');
const styleGuideTemplate = require('../../templates/views/style-guide');

// Main Javascript File
document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    console.log('/src/app.js Loaded and Ready!!!');

    // Router Declaration
    const router = new Router({
        mode: 'history',
        page404: (path) => {
            // serve error template here
            console.error('404 - page not found');
        },
    });
    
    router.add('/', () => {
        document.title = 'STL Estimator';
        // section.className = 'home';
        document.body.innerHTML = homeTemplate({
            title: 'STL Estimator'
        });
    });

    router.add('/contributors', () => {
        document.title = 'HacktoberFest 2019 | Contributors';
        // section.className = 'contributors';
        document.body.innerHTML = contributorsTemplate({
            title: 'STL Estimator Contributors'
        });
    });

    router.add('/style-guide', () => {
        document.title = 'Style Guide';
        // section.className = 'style-guide';
        document.body.innerHTML = styleGuideTemplate({
            title: 'STL Estimator Style'
        });
    });

    // Navigate app to current url
    router.navigateTo(window.location.pathname);
});