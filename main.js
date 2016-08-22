(function() {

    resizeLandingPage();

    window.onresize = resizeLandingPage;

    /**
     * Re-size landing page to be height of window
     */
    function resizeLandingPage() {
        var windowHeight = window.innerHeight;
        document.getElementById('landing-page').style.height = windowHeight;
    }

    var height = window.innerHeight;
    var nav = document.getElementById('main-nav');
    // TODO: refactor this
    window.addEventListener('scroll', function() {
        if (window.scrollY > height) {
            nav.style.position = 'fixed';
            nav.style.top = 0;
            nav.style.left = 0;
            nav.style.right = 0;
        } else {
            nav.style.position = 'initial';
            delete nav.style.top;
            delete nav.style.left;
            delete nav.style.right;
        }
    });

})();
