var getFileContents = {

  fileContents:"Null",
  pagePrefix:"Null",
  slides:"Null",

  init: function (Args) {
    $.ajax({
      url: Args[0],
      dataType: "text",
      async: false,
      success: function (data){
        getFileContents.fileContents = data;
        $("#"+Args[1]).text(data);
      }
    });
  }
};
