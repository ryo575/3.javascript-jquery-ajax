"use strict";
$(() => {
  const calcPrice = () => {
    let totalPrice = 0;

    const size = $("input[name='responsibleCompany']:checked").val();

    // サイズの値段を加算する
    if (size === "M") {
      totalPrice += 1380;
    } else if (size === "L") {
      totalPrice += 2380;
    }

    //トッピングの個数を取得
    const toppingCount = $("input[type = 'checkbox']:checked").length;
    // トッピングの値段を加算する
    if (size === "M") {
      totalPrice += 200 * toppingCount;
    } else if (size === "L") {
      totalPrice += 300 * toppingCount;
    }

    //数量をかける
    totalPrice *= $(".form-control").val();

    // 合計金額を表示する
    $("#total-price").text("この商品金額：" + totalPrice);
  };

  // サイズ、トッピング、数量のどれかが変更されたら、上の計算関数を実行する
  $(".radio-inline, .checkbox-inline, .form-control").on("change", () => {
    calcPrice();
  });

  // ページ読み込み時にも一度計算を実行
  calcPrice();
});
