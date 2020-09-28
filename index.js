function updateMap() {
    let users = fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (i = 1; i < 38; i++) {
                let final = document.createElement('tr');
                final.innerHTML =
                    `<td>${i}</td>
                     <td>${data.statewise[i].state}</td>
                     <td>${data.statewise[i].active}</td>
                     <td>${data.statewise[i].recovered}</td>
                     <td>${data.statewise[i].deaths}</td>
                     <td>${data.statewise[i].confirmed}</td>`;
                document.getElementById("row").appendChild(final);
            }

            // Combined - Confirmed
            let total = document.createElement("H2");
            total.innerHTML = `${data.statewise[0].confirmed}`;
            document.getElementById("confirmed").appendChild(total);

            // Combined - Active
            let total_active = document.createElement("H2");
            total_active.innerHTML = `${data.statewise[0].active}`;
            // console.log(total_active);
            document.getElementById("active").appendChild(total_active);

            // Combined - Recovered
            let total_recovered = document.createElement("H2");
            total_recovered.innerHTML = `${data.statewise[0].recovered}`;
            // console.log(total_recovered);
            document.getElementById("recovered").appendChild(total_recovered);

            //Last update time
            let update = document.createElement("h4");
            update.innerHTML = `${data.statewise[0].lastupdatedtime}`;
            document.getElementById("update_time").appendChild(update);
        });
}

updateMap();
setInterval(function () {
    updateMap();
}, 3600000); // in every hours' 

