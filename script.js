const card = document.querySelector('.card');
const flipBtn = document.getElementById('flip-btn');

function flipCard() {
    card.classList.toggle('flipped');
    const isFlipped = card.classList.contains('flipped');
    card.setAttribute('aria-label', `Business card for Omar Ghoche. Press Enter to flip. Currently showing ${isFlipped ? 'back' : 'front'} side.`);
}

flipBtn.addEventListener('click', flipCard);

card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        flipCard();
    }
});

// Ensure the card can receive focus
card.setAttribute('tabindex', '0');
