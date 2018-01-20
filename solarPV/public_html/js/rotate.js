function rotateBanner(banner) {
    var active = $(banner+" img.active");
    var next = active.next();
    if (next.length === 0)
            next = $(banner+" img:first");
    active.removeClass("active").fadeOut(400);
    next.addClass("active").fadeIn(400);

}

function prepare(banner) {
    $(banner+" img").fadeOut(0);
    $(banner+" img:first").fadeIn(0).addClass("active");

}

function start(banner) {
    prepare(banner);
    setInterval("rotateBanner('"+banner+"')", 6000);
}