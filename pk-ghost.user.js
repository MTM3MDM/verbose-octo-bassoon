// ==UserScript==
// @name         pk-ghost (필경 꼬맹이 3사이트 통합)
// @namespace    pk-ghost
// @version      1.0
// @description  ChatGPT / Gemini / Ruite 자동 감지 + 꼬맹이 떠다니기
// @match        https://chatgpt.com/*
// @match        https://gemini.google.com/*
// @match        https://www.google.com/search?*
// @match        https://www.google.co.kr/search?*
// @match        https://*.ruit*e*/*
// @grant        none
// ==/UserScript==

(function () {

    const GHOST_URL = "https://raw.githubusercontent.com/MTM3MDM/verbose-octo-bassoon/main/%EB%B0%B0%EA%B2%BD%20%EC%A7%80%EC%9A%B0%EA%B8%B0.jpeg";

    // 기존 이미지 제거
    const old = document.getElementById("pk-ghost");
    if (old) old.remove();

    // UI별 위치 조정
    let bottom = "120px";
    let right = "100px";
    let size = "160px";

    const url = window.location.href;

    if (url.includes("chatgpt")) {
        bottom = "110px";
        right = "60px";
        size = "150px";
    }

    if (url.includes("gemini")) {
        bottom = "150px";
        right = "40px";
        size = "170px";
    }

    if (url.includes("google.com/search")) {
        bottom = "80px";
        right = "80px";
        size = "135px";
    }

    // 이미지 생성
    const img = document.createElement("img");
    img.id = "pk-ghost";
    img.src = GHOST_URL;
    img.style.position = "fixed";
    img.style.bottom = bottom;
    img.style.right = right;
    img.style.width = size;
    img.style.opacity = "0.95";
    img.style.zIndex = "99999999";
    img.style.pointerEvents = "none";
    img.style.animation = "pk-float 4s ease-in-out infinite";

    document.body.appendChild(img);

    // 애니메이션
    const style = document.createElement("style");
    style.textContent = `
        @keyframes pk-float {
            0%   { transform: translateY(0px); }
            50%  { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);

})();
