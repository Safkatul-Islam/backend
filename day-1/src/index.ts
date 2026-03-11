function greet(name: string): string {
    return `Hello, ${name}!`;
}

const userName: string = "Alex";

const message = greet(userName);

console.log(message);

console.log(greet("Shawn"));