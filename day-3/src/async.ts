interface User {
    id: number,
    name: string
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

async function getUserData() {
  const user = await fetchUser()

  console.log(user)
}

getUserData();