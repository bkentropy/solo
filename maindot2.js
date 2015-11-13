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
    $('.clear').on('click', liveOrDie);
    $('.step').on('click', bringToLife);
});

// Click to make life
var turnGreen = function() {
  var $el = $(this);
  $el
    .addClass("alive")
    .off("click", turnGreen)
    .on("click", death);
}

var death = function() {
  // console.log("YOOOOOO")
  var $el = $(this);
  $el
    .removeClass("alive")
    .off('click', death)
    .on("click", turnGreen)
  // $(this).removeClass("alive");
}

// Start building out the logic
// Build a map of the alive cells
var makeMap = function(row, column) {
  var map = [];
  var temp = []
  row = row || $('.row0');

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

  // Iterate over rows
  for ( var j = 0; j < row.children().length; j++ ) {
    colAnalyze($('.row'+j));
  }

  return map;
}


// Write a function that checks all of the neighbors 
  // This must be done in 'one step of time'
var checkNeighbors = function(r, c) {
  // keep count
  var total = 0;
  // use map to find neighbors
  var checkThis = makeMap();
  // check row above
  var topRow = function(r,c) {
    var neighbors = 0;
    if ( checkThis[r - 1] ) {
      if ( checkThis[r - 1][c - 1] === 1 ) {
        neighbors += 1;
      }
      if ( checkThis[r - 1][c] === 1) {
        neighbors += 1;
      }
      if ( checkThis[r - 1][c + 1] === 1) {
        neighbors += 1;
      }
    }
    return neighbors
  }
  // check sides
  var sides = function(r,c) {
    var neighbors = 0;
    if ( checkThis[r][c - 1] === 1 ) {
      neighbors += 1;
    }
    if ( checkThis[r][c + 1] === 1) {
      neighbors += 1;
    }
    return neighbors
  }
  // check row below
  var belowRow = function(r,c) {
    var neighbors = 0;
    if ( checkThis[r + 1] ) {
      if ( checkThis[r + 1][c - 1] === 1 ) {
        neighbors += 1;
      }
      if ( checkThis[r + 1][c] === 1) {
        neighbors += 1;
      }
      if ( checkThis[r + 1][c + 1] === 1) {
        neighbors += 1;
      }
    }
    return neighbors
  }

  total = topRow(r,c) + sides(r,c) + belowRow(r,c);

  return total
}
  

/*
start up stuff
var checkThis = makeMap($('.row0'))

*/


// If 2 or 3 neighbors are alive then keep class alive 
// else die. (from lonliness or overcrowding)
var liveOrDie = function() {
// iterate over whole matrix
  for ( var r = 0; r < rows; r++ ) {
    for ( var c = 0; c < columns; c++ ) {
      // pass this into something that checks top, sides, and botton
      if ( checkNeighbors(r,c) >= 3) {
        // kill the cell 
        $($('.row'+r).children()[c]).removeClass('alive')
      } else {
        // ignore, live
      }
    }
  } 
}

// If 3 neighbors of an empty space have alive class add life to the cell/div
var bringToLife = function() {
  for ( var r = 0; r < rows; r++ ) {
    for ( var c = 0; c < columns; c++ ) {
      // pass this into something that checks top, sides, and botton
      if ( checkNeighbors(r,c) === 3) {
        // kill the cell 
        $($('.row'+r).children()[c]).addClass('alive')
      } else {
        // ignore, live
      }
    }
  } 
}





// At each step, life persists in any location where it is also present in two or three 
// of the eight neighboring locations, and otherwise disappears (from loneliness or overcrowding). 
// Life is born in any empty location for which there is life in three of the eight neighboring 
// locations.


