import { imgsList } from '../static/imgs/imgs.mjs'
import { articleList } from '../static/viewpoint.mjs'

$(document).ready(() => {
  // let _randomIndex = Math.floor((Math.random()*imgsList.length)+1)
  // let newTabWrap_E = $('#new-tab-wrap')
  // newTabWrap_E.css('background', "url(" + imgsList[_randomIndex]['url'] + ") no-repeat center center").css('background-size', 'cover' )

  console.log('chrome', chrome, chrome.history)

  chrome.history.search({text: ''}, function(data) { 
    data.forEach(function(page) { 
     console.log(page.url); 
    }); 
  }); 

  const _body = $('body')
  let colorIndex = Math.floor((Math.random()*360))
  console.log('colorIndex', colorIndex)
  _body.css('background-image', "linear-gradient(" + colorIndex  + "deg, #44A08D, #093637)")

  const _randomArticleIndex = Math.floor((Math.random()*articleList.length))
  let newTabWrap_E = $('.main-ctx')
  console.log('_randomArticleIndex', _randomArticleIndex)
  newTabWrap_E.html(`${articleList[_randomArticleIndex].title} ——— ${articleList[_randomArticleIndex].author}`)




});