function calculateOrderTotal(price: number, quantity: number, taxRate: number): Number {
    const subTotal: number = price * quantity;
    const tax: number = subTotal * taxRate;
    return subTotal + tax;
}

const total = calculateOrderTotal(50, 3, 0.07);

console.log(total);