function calculateOrderTotal(price: number, quantity: number, taxRate: number): object {

  if (price < 0) {
    throw new Error("Invalid price")
  }

  if (quantity < 0) {
    throw new Error("Invalid quantity")
  }

  if (taxRate < 0) {
    throw new Error("Invalid tax rate")
  }

  const subTotal = price * quantity
  const tax = subTotal * taxRate

  return {
    subTotal: subTotal,
    tax: tax.toFixed(2),
    total: subTotal + tax
  }
}

const total = calculateOrderTotal(50, 3, 0.07)

console.log(total)