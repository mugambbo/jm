/*
 * Journal Managers v2.0.1 (http://journalmanagers.com)
 * Copyright 2015 Journal Managers, Inc.
 * Authors: Sam/@Mugambbo
 */

/** Sticky Navigation Bar **/

$(document).ready(function(){
    $(window).bind('scroll', function() {
        //var navHeight = $(".header").height();
        var navHeight = 320;
        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
    });
});