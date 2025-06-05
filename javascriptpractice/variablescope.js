// variable scope
//var
function biodata() {
    var myfirstname = "dk"
    console.log(myfirstname);

    if (true) {
        var mylastname = "kumar";
        console.log('inner ' + myfirstname);
        console.log('inner ' + mylastname);
    }
    console.log('innerouter ' + mylastname);
}
biodata();

// let scope
function biodatalet() {
    let myfirstname = "dk"
    console.log(myfirstname);

    if (true) {
        let mylastname = "kumar";
        console.log('inner ' + myfirstname);
        console.log('inner ' + mylastname);
    }
    // console.log('innerouter ' + mylastname);
}
biodatalet();

// const scope
function biodataconst() {
    const myfirstname = "dk"
    console.log(myfirstname);

    if (true) {
        const mylastname = "kumar";
        console.log('inner ' + myfirstname);
        console.log('inner ' + mylastname);
    }
    // console.log('innerouter ' + mylastname);
}
biodataconst();