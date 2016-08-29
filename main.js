(function() {

    // On page load, resize the landing page to be the full window height.
    resizeLandingPage();

    // Resize landing page when the window size changes.
    window.addEventListener('resize', resizeLandingPage);

    /**
     * Re-size landing page to be height of window.
     */
    function resizeLandingPage() {
        // Only do this if you are at the top of the page.
        // This should prevent weird jumping due to URL bars on mobile devices.
        if (window.scrollY === 0) {
            var windowHeight = window.innerHeight;
            document.getElementById('landing-section').style.height = windowHeight;
        }
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
            nav.classList.add('inline-nav--fixed-top');
        } else {
            nav.classList.remove('inline-nav--fixed-top');
        }
    };

})();
