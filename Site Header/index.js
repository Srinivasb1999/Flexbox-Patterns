document.addEventListener('click', (event) => {
    document.querySelectorAll('.header-item').forEach(element => {
        element.classList.remove('isSelected');
    });
    if (event.target.classList.contains('header-item'))
        event.target.classList.add('isSelected');
})