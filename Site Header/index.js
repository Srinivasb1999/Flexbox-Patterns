document.addEventListener('click', (event) => {
    document.querySelectorAll('.header-item').forEach(element => {
        element.classList.remove('isSelected');
    });
    event.target.classList.add('isSelected');
})