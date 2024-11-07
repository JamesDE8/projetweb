function login() {
    var login = document.getElementById('t1').value;
    var password = document.getElementById('h1').value;

    if (login === 'admin' && password === 'admin00') {
        window.location.href = 'tp6oui.html';
    } else {
        alert("Identifiants non reconnus"); 
        window.location.href = 'tp6non.html'; 
    }
}