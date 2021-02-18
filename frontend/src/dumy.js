// =============== TO FIND BY CATEGORY FROM PRODUCT LIST ===============
// useEffect(() => {
//   async function fetchMyApi() {
//     var url = 'http://localhost:3001/products'
//     var res = await fetch(url)
//     var data = await res.json()
//     // const total = data[5].countInStock
//     var phones = data.filter(function (type) {
//       return type.category === 'Phone'
//     })
//     var total = () => {
//       var total = 0
//       for (var i = 0; i < phones.length; i++) {
//         total += phones[i].countInStock
//       }
//       return total
//     }
//     setPhoneCount(total)
//   }
//   fetchMyApi()
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [])
