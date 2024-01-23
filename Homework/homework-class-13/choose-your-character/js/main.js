const kiryu = document.querySelector('#kiryu')
const majima = document.querySelector('#majima')
const saejima = document.querySelector('#saejima')
const akiyama = document.querySelector('#akiyama')

document.querySelector('.kiryu').addEventListener('click', chooseKiryu)
document.querySelector('.majima').addEventListener('click', chooseMajima)
document.querySelector('.saejima').addEventListener('click', chooseSaejima)
document.querySelector('.akiyama').addEventListener('click', chooseAkiyama)




function chooseKiryu() {
	majima.classList.add('hidden')
	saejima.classList.add('hidden')
	akiyama.classList.add('hidden')
	kiryu.classList.toggle('hidden')
	document.querySelector('.backgroundGif').style.backgroundImage = 'url("https://storage.modworkshop.net/mods/images/75207_1597251147_362a91fda2472de0b04d7a70b21fb68e.gif")'
}

function chooseMajima() {
	kiryu.classList.add('hidden')
	saejima.classList.add('hidden')
	akiyama.classList.add('hidden')
	majima.classList.toggle('hidden')
	document.querySelector('.backgroundGif').style.backgroundImage = 'url("https://steamuserimages-a.akamaihd.net/ugc/788625110464521698/E4F72CA4A0DB8B8DBDAAE05BE4FDB4D8228846A1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")'
}

function chooseSaejima() {
	majima.classList.add('hidden')
	kiryu.classList.add('hidden')
	akiyama.classList.add('hidden')
	saejima.classList.toggle('hidden')
	document.querySelector('.backgroundGif').style.backgroundImage = 'url("https://64.media.tumblr.com/9fc513eef5ef0df47f67ffa0a86a3e99/7d22efd0cf9bfcfc-ce/s540x810/41b2d257c1c2623545fc6996b25d178adbfdbda1.gif")'

}

function chooseAkiyama() {
	majima.classList.add('hidden')
	saejima.classList.add('hidden')
	kiryu.classList.add('hidden')
	akiyama.classList.toggle('hidden')
	document.querySelector('.backgroundGif').style.backgroundImage = 'url("https://qph.cf2.quoracdn.net/main-qimg-1788e9870f47472376b526af23e2aade")'
}