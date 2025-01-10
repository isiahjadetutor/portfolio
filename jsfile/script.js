function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
    document.body.classList.remove('no-scroll');
}