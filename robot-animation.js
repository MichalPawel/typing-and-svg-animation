const bars = () => {
    const scale = () => {
        return Math.random() * 2 + 0.5
    }
    const color = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const tl = new gsap.timeline({ onComplete: bars });
    const voiceBars = document.getElementById('voice-bars')
    const barsElement = document.querySelectorAll('#voice-bars > *')
    tl.set(barsElement, { y: -30, transformOrigin: '50% 50%' })
    tl.to(barsElement, .5, { scaleY: scale, fill: color, repeat: 1, ease: 'linear', yoyo: true, stagger: { from: 'center', each: .01 } })
    //tl.to(bars, 1, { scaleY: '1', delay: 1, repeat: 0, stagger: 1 })

}

const blink = () => {
    const tl = new gsap.timeline();
}

const move = () => {
    const tl = new gsap.timeline();
}


//Master timeline
const master = new gsap.timeline();
master.add(bars())