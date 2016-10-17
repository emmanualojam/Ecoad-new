function tabList() {
    $(".pill-custom").click(function () {
        
        if ($(this).hasClass("active")) {
            return false;
        } else {
            $(".active").removeClass("active");
            $(this).addClass("active");
            var href = $("a", this).attr("href");
            $(".content").removeClass("show").addClass("hide");
            $(href).removeClass("hide").addClass("show");
        }
        
    });
    
}

tabList();