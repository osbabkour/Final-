document.addEventListener('DOMContentLoaded', (event) => {
    const changeTextButton = document.getElementById('changeTextButton');
    const header = document.getElementById('header');
    const colorBox = document.getElementById('colorBox');

    changeTextButton.addEventListener('click', () => {
        header.textContent = 'على حظك أول طلب لك مجانا !';
    });

    colorBox.addEventListener('mouseover', () => {
        colorBox.style.backgroundColor = '#e74c3c';
    });

    colorBox.addEventListener('mouseout', () => {
        colorBox.style.backgroundColor = '#3498db';
    });
});
