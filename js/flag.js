function visible(){
    if($(".colortemp").css("left") == '-350px'){
      $(".colortemp").css({
        'left':'0',
        'width':'100%',
        'position':'fixed',
        'z-index':'9999'
      });
      $(".colorbox").css('display','inline');
      $("#close").text("");
      $("#close").append("&times;");
    }
  }


  function close(){
    $(".colortemp").css({
      'width':'250px',
      'left':'-350px'
    });
  }

$("#bar").click(function(){
  visible();
  $("#close").click(function(){close()});
  $("#btn1").click(function(){close()});
  $("#btn2").click(function(){close()});
  $("#btn3").click(function(){close()});
});





function resetFunc(){
  document.getElementById('flags').innerHTML = "<div class='text-center'><h1>Welcome for learning Mathematics Term</h1>";
  document.getElementById('totalFlag').innerHTML="[0]";
  document.getElementById('item').innerHTML = "[0]";
}




  function multiCheck(){
      var length = document.myform.color.length;
      var result = "";
      for (var i=0; i<length; i++){
        var checkedVlue = document.myform.color[i].checked;
        if(checkedVlue){
          result += document.myform.color[i].value+",";
        }
      }
      var ar = result.split(",");
      var num = ar.length - 1;
       document.getElementById('item').innerHTML = num;
      return ar;
  }

  function flagFunction(option){
    var element = document.getElementById('flags');
    element.innerHTML = "";
    var color = multiCheck();
    var n = color.length - 1;
    var count=0;
  if(n != 0){
    var count=0;
    for(var ic=0; ic<n; ic++){
      for(var jc=0; jc<n; jc++){
        for(var kc=0; kc<n; kc++){
          if(kc!=ic && kc!=jc && jc!=ic){

            var mdiv = document.createElement('div');
            mdiv.setAttribute("class","maindiv");
            var box1 = document.createElement('div');
            var box2 = document.createElement('div');
            var box3 = document.createElement('div');

            box1.setAttribute("class","box one");
            box2.setAttribute("class","box two");
            box3.setAttribute("class","box three");
            box1.setAttribute("style","background:"+color[ic]);
            box2.setAttribute("style","background:"+color[jc]);
            box3.setAttribute("style","background:"+color[kc]);

            mdiv.appendChild(box1);
            mdiv.appendChild(box2);
            mdiv.appendChild(box3);
            element.appendChild(mdiv);
            count++;

          }
        }
      }
      if(option == 1){
        for(jc=0; jc<n; jc++){
          if(jc!=ic){
            var mdiv = document.createElement('div');
            mdiv.setAttribute("class","maindiv");
            var box1 = document.createElement('div');
            var box2 = document.createElement('div');
            var box3 = document.createElement('div');
            
            box1.setAttribute("class","box one");
            box2.setAttribute("class","box two");
            box3.setAttribute("class","box three");
            box1.setAttribute("style","background:"+color[ic]);
            box2.setAttribute("style","background:"+color[jc]);
            box3.setAttribute("style","background:"+color[ic]);

            mdiv.appendChild(box1);
            mdiv.appendChild(box2);
            mdiv.appendChild(box3);
            element.appendChild(mdiv);
            count++
          }
        }
    } 
  }

  }

  document.getElementById('totalFlag').innerHTML = count;

}


