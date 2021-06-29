import React from 'react'
import products from '../../api/products'

function getCartFromLocalStorage() {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
}

const CartContext = React.createContext()

function CartProvider({ children, match }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage())
  // const [itemTotal, setItemTotal] = React.useState(new Map());
  const [subTotal, setSubTotal] = React.useState(0)
  const [loanAmount, setLoanAmount] = React.useState(0)
  const [discount, setDiscount] = React.useState(0)
  const [downpayment, setDownpayment] = React.useState(0)
  const [product, setProduct] = React.useState({})
  const [cartItems, setCartItems] = React.useState(0)

  React.useEffect(() => {
    // local storage
    localStorage.setItem('cart', JSON.stringify(cart))
    // cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount)
    }, 0)
    setCartItems(newCartItems)

    // subTotal
    let newTotal = cart.reduce((subTotal, cartItem) => {
      return (subTotal += cartItem.amount * cartItem.installmentPrice)
    }, 0)
    newTotal = parseFloat(newTotal.toFixed(2))
    setSubTotal(newTotal)
  }, [cart])

  // Loan Amount
  // const newLoanAmount = (loanAmount, subTotal, discount, downpayment) => {
  //   return (loanAmount = subTotal - discount - downpayment);
  //   newLoanAmount = parseFloat(newLoanAmount.toFixed(2));
  //   setLoanAmount(newLoanAmount);
  // };

  // remove item
  const removeItem = (id) => {
    let newCart = [...cart].filter((item) => item.id !== id)
    setCart(newCart)
  }

  // increase amount
  const increaseAmount = (id, amount) => {
    if (amount >= products.countInStock) {
      return "Boshqa mahsulot qo'sha olmaysiz"
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount + 1 }
          : { ...item }
      })
      setCart(newCart)
    }
  }

  // decrease amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id)
      return
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      })
      setCart(newCart)
    }
  }

  //  add to cart
  const addToCart = (product) => {
    const { id, image, name, installmentPrice } = product
    const item = [...cart].find((item) => item.id === id)
    if (item) {
      increaseAmount(id)
      return
    } else {
      const newItem = { id, image, name, installmentPrice, amount: 1 }
      const newCart = [...cart, newItem]
      setCart(newCart)
    }
  }

  // add item
  const addItem = (product) => {
    const { id, name, installmentPrice } = product
    const item = [...cart]
  }
  // clear cart
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
