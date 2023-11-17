document.addEventListener('DOMContentLoaded', function () {
    inputPass = document.querySelector('#password')
    inputConfirm = document.querySelector('#confirmation')

    inputPass.addEventListener('keyup', (e) => {
        checkPass(inputPass, inputConfirm)
    })
    inputConfirm.addEventListener('keyup', (e) => {
        checkPass(inputPass, inputConfirm)
    })
})

function checkPass(inputPass, inputConfirm) {
    if (inputPass.value !== inputConfirm.value) {
        document.querySelector('#errormsg').textContent = "* Passwords do not match"
    } else {
        document.querySelector('#errormsg').textContent = ""
    }
}