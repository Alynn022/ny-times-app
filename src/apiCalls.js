// const checkForError = (response) => {
//   if (response.status === 404) {
//     throw (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
//   } else if ((!response.ok && response.status >= 400) && response.status < 500) {
//     throw (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
//   } else if (!response.ok && response.status >= 500) {
//     throw (`${response.status} Error. Something went wrong. Please try again!`)
//   } else if (!response.ok){
//     throw (`${response.status} Error. Something went wrong! We're not sure either, sorry!!`)
//   } else {
//     return response.json()
//   }
// }

const getData = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jZ22oxAqRk631nZBDXRLnp6M5ckIfb2F')
    .then(response => {
      if(response.ok) {
      return response.json()
    }
  })
}


export default getData;