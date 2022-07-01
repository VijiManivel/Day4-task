var request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload = function(){
  var data= JSON.parse(request.response);

  // display flags of all countries from data
  
  for(var i in data){
    console.log((i) +" "+"Name: " + data[i].name+"  " + "Region: "+data[i].region+"  " + "SubRegion: "+data[i].subregion+"  " +"Population: "+data[i].population+"  " );
  }
  
}