document.addEventListener("DOMContentLoaded", function(event) {
    /* 
    Design to button and link what is in button because is convenient for me without i use pseudoclasses 
    */
    const COLOR_BG = "#95DEA5";
    const COLOR_BG_CHILDS = "#DFF0D8";
    const $body = document.querySelector("body");
    const $button = document.querySelector("button");
    const $a = document.querySelector("a");
    
    $body.style.backgroundColor = COLOR_BG;
    designNormal();
    
    function designNormal(){
        $a.style.textDecoration = "none";
        $a.style.color = "#000";
        $a.style.fontWeight = 300;
        $button.style.backgroundColor = COLOR_BG_CHILDS;
        $button.style.borderColor = "#767676";
    }
    
    function mouseOverButton (){
        const COLOR_WHITE = "#fff";
        $a.style.fontWeight = 900;
        $a.style.color = COLOR_WHITE;
        $button.style.backgroundColor = COLOR_BG;
        $button.style.borderColor = COLOR_WHITE; 
    }

    $button.addEventListener("mousemove", mouseOverButton); 
    $button.addEventListener("mouseout", designNormal);
});