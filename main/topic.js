function runFunction() {

    document.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("JEYA"+e.target);
        //getting userType from local storage
        const userType = JSON.parse(localStorage.getItem("userType"));
    })
}