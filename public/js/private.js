
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

        // JornalgContainer holds all of our posts
      var jornalContainer = $("#private-Jornalarea");

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

        if (shareStatus == 0 || shareStatus == 1){
        // event.preventDefault();

       //  var selValue = $('input[name=rbnNumber]:checked').val();
       // console.log(selValue);
        //
        // // Wont submit the post if we are missing a body or a title
        // if (!titleInput.val().trim() || !journal_entryInput.val().trim()) {
        //   return;
        // }
        // // Constructing a newPost object to hand to the database
         newPost = {
          title: titleInput.val().trim(),
          journal_entry: entryInput.val().trim(),
          links_images: linksInput.val().trim(),
          shareStatus:$('input[value]:checked').val()
        };


        // console.log(newPost); // I am setting newPost = newPost because newPost was set as a global vaiable on line 19.
        // after the onclick function is completed the value of the global var newPost will be the same..were updating the value
        newPost = newPost

          submitPost(newPost);

        } else{
          alert ("Please select either public or private before submiting");
        submitPost(newPost);
        }


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









      function submitPost(newPost) {
        $.post("/api/private", newPost, function() {
          // window.location.href = "/private";
          initalizeRow()
          alert("done")
        });
      }



// create row function for every jornal that is created
function initalizeRow(){
  // jornalContainer.empty();
   createNewRow(newPost)
  var jornalsToAdd=[];
    for (var i = 0; i < newPost.length; i++){
      jornalsToAdd.push(createNewRow(newPost[i]));
    }
    jornalContainer.append(jornalsToAdd);
}


// customize row with dlt and edit button
function createNewRow(newPost){
  var row = $("<div>");
  row.addClass("myjentry");
    row.append("<p> Titile :" + newPost.title + "</p>");
  var deleteBtn = $("<button>");
  deleteBtn.text("x");
  deleteBtn.addClass("delete btn btn-danger");
  var editBtn = $("<button>");
  editBtn.text("EDIT");
  editBtn.addClass("edit btn btn-default");
    row.append(deleteBtn);
    row.append(editBtn);
    jornalContainer.prepend(row);
    return row;
}





      // // $("#theDelete").on("click",)
      //
      //       function deleted(event){
      //       event.stopPropagation();
      //         var id = $(this).data("id");
      //         $.ajax({
      //           method: "DELETE",
      //           url: "api/private/:id"
      //         }).then(data);
      //       }




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
