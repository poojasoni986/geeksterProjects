async function getCovidData() {

    let coviddata = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=10")
    let response = await coviddata.json()
    console.log(response)

    let labels = Object.keys(response.cases)
    console.log(labels)
    let cases = Object.values(response.cases)
    console.log(cases)

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: cases,
                borderColor: 'blue',
                borderWidth: 2,

            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });


}
getCovidData()



