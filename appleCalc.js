$(document).ready(function(){
    var input = $("#calcDisplay");
    $(".charbutton").bind("click", function(){
        /*this is what we want to append$(this).text();*/
        var currentInput = input.val();
        var newInput = currentInput + $(this).data("char");
        input.val(newInput);
    });
    $(".equals").bind("click", function(){
        var output = calculate(input.val());
        input.val(output);
    })
    $('.clearbutton').bind("click", function(){
        input.val("");
    });
    input.keyup(function(event){
        if (event.keyCode == 13){
            $(".equals").click();
        }
    });

});