document.getElementById('Kiryu').onclick = partyKiryu
document.getElementById('Majima').onclick = partyMajima
document.getElementById('Saejima').onclick = partySaejima
document.getElementById('Haruka').onclick = partyHaruka

function partyKiryu() {
  document.querySelector('body').style.backgroundImage = 'url("https://i.pinimg.com/originals/6f/94/2f/6f942fca67c2b43eef836989c6b6c753.gif")'
  document.querySelector('body').style.color = 'white'
}

function partyMajima() {
  document.querySelector('body').style.backgroundImage = 'url("https://media1.tenor.com/m/kfhNaQpcRokAAAAd/yakuza-goro.gif")'
  document.querySelector('body').style.color = 'white'
}

function partySaejima() {
  document.querySelector('body').style.backgroundImage = 'url("https://64.media.tumblr.com/247f5b23a1951c4f3de55479722ce171/aa607178c95962f2-48/s500x750/b693ac155e9c62a547e27be4a362143c8dcb2e38.gif")'
  document.querySelector('body').style.color = 'white'
}

function partyHaruka(){
  document.querySelector('body').style.backgroundImage = 'url("https://64.media.tumblr.com/f2c63294a761af06547ccf9612617090/70bb53bf82985b81-22/s500x750/f31b184ce98eaed86c66daf3d74d887bb2ab85dd.gif")';
  document.querySelector('body').style.color = 'white'
}