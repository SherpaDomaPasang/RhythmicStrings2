document.addEventListener("DOMContentLoaded", function() {
    
  var audio = document.getElementById("myAudio");
  var playButton = document.getElementById("playButton");
  playButton.addEventListener("click", function() {
      audio.play();
  });

  var audio2 = document.getElementById("myAudio2");
  var playButton2 = document.getElementById("playButton2");
  playButton2.addEventListener("click", function() {
      audio2.play();
  });

  var audio3 = document.getElementById("myAudio3");
  var playButton3 = document.getElementById("playButton3");
  playButton3.addEventListener("click", function() {
      audio3.play();
  });

  var audio4 = document.getElementById("myAudio4");
  var playButton4 = document.getElementById("playButton4");
  playButton4.addEventListener("click", function() {
      audio4.play();
  });

  var audio5 = document.getElementById("myAudio5");
  var playButton5 = document.getElementById("playButton5");
  playButton5.addEventListener("click", function() {
      audio5.play();
  });

  document.addEventListener('keydown', function(e) {
    if(e.key=='A'){
      audio.play();
    }else if(e.key=='a'){
      audio.play();
    }else if(e.key=='B'){
      audio.play();
    }else if(e.key=='b'){
      audio.play();
    }else if(e.key=='C'){
      audio.play();
    }else if(e.key=='c'){
      audio.play();
    }else if(e.key=='D'){
        audio.play();
    }else if(e.key=='d'){
      audio.play();
  }else if(e.key=='E'){
    audio.play();
}else if(e.key=='e'){
  audio.play();
}else if(e.key=='F'){
  audio.play();
}else if(e.key=='f'){
  audio.play();
}else if(e.key=='G'){
  audio.play();
}else if(e.key=='g'){
  audio.play();
}
  });
});


