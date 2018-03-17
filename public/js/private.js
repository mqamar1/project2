
// $(document).ready(function(){
//       var date_input=$('input[name="date"]'); //our date input has the name "date"
//       var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
//       var options={
//         format: 'mm/dd/yyyy',
//         container: container,
//         todayHighlight: true,
//         autoclose: true,
//       };
//       date_input.datepicker(options);
//
// //     })
    var titleInput = $("#jtitle");
    var entryInput = $("#jentry");
    var linksInput = $("#jlink");
    var shareStatus= $('input[value]:checked').val();

    var newPost = {
      title: titleInput.val().trim(),
      journal_entry: entryInput.val().trim(),
      links_images: linksInput.val().trim(),
      shareStatus:$('input[value]:checked').val()
    };


    $(document).ready(function() {

      // Gets an optional query string from our url (i.e. ?post_id=23)
      var url = window.location.search;
      var postId;
      // Sets a flag for whether or not we're updating a post to be false initially
      var updating = false;

      // If we have this section in our url, we pull out the post id from the url
      // In localhost:8080/cms?post_id=1, postId is 1
      // if (url.indexOf("?post_id=") !== -1) {
      //   postId = url.split("=")[1];
      //   getPostData(postId);
      // }



      // Getting jQuery references to the post body, title, form, and category select


      // Adding an event listener for when the form is submitted
      $("#jsubmit").click(function handleFormSubmit(event) {

        console.log("hi");

        var titleInput = $("#jtitle");
        var entryInput = $("#jentry");
        var linksInput = $("#jlink");
        var shareStatus=$('input[value]:checked').val()
        // event.preventDefault();

       //  var selValue = $('input[name=rbnNumber]:checked').val();
       // console.log(selValue);
        //
        // // Wont submit the post if we are missing a body or a title
        // if (!titleInput.val().trim() || !journal_entryInput.val().trim()) {
        //   return;
        // }
        // // Constructing a newPost object to hand to the database
        var newPost = {
          title: titleInput.val().trim(),
          journal_entry: entryInput.val().trim(),
          links_images: linksInput.val().trim(),
          shareStatus:$('input[value]:checked').val()
        };
        //
        console.log(newPost);
          submitPost(newPost);
            // console.log(newPost.shareStatus)
        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
      //   if (updating) {
      //     newPost.id = postId;
      //     updatePost(newPost);
      //   }
      //   else {
      //     submitPost(newPost);
      //   }
      });



    //   // Submits a new post
      function submitPost(newPost) {
        $.post("/api/private", newPost, function() {
          // window.location.href = "/private";

          var row = $("<div>");
            row.addClass("myjentry");
            row.append("<p> Titile :" + newPost.title + "</p>");
            // row.append("<p>" + newPost.journal_entry + "</p>");
            $("#private-Jornalarea").prepend(row);

          alert("done")
        });
      }

    //
    //   // Gets post data for a post if we're editing
      // function getPostData(id) {
      //   $.get("/api/posts/" + id, function(data) {
      //     if (data) {
      //       // If this post exists, prefill our cms forms with its data
      //       titleInput.val(data.title);
      //       bodyInput.val(data.body);
      //       postCategorySelect.val(data.category);
      //       // If we have a post with this id, set a flag for us to know to update the post
      //       // when we hit submit
      //       updating = true;
      //     }
      //   });
      // }

      // Update a given post, bring user to the blog page when done
      // function updatePost(post) {
      //   $.ajax({
      //     method: "PUT",
      //     url: "/api/posts",
      //     data: post
      //   })
      //     .then(function() {
      //       window.location.href = "/blog";
      //     });
      // }
    });
