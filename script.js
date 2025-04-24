function showLove() {
    const heart = document.getElementById('heart');
    heart.style.display = 'block';
    setTimeout(() => {
      heart.style.display = 'none';
    }, 2000);
  }
  