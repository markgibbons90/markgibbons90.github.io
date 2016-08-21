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

})();
