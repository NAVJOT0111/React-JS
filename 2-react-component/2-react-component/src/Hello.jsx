function Hello(){

    let myName = "Navjot";
    let number = 456;

    // using a method
    let fullName = () => {
        return "Navjot Kaur";
    }
    return <h3>
        Message Number: {number} <br />
        Hello, This is the future speaking. I am your master {fullName()} </h3>
}

export default Hello;