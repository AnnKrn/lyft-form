var $phoneInput = $("#phone_input");

var $phoneForm = $("#phone_form");

function loadPage () {
    $phoneInput.keyup(validPhone)
    // console.log('hola')
    $phoneForm.submit(generateCode)
};

function validPhone () {
    // var $phoneNumber = $phoneInput.val();
    // console.log($phoneNumber)
    // this se refiere al input, poque no funcina con $phoneInput?
    if ($(this).val().length == 10) {
        // si son 10 dig habilitar boton
        $("#btn_phone").prop("disabled", false)
        // console.log('hola')
    }
    else {
        // sino deshabilitarlo
        $("#btn_phone").prop("disabled", true)
    }
};

function generateCode (e) {
    e.preventDefault();

    // limpiar input
    // si dejo .val(" ") aparece esto:
    // jquery-3.2.1.min.js:4 The specified value " " is not a valid number. The value must match to the following regular expression: -?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?
    $phoneInput.val("");

    // genrar numero aleatorio y redondearlo a entero
    var code = "LAB - " + Math.floor(Math.random() * 1000);
    // console.log(code)
    alert("Tu código: " + code)
    // redereccion a siguiente vista, al cerrar alert
    location.href = "code.html";
};

$(document).ready(loadPage);