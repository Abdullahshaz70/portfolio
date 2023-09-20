// Select the DOM elements you want to work with using querySelector
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
ul = document.querySelector('.ul')
rightNav = document.querySelector('.rightNav')

// Add a click event listener to the 'burger' element
burger.addEventListener('click', () => {
    // Toggle the 'v-class' CSS class on the 'ul' element
    ul.classList.toggle('v-class');
    
    // Toggle the 'h-nav' CSS class on the 'navbar' element
    navbar.classList.toggle('h-nav');
})