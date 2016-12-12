$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/mamoore4.json',
    dataType: 'jsonp',
    success: function(response) {
      for(i = 0; i < response.courses.completed.length; i++)
      {
        console.log(response.courses.completed[i]);
        $('#badges').append("<div class='course'>" +
                            "<h3>" + response.courses.completed[i].title + "</h3>" +
                            "<img src='" + response.courses.completed[i].badge + "'/>" +
                            "<a href='" + response.courses.completed[i].url + "' target='_blank' class='btn btn-primary'>See Course</a>" +
                            "</div>");
      }
    }
  });

});
