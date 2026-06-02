"use strict";
$(() => {
  $("#get_address_btn").on("click", () => {
    $.ajax({
      url: "https://zipcoda.net/api/",
      type: "Get",
      dataType: "json",
      data: {
        zipcode: $("#zipcode").val(),
      },
      async: true,
    })
      .done((data) => {
        console.log(data);
        console.dir(JSON.stringify(data));
        $("#pref").val(data.items[0].components[0]);
        $("#city").val(data.items[0].components[1]);
        $("#building").val(data.items[0].components[2]);
      })
      .fail((XMLHttpRequest, textStatus, errorThrown) => {
        alert("正しい結果を得られませんでした");
        console.log("XMLHttpRequest:" + XMLHttpRequest.status);
        console.log("textStatus     :" + textStatus);
        console.log("errorThrown    :" + errorThrown.message);
      });
  });
});
