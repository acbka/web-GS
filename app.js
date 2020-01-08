var tl = new TimelineMax();



tl.from(".text", 3, {alpha: 0, opacity: 1})
    .from(".smooth", 1.5, {alpha: 0, ease: Back.easeInOut, y: -20}, "-=2")
    .from(".from", 1.5, {alpha: 0, ease: Back.easeInOut, y: 20}, "-=2")
    .from(".k333", 1.5, {alpha: 0, ease: Back.easeInOut, y: 20}, "-=2")
    .from(".month", 1.5, {alpha: 0, ease: Back.easeInOut, y: 20}, "-=2")
    .from(".arrow", .3, {alpha: 0, opacity: 1, repeat: 8, yoyo: true}, "-=.5")


