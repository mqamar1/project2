$(document).ready(function() {
        getPosts();
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);

  var url = window.location.search;
  var postId;

  var updating = false;

  var jornalContainer = $("#private-Jornalarea");

  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }



  var titleInput = $("#jtitle");
  var entryInput = $("#jentry");
  var linksInput = $("#jlink");
  var shareStatus = $('input[value]:checked').val()


  $("#jsubmit").click(function handleFormSubmit(event) {
    event.preventDefault();

    if (!titleInput.val().trim() || !entryInput.val().trim()) {
      return;
    }

    var //===========================================
      newPost = {
        title: titleInput.val().trim(),
        journal_entry: entryInput.val().trim(),
        links_images: linksInput.val().trim(),
        shareStatus: $('input[value]:checked').val()

      };



  });
  ///===================================================


  function submitPost(newPost) {
    $.post("/api/private", newPost, function() {
      // window.location.href = "/private";


      alert("done")
    });
  }




  ///===============================================
  // getPosts();

  function getPosts(newPost) {
    $.get("/api/private", function(data) {
      dataBackFromDb = data;


      initalizeRow(dataBackFromDb);

    });
  }

  //

  // create row function for every jornal that is created
  function initalizeRow(dataBackFromDb) {



    var jornalsToAdd = [];
    for (var i = 0; i < dataBackFromDb.length; i++) {
      jornalsToAdd.push(createNewRow(dataBackFromDb[i]));

    }
    jornalContainer.empty();
    jornalContainer.append(jornalsToAdd);
  }


  function createNewRow(dataBackFromDb) {

    console.log(dataBackFromDb)
    var row = $("<div>");
    row.addClass("myjentry");
    row.append("<p> Title : " + dataBackFromDb.title + "</p>");
    row.append("<p> Journal Entry : " + dataBackFromDb.journal_entry + "</p>");
    row.append("<p> Image Links : " + dataBackFromDb.links_images + "</p>");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    deleteBtn.attr("entryID", dataBackFromDb.id);
    // console.log('deleteBtn with ID', deleteBtn)
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    editBtn.attr("entryID", dataBackFromDb.id);
    // console.log('Edit with ID', editBtn)
    row.append(deleteBtn);
    row.append(editBtn);
    // row.data("dataBackFromDb", dataBackFromDb);
    jornalContainer.append(row);

    return row;
  }


  //---------------------------------------------------------

  ///--------------????? what goes in the ()
  function handlePostDelete() {

    var currentId = $(this).attr("entryID");

    deletePost(currentId);
  }


  // This function does an API call to delete posts
  ///--------------????? what goes in the ()
  function deletePost(id) {
    // console.log(id)
    $.ajax({
        method: "DELETE",
        url: "api/private/" + id
      })
      .then(function() {
        getPosts() // show me posts after deleting

      });
  }

  //-----------------------------------------------------

  function handlePostEdit() {
    var currentId = $(this).attr("entryID")

    window.location.href = "/dashboard?post_id=" + currentId;
    updatePost(currentId, newPost);
  }



  function updatePost(id, newPost) {

    $.ajax({
        method: "PUT",
        url: "/api/private/",
        data: newPost
      })
      .then(function() {
        window.location.href = "/dashboard";
      });
  }


  function getPostData(id) {
    $.get("/api/private/" + id, function(data) {
      if (data) {
        console.log(data)

        titleInput.val(data.titleInput);
        entryInput.val(data.entryInput);
        linksInput.val(data.linksInput);

        updating = true;
        console.log("Updating - getPost Data", updating)

      }
    });
  }







  //
  // var titleInput = $("#jtitle");
  // var entryInput = $("#jentry");
  // var linksInput = $("#jlink");
  // var shareStatus=$('input[value]:checked').val()








});
