// Load large images and audio file after page render #perfmatters

function loadLarge(){
  var underlay = document.getElementById('underlay');
  var pcastAudio = document.getElementById('pcast-audio');
  underlay.setAttribute('style',underlay.getAttribute('data-src'));
  pcastAudio.setAttribute('src',pcastAudio.getAttribute('data-src'));
}

// Toggle shownotes section

function toggleNotes(){
  var toggler = document.getElementById('toggler');
  var shownotes = document.getElementById('shownotes');
  shownotes.classList.toggle('hidden');
  toggler.classList.toggle('shownotes-on');
}