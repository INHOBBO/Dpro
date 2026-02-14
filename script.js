// 문서가 완전히 로드되면 실행
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 감시할 요소들을 모두 선택 (.scroll-reveal 클래스를 가진 모든 태그)
    const observerElements = document.querySelectorAll('.scroll-reveal');

    // 2. IntersectionObserver 생성 (요소가 화면에 보이면 실행될 함수 정의)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 요소가 화면에 나타났다면 (isIntersecting이 true면)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // visible 클래스 추가 (CSS에서 애니메이션 동작)
            }
        });
    }, {
        threshold: 0.1 // 요소가 10% 정도 보일 때 실행
    });

    // 3. 각 요소에게 감시 시작하라고 명령
    observerElements.forEach(el => {
        observer.observe(el);
    });
});