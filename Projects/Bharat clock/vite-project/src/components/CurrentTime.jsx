// using another method of function

let CurrentTime = () => {
    let time = new Date();

    return ( 
        <div className="lead">This is the current time: {time.toLocaleDateString()} -{" "} {time.toLocaleTimeString()}
        </div>   
         //toLocaleDateString: used to convert a date object into a human-readable string based on the user’s locale
    );
};

export default CurrentTime;