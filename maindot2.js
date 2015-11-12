var rows = 10;
var columns = 10;
var $row = $("<div />", {
    class: 'ROWS'
});
var $square = $("<div />", {
    class: 'square'
});

$(document).ready(function () {
    $('#gameDiv').append($row);
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone().addClass("column" + i));
    }
    //clone the temp row object with the columns to the wrapper
    for (var j = 0; j < rows; j++) {
        $("#wrapper").append($row.clone().addClass("row" + j));
    }

    $('.square').on('click', turnGreen)


});

// Click to make life
var turnGreen = function() {
  // console.log("yoooooooo")
  $(this).css("background", "green")
  $(this).addClass("alive");
}

// Start building out the logic

// Build a map of the alive cells
// (Make sure to pass in something like $('.row0'))
var makeMap = function(row, column) {
  var map = [];
  var temp = []

  var colAnalyze = function(row) {
    for ( var i = 0; i < row.children().length; i++ ) {
      var square = row.children()[i]

      if ( square.classList.contains('alive') ) {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }
    map.push(temp);
    temp = []
    return map;
  }

  // Iter
  for ( var j = 0; j < row.children().length; j++ ) {
    colAnalyze($('.row'+j));
  }

  return map;
}


// Write a function that checks all of the neighbors 
  // This must be done in 'one step of time'

// If 2 or 3 neighbors are alive then keep class alive
  // else die. (from lonliness or overcrowding)

// If 3 neighbors of an empty space have alive class add life to the cell/div

// 




// At each step, life persists in any location where it is also present in two or three 
// of the eight neighboring locations, and otherwise disappears (from loneliness or overcrowding). 
// Life is born in any empty location for which there is life in three of the eight neighboring 
// locations.


