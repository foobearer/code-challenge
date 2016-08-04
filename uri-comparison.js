function compareUris(uri1,uri2) {
  var uri1 = canonicalize(uri1),
  uri2 = canonicalize(uri2),
  item=[],
  fresult = "",
  result = "",
  itemVal = "",
  itemSearch;

  for(var i=0; i<uri1.length; i++){
    if (uri1[i] != uri2[i]) {
      result += "false"
    }
    else {
      fresult = result 
      itemVal = fresult + "true"
      item.push(itemVal)
      result = ""
    }
  }
  itemSearch = item.indexOf('falsetrue') > -1
  if(itemSearch == true) return "false"
  else return "true"
}
	
function canonicalize(uri) {
  var items = [],
  div = document.createElement('div');
  div.innerHTML = "<a></a>";
  div.firstChild.href = uri; 
  div.innerHTML = div.innerHTML; 
  items=[div.firstChild.protocol,
    div.firstChild.hostname,
    div.firstChild.port,
    div.firstChild.pathname,
    div.firstChild.search,
    div.firstChild.hash, 
    div.firstChild.host
  ]
  return items
} 

// INPUT:	
// http://abc.com:80/~smith/home.html
// http://ABC.com/%7Esmith/home.html
		
// http://abc.com/foo.html?a=1&b=2&a=3
// http://abc.com/foo.html?a=3&a=1&b=2

// http://abc.com/drill/further/../down/./foo.html
// http://abc.com/drill/down/foo.html

// http://abc.com/foo.html?b=2&a=1
// http://abc.com/foo.html?a=1&b=2

// PROCESS:
// compareUris("http://abc.com:80/~smith/home.html","http://ABC.com/%7Esmith/home.html")
// compareUris("http://abc.com/foo.html?a=1&b=2&a=3","http://abc.com/foo.html?a=3&a=1&b=2")
// compareUris("http://abc.com/drill/further/../down/./foo.html","http://abc.com/drill/down/foo.html")
// compareUris("http://abc.com/foo.html?b=2&a=1","http://abc.com/foo.html?a=1&b=2") 

// OUTPUT:
// true
// false
// true
// true


