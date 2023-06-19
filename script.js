const notes = ["c","c-f","d","d-f","e","f","f-f","g","g-f","a","a-f","b"]

notes.map( keyName => {
    const keyEle = document.createElement("div")
    keyEle.id = keyName
    keyEle.className = "key "
    keyEle.className += ( keyName.length == 1 ? "white" : "black" )
    document.querySelector("#piano").append(keyEle)
})

const playNote = note => {
    console.log(note)
    if (notes.includes(note)) {
        const noteAudio = new Audio(`./notes/${note}.mp3`);
        document.querySelector(`#${note}`).animate(
            [
                {
                    transform: 'translateY(0)',
                    boxShadow: '0 5px 0 #0000007e'
                },
                {
                    transform: 'translateY(5px)',  
                    boxShadow: '0 -5px 0 #000000'
                }
            ],
            { duration: 150 }
        );
        noteAudio.play()
    }
}

document.querySelectorAll(".key").forEach( key => {
    key.addEventListener("click", e => playNote(e.target.id))
})

document.addEventListener("keypress", (e) => {
    const azertyKeyboardKeys = ["q","z","s","e","d","f","t","g","y","h","u","j"]
    if (azertyKeyboardKeys.includes(e.key)) {
    }
    playNote(notes[azertyKeyboardKeys.indexOf(e.key)])  
})
