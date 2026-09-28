// ===== KAIBGF 공통 헤더/푸터 주입 (틀 v2) =====
// 각 페이지는 <body data-page="home|about|business|contact"> 로 현재 탭을 표시.
// 포럼 소개 / CONTACT 는 hover 시 세로 드롭다운(서브메뉴)을 노출.
(function () {
  var page = document.body.getAttribute("data-page") || "";

  var NAV = [
    { label: "홈", href: "index.html", key: "home" },
    {
      label: "포럼 소개", href: "about.html", key: "about",
      sub: [
        { label: "KAIBGF 소개", href: "about.html" },
        { label: "포럼 정관", href: "articles.html" },
        { label: "함께하는 사람들", href: "people.html" }
      ]
    },
    { label: "주요 사업", href: "business.html", key: "business" },
    {
      label: "CONTACT", href: "contact.html", key: "contact",
      sub: [
        { label: "가입 안내", href: "join.html" },
        { label: "오시는 길", href: "contact.html" }
      ]
    }
  ];

  // ----- 네비 마크업 -----
  var navHTML = '<nav class="gnb" id="gnb"><ul>';
  NAV.forEach(function (item) {
    var active = item.key === page ? " active" : "";
    var hasSub = item.sub && item.sub.length;
    navHTML += '<li class="gnb-item' + (hasSub ? " has-sub" : "") + active + '">';
    navHTML += '<a class="gnb-link" href="' + item.href + '">' + item.label + "</a>";
    if (hasSub) {
      navHTML += '<ul class="submenu">';
      item.sub.forEach(function (s) {
        navHTML += '<li><a href="' + s.href + '">' + s.label + "</a></li>";
      });
      navHTML += "</ul>";
    }
    navHTML += "</li>";
  });
  navHTML += "</ul></nav>";

  // ----- 헤더 -----
  var headerHTML =
    '<header class="site-header" id="siteHeader">' +
    '  <div class="header-inner">' +
    '    <a class="brand" href="index.html" aria-label="KAIBGF 홈">' +
    '      <span class="brand-logo-ph" title="로고 추후 수정 예정">CI</span>' +
    '      <span class="brand-text"><strong>KAIBGF</strong><em>한국AIB성장포럼</em></span>' +
    "    </a>" +
    navHTML +
    '    <button type="button" class="btn-menu" id="btnMenu" aria-label="메뉴 열기" aria-expanded="false">' +
    "      <span></span><span></span><span></span>" +
    "    </button>" +
    "  </div>" +
    "</header>";

  // ----- 푸터 -----
  var footerHTML =
    '<footer class="site-footer">' +
    '  <div class="container">' +
    '    <span class="foot-brand">KAIBGF · 한국AIB성장포럼</span>' +
    '    <span class="foot-copy">&copy; 2026 KAIBGF. All Rights Reserved.</span>' +
    "  </div>" +
    "</footer>";

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // ----- 스크롤 시 헤더 배경 전환(투명 → 짙은 색) -----
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ----- 모바일 메뉴 토글 -----
  var btn = document.getElementById("btnMenu");
  var gnb = document.getElementById("gnb");
  if (btn && gnb) {
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
  }

  // ----- 히어로 배경 슬라이드 (index) : 5초마다 전환 -----
  var slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    var curEl = document.querySelector(".hero-counter .cur");
    var barEl = document.querySelector(".hero-counter .bar i");
    var total = slides.length;
    var idx = 0;
    if (barEl) barEl.style.width = (100 / total) + "%";
    setInterval(function () {
      slides[idx].classList.remove("on");
      idx = (idx + 1) % total;
      slides[idx].classList.add("on");
      if (curEl) curEl.textContent = idx + 1;
      if (barEl) barEl.style.width = ((idx + 1) / total * 100) + "%";
    }, 5000);
  }
})();
