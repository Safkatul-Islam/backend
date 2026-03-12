interface Product {
    id: number
    name: string
    price: number
}

interface CartItem{
    product: Product
    quantity: number
}

interface Cart{
    id: number
    items: CartItem[]
    checkedOut: boolean
}

const cart: Cart = {
    id: 1,
    items: [
        {product: { id: 1, name: "Laptop", price: 1500}, quantity: 2},
        {product: { id: 2, name: "Keyboard", price: 200}, quantity: 3}
    ],
    checkedOut: false
}

function calculateCartTotal(cart: Cart): number {
    if (cart.items.length === 0) {
        throw new Error("Cart is empty");
    }
    return cart.items.reduce((sum, currentItem) => {
        const itemTotal = currentItem.product.price * currentItem.quantity;
        return sum + itemTotal;
    }, 0);
}

console.log(calculateCartTotal(cart));