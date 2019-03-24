

function getAge(){
    document.addEventListener('submit',function (e) {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var userType =null;
        if (age<=12){
            userType = "child";
        }
        else if(age<=19 && age>=13)
            userType = "teen";
        else
            userType = "adults";

        console.log(userType);
        //going to the next page
        localStorage.setItem("userType",userType);
        window.location.assign("topic.html");
    })

   // getTopics(age)

}

function getTopics(userType) {
    var childrenTopis = [
        "Entertainment: Cartoon & Animations",
        "Entertainment: Comics",
        "Science: Mathematics",
        "Entertainment: Video Games",
        "General Knowledge",
        "Animals",
        "Science: Gadgets",
        "Science: Computers"
    ];

    var teensTopics = [
        "Entertainment: Cartoon & Animations",
        "Entertainment: Comics",
        "Science: Mathematics",
        "Entertainment: Video Games",
        "General Knowledge",
        "Animals",
        "Science: Gadgets",
        "Sports",
        "Entertainment: Board Games",
        "Sports",
        "Vehicles",
        "Entertainment: Japanese Anime & Manga"
    ];

    var adultsTopics = [
        "Entertainment: Cartoon & Animations",
        "Entertainment: Comics",
        "Science: Mathematics",
        "Entertainment: Video Games",
        "General Knowledge",
        "Animals",
        "Science: Gadgets",
        "Sports",
        "Entertainment: Board Games",
        "Sports",
        "Vehicles",
        "Entertainment: Japanese Anime & Manga",
        "Sports",
        "Celebrities"
    ];
    if (age<=12) {

    }
}