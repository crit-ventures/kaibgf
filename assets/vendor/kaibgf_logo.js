/* ===== KAIBGF 공용 로고 마크 정의 =====
   이 파일 하나만 수정하면 모든 페이지(헤더·푸터·CI 소개)의 로고가 한 번에 바뀝니다.
   각 페이지는 <use href="#markInner"/> 로 이 마크를 불러 씁니다. */
document.currentScript.insertAdjacentHTML('afterend', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <g id="markInner">
    <!-- 6 블록 (브랜드 블루) -->
    <rect x="0" y="14" width="58" height="54" rx="3" fill="#1a54e0"/><rect x="64" y="14" width="58" height="54" rx="3" fill="#1a54e0"/><rect x="128" y="14" width="58" height="54" rx="3" fill="#1a54e0"/><rect x="192" y="14" width="58" height="54" rx="3" fill="#1a54e0"/><rect x="256" y="14" width="58" height="54" rx="3" fill="#1a54e0"/><rect x="320" y="14" width="58" height="54" rx="3" fill="#1a54e0"/>
    <!-- 체인 연결 탭 -->
    <g fill="#1a54e0">
      <rect x="53" y="22" width="16" height="11" rx="3"/><rect x="53" y="49" width="16" height="11" rx="3"/>
      <rect x="117" y="22" width="16" height="11" rx="3"/><rect x="117" y="49" width="16" height="11" rx="3"/>
      <rect x="181" y="22" width="16" height="11" rx="3"/><rect x="181" y="49" width="16" height="11" rx="3"/>
      <rect x="245" y="22" width="16" height="11" rx="3"/><rect x="245" y="49" width="16" height="11" rx="3"/>
      <rect x="309" y="22" width="16" height="11" rx="3"/><rect x="309" y="49" width="16" height="11" rx="3"/>
    </g>
    <!-- AI 칩 리드(핀): A·I 블록 상·하 -->
    <g fill="#1a54e0">
      <rect x="77" y="3" width="8" height="13" rx="3"/><rect x="89" y="3" width="8" height="13" rx="3"/><rect x="101" y="3" width="8" height="13" rx="3"/>
      <rect x="141" y="3" width="8" height="13" rx="3"/><rect x="153" y="3" width="8" height="13" rx="3"/><rect x="165" y="3" width="8" height="13" rx="3"/>
      <rect x="77" y="66" width="8" height="13" rx="3"/><rect x="89" y="66" width="8" height="13" rx="3"/><rect x="101" y="66" width="8" height="13" rx="3"/>
      <rect x="141" y="66" width="8" height="13" rx="3"/><rect x="153" y="66" width="8" height="13" rx="3"/><rect x="165" y="66" width="8" height="13" rx="3"/>
    </g>
    <!-- 글자 (크고 굵게, 블록 정중앙) -->
    <g fill="#fff" stroke="#fff" stroke-width="1.2" font-size="36" text-anchor="middle" font-family="Montserrat, sans-serif" font-weight="800">
      <text x="29" y="54">K</text><text x="93" y="54">A</text><text x="157" y="54">I</text><text x="221" y="54">B</text><text x="285" y="54">G</text><text x="349" y="54">F</text>
    </g>
  </g>
</defs></svg>`);
