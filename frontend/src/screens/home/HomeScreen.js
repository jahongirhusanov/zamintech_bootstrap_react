import React, { useState, useEffect } from 'react'

function HomeScreen() {
  const [state, setState] = useState({
    loading: true,
    prod: null,
  })

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(async () => {
  //   const url = 'http://localhost:3001/products'
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   console.log(data)
  //   setState({
  //     prod: data,
  //     loading: false,
  //   })
  // }, [])

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/products'
      const res = await fetch(url)
      const data = await res.json()
      setState({
        prod: data,
        loading: false,
      })
    }
    fetchMyApi()
  }, [])

  return (
    <>
      {state.loading ? <div>loading...</div> : <div>{state.prod[0].name}</div>}
    </>
  )
}

export default HomeScreen
