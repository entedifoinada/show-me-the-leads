function sendmail() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  document.getElementById("mce-FNAME").value = name
  document.getElementById("mce-EMAIL").value = email
  document.getElementById("mc-embedded-subscribe").click();
}