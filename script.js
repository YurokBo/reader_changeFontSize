document.addEventListener('click', e => {
    const bookControl = e.target.closest('.book__control'),
        activeButton = bookControl.querySelector('.font-size_active'),
        buttonSize = e.target.closest('.font-size'),
        bookContent = document.querySelector('.book__content');

    if(!bookControl) {
        return;
    }

    bookContent.className = 'book__content';

    activeButton.classList.remove('font-size_active');
    buttonSize.closest('.font-size').classList.add('font-size_active');
    bookContent.classList.add(`font-size_${buttonSize.dataset.size}`);

    e.preventDefault();
})





