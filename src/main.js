const $ = require("jquery");
require("./../node_modules/bootstrap/dist/js/bootstrap.bundle");
require("./styles/main.scss");

$(window).on('load', function () {
    $('html').removeClass('loading-in-progress');
});

$("#submit").click(() => {
    let message = $("#message").val();
    message = message.trim();

    if (!message) {
        showAlert({
            status: "false_message"
        });
    } else {
        submitMessage(message);
    }

});

function submitMessage(messageText) {
    $.ajax({
            url: "./php/contact.php",
            data: {
                message: messageText
            },
            method: "POST"
        })
        .done(() => {
            $("textarea").val("");
            showAlert({
                status: "success"
            });
        }).fail(() => {
            // sendDeveloperBug(error);
            showAlert({
                status: "fail"
            });
        });
}
//parse text for security
const mainAlertClasses = "alert alert-dismissible fade";
const alerts = {
    success: `<div class="alert alert-success fade alert-dismissable show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Your message has been sent! Thank you
    </div>`,
    fail: `<div class="alert alert-danger fade alert-dismissable show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Oops, looks like something went wrong. Please try again later
    </div>`,
    false_message: `<div class="alert alert-warning fade alert-dismissable show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Oops, looks like you left the message box empty. Clutz!
    </div>`
}

function showAlert(options) {
    if (options.status == "success") {
        $("#alert-box").html(alerts.success);
    } else if (options.status == "fail") {
        $("#alert-box").html(alerts.fail);
    } else if (options.status == "false_message") {
        $("#alert-box").html(alerts.false_message);
    }
}

$(window).on("load", function () {
    $(".overlay-window").fadeOut(200);
});