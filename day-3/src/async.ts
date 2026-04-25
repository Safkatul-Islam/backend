async function fetchUser() {

    const user = await fetchUser();

    return new Promise((resolve) => {
        resolve({ id: user.id, name: user.name });
        console.log(user)
    })
}