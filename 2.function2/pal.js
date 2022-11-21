function palindrome(message){
 for (var i = 0; i < message.length/2; i++) {
   if (message[i] !== message[message.length - 1 - i]) {
       return false; 
   }

    }
   return true
}
