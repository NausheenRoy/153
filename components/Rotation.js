AFRAME.registerComponent("islandrotation", {
    schema: { speedofrotation: { type: 'number', default: 0 } },
    init: function () {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowRight') {
                if (this.data.speedofrotation < 0.1) {
                    this.data.speedofrotation += 0.01
                }
            }
            if (e.key == 'ArrowLeft') {
                if (this.data.speedofrotation > -0.1) {
                    this.data.speedofrotation -= 0.01
                }
            }

        })

    },
    tick: function () {
        var maprotation = this.el.getAttribute('rotation')
        maprotation.y += this.data.speedofrotation
        this.el.setAttribute('rotation', { x: maprotation.x, y: maprotation.y, z: maprotation.z })
    }
})

AFRAME.registerComponent("diverrotation", {
    schema: {
        speedofrotation: { type: 'number', default: 0 },
        speedascent: { type: 'number', default: 0 },

    },
    init: function () {
        window.addEventListener('keydown', (e) => {
            this.data.speedofrotation=this.el.getAttribute('rotation')
            this.data.speedascent=this.el.getAttribute('position')
            var diverrotation=this.data.speedofrotation
            var diverposition=this.data.speedascent
            if (e.key == 'ArrowRight') {
                if (diverrotation.x < 10) {
                    diverrotation.x += 0.5
                    this.el.setAttribute('rotation',diverrotation)
                }
            }
            if (e.key == 'ArrowLeft') {
                if (diverrotation.x > -10) {
                    diverrotation.x -= 0.5
                    this.el.setAttribute('rotation',diverrotation)
                }
            }
            if (e.key == 'ArrowUp') {
                if (diverrotation.z < 20) {
                    diverrotation.z += 0.5
                    this.el.setAttribute('rotation',diverrotation)
                }
                if (diverposition.y < 2) {
                    diverposition.y += 0.01
                    this.el.setAttribute('position',diverposition)
                }
            }
            if (e.key == 'ArrowDown') {
                if (diverrotation.z > -10) {
                    diverrotation.z -= 0.5
                    this.el.setAttribute('rotation',diverrotation)
                }
                if (diverposition.y > -2) {
                    diverposition.y -= 0.01
                    this.el.setAttribute('position',diverposition)
                }
            }
        })
    }
})