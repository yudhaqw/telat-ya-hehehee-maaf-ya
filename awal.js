// Lightbox for gallery
const galleryPhotos = document.querySelectorAll('.gallery-photo');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

galleryPhotos.forEach(photo => {
  photo.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;
  });
});

lightbox.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

// Button surprise
const celebrateBtn = document.getElementById('celebrateBtn');
const audio = document.getElementById('birthdayAudio');
const floatingElements = document.getElementById('floatingElements');

celebrateBtn.addEventListener('click', function() {
  audio.play();
  launchFloatingEmojis();
});

function launchFloatingEmojis() {
  for (let i = 0; i < 24; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('gallery-item');
    emoji.style.position = 'fixed';
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `100%`;
    emoji.style.fontSize = `${24 + Math.random() * 36}px`;
    emoji.textContent = ['🎉','🎀','🦋','🌸','🍰','💫'][Math.floor(Math.random()*6)];
    floatingElements.appendChild(emoji);
    animateEmoji(emoji);
  }
}

function animateEmoji(emoji) {
  let pos = 100;
  const interval = setInterval(() => {
    pos -= 1.2 + Math.random();
    emoji.style.top = pos + '%';
    if (pos < -10) {
      emoji.remove();
      clearInterval(interval);
    }
  }, 24);
}
