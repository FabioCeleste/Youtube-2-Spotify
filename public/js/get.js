const input = document.querySelector('.youtube-url');


document.querySelector('.myAnchor').addEventListener('click', (event) => {
  localStorage.setItem('url', input.value);
});
