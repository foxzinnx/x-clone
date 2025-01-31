function entrar(){
    var btnClose = document.getElementById('close');
    var loginGroup = document.getElementById('logingroup');
    loginGroup.style.display = 'flex';
    btnClose.addEventListener('click', () => {
        loginGroup.style.display = 'none';
    })
}
