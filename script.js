window.onload = function() {
    if(localStorage.getItem('userVisited')) {
        window.location.href = 'https://georgio11.github.io/Test_local1/';
    } else {
        localStorage.setItem('userVisited', 'true');
    }
};