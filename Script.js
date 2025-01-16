// Example for crop recommendation functionality
document.getElementById("advisorForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const soilType = document.getElementById("soilType").value;
    const rainfall = document.getElementById("rainfall").value;
    const temperature = document.getElementById("temperature").value;

    let recommendation = "No recommendation available.";
    if (soilType === "loamy" && rainfall >= 200 && temperature >= 25) {
        recommendation = "Rice is a suitable crop.";
    } else if (soilType === "sandy" && rainfall <= 100 && temperature >= 30) {
        recommendation = "Millets are a good choice.";
    } else if (soilType === "clay" && rainfall >= 150 && temperature >= 20) {
        recommendation = "Wheat could be cultivated.";
    }

    document.getElementById("output").innerHTML = `<div class="alert alert-success">${recommendation}</div>`;
});
