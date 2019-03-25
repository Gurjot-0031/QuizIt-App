
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
            "Vehicles",
            "Entertainment: Japanese Anime & Manga",
            "Celebrities","Geography","Politics","Science: Computers","Entertainment: Film","Entertainment: Music"
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
            "Vehicles",
            "Entertainment: Japanese Anime & Manga"
        );

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

    <option value="any">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals &amp; Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
        <option value="30">Science: Gadgets</option>
        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
        <option value="32">Entertainment: Cartoon &amp; Animations</option>

        var adultsTopicsValues = new Array(32,29,19,15,9,27,30,21,16,28,31,26,22,24,18,11,12);
        var teensTopicsValues = new Array(32,29,19,15,9,27,30,21,16,28,31);
        var childrenTopicsValues = new Array(32,29,19,15,9,27,30,18)''
        if(userType === "child"){
            console.log(childrenTopics[i].charAt(0)+childrenTopics[i].charAt(1));
            for (var i=0; i < childrenTopics.length;++i){
                addOption(document.drop_list.topic_list, childrenTopics[i], childrenTopicsValues[i]);


            }
            console.log(userType);
        }else if(userType === "teen"){

            for (var i=0; i < teensTopics.length;++i){
                addOption(document.drop_list.topic_list, teensTopics[i], teensTopicsValues[i]);
            }
            console.log(userType);
        }else if(userType === "adults"){

            for (var i=0; i < adultsTopics.length;++i){
                addOption(document.drop_list.topic_list, adultsTopics[i], adultsTopicsValues[i]);
            }
            console.log(userType);
        }



    }
