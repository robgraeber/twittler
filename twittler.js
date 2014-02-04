var hashTag = function(){
    var user = window.location.hash;
    user = user.replace(/#/g,"");
    return user;
}
var refreshTweets = function(postArray){
    var $body = $("#tweetBox");
    $body.html('');
    var index = postArray.length - 1;
    while(index >= 0){
      var tweet = postArray[index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.append("<a href='#"+tweet.user+"'><b>@" + tweet.user + ":</b></a> " + tweet.message);
      $tweet.append("<p>"+tweet.created_at+"</p>");
      $tweet.appendTo($body);
      index -= 1;
    }
    $(".tweet a").click(function(){
        setTimeout(function(){
            refreshPage();
        }, 0);
    });
};
var refreshPage = function (){
    var btn = $(".refreshBtn");
    var postArray;
    if(hashTag() === "" || hashTag() === undefined){
        postArray = streams.home;
    }else{
        postArray = streams.users[hashTag()];
       
    }
    refreshTweets(postArray);
};
$(document).ready(function(){
    refreshPage();
    btn.click(function(){
        setTimeout(function(){
        refreshPage();
        }, 0);
    });
});



