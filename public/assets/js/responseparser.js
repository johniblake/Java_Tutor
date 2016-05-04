module.exports = {
  regexer: function(response_data){
    console.log("inside regexer");
    console.log(response_data);
    var tests = {};
    tests["question1"] = "^Hello,\\sWorld!\\sMy\\sname\\sis\\sBob.$";
    tests["question2"] = "^int\\sb\\s=\\s[0-9]+;$";
    tests["question3"] = "^int\\sc\\s=\\sa\\s\\+\\sb;$";//needs alternates
    tests["question4"] = "^800$";
    tests["question5"] = "^String\\[\\]\\sstringArray\\s=\\snew\\sString\\[10\\];$";
    tests["question6"] = "^111$";
    tests["question7"] = "^10$";
    tests["question8"] = "^Person's\\sheight\\sis\\s5.$";
    return this.isCorrect(response_data, tests);
  },
  isCorrect: function(response_data, tests){
    console.log(tests["question1"]);
    var data = JSON.parse(response_data);
    var question = data.question;
    var answer = data.user_answer;
    var regex = new RegExp(tests[question]);
    console.log("question: " + question);
    console.log("RegExp: " + regex);
    if(regex.test(answer)){
      console.log("correct!");
      return "Correct!";
    }else{
      console.log("nope!");
      return "Not quite. Try again!";
    }
  }
};
