var setEditor = {

  init: function (Args) {
    var editor = ace.edit(Args[0]);
    console.log(Args[1]);
    editor.setTheme("ace/theme/github");
    //editor.setValue(); // or session.setValue
    editor.getSession().setMode("ace/mode/" + Args[1]);
    editor.getSession().setUseWrapMode(true);
  }
};
