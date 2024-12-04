// Code your solutions in this file



const gifters = ["Guadalupe", "Ollie", "Aki"]

function writeCards(gifters){
  const messages = [];
  for (let i = 0; i < gifters.length; i++){
    messages.push(`Thank you, ${gifters[i]}, for the wonderful surprise gift!`)
  }
  return messages;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }


