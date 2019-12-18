(function(){

  var underlay = document.getElementById('underlay');
  var players = document.querySelectorAll('.player');
  var speeds = [ 1, 1.5, 2, 2.5, 3 ]    
  
  for(i=0;i<players.length;i++) {
    var player = players[i];
    var audio = player.querySelector('audio');
    var play = player.querySelector('.player-play');
    var pause = player.querySelector('.player-pause');
    // var rewind = player.querySelector('.player-rewind');
    var progress = player.querySelector('.player-progress');
    // var speed = player.querySelector('.player-speed');
    // var mute = player.querySelector('.player-mute');
    var currentTime = player.querySelector('.player-currenttime');
    var duration = player.querySelector('.player-duration');
    
    var currentSpeedIdx = 0;

    pause.style.display = 'none';
    
    var toHHMMSS = function ( totalsecs ) {
        var sec_num = parseInt(totalsecs, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours; }
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        
        var time = hours+':'+minutes+':'+seconds;
        return time;
    }
    
    audio.addEventListener('loadedmetadata', function(){
      progress.setAttribute('max', Math.floor(audio.duration));
      duration.textContent  = toHHMMSS(audio.duration);
    });
    
    audio.addEventListener('timeupdate', function(){
      progress.setAttribute('value', audio.currentTime);
      currentTime.textContent  = toHHMMSS(audio.currentTime);
    });
    
    play.addEventListener('click', function(){
      this.style.display = 'none';
      pause.style.display = 'inline-block';
      pause.focus();
      audio.play();
      underlay.className = "underlay on";
      document.body.className = "inverted";

    }, false);

    pause.addEventListener('click', function(){
      this.style.display = 'none';
      play.style.display = 'inline-block';
      play.focus();
      audio.pause();
      underlay.className = "underlay off";
      document.body.className = "";
    }, false);
 
    // rewind.addEventListener('click', function(){
    //   audio.currentTime -= 30;
    // }, false);
    
    progress.addEventListener('click', function(e){
      audio.currentTime = Math.floor(audio.duration) * (e.offsetX / e.target.offsetWidth);
    }, false);

    // speed.addEventListener('click', function(){
    //   currentSpeedIdx = currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0;
    //   audio.playbackRate = speeds[currentSpeedIdx];
    //   this.textContent  = speeds[currentSpeedIdx] + 'x';
    //   return true;
    // }, false);

    // mute.addEventListener('click', function() {
    //   if(audio.muted) {
    //     audio.muted = false;
    //     this.querySelector('.fa').classList.remove('fa-volume-off');
    //     this.querySelector('.fa').classList.add('fa-volume-up');
    //   } else {
    //     audio.muted = true;
    //     this.querySelector('.fa').classList.remove('fa-volume-up');
    //     this.querySelector('.fa').classList.add('fa-volume-off');
    //   }
    // }, false);
  }
})(this);

function loadLarge(){
  var underlay = document.getElementById('underlay');
  var playerAudio = document.getElementById('player-audio');
  underlay.setAttribute('style',underlay.getAttribute('data-src'));
  playerAudio.setAttribute('src',playerAudio.getAttribute('data-src'));
}

window.onload = loadLarge;