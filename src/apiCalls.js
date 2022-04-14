const getData = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jZ22oxAqRk631nZBDXRLnp6M5ckIfb2F')
    .then(response => {
      if(response.ok) {
      return response.json()
    }
  })
}

export default getData;