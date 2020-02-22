$(document).ready(function() {
// reliefwebapi
function getReliefWeb(){
    $.ajax({
      url:"https://api.reliefweb.int/v1/reports?appname=apidoc&limit=2",
      method:"GET"
    }).then(function(response){
      console.log(response)
      return response.data[0].fields.title
    })
  }

  getReliefWeb()
})
