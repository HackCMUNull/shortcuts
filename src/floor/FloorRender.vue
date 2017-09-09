<template>
  <div ref="canvasContainer" class="canvas-container">
    <canvas ref="canvas" @click="canvasClick">
      Your browser does not support nyan cats.
    </canvas>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        points: [],
        image: '/static/image.png',
        imageInstance: null
      }
    },
    methods: {
      canvasClick (e) {
        const canvasPos = this.getCursorPosition(e)
//        const imageWidth = this.imageInstance.width
//        const imageHeight = this.imageInstance.height

        this.points.push({
          x: canvasPos.x / this.canvas.width,
          y: canvasPos.y / this.canvas.height
        })
        console.log(canvasPos)
      },
      getCursorPosition (e) {
        let mx, my
        if (e.pageX || e.pageY) {
          mx = e.pageX
          my = e.pageY
        }
        else {
          mx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
          my = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        mx -= this.canvasContainer.offsetLeft
        my -= this.canvasContainer.offsetTop + 64
//        console.log(this.canvasContainer.offsetTop)
        return {x: mx, y: my}
      },
      clearCanvas () {
        this.context.save()
        this.context.setTransform(1, 0, 0, 1, 0, 0)
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.restore()
      },
      drawImage (callback) {
        this.imageInstance = new Image()
        const self = this
        this.imageInstance.onload = function () {
          self.context.drawImage(this, 0, 0, self.canvas.width, self.canvas.height)
          callback()
        }
        this.imageInstance.src = this.image
      },
      drawPoints () {
        const ctx = this.context
        const canvas = this.canvas
        const strokeStyle = ctx.strokeStyle
        const fillStyle = ctx.fillStyle
        const lineWidth = ctx.lineWidth
        const lineCap = ctx.lineCap
        ctx.strokeStyle = 'rgba(65, 199, 244, 0.6)'
        ctx.fillStyle = 'rgba(66, 164, 244, 0.9)'
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        let lastPoint = null
        this.points.forEach((point) => {
          const x = point.x * canvas.width
          const y = point.y * canvas.height

          if (lastPoint !== null) {
            ctx.beginPath()
            ctx.moveTo(lastPoint.x * canvas.width, lastPoint.y * canvas.height)
            ctx.lineTo(x, y)
            ctx.stroke()
          }

          ctx.beginPath()
//          console.log('drawing', point)
          const radius = 5 // Arc radius
          const startAngle = 0 // Starting point on circle
          const endAngle = Math.PI * 2 // End point on circle
          const anticlockwise = false // clockwise or anticlockwise

          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
          ctx.fill()
          lastPoint = point
        })
        ctx.strokeStyle = strokeStyle
        ctx.fillStyle = fillStyle
        ctx.lineWidth = lineWidth
        ctx.lineCap = lineCap
      },
      redrawCanvas () {
        this.canvas.height = this.canvasContainer.clientHeight
        this.canvas.width = this.canvasContainer.clientWidth
        this.clearCanvas()
        const self = this
        this.drawImage(() => {
          self.drawPoints.apply(self)
        })
      }
    },
    computed: {
      canvas () {
        return this.$refs.canvas
      },
      canvasContainer () {
        return this.$refs.canvasContainer
      },
      context () {
        return this.canvas.getContext('2d')
      }
    },
    mounted () {
      this.redrawCanvas()
      const self = this
      window.addEventListener("resize", () => {
        self.redrawCanvas.apply(self)
      })
    },
    watch: {
      points (to, from) {
        this.redrawCanvas()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .canvas-container, canvas {
    height: 100%;
    width: 100%;
  }

  canvas {

  }
</style>
