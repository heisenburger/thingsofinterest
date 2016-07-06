// Toggle shownotes section

function toggleNotes(){
  var toggler = document.getElementById('toggler');
  var shownotes = document.getElementById('shownotes');
  shownotes.classList.toggle('hidden');
  toggler.classList.toggle('shownotes-on');
}