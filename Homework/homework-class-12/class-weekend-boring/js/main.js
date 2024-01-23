document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
 if (day === 'Tuesday' || name === 'Thursday'){
  alert ('Class Day')
 }

 if (day === 'Saturday' || name === 'Sunday'){
  alert ('Weekend')
 }
 
else{
  alert ('Boring!!!!')
}

}
