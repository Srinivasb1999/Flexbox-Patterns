const minus = document.querySelector('.left');
const plus = document.querySelector('.right');
const input = document.querySelector('input');

minus.addEventListener('keyup', () => {
    let data = input.value;
    data--;
    value.textContent = data;
});

plus.addEventListener('keyup', () => {
    let data = input.value;
    data++;
    value.textContent = data;
});

