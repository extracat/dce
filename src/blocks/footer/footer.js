
(function (d, s) {

    var js, fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.src = "https://widgets.mos.ru/cnews/citywidgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    var i = setInterval(function () {
        if (window.city_widget && document.readyState === "complete") {
            city_widget('650x200', '.widget3');
            city_widget('240x400', '.widget5');
            clearInterval(i);
        }
    }, 50);
    setTimeout(function () {
        clearInterval(i)
    }, 5000);
}(document, 'script'));
