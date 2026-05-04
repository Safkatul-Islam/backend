interface User {
    id: number,
    name: string
}

interface order {
    id: number,
    product: string
}

async function fetchUser() {

    // dummy data
    const users: User[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Mark" },
        { id: 3, name: "John" },
        { id: 4, name: "Ruben" },
        { id: 5, name: "Lexi" },
    ]

    return new Promise((resolve) => {
        resolve(users.map(user => ({ id: user.id, name: user.name })));
    })
}

async function fetchOrder(userId:number) {
    
    // dummy data
    const products = [
        { id: 1, product: "Keyboard" },
        { id: 2, product: "Mouse" },
        { id: 3, product: "Monitor" },
        { id: 4, product: "Speaker" },
        { id: 5, product: "Printer" },
    ];

    return new Promise((resolve) => {
        resolve(products.filter(product => product.id === userId)
                        .map(product => ({ id: product.id, product: product.product })));
    })
}

async function getUserData() {
  const user = await fetchUser()
  const product = await fetchOrder(3);

  console.log(user)
  console.log(product)
}

getUserData();