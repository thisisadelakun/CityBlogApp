$(document).ready(function () {
    // $("form").submit(function(){
    //     alert("Submitted");
    // });

    $('#btn-create-post')
        .on('click', function () {
            let homeContainer = document.querySelector("#homeDiv")
            let secondContainer = document.querySelector("#secondDiv")
            let btnCreatePost = document.getElementById("btn-create-post")

            if (homeContainer.style.display === "none") {
                homeContainer.style.display = "inline";
                secondContainer.style.display = "none";
            } else {
                homeContainer.style.display = "none";
                btnCreatePost.style.display = "none";
                secondContainer.style.display = "inline";
            }

            console.log("clicked")

        });

    $('#go-to-blog')
        .on('click', function () {
            let clearData = document.querySelector("#success-col");
            let firstContainer = document.querySelector("#firstDiv")
            let btnSubmitReturn = document.getElementById("go-to-blog")

            if (clearData.style.display === "none") {
                clearData.style.display = "inline";
                firstContainer.style.display = "none";
            } else {
                clearData.style.display = "none";
                btnSubmitReturn.style.display = "none";
                firstContainer.style.display = "inline";
            }

            console.log("clicked")

        });

    $('#btn-submit-read')
        .on('click', function () {
            let homeContainer = document.querySelector("#homeDiv")
            let firstContainer = document.querySelector("#firstDiv")
            let btnSubmitRead = document.getElementById("btn-submit-read")

            if (homeContainer.style.display === "none") {
                homeContainer.style.display = "inline";
                firstContainer.style.display = "none";
            } else {
                homeContainer.style.display = "none";
                btnSubmitRead.style.display = "none";
                firstContainer.style.display = "inline";
            }

            console.log("clicked")

        });

    $('#btn-submit-post')
        .on('click', function () {
            let firstContainer = document.querySelector("#firstDiv")
            let secondContainer = document.querySelector("#secondDiv")
            let btnSubmitPost = document.getElementById("btn-submit-post")

            if (firstContainer.style.display === "none") {
                firstContainer.style.display = "inline";
                secondContainer.style.display = "none";

            } else {
                firstContainer.style.display = "none";
                btnSubmitPost.style.display = "none";
                secondContainer.style.display = "inline";
            }

            console.log("clicked")

        });


    $('#arrow-left').click(function (e) {
        e.preventDefault();
        window.history.go(0);
    });

    $('#arrow-right').click(function (e) {
        e.preventDefault();
        window.history.go(0);
    });

});
