$(document).ready(function(){
    var input = $("#calcDisplay");
    $(".charbutton").bind("click", function(){
        var currentInput = input.val();
        var newInput = currentInput + $(this).data("char");
        input.val(newInput);
    });
    $(".equals").bind("click", function(){
        var output = calculate(input.val());
        input.val(output);
    })
    $(".clearbutton").bind("click", function(){
        input.val("");
    })
});
