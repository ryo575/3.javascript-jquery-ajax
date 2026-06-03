"use strict";
$(function () {
    $("#password, #forCheckPassword").on("keyup", function () {
        const hostUrl = "/checkpassword/check";
        const inputPassword = $("#password").val();
        const checkPassword = $("#forCheckPassword").val();
        console.log("入力された値:" + inputPassword);
        console.log("確認用パスワード" + checkPassword);
        $.ajax({
            url: hostUrl,
            type: "POST",
            dataType: "json",
            data: {
                password: inputPassword,
                checkPassword: checkPassword,
            },
            async: true,
            // 非同期で処理を行う
        })
            .done(function (data) {
                // コンソールに取得データを表示
                console.log(data);
                console.dir(JSON.stringify(data));
                $("#tooShortMessage").text(data.tooShortMessage);
                $("#successMessage").text(data.successMessage);
                $("#notEqualMessage").text(data.notEqualMessage);
                $("#equalMessage").text(data.equalMessage);
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                alert("エラーが発生しました！");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
            });
    });
});
