$(
    $(".burger-container").click(function() {
        if ($(this).parent().hasClass("opened"))
            $(this).parent().removeClass("opened");
        else
            $(this).parent().addClass("opened");
    })
)
