/*
  Theme Name: Videograph
  Theme URI: https://colorlib.com/wp/templates/
  Author: Colorlib
  Author URI: https://colorlib.com/
  Description: Videograph is a creatives landing page template
  Version: 1.0.0
  Tags: videograph, creative, html
*/

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        // Set default language after preloader is done
        setLanguage('ko'); 
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><img src='img/arrow-left.png' alt=''></span>", "<span class='arrow_right'><img src='img/arrow-right.png' alt=''></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Portfolio Filter
    --------------------*/
    $('.portfolio__filter li').on('click', function () {
        $('.portfolio__filter li').removeClass('active');
        $(this).addClass('active');
    });

    if ($('.portfolio__gallery').length > 0) {
        var containerEl = document.querySelector('.portfolio__gallery');
        var mixer = mixitup(containerEl);
    }

    /*------------------
        Language Switcher
    --------------------*/
    const translations = {
        ko: {
            nav_home: "홈",
            nav_portfolio: "포트폴리오",
            nav_pages: "페이지",
            nav_dropdown_portfolio: "포트폴리오",
            nav_contact: "연락처",
            hero_role: "게임 프로그래머",
            hero_name: "서민수",
            hero_button: "포트폴리오 보기",
            passion_title: "Beyond the game",
            passion_text: "게임은 단순한 시간 때우기용 매체가 아니라 영화나 드라마 이상의 감동과 즐거움을 선사할 수 있는 매력적인 매체입니다. 이에 따라 그래픽 렌더링 기술에 많은 관심을 가지고 있습니다. 캐주얼한 게임도 좋아하지만, 고급 렌더링 기법을 활용하여 현실감 넘치는 배경과 캐릭터를 구현하고, 화려한 그래픽 효과를 통해 시각적으로 매력적인 게임을 만들어보고 싶습니다. 플레이어들에게 잊지 못할 경험을 제공하는 게임을 만들고 싶습니다.",
            service1_title: "모션 그래픽",
            service1_text: "편집 과정의 중간에 있든, 아직 시작도 하지 않았든, 저희의 후반 작업 서비스가 마지막 손길을 더할 수 있습니다.",
            service2_title: "대본 작성 및 편집",
            service2_text: "편집 과정의 중간에 있든, 아직 시작도 하지 않았든, 저희의 후반 작업 서비스가 마지막 손길을 더할 수 있습니다.",
            service3_title: "비디오 배포",
            service3_text: "편집 과정의 중간에 있든, 아직 시작도 하지 않았든, 저희의 후반 작업 서비스가 마지막 손길을 더할 수 있습니다.",
            service4_title: "비디오 호스팅",
            service4_text: "편집 과정의 중간에 있든, 아직 시작도 하지 않았든, 저희의 후반 작업 서비스가 마지막 손길을 더할 수 있습니다.",
            copyright_text: `Copyright © ${new Date().getFullYear()} All rights reserved | 이 템플릿은 <a href="https://colorlib.com" target="_blank">Colorlib</a>에 의해 만들어졌습니다.`
        },
        en: {
            nav_home: "Home",
            nav_portfolio: "Portfolio",
            nav_pages: "Pages",
            nav_dropdown_portfolio: "Portfolio",
            nav_contact: "Contact",
            passion_title: "Beyond the game",
            passion_text: "I believe games are a powerful medium, capable of delivering unparalleled emotion and engagement that rival any form of entertainment. This conviction fuels my passion for graphics rendering technologies. While I enjoy casual games, my true focus lies in harnessing cutting-edge rendering techniques to craft visually stunning games with immersive environments and lifelike characters. My goal is to create titles that captivate players, blending brilliant visual effects with unforgettable experiences that leave a lasting impact.",
            service1_title: "Motion graphics",
            service1_text: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
            service2_title: "Scriptwriting and editing",
            service2_text: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
            service3_title: "Video distribution",
            service3_text: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
            service4_title: "Video hosting",
            service4_text: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
            copyright_text: `Copyright © ${new Date().getFullYear()} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>`
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if(key === 'copyright_text') {
                    elem.innerHTML = translations[lang][key];
                } else {
                    elem.textContent = translations[lang][key];
                }
            }
        });
    };

    $('#lang-ko').on('click', function () {
        setLanguage('ko');
    });

    $('#lang-en').on('click', function () {
        setLanguage('en');
    });

})(jQuery);