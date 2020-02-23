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
    // var newMessageRow = $("<tr>");
    // newMessageRow.attr("data-id", i)
    // var newMessagePriority = $("<th>").text(i);
    // var newMessageContent = $("<td>").text(messages[i].Text)
    // var newPhoneNumber = $("<td>").text(messages[i].from)
    // newMessageRow.append(newMessagePriority, newMessageContent, newPhoneNumber)
    // $("#unreadContainer").append(newMessageRow);
    var newMessageBox = $("<div>").addClass("box");
    var newMessageArticle = $("<article>").addClass("media");

    var newMediaContentContainer =$("<div>").addClass("media-content");
    var newMediaContent = $("<div>").addClass("content");


    var messageContainer = $(`<p data-index="${i}">`)
    var newNumber = $(`<span class="phoneNumber" data-index="${i}">`).text(messages[i].from);
    var newTime = $(`<span class="timeReceived" data-index="${i}">`).text(messages[i].time);
    var newbr = $("<br>");
    var newMessage = $(`<span class="message" data-index="${i}">`).text(messages[i].Text);

    var newTagContainer = $("<nav>").addClass("level");
    newTagContainer = $("<nav>").addClass("is-mobile");
    var newLevelItem = $("<div>").addClass("level-left");

    var newButton = $("<button>").addClass("button").text("Respond");
    newButton.attr("data-id", i);
    newButton.addClass("respondButton")

    var newInputDiv = $("<div>").attr("id", "response" + i);
    newInputDiv.css("display","none")
    newInputDiv.addClass("responseDiv")
    var newInput = $("<input>").addClass("input is-fullwidth");
    newInput.attr("type","text");
    newInput.attr("placeholder", "Type Your Response")

    newInputDiv.append(newInput)

    newTagContainer.append(newLevelItem);
    messageContainer.append(newNumber, newTime, newbr, newMessage)
    newMediaContent.append(messageContainer)
    newMediaContentContainer.append(newMediaContent, newTagContainer),
    newMessageArticle.append(newMediaContentContainer)
    newMessageBox.append(newMessageArticle)
    newMessageBox.append(newButton , newInputDiv)

    $("#unreadContainer").append(newMessageBox)
  }
}
createMessageTable();

$(".respondButton").on('click', function(e){
  e.preventDefault();
  $(".responseDiv").css("display","none")
  console.log($(this).attr("data-id"))
  var dataid= $(this).attr("data-id")
  $("#response" + dataid).css("display","");
  // $("#unreadContainer").children().removeClass("active-message");
  // var parentElement = ($(e.target).parent());
  // console.log($(e.target).parent());

  // parentElement.addClass("active-message");
  // console.log(parentElement.attr("data-id"))
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