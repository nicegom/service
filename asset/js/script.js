// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 타임라인 생성: 여러 애니메이션을 순차적으로 관리
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pinned-section", // 애니메이션의 기준이 될 요소
    start: "top top", // trigger 상단이 viewport 상단에 닿을 때 시작
    end: "+=2000", // 시작 지점부터 2000px 스크롤될 때까지
    scrub: 1, // 스크롤과 애니메이션을 부드럽게 동기화 (true 또는 숫자)
    pin: true, // 이 옵션이 섹션을 고정시킴
  },
});

// 타임라인에 애니메이션 추가
// pinned-section이 고정된 상태에서 아래 애니메이션들이 스크롤에 따라 실행됨

// 1. 첫 번째 내용이 나타나고 사라짐
tl.to(".content-item:nth-child(1)", { opacity: 1, y: -50, duration: 1 });
tl.to(
  ".content-item:nth-child(1)",
  { opacity: 0, y: -100, duration: 1 },
  "+=1"
); // 1초 뒤에 실행

// 2. 두 번째 내용이 나타나고 사라짐
tl.to(".content-item:nth-child(2)", { opacity: 1, y: -50, duration: 1 });
tl.to(
  ".content-item:nth-child(2)",
  { opacity: 0, y: -100, duration: 1 },
  "+=1"
);

// 3. 세 번째 내용이 나타남
tl.to(".content-item:nth-child(3)", { opacity: 1, y: -50, duration: 1 });
