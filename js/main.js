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
    $('.popup-with-content').magnificPopup({
        type: 'inline',
        midClick: true
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
            copyright_text: `Copyright © ${new Date().getFullYear()} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>`,

            p_ap_desc: "fps",
            p_ap_detail_desc: `
        <p>팀원</p>
        <h4><strong>주요 역할 및 구현 내용:</strong></h4>
        <ul>
            <li><strong>a:</strong> d.</li>
            <li><strong>b:</strong> e.</li>
            <li><strong>c:</strong> f.</li>
        </ul>
    `,

            p_lw_desc: "언리얼 엔진 기반의 언어 학습 메타버스로, 생성형 AI NPC와의 대화 및 멀티플레이 상호작용을 통해 몰입감 높은 학습 경험을 제공합니다.",
            p_lw_detail_desc: `
        <p>2024년 메타버스 경진대회 출품작으로, 언어 학습을 게임처럼 즐길 수 있도록 설계된 언리얼 엔진 기반의 메타버스 프로젝트입니다. 팀장을 맡아 프로젝트의 핵심 시스템 설계를 주도했습니다.</p>
        <h4><strong>주요 역할 및 구현 내용:</strong></h4>
        <ul>
            <li><strong>생성형 AI NPC 구현:</strong> 게임 내 NPC와 채팅 및 음성으로 자유롭게 대화할 수 있는 시스템을 구축했습니다. 생성형 AI를 접목하여 튜토리얼을 진행하는 선생님 NPC부터 카페, 상점 등의 NPC까지, 살아있는 듯한 상호작용을 구현했습니다.</li>
            <li><strong>멀티플레이 시스템:</strong> Epic Games ID와 연동되는 멀티플레이 환경을 구축하여, 다른 유저들과 실시간 채팅 및 음성 대화가 가능하도록 구현했습니다.</li>
            <li><strong>채팅 시스템 개발:</strong> 원활한 상호작용의 기반이 되는 인게임 채팅 및 음성 채팅 시스템을 개발했습니다.</li>
        </ul>
    `,
            p_ae_desc: "적의 속성에 맞춰 무기를 교체하며 싸우는 C++ 기반의 2D 횡스크롤 런앤건 게임입니다.",
            p_ae_detail_desc: `
        <p>적의 속성에 따라 무기를 변경하며 스테이지를 돌파하는 2D 횡스크롤 런앤건 게임입니다. C++을 기반으로 기본적인 게임 시스템을 직접 구현하며 프로그래밍의 기초를 다졌습니다.</p>
        <h4><strong>주요 구현 내용:</strong></h4>
        <ul>
            <li><strong>속성 기반 전투 시스템:</strong> 특정 속성 공격에만 피해를 입는 적들을 구현하여 전략적인 무기 선택의 중요성을 강조했습니다.</li>
            <li><strong>AABB 충돌 로직:</strong> 외부 라이브러리 없이 플레이어, 적, 투사체 간의 충돌을 처리하기 위해 AABB(Axis-Aligned Bounding Box) 충돌 감지 시스템을 직접 구현했습니다.</li>
            <li><strong>보스전 설계:</strong> 다양한 공격 패턴과 기믹을 가진 보스를 구현하여 도전적인 플레이 경험을 제공합니다.</li>
            <li><strong>핵심 시스템 개발:</strong> 플레이어의 정교한 이동 및 공격 로직, UI, 점수 저장 및 불러오기 등 게임의 핵심 기능들을 구현했습니다.</li>
        </ul>
        <br>
        <a href="https://github.com/WestMinsu/AlphaEngineProject" target="_blank" class="primary-btn">GitHub에서 코드 보기</a>
    `,

            p_gp_desc: "C언어 기반의 횡스크롤 디펜스 게임으로, 다양한 유닛을 소환하고 영웅을 조작하여 전투를 벌이는 프로젝트입니다.",
            p_gp_detail_desc: `
        <p>다양한 유닛을 소환하고 영웅을 직접 조작하여 적의 기지를 파괴하는 횡스크롤 디펜스 게임입니다. C언어 기반의 2D 그래픽 라이브러리인 <a href="https://github.com/DigiPen-Faculty/CProcessing" target="_blank">Cprocessing Engine</a>을 사용하여 개발하였습니다.</p>
        <h4><strong>주요 구현 내용:</strong></h4>
        <ul>
            <li><strong>유닛 소환 및 전투 시스템:</strong> 자원을 소모하여 다양한 유닛을 소환하고, 각 유닛이 적과 자동으로 충돌하여 전투를 벌이는 로직을 구현했습니다.</li>
            <li><strong>영웅 컨트롤 및 스킬:</strong> 플레이어가 직접 조작하는 영웅 캐릭터의 공격 및 고유 스킬 시스템을 구현하여 전략적인 변수를 추가했습니다.</li>
            <li><strong>게임 목표 시스템:</strong> 적의 기지를 파괴하면 승리하는 명확한 게임 목표와 로직을 설계했습니다.</li>
        </ul>
        <br>
        <a href="https://github.com/WestMinsu/CProcessingProject" target="_blank" class="primary-btn">GitHub에서 코드 보기</a>
    `,

            p_id_desc: "Unity와 C#으로 개발한 쿼터뷰 3D 액션 게임입니다. Nav Mesh를 활용한 몬스터 AI와 다양한 공격 패턴을 구현했습니다.",
            p_id_detail_desc: `
        <p>Unity와 C#을 사용하여 개발한 쿼터뷰 3D 액션 게임입니다. 팀장 역할을 맡아 프로젝트를 이끌었으며, 특히 몬스터와 보스의 AI 로직 및 공격 패턴 구현에 중점을 두었습니다.</p>
        <h4><strong>주요 역할 및 구현 내용:</strong></h4>
        <ul>
            <li><strong>몬스터 및 보스 AI:</strong> Nav Mesh를 활용하여 모든 적이 플레이어를 지능적으로 추적하고, 각기 다른 특성을 가진 공격 패턴(근접, 원거리, 돌진 등)을 구사하도록 설계했습니다.</li>
            <li><strong>보스 패턴 시스템:</strong> Minotaur 보스가 Random.Range()를 통해 도끼 휘두르기, 돌진, 원거리 투척 등 다양한 공격을 무작위로 사용하도록 구현하여 전투의 긴장감을 높였습니다.</li>
            <li><strong>입력 및 충돌 처리:</strong> 키보드/마우스 입력 시스템을 구축하고, Rigidbody와 Ray를 이용해 점프, 공격 판정, 벽 충돌 등 정교한 물리 상호작용을 구현했습니다.</li>
            <li><strong>UI 시스템:</strong> Canvas를 기반으로 상점, 메뉴 등 상호작용이 가능한 UI를 제작했으며, 비동기 처리가 필요한 부분에는 코루틴을 적극적으로 활용했습니다.</li>
        </ul>
    `
        }, 
        en: {
            nav_home: "Home",
            nav_portfolio: "Portfolio",
            nav_pages: "Pages",
            nav_dropdown_portfolio: "Portfolio",
            nav_contact: "Contact",
            passion_title: "Beyond the game",
            passion_text: "I believe games are a powerful medium, capable of delivering unparalleled emotion and engagement that rival any form of entertainment. This conviction fuels my passion for graphics rendering technologies. While I enjoy casual games, my true focus lies in harnessing cutting-edge rendering techniques to craft visually stunning games with immersive environments and lifelike characters. My goal is to create titles that captivate players, blending brilliant visual effects with unforgettable experiences that leave a lasting impact.",
            copyright_text: `Copyright © ${new Date().getFullYear()} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>`,
            video_title: "Featured Project",
            video_subtitle: "A summary of my work and skills.",
            video_placeholder_text: "Video Coming Soon",

            p_lw_desc: "A language learning metaverse based on Unreal Engine, providing an immersive learning experience through conversations with Generative AI NPCs and multiplayer interactions.",
            p_lw_detail_desc: `
        <p>Submitted to the 2024 Metaverse Competition, this is a metaverse project based on Unreal Engine, designed to make language learning as enjoyable as a game. As the team leader, I led the design of the project's core systems.</p>
        <h4><strong>Key Roles and Implementations:</strong></h4>
        <ul>
            <li><strong>Generative AI NPC Implementation:</strong> Built a system allowing free-form chat and voice conversations with in-game NPCs. Integrated Generative AI to create lifelike interactions, from a tutorial-guiding teacher NPC to various characters in cafes and shops.</li>
            <li><strong>Multiplayer System:</strong> Established a multiplayer environment linked with Epic Games ID, enabling real-time text and voice chat among users.</li>
            <li><strong>Chat System Development:</strong> Developed the foundational in-game text and voice chat systems to facilitate seamless user interaction.</li>
        </ul>
    `,

            p_ae_desc: "A C++ based 2D side-scrolling run-and-gun game where you switch weapons based on enemy attributes.",
            p_ae_detail_desc: `
        <p>A 2D side-scrolling run-and-gun game where players must clear stages by switching weapons according to enemy attributes. Built the fundamental game systems from the ground up using C++ to solidify programming basics.</p>
        <h4><strong>Key Implementation Details:</strong></h4>
        <ul>
            <li><strong>Attribute-Based Combat:</strong> Implemented enemies that only take damage from specific attack attributes, emphasizing strategic weapon choices.</li>
            <li><strong>AABB Collision Logic:</strong> Developed an Axis-Aligned Bounding Box (AABB) collision detection system from scratch to handle interactions between the player, enemies, and projectiles without external libraries.</li>
            <li><strong>Boss Battle Design:</strong> Created a challenging gameplay experience by implementing a boss with various attack patterns and gimmicks.</li>
            <li><strong>Core Systems Development:</strong> Implemented core game features, including precise player movement and attack logic, UI, and a score saving/loading system.</li>
        </ul>
        <br>
        <a href="https://github.com/WestMinsu/AlphaEngineProject" target="_blank" class="primary-btn">View Code on GitHub</a>
    `,

            p_gp_desc: "A side-scrolling defense game based on C, featuring strategic combat by summoning various units and controlling a hero.",
            p_gp_detail_desc: `
        <p>A side-scrolling defense game where players summon various units and directly control a hero to destroy the enemy base. This project was developed using the <a href="https://github.com/DigiPen-Faculty/CProcessing" target="_blank">Cprocessing Engine</a>, a 2D graphics library for the C language.</p>
        <h4><strong>Key Implementation Details:</strong></h4>
        <ul>
            <li><strong>Unit Summoning & Combat System:</strong> Implemented logic for summoning diverse units by consuming resources, where each unit automatically engages in combat upon collision with enemies.</li>
            <li><strong>Hero Control & Skills:</strong> Added strategic variables by implementing a controllable hero character with unique attack and skill systems.</li>
            <li><strong>Game Objective System:</strong> Designed a clear game objective and logic where victory is achieved by destroying the enemy's base.</li>
        </ul>
        <br>
        <a href="https://github.com/WestMinsu/CProcessingProject" target="_blank" class="primary-btn">View Code on GitHub</a>
    `,

            p_id_desc: "A quarter-view 3D action game developed with Unity and C#. Implemented monster AI using Nav Mesh and various attack patterns.",
            p_id_detail_desc: `
        <p>A quarter-view 3D action game developed using Unity and C#. As the team leader, I led the project and focused particularly on implementing the AI logic and attack patterns for monsters and bosses.</p>
        <h4><strong>Key Roles and Implementations:</strong></h4>
        <ul>
            <li><strong>Monster & Boss AI:</strong> Designed all enemies to intelligently track the player using Nav Mesh, equipped with unique attack patterns such as melee, ranged, and charge attacks.</li>
            <li><strong>Boss Pattern System:</strong> Implemented the Minotaur boss to randomly use various attacks (axe swing, charge, ranged throw) via Random.Range(), enhancing combat tension.</li>
            <li><strong>Input & Collision Handling:</strong> Built an intuitive keyboard/mouse input system and implemented precise physics interactions like jumping, attack detection, and wall collisions using Rigidbody and Ray.</li>
            <li><strong>UI System:</strong> Created interactive UI elements like shops and menus based on Canvas, actively utilizing Coroutines for asynchronous operations.</li>
        </ul>
    `
        }
    };

const setLanguage = (lang) => {
    // 텍스트 변경
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });

    // 'active' 클래스를 올바른 li 태그에 적용 (이 부분은 그대로 유지)
    if (lang === 'ko') {
        $('#lang-menu-ko').addClass('active');
        $('#lang-menu-en').removeClass('active');
    } else {
        $('#lang-menu-en').addClass('active');
        $('#lang-menu-ko').removeClass('active');
    }
};

    // KO 메뉴 클릭 이벤트
    $('#lang-menu-ko').on('click', function (e) {
        e.preventDefault();
        setLanguage('ko');
    });

    // EN 메뉴 클릭 이벤트
    $('#lang-menu-en').on('click', function (e) {
        e.preventDefault();
        setLanguage('en');
    });

    $('.header__nav__menu a[href*="#"], .scroll-btn[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    $(window).on('scroll', function () {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function () {
            if ($(this).position().top <= scrollDistance + 100) {
                var sectionId = $(this).attr('id');
                $('.header__nav__menu .nav-item.active').removeClass('active');
                $('.header__nav__menu .nav-item a[href="#' + sectionId + '"]').closest('li').addClass('active');
            }
        });
    });

    $('.portfolio__item__video').on('click', function () {
        $(this).find('a.popup-with-content').trigger('click');
    });

    $('a.popup-with-content').on('click', function (e) {
        e.stopPropagation();
    });
})(jQuery);