'use strict'
var restartRef
var checkRef
var reRollRef
var numsRef
$(document).ready(init)

function init() {
  restartRef = $('#IdRestart')
  checkRef = $('#IdCheck')
  reRollRef  = $('#IdRe-Roll')
  numsRef  = $('.cNum')

  numsRef.on('click', toggleSelected)
  resetGame()
}

function toggleSelected(e) {
  $(this).toggleClass('cSelected')
}

function getRandom() {
  return Math.floor(Math.random() * 9) + 1
}

function resetGame() {
  $('.cNum').removeClass('cSelected')
  showSneetches()
}

function showSneetches() {
  $("#IdsneetchHost").html('')
  var count = getRandom()
  var $sneetches = []
  var sneetchName
  for (var i = 0; i < count; i++) {
    var imgText = '<img class="cImage" src="s' + i + '.png">'
    $sneetches.push($(imgText))
  }
  $("#IdSneetchHost").append($sneetches)
}
