$(document).ready(function() {
// reliefwebapi -- get most recent report
function getReliefWeb(){
    $.ajax({
      url:"https://api.reliefweb.int/v1/disasters?appname=apidoc&preset=latest&limit=1",
      // url:"https://api.reliefweb.int/v1/reports?appname=apidoc&preset=latest&limit=1",
      method:"GET"
    }).then(function(response){
      console.log(response);
      // var x = response.data[0].fields.title;
      var x = response.data[0].fields.name;
      console.log(x)
      $("#newsAlert").text(x);
    })
  }

getReliefWeb()

var messages = [
  {
    direction: "in",
    from: "+19192595847",
    to: "+19195252942",
    time: "February 22nd 2020 at 2:09:09 pm",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    State: "received",
    tags: "fire"
  },
  {
    direction: "in",
    from: "+19192595847",
    to: "+19195252942",
    time : "February 21st 2020 at 12:29:09 pm",
    Text: "The power is out at my house.",
    State: "received",
    tags: "Power Outage"
    },
    {
      direction: "in",
      from: "+19192595847",
      to: "+19195252942",
      time : "February 20th 2020 at 2:29:09 pm",
      Text: "My house is flooded and I can't leave the driveway.",
      State: "received",
      tags: "flood"
      }
]

// dynamically creating messages
function createMessageTable() {
  for (var i = 0; i < messages.length; i++){
    var newMessageBox = $("<div>").addClass("box");
    var newMessageArticle = $("<article>").addClass("media");

    var newMediaContentContainer =$("<div>").addClass("media-content");
    var newMediaContent = $("<div>").addClass("content");

    var messageContainer = $("<p>")
    var newNumber = $("<strong>").text(messages[i].from);
    var newTime = $("<small>").text(messages[i].time);
    newTime.css("margin-left", "2em");
    var newbr = $("<br>");
    newbr.css("margin", "2em")
    var newMessage = $("<span>").text(messages[i].Text)

    var newTagContainer = $("<nav>").addClass("level");
    newTagContainer = $("<nav>").addClass("is-mobile");
    var newLevelItem = $("<div>").addClass("level-left");
    var newTag = $("<span>").addClass("tag").text(messages[i].tags)
    newTag.addClass("is-danger")

    var newButton = $("<button>").addClass("button").text("Respond");
    newButton.attr("data-id", i);
    newButton.addClass("respondButton")

    var newInputDiv = $("<div>").attr("id", "response" + i);
    newInputDiv.css("display","none")
    newInputDiv.addClass("responseDiv")
    var newInput = $("<input>").addClass("input is-fullwidth");
    newInput.attr("type","text");
    newInput.attr("placeholder", "Type Your Response")
    newInput.attr("data-input",i)

    newInputDiv.append(newInput)

    newTagContainer.append(newLevelItem);
    newLevelItem.append(newTag);
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
  // $("#sentTab").removeClass("is-active");
  // $("#sentView").css("display","none");
  $("#dataTab").removeClass("is-active");
  $("#dataView").css("display","none")
  $("#unreadTab").addClass("is-active");
  $("#unreadView").css("display","");
})

// add sent messages in a later version

// $("#sentTab").on('click', function(e){
//   e.preventDefault();
//   $("#sentTab").addClass("is-active");
//   $("#sentView").css("display","");
//   $("#dataTab").removeClass("is-active");
//   $("#dataView").css("display","none")
//   $("#unreadTab").removeClass("is-active");
//   $("#unreadView").css("display","none");
// })

$("#dataTab").on('click', function(e){
  e.preventDefault();
  // $("#sentTab").removeClass("is-active");
  // $("#sentView").css("display","none");
  $("#dataTab").addClass("is-active");
  $("#dataView").css("display","")
  $("#unreadTab").removeClass("is-active");
  $("#unreadView").css("display","none");
})

// submitting a response

$(".input").on('keydown', function(e){
  if (e.keyCode == 13) {
    e.preventDefault();
    console.log($(this).attr("data-input"))
    var yourResponse= $(this).val()
    $(this).val('');    
    console.log(yourResponse)
  }
})

$("#link1").on('click', function(e){
  e.preventDefault();
  $("#box2").css("display","none")
  $("#box1").css("display", "");
  // $("#link2").removeClass("active-panel")
  // $("#link1").addClass("active-panel")

})

$("#link2").on('click', function(e){
  e.preventDefault();
  $("#box2").css("display","")
  $("#box1").css("display", "none");
  // $("#link1").removeClass("active-panel")
  // $("#link2").addClass("active-panel")
})


})