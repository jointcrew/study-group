const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = 100
const y = 100
const radius = 10
const startDigree = 0
const endDigree = 360

context.beginPath()
context.arc(x, y, radius, startDigree, Math.PI / 180 * endDigree)
context.fill()

