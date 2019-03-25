
    document.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(e.target);
        //getting userType from local storage
        const user = localStorage.getItem("userType");
        console.log(user);


        //saving to local storage getting the category
        var e = document.getElementById("comboBox");
        var category  = e.options[e.selectedIndex].value;
        localStorage.setItem("category",category);

        if (user==="adults"){
            window.location.assign("adult.html");
        }
        else if (user==="teen"){
            window.location.assign("teen.html");
        }
        else window.location.assign("teen.html");



    })

    //used by the addOption_list method to dynamically add options to the select view
    function addOption(selectBox,text,value )
    {
        var optn = document.createElement("Option");
        optn.text = text;
        optn.value = value;
        selectBox.options.add(optn);
    }

    //uses the addOption method to dynamically add options to the select view
    function addOption_list(){
        //test
        var userType = localStorage.getItem("userType");
        var childrenTopics = new Array(
            "Entertainment: Cartoon & Animations",
            "Entertainment: Comics",
            "Science: Mathematics",
            "Entertainment: Video Games",
            "General Knowledge",
            "Animals",
            "Science: Gadgets",
            "Science: Computers"
    );

        var teensTopics = new Array(
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
        );

        var adultsTopics = new Array(
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
        );

        if(userType === "child"){

            for (var i=0; i < childrenTopics.length;++i){
                addOption(document.drop_list.topic_list, childrenTopics[i], childrenTopics[i]);


            }
            console.log(userType);
        }else if(userType === "teen"){

            for (var i=0; i < teensTopics.length;++i){
                addOption(document.drop_list.topic_list, teensTopics[i], teensTopics[i]);
            }
            console.log(userType);
        }else if(userType === "adults"){

            for (var i=0; i < adultsTopics.length;++i){
                addOption(document.drop_list.topic_list, adultsTopics[i], adultsTopics[i]);
            }
            console.log(userType);
        }



    }
