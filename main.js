(function() {

    // On page load, resize the landing page to be the full window height.
    resizeLandingPage();

    // Resize landing page when the window size changes.
    window.addEventListener('resize', function() {
        // Only do this if you are at the top of the page.
        // This should prevent weird jumping due to URL bars on mobile devices.
        if (window.scrollY === 0) {
            resizeLandingPage();
        }
    });

    /**
     * Re-size landing page to be height of window.
     */
    function resizeLandingPage() {
        var windowHeight = window.innerHeight;
        document.getElementById('landing-section').style.height = windowHeight;
    };

    // Fix the nav to the top of the page when you scroll past it.
    window.addEventListener('scroll', fixMainNavOnScroll);

    // The main nav.
    var mainNav = document.getElementById('main-nav');

    /**
     * Called on scroll
     */
    function fixMainNavOnScroll() {
        fixedNav(mainNav);
    };

    /**
     * Fix the nav to the top of the page when you scroll past it.
     * @param  {DOM Element} nav
     *   The navigation element
     */
    function fixedNav(nav) {
        var height = window.innerHeight;
        if (window.scrollY > height) {
            if (nav.className.indexOf('nav--fixed-top') < 0) {
                nav.classList.add('nav--fixed-top');
                addHeightToAboutSection(nav);
            }
        } else {
            nav.classList.remove('nav--fixed-top');
        }
    };

    function addHeightToAboutSection(nav) {
        var aboutSection = document.getElementById('about-section');
        var navHeight = nav.offsetHeight;

    }

})();
