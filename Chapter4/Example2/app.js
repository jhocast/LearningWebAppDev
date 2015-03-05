var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    var words = {
        "3": "fizz",
        "5": "buzz"
    };

    function fizzbuzz_1(obj){
        var numbers = createArray(1, 100);
        var len = numbers.length,
            keys = Object.keys(obj),
            keyLen = keys.length,
            resultArray = [];
        for (i = 0; i < len; i++){
            var temp = "",
                found = false;
            for (x = 0; x < keyLen; x++){
                if (numbers[i] %parseInt(keys[x], 10)===0){
                    if(found){
                        temp += obj[keys[x]];
                    } else {
                        temp = obj[keys[x]];
                    }
                    found = true;
                } else {
                    if (x===0 && temp == "") {
                        temp += numbers[i];
                    }
                }
            }
            resultArray[i] = temp;
        }
        return resultArray;
    };

    console.log(fizzbuzz_1(words));
};

$(document).ready(main);
