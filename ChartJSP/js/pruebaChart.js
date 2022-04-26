var deaths=[];
var pruebas=[];
var numeros=[];
var pruebas2;

// fetch('https://raw.githubusercontent.com/bence-toth/covid-data/main/data/died/cumulative/exact/canada.json')
//   .then(response => response.json())
//   .then(result => {
//    pruebas2=result.cumulativeDeaths
//   })

const api_url='https://raw.githubusercontent.com/bence-toth/covid-data/main/data/died/cumulative/exact/spain.json'

var datos;

function myFunc(success) {
  //do what you want HERE.
  datos = success.cumulativeDeaths
  console.log(datos)
  var arr;
  for(let i in success.cumulativeDeaths.length){
    arr[i]
  }
  console.log(success.cumulativeDeaths.length)
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: datos ,
            datasets: [{
              label: 'Datos del Covid ',
              fill: false,
              data: datos ,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
      },
      options: {}
  });
  }
  
  fetch(api_url)
      .then(data => data.json())
      .then(success => myFunc(success));
  


 
  
       
