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
}

const blink = () => {
    const tl = new gsap.timeline();
}

const move = (elements) => {
    const tl = new gsap.timeline({ onComplete: () => move(document.querySelectorAll('#leg-left, #leg-right')) });
    tl.to(elements, 1, { y: -100, stagger: 2, repeat: 0, yoyo: false })
    tl.to(elements, 1, { y: 0, stagger: 2, repeat: 0, yoyo: false }, 1)
}


//Master timeline
const master = new gsap.timeline();
master.add(bars())
master.add(move(document.querySelectorAll('#leg-left, #leg-right')))