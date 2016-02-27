'use strict'
var $restartRef
var $checkRef
var $reRollRef
var $numsRef
var sneetchCount = 0
var runningTotal=0
var reRolls = 3
$(document).ready(init)

function init() {
  // style='background-color:#4ac0e8'
  $restartRef = $('#IdRestart')
  $checkRef = $('#IdCheck')
  $reRollRef  = $('#IdReRoll')
  $numsRef  = $('.cNum')

  $reRollRef.click(function(e) {
    $reRollRef.text('Re-Roll (' + (reRolls-1) + ' left)')
    if (reRolls > 1) {
      reRolls--
      showSneetches()
    }
  })

  $checkRef.click(function(e) {
    console.log(runningTotal + '/' + sneetchCount)
    if (runningTotal === sneetchCount) {
      $('.cSelected').off("click")
      $('.cSelected').addClass("cUseLess")
      $('.cSelected').toggleClass("cSelected")
      runningTotal = 0
      // Use off to disable the used numbers
      // And change their data

      //console.log('#done:' + $numsRef.hasClass('cSelected').length)
      showSneetches()
    } else {
      alert('Not yet!')
    }
  })

  $restartRef.click(function(e) {
    resetGame()
  })

  $numsRef.click(function(e) {
    var cur = $(this)
    if (cur.hasClass('cSelected')) {
      runningTotal += cur.data('num')*-1
    } else {
      runningTotal += cur.data('num')*1
    }
    cur.toggleClass('cSelected')
  })
  resetGame()
}

function toggleSelected(e) {
  $(this).toggleClass('cSelected')
}

function getRandom() {
  return Math.floor(Math.random() * 9) + 1
}

function resetGame() {
  runningTotal = 0

  $('.cNum').removeClass('cUseLess')
  $('.cNum').removeClass('cSelected')
  showSneetches()
}

function showSneetches() {
  $("#IdSneetchHost").html('')
  sneetchCount = getRandom()

  var $sneetches = []
  var sneetchName
  for (var i = 0; i < sneetchCount; i++) {
    var imgText = '<img class="cImage" src="s' + i + '.png">'
    $sneetches.push($(imgText))
  }
  $("#IdSneetchHost").append($sneetches)
}
