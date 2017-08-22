document.addEventListener("DOMContentLoaded", function() {

  var ul = document.getElementById('candidates');

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'get',
    dataType: 'JSON'
  }).done(function(responseData){
    for (var i = 0; i < responseData.candidates.length; i++) {
      var name = responseData.candidates[i].name;
      var votes = responseData.candidates[i].votes;
      var li = document.createElement('li');
      li.innerText = name +':  '+votes;
      ul.append(li);
      console.log(name,' ', votes);
    }

  })

});
