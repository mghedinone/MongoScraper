/* Note Taker (18.2.6)
 * front-end
 * ==================== */

// Loads results onto the page
function getResults() {
  // Empty any results currently on the page
  
  $.getJSON("/all", function(data) {
    // For each note...
    for (var i = 0; i < data.length; i++) {
      // ...populate #results with a p-tag that includes the note's title and object id
      $("#results").prepend("<p class='dataentry' data-id=" + data[i]._id + "><span class='dataTitle' data-id=" +
        data[i]._id + ">" + data[i].title + "</span><span class=deleter>X</span></p>");
    }
  });
}

// Runs the getResults function as soon as the script is executed
getResults();

