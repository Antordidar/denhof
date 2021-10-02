document.querySelector('.navbar-toggler').addEventListener('click', function (e) {
    [].map.call(document.querySelectorAll('.offcanvas-menu'), function (el) {
        el.classList.toggle('active');
    });
});