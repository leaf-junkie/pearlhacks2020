$(document).ready(function() {
// reliefwebapi
function getReliefWeb(){
    $.ajax({
      // url:"https://api.reliefweb.int/v1/reports?appname=apidoc&preset=latest&query[value]=earthquake&limit=1",
      url:"https://api.reliefweb.int/v1/reports?appname=apidoc&preset=latest&limit=1",
      method:"GET"
    }).then(function(response){
      console.log(response);
      var x = response.data[0].fields.title;
      console.log(x)
      $("#newsAlert").text(x);
    })
  }

// getReliefWeb()

var messages = [
  {
    direction: "in",
    from: "+19192595847",
    to: "+19195252942",
    time: "February 22nd 2020 at 2:29:09 pm",
    Text: "Test1",
    State: "received"
  },
  {
    direction: "in",
    from: "+19192595847",
    to: "+19195252942",
    time : "February 22nd 2020 at 2:29:09 pm",
    Text: "Test2",
    State: "received"
    }
]


function createMessageTable() {
  for (var i = 0; i < messages.length; i++){
    var newMessageRow = $("<tr>");
    newMessageRow.attr("data-id", i)
    var newMessagePriority = $("<th>").text(i);
    var newMessageContent = $("<td>").text(messages[i].Text)
    var newPhoneNumber = $("<td>").text(messages[i].from)
    newMessageRow.append(newMessagePriority, newMessageContent, newPhoneNumber)
    $("#unreadContainer").append(newMessageRow);
  }
}
createMessageTable();

$("#unreadContainer").on('click', function(e){
  e.preventDefault();
  $("#response-container").css("display","");
  $("#unreadContainer").children().removeClass("active-message");
  var parentElement = ($(e.target).parent());
  parentElement.attr("class", "active-message");
  console.log(parentElement.attr("data-id"))
})

// clicking the tabs
$("#unreadTab").on('click', function(e){
  e.preventDefault();
  $("#sentTab").removeClass("is-active");
  $("#sentView").css("display","none");
  $("#dataTab").removeClass("is-active");
  $("#dataView").css("display","none")
  $("#unreadTab").addClass("is-active");
  $("#unreadView").css("display","");
})

$("#sentTab").on('click', function(e){
  e.preventDefault();
  $("#sentTab").addClass("is-active");
  $("#sentView").css("display","");
  $("#dataTab").removeClass("is-active");
  $("#dataView").css("display","none")
  $("#unreadTab").removeClass("is-active");
  $("#unreadView").css("display","none");
})

$("#dataTab").on('click', function(e){
  e.preventDefault();
  $("#sentTab").removeClass("is-active");
  $("#sentView").css("display","none");
  $("#dataTab").addClass("is-active");
  $("#dataView").css("display","")
  $("#unreadTab").removeClass("is-active");
  $("#unreadView").css("display","none");
})


})