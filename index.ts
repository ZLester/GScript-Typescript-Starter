const greeter = (person: string) => {
    return `Hello, ${person}!`;
}
  
const testGreeter = () => {
    const user = 'World';
    Logger.log(greeter(user));
}
