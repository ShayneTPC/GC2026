new WOW({ animateClass: 'animate__animated' }).init();

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
        $(".backToTop").addClass("active");
    } else {
        $(".backToTop").removeClass("active");
    }
    });
    $(".backToTop a").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
        {
        scrollTop: 0,
        },
        600,
    );
});


$(function () {
    $(".mobmenuBtn").on("click", function () {
        $(".menuLinks").addClass("active");
        $("body").addClass("noScroll");
    });

    $(".closeBtn").on("click", function () {
        $(".menuLinks").removeClass("active");
        $("body").removeClass("noScroll");
    });
});




$(".categories a").on("click", function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");
    const targetOffset = $(targetId).offset().top;

    // scroll
    $("html, body").animate(
        {
        scrollTop: targetOffset - 100,
        },
        800,
    );

    // active 狀態切換
    $(".categories a").removeClass("active");
    $(this).addClass("active");
});

$(function () {
    const $tabs = $(".tabLink");
    const $tables = $(".divTable");

    $tabs.on("click", function () {
        const $this = $(this);

        if ($this.hasClass("selected")) return;

        const tab = $this.data("tab");

        $tabs.removeClass("selected");
        $this.addClass("selected");

        $tables.removeClass("active");
        $tables.filter('[data-id="' + tab + '"]').addClass("active");
    });
});
