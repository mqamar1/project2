var number;



var i = 0;
var txt = 'The Public Page';
var speed = 500;



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typethis").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


  function getpublicinfo(id) {
    $.get("/api/public", function(data) {
    if (data) {

        function ranum (){
           var dbsize = data.length;
           number = Math.floor(Math.random() * dbsize);
           console.log(number)
           return (number);
           }
          
      ranum();
       $('.1').html(data[number].title);
       $('.text1').html(data[number].img);
      ranum();
       $('.2').html(data[number].title);
       $('.text2').html(data[number].journal_entry);
      ranum();
       $('.3').html(data[number].title);
       $('.text3').html(data[number].img);
      ranum();
       $('.4').html(data[number].title);
       $('.text4').html(data[number].journal_entry);
       ranum();
       $('.6').html(data[number].title);
       $('.text6').html(data[number].journal_entry);
       ranum ();
       $('.7').html(data[number].title);
       $('.text7').html(data[number].img);
       ranum();
       $('.8').html(data[number].title);
       $('.text8').html(data[number].journal_entry);
       ranum();
       $('.9').html(data[number].title);
       $('.text9').html(data[number].img);
       
        
    
      }
    });
  }

    // This "document.ready" code isn't necessary in this example... but is useful to become familiar with.
    // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
    $(document).ready(function() {

      // Here we use jQuery to select the header with "click-me" as its ID.
      // Whenever it is clicked...
      $(".box").on("click", function() {

        // ... we trigger an alert.
        alert("This will take you to that person's Public content");
      });

       $(".list").on("click", function() {

        // ... we trigger an alert.
        alert("This will take you to your message");
      });

    });

  typeWriter();  
  getpublicinfo();
