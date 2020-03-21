const cv = {};

// wait for document to finish loading before calling init
function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
    cv.init();
});

cv.init = () => {
    cv.getDOM();
    cv.listenUp();
}

cv.getDOM = () => {
    cv.menu = document.querySelector('.hamburger');
}

cv.listenUp = () => {
    cv.menu.addEventListener('click', () => {
        cv.menu.classList.toggle('is-active');
    });
}