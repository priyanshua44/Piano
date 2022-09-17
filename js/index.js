$(".key").click(function () {
    var innerhtml = this.innerHTML;
    console.log(innerhtml)
    makesound(innerhtml)
    buttonAnimation(innerhtml)
})


$(document).keypress(function(event){
    makesound(event.key)
    buttonAnimation(event.key)
})


function makesound(finalkey) {

    switch (finalkey) {
        case ("a"):
            var audio = new Audio("./sounds/key01.mp3")
            audio.play()
            break;
        case ("b"):
            var audio = new Audio("./sounds/key02.mp3")
            audio.play()
            break;
        case ("c"):
            var audio = new Audio("./sounds/key03.mp3")
            audio.play()
            break;
        case ("d"):
            var audio = new Audio("./sounds/key04.mp3")
            audio.play()
            break;
        case ("e"):
            var audio = new Audio("./sounds/key05.mp3")
            audio.play()
            break;
        case ("f"):
            var audio = new Audio("./sounds/key06.mp3")
            audio.play()
            break;
        case ("g"):
            var audio = new Audio("./sounds/key07.mp3")
            audio.play()
            break;
        case ("h"):
            var audio = new Audio("./sounds/key08.mp3")
            audio.play()
            break;
        case ("i"):
            var audio = new Audio("./sounds/key09.mp3")
            audio.play()
            break;
        case ("j"):
            var audio = new Audio("./sounds/key10.mp3")
            audio.play()
            break;
        case ("k"):
            var audio = new Audio("./sounds/key11.mp3")
            audio.play()
            break;
        case ("l"):
            var audio = new Audio("./sounds/key12.mp3")
            audio.play()
            break;
        case ("m"):
            var audio = new Audio("./sounds/key13.mp3")
            audio.play()
            break;
        case ("n"):
            var audio = new Audio("./sounds/key14.mp3")
            audio.play()
            break;
        case ("o"):
            var audio = new Audio("./sounds/key15.mp3")
            audio.play()
            break;
        case ("p"):
            var audio = new Audio("./sounds/key16.mp3")
            audio.play()
            break;
        case ("q"):
            var audio = new Audio("./sounds/key17.mp3")
            audio.play()
            break;
        case ("r"):
            var audio = new Audio("./sounds/key18.mp3")
            audio.play()
            break;
        case ("s"):
            var audio = new Audio("./sounds/key19.mp3")
            audio.play()
            break;
        case ("t"):
            var audio = new Audio("./sounds/key20.mp3")
            audio.play()
            break;
        case ("u"):
            var audio = new Audio("./sounds/key21.mp3")
            audio.play()
            break;
        case ("v"):
            var audio = new Audio("./sounds/key22.mp3")
            audio.play()
            break;
        case ("w"):
            var audio = new Audio("./sounds/key23.mp3")
            audio.play()
            break;
        case ("x"):
            var audio = new Audio("./sounds/key24.mp3")
            audio.play()
            break;

        default:
            break;
    }
}

function buttonAnimation(currentkey) {
    var activebutton = $("." + currentkey);

    activebutton.addClass("pressed");

    setTimeout( function(){
        activebutton.removeClass("pressed");}, 100)

}