function openSpec(evt, specName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(specName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Получите элемент с id="defaultOpen" и нажмите на него
document.getElementById("defaultOpen").click();


