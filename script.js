// Social Icon Hover Effect
const socialIcons = document.querySelectorAll('.social_icon i');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Button Hover Effect
const buttonIcon = document.querySelector('.main .button i');
if (buttonIcon) {
    buttonIcon.addEventListener('mouseover', () => {
        buttonIcon.style.transform = 'translateX(6px)';
    });
    buttonIcon.addEventListener('mouseout', () => {
        buttonIcon.style.transform = 'translateX(0)';
    });
}

// About Section Modal Toggle
const aboutButton = document.querySelector('.about_btn');
const aboutText = document.querySelector('.about_text');
if (aboutButton && aboutText) {
    aboutButton.addEventListener('click', () => {
        aboutText.style.display = aboutText.style.display === 'none' ? 'block' : 'none';
    });
}

// Login Form Toggle
const loginButton = document.querySelector('.login_form .right button');
const loginForm = document.querySelector('.login_form');
if (loginButton && loginForm) {
    loginButton.addEventListener('click', () => {
        loginForm.style.display = 'none';  // Hide the form after login attempt
    });
}

// Footer Social Links Hover Effect
const socialLinks = document.querySelectorAll('.footer .footer_main .tag .social_link a');
socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.background = 'linear-gradient(to right, #c72092 , #6c14d0)';
    });
    link.addEventListener('mouseout', () => {
        link.style.background = '';
    });
});

// Footer Search Bar Toggle Button Effect
const searchBarButton = document.querySelector('.footer .footer_main .tag .search_bar button');
if (searchBarButton) {
    searchBarButton.addEventListener('click', () => {
        alert('Search Button Clicked!');
    });
}
