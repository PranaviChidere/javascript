function fetchData(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      let result = processData(data);
      displayResult(result);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function processData(data) {
  let total = 0;
  data.items.forEach((item) => {
    total += item.value;
  });
  return { count: data.items.length, total: total };
}

function displayResult(result) {
  const output = document.getElementById("output");
  output.innerHTML =
    "<h2>Results</h2><p>Total: " +
    result.total +
    "</p><p>Count: " +
    result.count +
    "</p>";
}

function init() {
  const button = document.getElementById("fetchButton");
  button.addEventListener("click", () => {
    const url = document.getElementById("apiUrl").value;
    if (url) {
      fetchData(url);
    } else {
      alert("Please enter a URL");
    }
  });
}

window.onload = init;
