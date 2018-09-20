// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    var send_email = function () {
        $.ajax({
            type: "POST",
            url: "https://asia-northeast1-aerial-mission-208308.cloudfunctions.net/function-1",
            data: JSON.stringify({
                "name": $("#name").val(),
                "organisation": $("#organisation").val(),
                "email": $("#email").val(),
                "description": $("#description").val(),
            }),
            headers : {
              "Content-Type": "application/json"
            },

            success: function (result) {
                $("#contact-result").append("Message sent successfully");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
                $("#contact-result").append("Fail to send you message, please send us email at hello@invanatech.com ");

            }

        });
    };

    $("#send-message").click(function () {
        send_email();
    });

    $('form').submit(function (event) {
        event.preventDefault();

        send_email();
    });

});