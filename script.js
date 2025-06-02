// ===== 1. Кнопка-гамбургер и боковое меню =====
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sideMenu = document.getElementById('sideMenu');
  const contentWrapper = document.getElementById('contentWrapper');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    sideMenu.classList.toggle('active');
    contentWrapper.classList.toggle('blurred');
  });
});

// Закрыть меню при клике на ссылку
function closeMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sideMenu = document.getElementById('sideMenu');
  const contentWrapper = document.getElementById('contentWrapper');

  hamburgerBtn.classList.remove('active');
  sideMenu.classList.remove('active');
  contentWrapper.classList.remove('blurred');
}

// ===== 2. YouTube IFrame API для фоновой музыки =====
let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer', {
    height: '0',
    width: '0',
    videoId: 'JC3Dj5o_ucw',
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: 'JC3Dj5o_ucw',
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
      playsinline: 1
    },
    events: {
      onReady: () => {},
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) player.playVideo();
      },
      onError: (e) => console.error('Ошибка плеера:', e.data)
    }
  });
}

// Подключаем API
(function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
})();

// ===== 3. Кнопка «Вкл/Выкл музыку» =====
document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById('musicBtn');

  musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
      player.playVideo();
      isPlaying = true;
      musicBtn.style.backgroundColor = '#FFD1E6';
      musicBtn.style.boxShadow = '0 0 14px #FFD1E6';
    } else {
      player.pauseVideo();
      isPlaying = false;
      musicBtn.style.backgroundColor = '#344D8E';
      musicBtn.style.boxShadow = '0 0 10px #FFD1E6';
    }
  });
});
