(function($) {
    let wrapper = null;
    $.fn.parallaxWrapper = function() {
        this.css("overflow", "scroll").css("position", "relative");

        wrapper = this;
    }

    $.fn.parallaxMe = function(speed) {
        if (wrapper !== null || undefined || "") {
            let element = this;


            wrapper.scroll(function() {
                scrollTop = $(this).scrollTop();

                speeds = scrollTop / speed;

                element.css("-webkit-transform", "translateY(" + (speeds) + "px")
            })
            return element;
        } else {
            error = "you did not identify a wrapper element";
            alert(error)
            console.log(error);
        }
    };



}(jQuery))
