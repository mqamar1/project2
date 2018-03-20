
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

  $(document).on("click", "button.delete", handlePostDelete);
    // $(document).on("click", "button.edit", handlePostEdit);
      // Gets an optional query string from our url (i.e. ?post_id=23)
      var url = window.location.search;
      var postId;
      // Sets a flag for whether or not we're updating a post to be false initially
      var updating = false;
      var dataBackFromDb; // datacoming back from the db

        // JornalgContainer holds all of our posts
      var jornalContainer = $("#private-Jornalarea");

      getPosts();

      // Getting jQuery references to the post body, title, form, and category select


      // Adding an event listener for when the form is submitted
      $("#jsubmit").click(function handleFormSubmit(event) {


        // console.log("hi");

        var titleInput = $("#jtitle");
        var entryInput = $("#jentry");
        var linksInput = $("#jlink");
        var shareStatus=$('input[value]:checked').val()

        if (shareStatus == 0 || shareStatus == 1){

    //===========================================
         newPost = {
          title: titleInput.val().trim(),
          journal_entry: entryInput.val().trim(),
          links_images: linksInput.val().trim(),
          shareStatus:$('input[value]:checked').val()

        };
        console.log("NewPost 1 : ")
        console.log(newPost)
        // console.log(newPost); // I am setting newPost = newPost because newPost was set as a global vaiable on line 19.
        // after the onclick function is completed the value of the global var newPost will be the same..were updating the value
        newPost = newPost
        console.log("NewPost 2 : ")
        console.log(newPost)

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




///===============================================
      // getPosts();

      function getPosts(newPost) {
          $.get("/api/private", function(data) {
            dataBackFromDb = data;
            console.log(dataBackFromDb)
            // var dataBackFromDb = data.length;
                // console.log(dataBackFromDb[0].title)
            // this is what is coming back from the database
        });
      }

      //

// create row function for every jornal that is created
function initalizeRow(){
  // jornalContainer.empty();
  getPosts();
  createNewRow(dataBackFromDb)
  var jornalsToAdd=[];
    for (var i = 0; i < dataBackFromDb.length; i++){
      jornalsToAdd.push(createNewRow(dataBackFromDb[i]));
    }
    jornalContainer.append(jornalsToAdd);
}

// are the buttons created using data that is being send or with data that is coming back from the db
// customize row with dlt and edit button
function createNewRow(dataBackFromDb){
  // console.log(newPost)
  console.log("Data back from db")
  console.log(dataBackFromDb)
  var row = $("<div>");
  row.addClass("myjentry");
  row.append("<p> Titile :" + dataBackFromDb.title + "</p>");
  row.append("<p> "+ dataBackFromDb.journal_entry + "</p>");
  var deleteBtn = $("<button>");
  deleteBtn.text("x");
  deleteBtn.addClass("delete btn btn-danger");
  deleteBtn.attr("entryID", dataBackFromDb.id);
  console.log('deleteBtn with ID', deleteBtn)
  var editBtn = $("<button>");
  editBtn.text("EDIT");
  editBtn.addClass("edit btn btn-default");
    row.append(deleteBtn);
    row.append(editBtn);
    // row.data("dataBackFromDb", dataBackFromDb);
    jornalContainer.prepend(row);

    return row;
}


//---------------------------------------------------------

///--------------????? what goes in the ()
function handlePostDelete() {
  // console.log(escapeposts)
  console.log("DELETE button is clicked")
  var currentId = $(this).attr("entryID");
  console.log("currentId", currentId)
  // console.log("CURRENT POST IS BELOW")
  // console.log(currentId)
    // .parent()
    // .parent()
    // window.location.href ="api/private/:id";
  deletePost(currentId);
}


// This function does an API call to delete posts
///--------------????? what goes in the ()
function deletePost(id) {
  // console.log(id)
  $.ajax({
    method: "DELETE",
    url:"api/private/" + id
  })
    .then(function() {
      getPosts()// show me posts after deleting
      console.log("sending info to Db to delet this item and show updated page")
    });
}

//-----------------------------------------------------

// This function figures out which post we want to edit and takes it to the
// // Appropriate url
// function handlePostEdit() {
//   var currentPost = $(this)
//   alert("Edit button is clicked")
//   //   .parent()
//   //   .parent()
//   //   .data("post");
//   // window.location.href = "/cms?post_id=" + currentPost.id;
// }




// Update a given post, bring user to the blog page when done
// function updatePost(post) {
//   $.ajax({
//     method: "PUT",
//     url: "/api/private",
//     data: newPost
//   })
//     .then(function() {
//       window.location.href = "/private";
//     });
// }







    });
