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
            hero_role: "렌더링 프로그래머",
            hero_name: "서민수",
            passion_title: "Beyond the game",
            passion_text: "게임은 단순한 시간 때우기용 매체가 아니라 영화나 드라마 이상의 감동과 즐거움을 선사할 수 있는 매력적인 매체입니다. 이에 따라 게임 그래픽 렌더링 기술에 많은 관심을 가지고 있으며, 실시간 렌더링 파이프라인과 GPU 기반 최적화를 직접 구현하며 역량을 쌓고 있습니다. 고급 렌더링 기법을 활용하여 현실감 넘치는 배경과 캐릭터를 구현하고, 화려한 그래픽 효과를 통해 시각적으로 매력적인 게임을 만들어보고 싶습니다.",
            portfolio_page_title: "주요 프로젝트",
            focus_rhi_title: "공통 RHI",
            focus_rhi_text: "DX12와 Vulkan을 하나의 RHI로 추상화하여 동일한 렌더링 코드로 양쪽 백엔드를 구동합니다.",
            focus_bindless_title: "Bindless",
            focus_bindless_text: "단일 Global Descriptor로 모든 리소스에 인덱스로 접근합니다.",
            focus_graph_title: "Render Graph",
            focus_graph_text: "렌더링 순서와 GPU 동기화를 프레임마다 자동으로 결정합니다.",
            focus_gpu_title: "GPU-Driven",
            focus_gpu_text: "Compute culling으로 가시성을 판별하고, 결과를 indirect draw로 한 번에 처리합니다.",
            p_we_title: "WestEngine",
            p_we_desc: "DirectX 12/Vulkan 듀얼 백엔드 RHI, Bindless 리소스 모델, Render Graph, GPU-driven 렌더링, Deferred PBR 파이프라인을 구현한 렌더링 엔진입니다.",
            p_we_tag1: "DirectX 12",
            p_we_tag2: "Vulkan",
            p_we_tag3: "C++ / Slang",
            p_we_period: "개발 기간: 2026-02-28 ~ 2026-04-27",
            p_we_detail_desc: `
        <p>WestEngine은 DirectX 12와 Vulkan 듀얼 백엔드를 하나의 RHI(Rendering Hardware Interface)로 추상화한 실시간 렌더링 엔진입니다. Amazon Lumberyard Bistro(약 2.84M triangles) 씬을 DX12와 Vulkan 모두 동일한 렌더링 코드로 구동하며, 백엔드가 바뀌어도 상위 파이프라인 코드는 수정 없이 동작합니다.</p>
        <h4><strong>핵심 구현</strong></h4>
        <ul>
            <li><strong>RHI 추상화:</strong> IRHIDevice, IRHICommandList, IRHIFence 등 15개 인터페이스를 두어 DX12/Vulkan 타입이 렌더링 코드에 직접 노출되지 않습니다.</li>
            <li><strong>Bindless 모델:</strong> 엔진 전체가 하나의 Global Root Signature / Descriptor Set Layout을 공유하며, 셰이더에는 BindlessIndex만 넘깁니다.</li>
            <li><strong>Render Graph:</strong> 각 Pass가 읽고 쓰는 리소스를 등록하면 컴파일러가 barrier, transition, transient resource aliasing을 자동으로 삽입합니다.</li>
            <li><strong>GPU-Driven 렌더링:</strong> Compute culling 결과를 indirect arguments buffer에 기록한 뒤, ExecuteIndirect(DX12) / DrawIndexedIndirectCount(Vulkan)로 GPU가 직접 draw call을 수행합니다.</li>
            <li><strong>Deferred PBR:</strong> GBuffer -> Shadow -> SSAO -> Deferred Lighting(IBL 포함) -> Bokeh DOF -> Tone Mapping -> Color Grading까지 이어지는 렌더링 파이프라인을 구현했습니다.</li>
            <li><strong>셰이더 파이프라인:</strong> Slang으로 하나의 셰이더 소스에서 DXIL과 SPIR-V를 오프라인 생성하고, CMake depfile을 사용해 변경된 셰이더만 다시 빌드되도록 했습니다.</li>
        </ul>
        <h4><strong>성능 측정</strong></h4>
        <ul>
            <li>Bistro의 mesh/instance 22,396개를 material + transform 기준으로 128개 merged draw unit으로 압축했습니다.</li>
            <li>Bistro 로딩 시간은 캐시/배치 OFF 기준 DX12 31,185 ms / Vulkan 31,013 ms에서, Texture Cache + Batch Upload + 1024px texture cap 적용 후 DX12 1,162 ms / Vulkan 997 ms로 단축했습니다.</li>
            <li>Runtime 측정은 Release 빌드, RTX 3060, 1920x1080 client area, Validation/GPU crash diagnostics/VSync OFF, warm-up 120 frames 이후 600 frames 측정, 3회 반복 median 기준입니다.</li>
            <li>최종 Optimized Path는 DX12 266.4 FPS(CPU Avg 3.754 ms / GPU Avg 3.714 ms), Vulkan 295.1 FPS(CPU Avg 3.389 ms / GPU Avg 3.356 ms)를 기록했습니다.</li>
            <li>Baseline 대비 DX12는 FPS +52.8%, Vulkan은 FPS +54.4% 개선되었습니다.</li>
        </ul>
        <div class="popup-actions">
            <a href="https://github.com/WestMinsu/WestEngine" target="_blank" class="primary-btn">Github로 이동</a>
            <a href="https://docs.google.com/presentation/d/1tfTBp06uEOTYr-qzJ8vhQBhm_r3lKSVhpbtk1gBXgyM/edit?usp=sharing" target="_blank" class="primary-btn">보충 자료 보기</a>
        </div>
    `,
            p_ap_title: "Arsenal",
            p_ap_tag1: "Unreal Engine",
            p_ap_tag2: "C++",
            p_ap_desc: "언리얼 엔진 5를 사용하여 개발한 메카 소녀 FPS 게임입니다. 게임 시작 전 캐릭터의 Layout을 상세하게 설정하고, 캐릭터 사망 시 해당 Layout의 총 가치가 상대방의 점수가 되는 독특한 시스템을 가지고 있습니다.",
            p_ap_period: "개발 기간: 2025-08-25 ~ 2025-12-22",
            p_ap_detail_desc: `
        <p>메카 소녀 FPS 게임입니다. 게임 시작 전 무기, 방어구, 장비 등으로 캐릭터의 Layout을 상세하게 설정하고, 캐릭터 사망 시 해당 Layout의 총 가치(가격)가 소모되며 이 가치가 상대방의 점수가 되는 독특한 시스템을 가지고 있습니다. 2인 팀의 팀원으로 참가하여 언리얼의 Dedicated Server와 Replication system에 대해 이해하며 데이터 저장 시스템 구현, 인게임 UI 구현, 포스트 프로세싱 효과 구현, Chaos Destruction을 활용한 부서지는 물체 구현 등을 담당했습니다.</p>
        <h4><strong>주요 구현 내용</strong></h4>
        <ul>
            <li><strong>Grunt(AI 플레이어) 제작</strong><br> BlackBoard와 Behavior Tree를 활용하여 Grunt(AI 플레이어)를 구현했습니다. 랜덤한 위치를 돌아다니다가 적을 감지하면 총을 일정한 속도로 발사하도록 했습니다. AI에게 죽을 경우 KillCam()이 작동하지 않는 문제가 있었습니다. AIController는 서버에만 존재하고 클라이언트에 Replication되지 않기 때문임을 이해하고, Killer의 PlayerState가 없으면 AI로 처리하여 문제를 해결했습니다.</li><br>
            <li><strong>Chaos Destruction 활용</strong><br> 언리얼 엔진의 Chaos Destruction 시스템을 활용하여 총알에 맞았을 때 파괴되는 벽을 구현했습니다.</li><br>
            <li><strong>EOS 플레이어 데이터 저장 시스템</strong><br> Epic Online Services(EOS)의 Player Data Storage를 활용하여 플레이어 계정 정보 저장 및 로드 기능을 구현했습니다. 계정 생성 시, 총기 편집 시, 캐릭터 레이아웃 편집 시 등 주요 시점에서 데이터가 저장되어 플레이어의 진행 상황과 커스터마이징 정보를 유지하도록 했습니다.</li><br>
            <li><strong>인게임 UI 개발</strong><br>
                <ul>
                    <li>KillCam UI - 죽은 플레이어에게 잠시 동안 자신을 죽인 사람의 닉네임과 현재 상태를 보여주도록 했습니다.</li>
                    <li>스코어보드(리더보드) UI - Tab 키를 누르면 현재 게임 내 모든 플레이어의 점수를 표시하는 UI를 구현했습니다.</li>
                    <li>킬로그 UI - 플레이어 킬/데스 발생 시 화면에 킬로그 정보를 표시하는 UI 시스템을 구현했습니다.</li>
                    <li>라운드 요약 UI - 게임(라운드) 종료 후 다음 라운드 시작 전 또는 로비로 돌아가기 전에 해당 라운드의 개인 성과(획득 점수, 기여 점수 등)를 보여주는 UI를 구현했습니다.</li>
                    <li>히트마커 UI - 플레이어의 공격이 적중했을 때 화면 중앙에 시각적인 피드백(히트마커)을 표시하는 기능을 구현했습니다. 일반 히트, 킬 결정 히트(붉은색), 방어구 관통 실패 히트(작은 크기) 등 상황에 따라 다른 효과를 표시하도록 했습니다.</li>
                </ul><br>
            </li>
            <li><strong>포스트 프로세싱 효과</strong><br> 플레이어 캐릭터의 체력 상태에 따라 화면 전체에 붉은색 외곽선 효과가 강해지는 포스트 프로세싱 머티리얼을 구현하고 카메라에 적용하여 시각적인 피드백을 강화했습니다.</li><br>
        </ul>
        <div class="popup-actions">
            <a href="https://docs.google.com/presentation/d/1yZsZeYJFwOTjlPvKiAltvWKLt1vtqmbnY4EUfR6feYA/edit?usp=sharing" target="_blank" class="primary-btn">보충 자료 보기</a>
        </div>
    `,

            p_ae_desc: "적의 속성에 맞춰 무기를 교체하며 싸우는 C++ 기반의 2D 횡스크롤 런앤건 게임입니다.",
            p_ae_detail_desc: `
        <p>적의 속성에 따라 무기를 변경하며 스테이지를 돌파하는 2D 횡스크롤 런앤건 게임입니다. 2인 팀의 팀장을 맡아 C++을 기반으로 대부분의 게임 시스템을 직접 구현하며 프로그래밍의 기초를 다졌습니다.</p>
        <h4><strong>주요 구현 내용</strong></h4>
        <ul>
            <li><strong>AABB 충돌 로직</strong><br> 외부 라이브러리 없이 플레이어, 적, 투사체 간의 충돌을 처리하기 위해 AABB(Axis-Aligned Bounding Box) 충돌 감지 시스템을 직접 구현했습니다. Circle-Circle Collision, OBB(Oriented Bounding Box), Per-Pixel Collision등의 충돌 감지 방법도 있지만 지형에 경사면이나 물체의 회전 등이 없기에 연산이 간단한 AABB를 택했습니다.</li><br>
            <li><strong>보스전 설계</strong><br> 다양한 공격 패턴과 기믹을 가진 보스를 구현하여 도전적인 플레이 경험을 제공합니다.</li><br>
            <li><strong>속성 기반 전투 시스템</strong><br> 불, 물, 전기 3가지 속성 중 특정 속성 공격에만 피해를 입는 적들을 구현하여 전략적인 무기 선택의 중요성을 강조했습니다.</li><br>
            <li><strong>핵심 시스템 개발</strong><br> 플레이어의 정교한 이동 및 점프를 구현하며 중력 가속도 등 간단한 물리 지식을 사용했습니다. 또한 공격 로직, UI, 점수 저장 및 불러오기 등 게임의 핵심 기능들을 구현했습니다.</li><br>
        </ul>
        <br>
        <a href="https://github.com/WestMinsu/AlphaEngineProject" target="_blank" class="primary-btn">Github로 이동</a>
    `,
            p_ae_title: "Arcane Edge",
            p_ae_tag1: "C++ Project",
            p_ae_period: "개발 기간: 2025-06-09 ~ 2025-07-18"
        },
        en: {
            nav_home: "Home",
            nav_portfolio: "Portfolio",
            nav_pages: "Pages",
            nav_dropdown_portfolio: "Portfolio",
            nav_contact: "Contact",
            hero_role: "Rendering Programmer",
            hero_name: "Minsu Seo",
            passion_title: "Beyond the game",
            passion_text: "I see games as a medium that can deliver emotion and engagement beyond simple entertainment. That is why I am especially interested in game graphics rendering, and I have been building my skills by implementing real-time rendering pipelines and GPU-oriented optimization in WestEngine. I want to use advanced rendering techniques to create believable environments, expressive characters, and visually compelling game experiences.",
            portfolio_page_title: "Featured Projects",
            focus_rhi_title: "Unified RHI",
            focus_rhi_text: "DX12 and Vulkan differences stay behind one renderer-facing interface.",
            focus_bindless_title: "Bindless",
            focus_bindless_text: "Resources are accessed by index through one global descriptor model.",
            focus_graph_title: "Render Graph",
            focus_graph_text: "Pass intent resolves barriers, transitions, and aliasing.",
            focus_gpu_title: "GPU-Driven",
            focus_gpu_text: "Compute culling feeds indirect draw submission.",
            p_we_title: "WestEngine",
            p_we_desc: "A DirectX 12/Vulkan dual-backend rendering engine with a bindless RHI, render graph, GPU-driven rendering, and deferred PBR pipeline.",
            p_we_tag1: "DirectX 12",
            p_we_tag2: "Vulkan",
            p_we_tag3: "C++ / Slang",
            p_we_period: "Development period: 2026-02-28 ~ 2026-04-27",
            p_we_detail_desc: `
        <p>WestEngine is a real-time rendering engine that abstracts DirectX 12 and Vulkan behind a single RHI. It runs the Amazon Lumberyard Bistro scene, about 2.84M triangles, through the same high-level rendering path while keeping backend-specific API details out of the renderer.</p>
        <h4><strong>Core Implementation</strong></h4>
        <ul>
            <li><strong>RHI abstraction:</strong> 15 interfaces such as IRHIDevice, IRHICommandList, and IRHIFence prevent DX12/Vulkan types from leaking into upper rendering code.</li>
            <li><strong>Bindless model:</strong> The engine uses one global root signature / descriptor set layout and passes BindlessIndex values to shaders.</li>
            <li><strong>Render graph:</strong> Pass/resource intent is compiled into barriers, transitions, and transient resource aliasing.</li>
            <li><strong>GPU-driven rendering:</strong> Compute culling writes indirect arguments consumed by DX12 ExecuteIndirect and Vulkan DrawIndexedIndirectCount.</li>
            <li><strong>Deferred PBR:</strong> The pipeline includes GBuffer, shadows, SSAO, deferred lighting, IBL, Bokeh DOF, tone mapping, and color grading.</li>
            <li><strong>Shader pipeline:</strong> Slang generates DXIL and SPIR-V from shared shader sources with CMake depfile-based incremental builds.</li>
        </ul>
        <h4><strong>Measured Results</strong></h4>
        <ul>
            <li>22,396 Bistro mesh/instance units are merged into 128 material + transform draw units.</li>
            <li>Bistro load time was reduced from 31,185 ms on DX12 and 31,013 ms on Vulkan with cache/batch disabled to 1,162 ms on DX12 and 997 ms on Vulkan after texture cache, batch upload, and a 1024px material texture cap.</li>
            <li>Runtime was measured in Release on an RTX 3060 at a 1920x1080 client area with validation, GPU crash diagnostics, and VSync disabled, using the median of three 600-frame runs after 120 warm-up frames.</li>
            <li>The final optimized path reached 266.4 FPS on DX12 (CPU Avg 3.754 ms / GPU Avg 3.714 ms) and 295.1 FPS on Vulkan (CPU Avg 3.389 ms / GPU Avg 3.356 ms).</li>
            <li>Compared with baseline, FPS improved by 52.8% on DX12 and 54.4% on Vulkan.</li>
        </ul>
        <div class="popup-actions">
            <a href="https://github.com/WestMinsu/WestEngine" target="_blank" class="primary-btn">Go to Github</a>
            <a href="https://docs.google.com/presentation/d/1tfTBp06uEOTYr-qzJ8vhQBhm_r3lKSVhpbtk1gBXgyM/edit?usp=sharing" target="_blank" class="primary-btn">View Supplement</a>
        </div>
    `,
            p_ap_title: "Arsenal",
            p_ap_tag1: "Unreal Engine",
            p_ap_tag2: "C++",
            p_ap_desc: "A mech-girl FPS built with Unreal Engine 5. I worked on gameplay support systems including AI, player data storage, UI, destruction, and post-processing feedback.",
            p_ap_period: "Development period: 2025-08-25 ~ 2025-12-22",
            p_ap_detail_desc: `
        <p>Arsenal is a mech-girl FPS built with Unreal Engine 5. As one of two programmers, I worked with dedicated server and replication concepts while implementing player data storage, in-game UI, post-processing feedback, AI behavior, and destructible objects.</p>
        <h4><strong>Key Implementation Details</strong></h4>
        <ul>
            <li><strong>AI player:</strong> Implemented a Grunt AI using Blackboard and Behavior Tree, including server-only AIController edge cases for kill-cam handling.</li>
            <li><strong>EOS player data:</strong> Used Epic Online Services Player Data Storage to persist account, weapon editing, and layout customization data.</li>
            <li><strong>In-game UI:</strong> Built kill-cam, scoreboard, kill log, round summary, and hit marker UI systems.</li>
            <li><strong>Visual feedback:</strong> Added health-based post-processing and Chaos Destruction objects that break when shot.</li>
        </ul>
        <div class="popup-actions">
            <a href="https://docs.google.com/presentation/d/1yZsZeYJFwOTjlPvKiAltvWKLt1vtqmbnY4EUfR6feYA/edit?usp=sharing" target="_blank" class="primary-btn">View Supplement</a>
        </div>
    `,
            p_ae_title: "Arcane Edge",
            p_ae_tag1: "C++ Project",
            p_ae_desc: "A C++ based 2D side-scrolling run-and-gun game where you switch weapons based on enemy attributes.",
            p_ae_period: "Development period: 2025-06-09 ~ 2025-07-18",
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
        <a href="https://github.com/WestMinsu/AlphaEngineProject" target="_blank" class="primary-btn">Go to Github</a>
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

    $('.portfolio-popup-card')
        .css('cursor', 'pointer')
        .on('click', function (e) {
            if ($(e.target).closest('a, button, iframe, .portfolio__item__video').length) {
                return;
            }

            $.magnificPopup.open({
                items: {
                    src: $(this).data('popup-target')
                },
                type: 'inline',
                midClick: true
            });
        })
        .on('keydown', function (e) {
            if (e.target !== this || (e.key !== 'Enter' && e.key !== ' ')) {
                return;
            }

            e.preventDefault();
            $.magnificPopup.open({
                items: {
                    src: $(this).data('popup-target')
                },
                type: 'inline',
                midClick: true
            });
        });

    $('a.popup-with-content').on('click', function (e) {
        e.stopPropagation();
    });
})(jQuery);
