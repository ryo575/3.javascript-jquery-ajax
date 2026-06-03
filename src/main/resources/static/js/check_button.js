"use strict";
$(function () {
    $("#changeStatusBtn").on("click", function () {
        const $btn = $(this);

        // 連打防止（通信開始時にボタンを押せなくする）
        $btn.prop("disabled", true);

        $.ajax({
            url: "/status/update",
            type: "POST",
            dataType: "json",
        })
            .done(function (data) {
                // 1. 現在のステータスの文字を更新
                $("#currentStatus").text(data.newState);

                // 2. ボタン内の文字を更新
                $btn.text(data.buttonText);
            })
            .fail(function () {
                alert("通信エラーが発生しました！");
            })
            .always(function () {
                // 通信終了後にボタンを再度押せるようにする
                $btn.prop("disabled", false);
            });
    });
});