var browser_data = [
                        {
                            "browser" : "Internet Explorer",
                            "info"  : "Internet Explorer info",
                            "rating" : 2
                        },
                        {
                            "browser" : "Opera",
                            "info"  : "The Opera browser has some new tricks up its sleeve. Notable recent additions include a built-in VPN, an ad-blocker, and a battery-saver mode, all of which make it well worth downloading.",
                            "rating" : 3
                        },
                        {
                            "browser" : "FireFox",
                            "info"  : "Firefox can't be beat when it comes to customizability and features. It's also fast, secure, and protects your privacy. It's our Editors' Choice for Web browsers.",
                            "rating" : 5
                        },
                        {
                            "browser" : "Chrome",
                            "info"  : "Google's Chrome browser is speedy, includes leading standards support, strong security features, and a clean interface, but it's no longer the fastest browser and it lacks some features found in the competition.",
                            "rating" : 4
                        },
                        {
                            "browser" : "Safari",
                            "info"  : "Apple was widely criticized when it originally launched a very buggy and unstable version of Safari for Windows. Things have changed a lot since then however and Safari 5 has come a long way with introductions such as a new Reader icon for easier reading in one page, faster page load times and vastly improved HTML5 support for better video support and stability.",
                            "rating" : 3
                        },
                        {
                            "browser" : "Edge",
                            "info"  : "Microsoft's Edge Web browser is getting better and better. It aces the JavaScript benchmarks, has a clean interface, offers good security, and now supports extensions. But it still lacks some features found in more mature browsers.",
                            "rating" : 3
                        }
                    ];


/*
 *  JS - Exercises
 */

 //Sort the objects by their rating
 let sorted_data = browser_data.sort(function(obj1, obj2) {
   //descending
   return obj2.rating - obj1.rating;
 });

//Create a new array of just browser names
let browserNames = function() {
  let browserArray = [];
 for (let i of sorted_data){
   //insert browser name into new array
   browserArray.push(i.browser);
 }
 return browserArray;
}();

//Get the list where we want to put our browser names
let browserList = document.getElementById('browserList');

//insert the name in each list item
browserNames.forEach(function (browser) {
     let li = document.createElement("li");
     li.textContent = browser;
     browserText = browserList.appendChild(li);

     //find the rating for each browser and add the star symbol
     let rating = displayRatings(browser);
     for (let j = 1; j <= rating; j++){
        let i = document.createElement("i");
        $('i').addClass('fa fa-star');
        browserText.appendChild(i);
     }
 });

//jQuery method that is waiting for a click on a list item
 $(document).ready(function() {
    $("li").on('click', function() {
      //if there is already a list item with 'current' class - remove it
      if(!$("ul").hasClass("current")){
          $('li').removeClass("current");
      }
      //otherwise add the classes current and clicked
       $(this).addClass('current').addClass('clicked');

       //find the text that was clicked and find its object in the array
       let text = $(this).text();
       let obj = browser_data.find(o => o.browser === text);

       //Add the text info to the browser information div
       var paragraph = document.getElementById("browserInfo");
       paragraph.innerHTML = " <p>"+obj.info+"</p>";

        //check whether all list items have been clicked - if they have show the 'end message'
        if($("li").not(".clicked").length == 0 ) {
            $('#completeMessage').removeClass('notDisplay').addClass('display')
        }
    });
});

//function that is called when a list item is selected
function displayText(){
  $('#browserInfo').removeClass('notDisplay').addClass('display');
};

//function that gets the rating for each browser
function displayRatings(browser) {
  let obj = browser_data.find(o => o.browser === browser);
  let browserRating = obj.rating;
  return obj.rating;
}
