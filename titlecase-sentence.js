function titleCase(str) {
   var splitString = str.toLowerCase().split(' ');
   for (var i = 0; i < splitString.length; i++) {
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
   }
   return splitString.join(' '); 
}

titleCase("the quick brown fox jumps over the lazy dog");