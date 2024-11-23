
document.addEventListener('DOMContentLoaded', function () {
    let googleScript = document.createElement('script');
    googleScript.src = 'https://www.google.com/cse_element__en.js?usqp=CAI%3D';
    googleScript.defer = true;
    document.body.appendChild(googleScript);
});