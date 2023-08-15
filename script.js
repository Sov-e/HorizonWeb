const getData = async () => {
  const rawResp = await fetch('https://servers-frontend.fivem.net/api/servers/single/lbjmv7', {
  method: 'GET',
  mode:'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  });
  const { Data } = await rawResp.json();
  return Data
}

  
window.addEventListener("load", async () => {
  const { clients, sv_maxclients } = await getData()
  document.querySelector(".topnavright").textContent = `Players: ${clients}/${sv_maxclients}`
  
setInterval(async () => {
const { clients, sv_maxclients } = await getData()
document.querySelector(".topnavright").textContent = `Players: ${clients}/${sv_maxclients}`

}, 5000); 

})