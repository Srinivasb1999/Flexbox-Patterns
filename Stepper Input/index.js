const minus = document.querySelector('.left');
const plus = document.querySelector('.right');
const input = document.querySelector('input');

minus.addEventListener('click', () => {
    let data = input.value;
    data--;
    input.value = data;
});

plus.addEventListener('click', () => {
    let data = input.value;
    data++;
    input.value = data;
});