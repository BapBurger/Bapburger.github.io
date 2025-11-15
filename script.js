document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 논문 및 포스터 데이터
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

    // 2. 논문 카드 생성
    publications.forEach(pub => {
        const pubCard = document.createElement('div');
        pubCard.classList.add('publication-card');

        let statusClass = 'status';
        if (pub.status.includes('Accepted')) {
            statusClass += ' accepted'; // 'Accepted' 상태에 'accepted' 클래스 추가
        }

        pubCard.innerHTML = `
            <h3>${pub.title}</h3>
            <p>${pub.conference}</p>
            <span class="${statusClass}">${pub.status}</span>
        `;
        publicationListDiv.appendChild(pubCard);
    });

    // 3. [신규] 주요 프로젝트 데이터
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
                "Python/OpenCV를 활용하여 실시간 영상 스트림을 분석하는 컴퓨터 비전 파이프라인 개발.",
                "배경 차분 및 시간적 차분 기법을 적용하여 객체(쓰레기)의 '정적 존재'와 '동적 움직임'을 동시에 감지하는 하이브리드 로직 구현.",
                "동적 윤곽선 분석(Dynamic Contour Analysis) 면적(Area) 필터링을 통해 노이즈를 제거하고 객체 변화의 정확도를 높임.",
                "<b>성과:</b> 개발된 CV 알고리즘을 Raspberry Pi 3에 성공적으로 배포하여, 저전력 환경에서 실시간으로 작동하는 엣지 컴퓨팅 IoT 센서의 초기 모델 구현 완료."
            ]
        }
    ];

    const projectListDiv = document.getElementById('project-list');

    // 4. [신규] 프로젝트 카드 생성
    projects.forEach(proj => {
        const projCard = document.createElement('div');
        projCard.classList.add('project-card');

        // 부제가 있으면 추가
        const subtitleHTML = proj.subtitle ? `<p class="subtitle">${proj.subtitle}</p>` : '';

        // 상세 내용(bullet points) HTML 생성
        const detailsHTML = proj.details.map(detail => `<li>${detail}</li>`).join('');

        projCard.innerHTML = `
            <h3>${proj.title}</h3>
            ${subtitleHTML}
            <p class="tech-stack"><b>기술:</b> ${proj.tech}</p>
            <ul>
                ${detailsHTML}
            </ul>
        `;
        projectListDiv.appendChild(projCard);
    });

    // 5. 간단한 인터랙션 (프로필 사진 클릭)
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.addEventListener('click', () => {
        alert('안녕하세요! 고혁주입니다. 제 CV 웹사이트를 방문해주셔서 감사합니다.');
    });

});