const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#2E43FF'; // Change background color to blue on hover
        button.style.color = '#fff'; // Change text color to white on hover
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'transparent'; // Reset background color on mouse out
        button.style.color = '#000'; // Reset text color on mouse out
    });
});