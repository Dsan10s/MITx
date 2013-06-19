/**
 * A simple web inspector.
 *
 * Intended to be a singleton: this only exists once per page, so it
 * attaches itself to the BODY element.
 */
var Inspector = function($) {
  exports = {};

  // The root element of the inspector.
  var root = null;
  var inspectOn = false;
  var tag = null;
  var link = null;
  var template = ""
    + "<div class='tray'>"
    + "  <textarea class='text-editor'></textarea>"
    + "  <div class='property-editor'>"
    + "    <div class='node-lookup'>"
    + "      <input class='selector' /><input class='nth' />"
    + "      <button class='search-button'>Search</button>"
    + "      <button class='inspect-button'>Inspect element</button>"
    + "      <button class='toggle_handle'>Hide handle</button>"
    + "      <span>You can also press Ctrl + Shift + e to bring down the inspector</span>"
    + "    </div>"
    + "    <div class='property-list'>"
    + "    </div>" 
    + "    <div><p class='advice'>You can also toggle the inspector with Ctrl + Shift + e</p></div>"
    + "  </div>" 
    + "</div>" 
    + "<div class='handle'></div>";
  var toggle = function() {
      if (root.css("top") === "0px") {
        root.animate({ "top": "-300px" }, 500);
        $('#wrapper').animate({"top": "0px"}), 500;
        $('*').removeClass("highlighted");
      } else {
      root.animate({ "top": "0px" }, 500);
      $('#wrapper').animate({"top": "300px"}, 500);

    };
  };
  var toggleHandle = function(){
    if($('.inspector .handle').is(":visible")){
      $('.inspector .handle').hide();
      $('.node-lookup .toggle_handle').html("Show Handle");
    }else{
      $('.inspector .handle').show();
      $('.node-lookup .toggle_handle').html("Hide Handle");
    }
  }
  var searchBySelector = function() {
    var selectorBox = root.find(".selector");
    var selectorStr = selectorBox.val();
    var selection = $(selectorStr);
    var html = selection.html();
    var textEditor = root.find(".text-editor");
    textEditor.val(html);
    $('html').addClass("highlighted");
  };
  var clickInspect = function(evt){
    var target = $(evt.target);

    textEditor = root.find(".text-editor");
    textEditor.val(target.clone().wrap('<p>').parent().html());
    evt.stopPropagation();
  }

  var toggleInspect = function() {
      console.log("toggleInspect called");
      if (inspectOn) {
        inspectOn = false;
        console.log('enter');
        $('*').removeClass("highlighted");
        $('*').off("mouseenter", mouseEntered).off("mouseleave", mouseExited);
        $(".node-lookup .inspect-button").html("Inspect element");

      } else {
        inspectOn = true;
        console.log("exit");
        $("*").on("mouseenter", mouseEntered).on("mouseleave", mouseExited);
        $("*").on("click", clickInspect);
        $(".node-lookup .inspect-button").html("Inspect element on");

      };
  };

  var mouseEntered = function(evt) {
      var target = $(evt.target);
      $(".highlighted").removeClass("highlighted");
      console.log("entered", target);
      target.addClass("highlighted");
      tag = '<' + $(".highlighted").get(0).tagName.toLowerCase() + '>';

      if (tag == '<a>'){
        console.log("tag: " + tag);
        link = $('.highlighted').href;
        console.log("link: " + link);
        $('.highlighted').href="javascript: void(0)"
        console.log("new link: " + $('.highlighted').href);
      }
      
      evt.stopPropagation();

  };

  var mouseExited = function(evt) {
      var target = $(evt.target);
      console.log("exited", target);
      $(".highlighted").removeClass("highlighted");
      $(".highlighted").contents().wrap(tag);
      $('.highlighted').href = link;
      
  };

  /*
   * Construct the UI
   */
  exports.initialize = function() {
    root = $("<div class='inspector'></div>").appendTo($('body'));

    root.append(template); 
    /*var keys = { lenght: 0 };
    document.onkeydown = function(e){
      
    }*/
    $('body').keyup(function(event){
      if(event.keyCode == 17 && 16 && 69){
        toggle();
      }
    });
    $('.node-lookup .selector').keydown(function(event){
      if(event.keyCode == 13){
        searchBySelector();
      }
    })
    root.find(".handle").on("click", toggle);
    root.find(".node-lookup .toggle_handle").on("click", toggleHandle);
    root.find(".node-lookup .search-button").on("click", searchBySelector);
    root.find(".node-lookup .inspect-button").on("click", toggleInspect);
    //root.find('.handle').hide();
  };

  exports.toggle = toggle
  
  return exports;
};

/*****************************************************************************
 * Boot up the web inspector!
 *
 * This will enable you to COPY AND PASTE this entire file into any web page
 * to inspect it.
 *
 * XXX TODO!
 *  Change the CSS link below to point to the full URL of your CSS file!
 *
 *  You shouldn't need to touch anything else below.
 *
 *****************************************************************************/
(function() {
    var createInspector = function() {
      window.inspector = Inspector(jQuery);
      window.inspector.initialize();
    }

    // Add the CSS file to the HEAD
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', 'web-inspector.css'); // XXX TODO CHANGEME!!
    document.head.appendChild(css);

    if ('jQuery' in window) {
      createInspector(window.jQuery);
    } else {
      // Add jQuery to the HEAD and then start polling to see when it is there
      var scr = document.createElement('script');
      scr.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
      document.head.appendChild(scr);
      var t = setInterval(function() {
        if ('jQuery' in window) {
          clearInterval(t); // Stop polling 
          createInspector();
        }
      }, 50);
    }
})();