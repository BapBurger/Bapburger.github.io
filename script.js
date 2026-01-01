// 탭 전환 함수 (전역 범위)
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 1. 모든 탭 내용 숨기기
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. 모든 탭 버튼의 active 클래스 제거
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. 클릭된 탭 내용 보이기 및 버튼 active 추가
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
    
    // --- [데이터 로딩 부분] ---
    
    // 1. 논문 데이터
    const publications = [
        {
            title: "Beyond the Lens: Understanding User Experience on Everyday Digital Activities in a Pass-through Environment",
            conference: "CHI 2026: ACM Conference on Human Factors in Computing Systems",
            status: "Under Review (1st Round Passed / R&R Stage)"
        },
        {
            title: "Effects of Different Lying-Down Postures on 3D Manipulation Performance in Mixed Reality",
            conference: "KSC 2025: Korea Software Congress (Junior Paper Track)",
            status: "Accepted for Publication"
        }
    ];

    const publicationListDiv = document.getElementById('publication-list');
    
    // 안전장치: 해당 ID가 존재할 때만 실행
    if (publicationListDiv) {
        publications.forEach(pub => {
            const pubCard = document.createElement('div');
            pubCard.classList.add('publication-card');

            let statusClass = 'status';
            if (pub.status.includes('Accepted')) {
                statusClass += ' accepted';
            }

            pubCard.innerHTML = `
                <h3>${pub.title}</h3>
                <p>${pub.conference}</p>
                <span class="${statusClass}">${pub.status}</span>
            `;
            publicationListDiv.appendChild(pubCard);
        });
    }

    // 2. 프로젝트 데이터
    const projects = [
        {
            title: "아이트래킹 기반 피로도 감지 프로토타입 (MR Fatigue Sensing Prototype)",
            subtitle: "",
            tech: "Unity (C#), VIVE FOCUS VISION",
            details: [
                "Unity 환경에서 아이트래킹 데이터를 수신하여, 사용자의 눈 깜빡임 빈도와 시간을 감지하는 코드 작성."
            ]
        },
        {
            title: "실시간 쓰레기 감지 및 분석 (RECO Project)",
            subtitle: "Raspberry Pi 기반 실시간 객체 및 모션 탐지 시스템",
            tech: "Python, OpenCV, Raspberry Pi 3",
            details: [
                "배경 차분 및 시간적 차분 기법을 적용하여 객체(쓰레기)의 '정적 존재'와 '동적 움직임'을 동시에 감지.",
                "동적 윤곽선 분석(Dynamic Contour Analysis) 면적 필터링을 통해 노이즈 제거.",
                "Raspberry Pi 3 엣지 컴퓨팅 IoT 센서 구현."
            ]
        }
    ];

    const projectListDiv = document.getElementById('project-list');

    if (projectListDiv) {
        projects.forEach(proj => {
            const projCard = document.createElement('div');
            projCard.classList.add('project-card');

            const subtitleHTML = proj.subtitle ? `<p class="subtitle">${proj.subtitle}</p>` : '';
            const detailsHTML = proj.details.map(detail => `<li>${detail}</li>`).join('');

            projCard.innerHTML = `
                <h3>${proj.title}</h3>
                ${subtitleHTML}
                <span class="tech-stack"><b>Stack:</b> ${proj.tech}</span>
                <ul>
                    ${detailsHTML}
                </ul>
            `;
            projectListDiv.appendChild(projCard);
        });
    }

    // 3. 프로필 사진 클릭 이벤트 (선택사항)
    const profilePhoto = document.querySelector('.profile-photo');
    if(profilePhoto) {
        profilePhoto.addEventListener('click', () => {
            // alert('안녕하세요!'); // 필요 없으면 주석 처리
        });
    }
});