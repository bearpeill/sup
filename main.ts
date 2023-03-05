input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello  bear")
})
basic.forever(function () {
    music.playMelody("C5 G E F B C D G ", 120)
})
