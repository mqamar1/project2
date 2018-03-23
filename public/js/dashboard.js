$(document).ready(function() {
  var blobs;
  var text;
  var reader = new FileReader();
  var url = window.location.search;
  var postId;
  var updating = false;

  $('#done-button').on('click', function () {
    var file = $('#myFile').src = window.URL.createObjectURL(curFiles[i])
    var fileReader = new FileReader();
      var fileType = $('#file-type').val();
      blobUtil.imgSrcToBlob(fileType).then(function (blob) {

      }).catch(function (err) {
        // error
      });
    });
});

  $("#jsubmit").click(function handleFormSubmit(event) {
    // await fun1

    var titleInput = $("#jtitle");
    var entryInput = $("#jentry");
    var linksInput = $("#jlink");
    var shareStatus=$('input[value]:checked').val();


    if (shareStatus == 0 || shareStatus == 1){

    var newPost = {
      title: titleInput.val().trim(),
      journal_entry: entryInput.val().trim(),
      links_images: linksInput.val().trim(),
      shareStatus:$('input[value]:checked').val()
    };

    //
    console.log(newPost);
      submitPost(newPost);

    } else{
      alert ("Please select either public or private before submiting");
    submitPost(newPost);
    }

  });

function submitPost(newPost) {
  $.post("/api/private", newPost, function() {
    // window.location.href = "/private";

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
      $("#private-Jornalarea").prepend(row);
    alert("done")
  });
};
