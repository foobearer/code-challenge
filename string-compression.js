var items=[];
function compress(str) {
  var count = 0, fcount = 0, itemChar = 0, char;
  for(var index = 0; index < str.length; index++) {
    char = str[index];
    if(char == str[index+1]){
      count += 1
    }
    else {
      fcount = count + 1
      itemChar = fcount + String(char)
      items.push(itemChar)
      count = 0
    }
  }
    var arrToStr = String(items);
    return arrToStr.replace(/,/g,"")	
}

//INPUT: "aaaabbaaaababbbcccccccccccc"
//PROCESS: compress("aaaabbaaaababbbcccccccccccc")
//OUTPUT: "4a2b4a1b1a3b12c"