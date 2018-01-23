var $codeInput = $("#code_input");

var $resendBtn = $("#btn_resend");

var $codedBtn = $("#btn_code");

var $codeForm = $("#phone_form");

function loadPage () {
    $codeInput.keyup(validCode);
    $codeForm.submit(sendOtherCode);
};

function validCode () {
    // validar que no se active el boton si ingresa texto
    //cuando esten los tres numeros se habilita el boton de envio
    if ($(this).val().length = 3) {
        $codedBtn.prop("disabled", false)
        $resendBtn.prop("disabled", true)
        // $("#btn_code").text("Resend Code")
    } else {
        $codedBtn.prop("disabled", true)
    };

}; 

function code () {
    // habilita boton de resend
    $resendBtn.prop("disabled", false);
};

// function getCode (numberCode) {
//     console.log(numberCode);

// };

function sendOtherCode (e) {
    e.preventDefault();
    // guardar valor ingresado para despues
    var $enterCode = $codeInput.val();
    // console.log($enterCode);
    // linpiar input
    $codeInput.val("");
    // funcion que activa boton resend code
    code();
    // getCode();
    //dehabilita boton de enviar
    $codedBtn.prop("disabled", true)
    // redereccionar a siguiente vista
    nextForm();
};

function nextForm () {
    location.href = "singin.html";
};

$(document).ready(loadPage);