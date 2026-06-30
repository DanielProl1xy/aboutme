const email = "jononjon70@gmail.com"

function go_contact() {

  footer.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

}

function writeToUserBuff(what) {
	navigator.clipboard.writeText(what)
    .then(() => {
      alert("Адрес почты скопирован в буфер обмена.");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}