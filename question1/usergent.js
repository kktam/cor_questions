
function isMobile() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var android = /android/.test(navigator.userAgent);
    var windowsphone = /Windows Phone|iemobile|WPDesktop/.test(navigator.userAgent);    
    return iOS || android || windowsphone;
}

function showOrHideElement(elm) {
    if (elm === undefined || elm == null) {
        return elm;
    }

    if (isMobile()) {
        $("#" + elm).hide();
    }
}

$(document).ready(function(){
    showOrHideElement("panel");
    $("").click(function(){
        $(this).hide();
    });
});