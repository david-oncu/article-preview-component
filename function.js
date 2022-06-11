const shareOption = document.querySelector('.card-footer');
const footerActive = document.querySelector('.card-footer-active')

// document.querySelector('.share-button').addEventListener('click',
// function () {
//     this.classList.toggle('active');
//     shareOption.classList.toggle('active');

// } );

document.querySelector('.share-button').addEventListener('click',
function () {
    this.classList.toggle('active');
    shareOption.classList.toggle('active');
    footerActive.classList.toggle('active');
} );


