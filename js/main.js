'use strict';

(function ($) {
    const translations = {
        ko: {
            nav_home: "홈",
            nav_portfolio: "포트폴리오",
            hero_role: "게임 프로그래머",
            hero_name: "서민수",
            passion_title: "Beyond the game",
            passion_text: "게임은 단순한 시간 때우기용 매체가 아닙니다. 플레이어의 선택과 상호작용을 통해 영화나 드라마 이상의 감동과 즐거움을 선사할 수 있는 매력적인 매체입니다.<br><br>C++과 Unreal Engine을 활용해 여러 게임 프로젝트를 진행했고, DirectX 12 · Vulkan 기반 렌더링 엔진과 DXR Path Tracer도 직접 구현하며 엔진 구조에 대한 이해도 넓혔습니다. 게임의 기능을 구현하는 데 그치지 않고, 그 기능이 어떤 구조에서 동작하는지 이해하고 성능까지 개선할 수 있는 게임 프로그래머가 되고자 합니다. 궁극적으로는 이러한 기술적 이해를 바탕으로 플레이어가 오랫동안 지내고 싶은 게임 속 세상을 만들고 싶습니다.",
            portfolio_page_title: "주요 프로젝트",
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
            <a href="https://github.com/WestMinsu/WestEngine" target="_blank" rel="noopener noreferrer" class="primary-btn">Github로 이동</a>
            <a href="https://docs.google.com/presentation/d/1tfTBp06uEOTYr-qzJ8vhQBhm_r3lKSVhpbtk1gBXgyM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="primary-btn">보충 자료 보기</a>
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
            <a href="https://docs.google.com/presentation/d/1yZsZeYJFwOTjlPvKiAltvWKLt1vtqmbnY4EUfR6feYA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="primary-btn">보충 자료 보기</a>
        </div>
    `,
            p_ae_title: "Arcane Edge",
            p_ae_tag1: "C++ Project",
            p_ae_desc: "적의 속성에 맞춰 무기를 교체하며 싸우는 C++ 기반의 2D 횡스크롤 런앤건 게임입니다.",
            p_ae_period: "개발 기간: 2025-06-09 ~ 2025-07-18",
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
        <a href="https://github.com/WestMinsu/AlphaEngineProject" target="_blank" rel="noopener noreferrer" class="primary-btn">Github로 이동</a>
    `,
            p_dxr_title: "DXR Path Tracer",
            p_dxr_desc: "DirectX 12와 DirectX Raytracing(DXR)을 이용해 구현한 실시간 Path Tracer 프로젝트입니다.",
            p_dxr_tag1: "C++",
            p_dxr_tag2: "DirectX 12 / DXR",
            p_dxr_tag3: "HLSL",
            p_dxr_period: "개발 기간: 2026-07-02 ~ 2026-08-20",
            p_dxr_detail_desc: `
        <p>DirectX 12와 DirectX Raytracing(DXR)을 이용해 구현한 실시간 Path Tracer 프로젝트입니다.</p>
        <p>기본적인 Path Tracing부터 광원 샘플링, Temporal Reconstruction, Denoising, 동적 장면 및 애니메이션 지원, GPU 성능 최적화까지 실시간 Path Tracing에 필요한 주요 기능들을 구현했습니다.</p>
        <h4><strong>주요 기능</strong></h4>
        <ul>
            <li><strong>Path Tracing:</strong> PBR 기반 Path Tracing, Multi-Bounce, Next Event Estimation(NEE), Multiple Importance Sampling(MIS), GGX 기반 BRDF Sampling을 구현했습니다.</li>
            <li><strong>Temporal Reconstruction & Denoising:</strong> Temporal Reprojection, History Accumulation, History Validation 및 Rejection, Disocclusion 처리, À-Trous Edge-Aware Filtering을 구현했습니다.</li>
            <li><strong>Dynamic Scene:</strong> glTF Scene Loading, Node Hierarchy 및 Animation 재생, Skeletal Animation 및 GPU Skinning, 동적 BLAS/TLAS 갱신을 지원합니다.</li>
            <li><strong>Performance:</strong> GPU Timestamp 기반 Profiling, Render Pass별 GPU 실행 시간 측정, Ray Count Profiling을 구현하고 Sampling 및 Shader 연산을 최적화했습니다.</li>
        </ul>
        <h4><strong>프로젝트 목표</strong></h4>
        <p>이 프로젝트는 제한된 Ray Budget에서 실시간으로 높은 품질의 결과를 얻기 위해 발생하는 문제를 직접 다루는 것을 목표로 진행했습니다.</p>
        <p>낮은 SPP에서 발생하는 Noise를 줄이기 위해 Temporal 및 Spatial 정보를 재사용하고, 동적 장면에서는 Motion, Disocclusion, 잘못된 History 재사용으로 발생하는 문제를 개선하는 데 중점을 두었습니다.</p>
        <p>또한 GPU Profiling을 기반으로 병목을 분석하고 Sampling 및 Shader 연산을 최적화하여 품질과 성능의 균형을 개선했습니다.</p>
        <div class="popup-actions">
            <a href="https://github.com/WestMinsu/DXRPathTracer" target="_blank" rel="noopener noreferrer" class="primary-btn">Github로 이동</a>
            <a href="https://docs.google.com/presentation/d/1keFYBMjvVncv6uWTItFLHaQFvMc9q5Wt/edit?usp=sharing&amp;ouid=109210938873417662565&amp;rtpof=true&amp;sd=true" target="_blank" rel="noopener noreferrer" class="primary-btn">보충 자료 보기</a>
        </div>
    `
        },
        en: {
            nav_home: "Home",
            nav_portfolio: "Portfolio",
            hero_role: "Game Programmer",
            hero_name: "Minsu Seo",
            passion_title: "Beyond the game",
            passion_text: "Games are not simply a way to pass the time. Through player choice and interaction, they can deliver moving and enjoyable experiences beyond what films or television dramas can offer.<br><br>I have worked on several game projects using C++ and Unreal Engine, and broadened my understanding of engine architecture by building a DirectX 12/Vulkan rendering engine and a DXR Path Tracer. I want to become a game programmer who not only implements features, but also understands the structures they run on and can improve their performance. Ultimately, I want to use this technical understanding to create game worlds that players want to spend a long time in.",
            portfolio_page_title: "Featured Projects",
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
            <a href="https://github.com/WestMinsu/WestEngine" target="_blank" rel="noopener noreferrer" class="primary-btn">Go to Github</a>
            <a href="https://docs.google.com/presentation/d/1tfTBp06uEOTYr-qzJ8vhQBhm_r3lKSVhpbtk1gBXgyM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="primary-btn">View Supplement</a>
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
            <a href="https://docs.google.com/presentation/d/1yZsZeYJFwOTjlPvKiAltvWKLt1vtqmbnY4EUfR6feYA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="primary-btn">View Supplement</a>
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
        <a href="https://github.com/WestMinsu/AlphaEngineProject" target="_blank" rel="noopener noreferrer" class="primary-btn">Go to Github</a>
    `,
            p_dxr_title: "DXR Path Tracer",
            p_dxr_desc: "A real-time path tracer implemented with DirectX 12 and DirectX Raytracing (DXR).",
            p_dxr_tag1: "C++",
            p_dxr_tag2: "DirectX 12 / DXR",
            p_dxr_tag3: "HLSL",
            p_dxr_period: "Development period: 2026-07-02 ~ 2026-08-20",
            p_dxr_detail_desc: `
        <p>A real-time Path Tracer implemented with DirectX 12 and DirectX Raytracing (DXR).</p>
        <p>The project implements the main features required for real-time path tracing, including light sampling, temporal reconstruction, denoising, dynamic scenes and animation, and GPU performance optimization.</p>
        <h4><strong>Main Features</strong></h4>
        <ul>
            <li><strong>Path Tracing:</strong> PBR path tracing, multi-bounce, Next Event Estimation (NEE), Multiple Importance Sampling (MIS), and GGX BRDF sampling.</li>
            <li><strong>Temporal Reconstruction & Denoising:</strong> Temporal reprojection, history accumulation and rejection, disocclusion handling, and À-Trous edge-aware filtering.</li>
            <li><strong>Dynamic Scene:</strong> glTF scene loading, node hierarchy and animation playback, skeletal animation, GPU skinning, and dynamic BLAS/TLAS updates.</li>
            <li><strong>Performance:</strong> GPU timestamp profiling, per-pass GPU time measurement, ray count profiling, and sampling and shader optimization.</li>
        </ul>
        <h4><strong>Project Goal</strong></h4>
        <p>The goal of this project was to address the problems that arise when producing high-quality real-time results with a limited ray budget.</p>
        <p>Temporal and spatial information is reused to reduce noise at low SPP, while motion, disocclusion, and invalid history reuse are handled for dynamic scenes.</p>
        <p>GPU profiling was used to analyze bottlenecks and improve the balance between quality and performance.</p>
        <div class="popup-actions">
            <a href="https://github.com/WestMinsu/DXRPathTracer" target="_blank" rel="noopener noreferrer" class="primary-btn">Go to Github</a>
            <a href="https://docs.google.com/presentation/d/1keFYBMjvVncv6uWTItFLHaQFvMc9q5Wt/edit?usp=sharing&amp;ouid=109210938873417662565&amp;rtpof=true&amp;sd=true" target="_blank" rel="noopener noreferrer" class="primary-btn">View Supplement</a>
        </div>
    `
        }
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach((element) => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        $('#lang-menu-ko').toggleClass('active', lang === 'ko');
        $('#lang-menu-en').toggleClass('active', lang === 'en');
    };

    $(window).on('load', function () {
        $('.loader').fadeOut();
        $('#preloder').delay(200).fadeOut('slow');
        setLanguage('ko');
    });

    $('.set-bg').each(function () {
        const background = $(this).data('setbg');
        $(this).css('background-image', 'url(' + background + ')');
    });

    $('.mobile-menu').slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    $('.hero__slider').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        dots: false,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        autoHeight: false,
        autoplay: false
    });

    $('.popup-with-content').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('#lang-menu-ko').on('click', function (event) {
        event.preventDefault();
        setLanguage('ko');
    });

    $('#lang-menu-en').on('click', function (event) {
        event.preventDefault();
        setLanguage('en');
    });

    $('.nav-item a[href^="#"], .scroll-btn[href^="#"]').on('click', function (event) {
        const target = $(this.hash);
        if (!target.length) {
            return;
        }

        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
    });

    $(window).on('scroll', function () {
        const scrollDistance = $(window).scrollTop();
        $('main section[id]').each(function () {
            if ($(this).position().top <= scrollDistance + 120) {
                const sectionId = $(this).attr('id');
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
        .on('click', function (event) {
            if ($(event.target).closest('a, button, iframe, .portfolio__item__video').length) {
                return;
            }

            $.magnificPopup.open({
                items: { src: $(this).data('popup-target') },
                type: 'inline',
                midClick: true
            });
        })
        .on('keydown', function (event) {
            if (event.target !== this || (event.key !== 'Enter' && event.key !== ' ')) {
                return;
            }

            event.preventDefault();
            $.magnificPopup.open({
                items: { src: $(this).data('popup-target') },
                type: 'inline',
                midClick: true
            });
        });

    $('a.popup-with-content').on('click', function (event) {
        event.stopPropagation();
    });
})(jQuery);
