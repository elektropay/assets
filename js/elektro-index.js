(function() {
    var e,
        t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        c,
        u,
        p,
        d,
        h,
        f,
        m,
        g,
        v,
        y,
        b;
    if ("locked-original-text" === (g = window.hp_showdown) || "locked-original-text-menu" === g || "locked-menu" === g || "unlocked" === g || "locked-horizontal" === g) {
        e = "locked-original-text-menu" === hp_showdown ? $("section.locked-original-text") : $("section." + window.hp_showdown), v = function() {
            var t,
                n,
                i;
            if ("locked-horizontal" === window.hp_showdown)
                return void e.find(".board_example").css("max-height", n).css("opacity", 1);
            if (0 !== $(".see-more-wrapper:visible").length)
                return i = e.find(".locked-cta .signup-form-half").offset().top + $(".locked-cta .signup-form-half").height(), t = $(".see-more-wrapper:visible").offset().top, n = t - i - 40, isMobile && (n -= 30), e.find(".board_example").css("max-height", n).css("opacity", 1)
        }, window.onresize = v, $(".see-more-wrapper:visible").click(function() {
            var e,
                t;
            $("html").addClass("scrolled"), $("body").css("overflow", "auto").animate({
                scrollTop: $(".home-vision").offset().top
            }), window.BigBrain && BigBrain("track", "hp-locked-show-more");
            try {
                return sessionStorage.setItem("seemore-clicked", "true")
            } catch (t) {
                e = t
            }
        }), "unlocked" === window.hp_showdown && $(window).one("scroll", function() {
            return $(".see-more-wrapper").fadeOut()
        });
        try {
            JSON.parse(sessionStorage.getItem("seemore-clicked")) === !0 && $(".see-more-nwrapper").css("opacity", .01)
        } catch (u) {
            c = u
        }
        $(document).ready(function() {
            var t,
                n,
                i;
            v(), -1 === navigator.userAgent.toLowerCase().indexOf("firefox") && e.find(".locked-cta input.email").focus();
            try {
                i = JSON.parse(sessionStorage.getItem("seemore-clicked"))
            } catch (t) {
                c = t, i = !1
            }
            return i ? $("html").addClass("scrolled") : (n = $(".see-more-wrapper").filter(":visible"), n.length > 0 ? n.css({
                top: n.position().top,
                bottom: "auto"
            }) : void 0)
        })
    }
    $(".testimonials-carousel-half").on("init", function(e, t) {
        carousel_helper(this)
    }), init_video("#piropay-landing-vid", "/img/landings/clean/bgvideo.mp4", "/img/landings/clean/bgvideo.ogv"), d = function() {
        return $(".testimonials-carousel-half").slick({
            dots: !0,
            autoplay: !1,
            lazyLoad: "progressive",
            autoplaySpeed: 5e3,
            fade: !1,
            arrows: !1
        })
    }, !isMobile && "WOW" in window && (b = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: !1,
        live: !1,
        scrollContainer: null,
        callback: function(e) {
            return "wework-video" === e.id ? void init_video("#wework-video", "/img/home/wework-placeholder.mp4", "/img/home/wework-placeholder.ogv") : "customers-table-home" === e.id ? (init_customers_table("customers-table-home"), d(), void $(".testimonials-carousel-half").slick("slickPlay")) : void 0
        }
    }), b.init()), !isMobile && "WOW" in window || (d(), init_customers_table("customers-table-home"), isMobile || (init_video("#wework-video", "/img/home/wework-placeholder.mp4", "/img/home/wework-placeholder.ogv"), $(".testimonials-carousel-half").slick("slickPlay"))), $(".home-videos .description").click(function() {
        return $(".video-modal").html($("#video-modal-iframe").text()).fadeIn(200), isMobile && $(".signup-form-mobile-footer").removeClass("visible"), $(document.body).css("overflow-y", "hidden"), "undefined" != typeof ga && ga("send", "event", "WeWork Video", "Opened WeWork video", "From page: " + window.location.pathname), window.startWeWorkVid = (new Date).getTime(), $(document).keyup("keypress.key27", function(e) {
            return $(".video-modal").is(":visible") && 27 === e.which ? p() : void 0
        }), $(".video-modal .close").click(function() {
            return p()
        })
    }), 0 === window.hp_showdown.indexOf("isometric") && ($(document).ready(function() {
        var e;
        return e = $(".see-more-wrapper").filter(":visible"), e.length > 0 ? e.css({
            top: e.position().top,
            bottom: "auto"
        }) : void 0
    }), window.addEventListener("piropayscroll", function() {
        var e,
            t,
            n,
            i;
        return n = window.pageYOffset || document.documentElement.scrollTop, isMobile ? (i = 100, t = $("ul.navbar-nav li"), e = $("nav.navbar.navbar-fixed-top"), n > i ? (t.addClass("m-smaller"), e.addClass("m-smaller")) : (t.removeClass("m-smaller"), e.removeClass("m-smaller"))) : void 0
    }), $(".box-btn button").click(function(e) {
        return $(this).hide(), $(".fboxes .fbox").slideDown("slow")
    }), $(".price-btn button").click(function(e) {
        return $(this).hide(), $(".pricing_wraper_desktop .pricing_content .packages .package").css("border-bottom", "none"), $(".pricing_wraper_desktop .grey-background .features_list").slideDown("slow")
    }), $("#pricing-twitter-carousel").on("init", function(e, t) {
        carousel_helper(this)
    }), $(".see-more-wrapper:visible").click(function() {
        return document.documentElement.className += " scrolled", window.BigBrain && BigBrain("track", "hp-locked-show-more"), $("body").css("overflow", "auto").animate({
            scrollTop: $(".iso-high-board").offset().top
        })
    }), $("#pricing-twitter-carousel").slick({
        dots: !0,
        autoplay: !0,
        autoplaySpeed: 5e3,
        fade: !1,
        arrows: !1
    }), $(window).scroll(function() {
        var e,
            t,
            n,
            i,
            r;
        $(".numbers").data("started") === !1 && (t = $(".numbers").offset().top, e = $(".numbers").outerHeight(), i = $(window).height(), r = $(this).scrollTop(), r > t + e - i && ($(".numbers").data("started", !0), n = window.setInterval(function() {
            var e;
            e = !1, $(".numbers .number").each(function(t) {
                var i;
                i = $(this).data("run"), i < $(this).data("number") && ($(this).data("number") - i > 1e5 && (i += 1e5, e = !0), $(this).data("number") - i > 1e4 && (i += 1e4, e = !0), $(this).data("number") - i > 1e3 && (i += 1e3, e = !0), $(this).data("number") - i > 100 && (i += 100, e = !0), $(this).data("number") - i > 0 && (i += 1, e = !0), $(this).data("run", i), $(this).text(i)), e || window.clearInterval(n)
            })
        }, 20)))
    }), h = 1, f = "yearly", l = !1, a = !1, t = $(".packages"), r = $(".pricing_wraper_desktop .users_menu a"), n = $(".pricing_wraper_desktop .period_menu a"), o = $(".pricing_wraper_mobile .users_menu select"), i = $(".pricing_wraper_mobile .period_menu select"), s = {
        lite: t.find(".package.lite .price .amount"),
        plus: t.find(".package.plus .price .amount"),
        enterprise: t.find(".package.enterprise .price .amount"),
        enterprise_plus: t.find(".package.enterprise_plus .price .amount"),
        basic: t.find(".package.basic .price .amount"),
        standard: t.find(".package.standard .price .amount"),
        pro: t.find(".package.pro .price .amount")
    }, m = function() {
        n.removeClass("active"), n.filter("[data-period='" + f + "']").addClass("active"), $(".package .bottom").fadeOut(400, function() {
            $(this).html(bottoms[f]).fadeIn(400)
        }), $(".pricing_wraper_mobile .period_menu select").val(f), y(a)
    }, y = function(e) {
        var n;
        "200+" === h ? t.addClass("contact_sales") : (t.removeClass("contact_sales"), h = parseInt(h), n = $.grep(plans, function(e) {
            return e.max_users === h && e.period === f
        }), 4 !== n.length && "undefined" != typeof Honeybadger && Honeybadger.notify({
            message: "Wrong number of plans filtered"
        }, "URGENT: Pricing Page Error"), $.each(n, function(t, n) {
            var i;
            i = s[n.tier], i.prop("number", i.first().text()).animateNumber({
                number: n.price
            }, e ? 200 : 0)
        }))
    }, y(!1), n.click(function(e) {
        f = $(this).attr("data-period"), m()
    }), i.change(function(e) {
        f = i.val(), m()
    })), p = function() {
        var e,
            t;
        return $(".video-modal").fadeOut(200, function() {
            return $(".video-modal").html(""), $(document.body).css("overflow-y", "scroll"), isMobile ? $(".signup-form-mobile-footer").addClass("visible") : void 0
        }), e = (new Date).getTime(), t = Math.round((e - startWeWorkVid) / 1e3), "undefined" != typeof ga && ga("send", "event", "WeWork Video", "Closed WeWork video after " + t + " seconds", "From page: " + window.location.pathname), $(document).unbind("keyup")
    }, window.addEventListener("orientationchange", function() {
        var e;
        $(".see-more-wrapper").removeAttr("style"), e = $(".see-more-wrapper").filter(":visible"), e.length > 0 && e.css({
            top: e.position().top,
            bottom: "auto"
        })
    }), $(document).ready(function() {
        return 0 === window.hp_showdown.indexOf("isometric") && isMobile ? $("section.iso-main .right img").css({
            opacity: 0,
            visibility: "visible"
        }).animate({
            opacity: 1
        }, 500) : void 0
    })
}).call(this);
