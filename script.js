const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');

        const targetId = button.getAttribute('data-id');
        document.getElementById(targetId).classList.add('active');
    });
});