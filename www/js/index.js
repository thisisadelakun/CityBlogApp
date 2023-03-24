$(document).ready(function () {
    var rootUrl = 'https://newalaska-api-demo.000webhostapp.com';
    /**
    * wordpress url to retrieve all posts from our blog
    */
    const url = `${rootUrl}/wp-json/wp/v2/posts`;
    /**
    * wordpress url used to retrieve a token for authentication
    */
    var tokenUrl = `${rootUrl}/wp-json/jwt-auth/v1/token`;
    /**
    * in this custom scenario, we will be creating posts via admin
    * access however in complex cases you should be able to register
    * new users, the admin username and password is needed to retrieve
    * a token which will be attached
    * as headers to subsequent requests for authentication
    */
    var adminDet = {
        username: "theadelakun",
        password: 123456789
    };
    /**
   * variable to store token retrived from the api
 */
    var token;
    loadData();
    /**
    * ajax post request to retrieve the token once the app loads
    */
    $.post(tokenUrl, adminDet,
        function (data, status) {
            console.log("token: " + data.token);
            token = data.token;
        });
    /**
    * loadData() function makes a get request to retrieve
    * all posts from the wordpress blog
    */
    function loadData() {
        $.getJSON(url, function (data) {
            console.log(data);
            /**
  * removes the spinner once a response is gotten from the api
  */
            $("#spinner").remove();
            /**
            * ensures that the div tag with id= mainDiv
            * is empty before appending innerHtml to it
            */
            $("#mainDiv").empty();
            /**reiterates through each list in the json oblect
            * while appending it to the div tag with id= mainDiv
            */

            for (var i = 0; i < data.length; i++) {
                var div = document.createElement('div');
                div.innerHTML = `
                <div class="card-col pt-1">
                    <div class="card-body">
                        <div class="card-title-col">
                            <h4 class="card-title">${data[i].title.rendered}</h4>
                        </div>
                
                        <div class="card-content">
                            <p class="card-text textwrap">${data[i].content.rendered}</p>
                        </div>
                    </div>
                </div>
                `;
                $("#mainDiv").append(div);
            };
        });
    }

    /**
    * on form submission
    * submits the required parameters to create a new post in the
    * wordpress blog
    */
    $('form').submit(function (event) {
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
        // get the form data
        // there are many ways to get this data using jQuery (you can use theclass or id also)

        var formData = {
            title: $('input[name=title]').val(),
            content: $('textarea[name=content]').val(),
            status: 'publish'
        };
        console.log(formData);


        $.ajax({
            url: url,
            method: 'POST',
            data: JSON.stringify(formData),
            crossDomain: true,
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function (data) {
                let clearData = document.querySelector("#success-col");
                let secondContainerCleared = document.querySelector("#secondDiv-col");

                if (secondContainerCleared.style.display === "none") {
                    secondContainerCleared.style.display = "inline";
                    clearData.style.display = "none";
                } else {
                    secondContainerCleared.style.display = "none";
                    clearData.style.display = "inline";
                }
                console.log(data);
                /**
                * refreshes app-content to display latest posts
                */
                loadData();
            },
            error: function (error) {
                console.log(error);
            }
        });

    });
});