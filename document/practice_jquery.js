"use strict";
$(() => {
  //最初は無色なので、falseにしておく
  let isBlue = false;

  $("#displayName").on("click", () => {
    if (isBlue) {
      // 青なら赤にする
      $("#name").text("鈴木陵").css("color", "red");
    } else {
      // 赤なら青にする
      $("#name").text("鈴木陵").css("color", "blue");
    }
    // 状態を反転させる（trueならfalseに、falseならtrueに）
    isBlue = !isBlue;
  });

  const triathlonDiv = $("#triathlon");
  const otherDiv = $("#otherHobby");
  const hobbySelect = $("#hobby");

  // セレクトボックスの値が変更された時に実行される
  hobbySelect.on("change", () => {
    const selectedValue = hobbySelect.val();

    if (selectedValue === "トライアスロン") {
      triathlonDiv.show();
      otherDiv.hide();
    } else if (selectedValue === "その他") {
      triathlonDiv.hide();
      otherDiv.show();
    } else {
      triathlonDiv.hide();
      otherDiv.hide();
    }
  });

  // ページ読み込み時にも初期状態を反映させる
  hobbySelect.trigger("change");

  $("#submitName").on("click", () => {
    $("#submitName").prop("disabled", true);
  });

  $("#submitEmail").on("click", () => {
    if ($("#email").val().length === 0) {
      alert("メールアドレスを入力してください！");
    }
  });
});
