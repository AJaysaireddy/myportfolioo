function getCountrdet(){
  event.preventDefault();
  const country=document.getElementById("country").value;
var url='https://restcountries.com/v3.1/all';
let cuntry="India";
if(country.length!=0){
  cuntry=country;
}
fetch(url)
.then((res) => res.json())
  .then((data) => {
  let cin=0;
  for(let i=0;i<data.length;i++){
if(cuntry==data[i].name.common){
  cin=i;
  break;
}
  }
   document.getElementById("capital").innerHTML= "capital :"+data[cin].capital;
   document.getElementById("population").innerHTML= "population :"+parseFloat(data[cin].population/10000000)+" Crores";
   document.getElementById("area").innerHTML= "area : "+parseFloat(data[cin].area/1000000)+" million sq.km";
   document.getElementById("common").innerHTML= "Country :"+data[cin].name.common;
  });
}