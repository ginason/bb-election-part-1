document.addEventListener("DOMContentLoaded", function() {

  var ul = document.getElementById('candidates');
  var form = document.querySelector('.can-form');


  function list(responseData) {
    for (var i = 0; i < responseData.candidates.length; i++) {
      var name = responseData.candidates[i].name;
      var votes = responseData.candidates[i].votes;
      var id = responseData.candidates[i].id;
      var li = document.createElement('li');
      var vote = document.createElement('button');
      li.innerText = name +':  '+votes;
      vote.innerText = 'Vote';
      vote.className = 'vote';
      vote.id = id;
      vote.name = name;
      ul.append(li);
      ul.append(vote);
      console.log(name,' ', votes);
  }};

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'get',
    dataType: 'JSON'
  }).done(function(responseData){

    list(responseData);
    var canList = responseData;

    var canVotes = document.querySelectorAll('.vote');
    var canName = document.querySelector('.name');
    var canId = document.querySelector('.id');

    for (var i = 0; i < canVotes.length; i++) {

      canVotes[i].addEventListener('click', function(e){

        // console.log(this);
        canName.value = this.name;
        canId.value = this.id;

        // console.log(canId.value , canName.value)
      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/vote/',
        method: 'POST',
        data: {'id': canId.value, 'name': canName.value},
        dataType: 'json'
      }).done(function(responseData){
        // console.log(this.data);
        // console.log(responseData);
        // var element = document.querySelector('input[type=hidden]').value;
        // console.log(element);
        //
        // console.log( ul );
        ul.innerHTML = '';

        // for (var i = 0; i < canList.candidates.length; i++) {
        //   canList.candidates[i].
        // }
        // if (canList.candidates) {
        //
        // }
        location.reload();
        list(canList);

      }).fail(function(xhr, textStatus, errorThrown){
        alert(xhr.responseText);
      })
    });
    }

  });


});
