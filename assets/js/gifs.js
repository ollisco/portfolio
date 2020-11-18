$(function() {

        $("#pandemic").hover(

            function() {
                $(this).attr("src", "images/pandemic-gif.gif");
                console.log(0);
            },
            function() {
                $(this).attr("src", "images/pandemic-startframe.png");
            }
        );
    });
$(function() {

    $("#sorting").hover(

        function() {
            $(this).attr("src", "images/quicksort-gif.gif");

        },
        function() {
            $(this).attr("src", "images/quicksort-startframe.png");
        }
    );
});
$(function() {

    $("#pathfinding").hover(

        function() {
            $(this).attr("src", "images/pathfinding-gif.gif");
            console.log(0);
        },
        function() {
            $(this).attr("src", "images/pathfinding-startframe.png");
        }
    );
});