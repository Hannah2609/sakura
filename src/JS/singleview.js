const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://sibqcdhthioufhaicwtr.supabase.co/rest/v1/Events_sakurafestival?q={"id":"${id}"}`;

const options = {
  headers: {
     'x-apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpYnFjZGh0aGlvdWZoYWljd3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NjY2NDIsImV4cCI6MTk5NDU0MjY0Mn0.ok8JScbWc_UQlhYc0UI3306aWJYFhl2a7zBfENidiSg"
  }
};


function hentData() {
  fetch(url, options)
    .then((respons) => respons.json())
    .then(events => visEvent(events[0]))
  console.log(url)
  console.log(id)
}

function visEvent(event) {
  document.querySelector(".h1").textContent = event.navn;
  document.querySelector(".h1_product").textContent = "Titel: " + produkt.titel;
  document.querySelector(".cover").src = "anbefalinger/" + produkt.photo;
  document.querySelector(".h2_product2").textContent =
    "Udgivelsesår: " + produkt.year;
  document.querySelector(".h2_product3").textContent =
    "Længde: " + produkt.length;
  document.querySelector(".h2_product4").textContent =
    "Platform: " + produkt.platform;
  document.querySelector(".h2_product5").textContent = "Type: " + produkt.type;
  document.querySelector(".p_product").textContent =
    "Beskrivelse: " + produkt.description;
  document.querySelector(".platformlink").href = produkt.link;
}

hentData();
