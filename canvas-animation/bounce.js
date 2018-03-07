const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 100
let y = 0
let radius = 10
let speed = 0
let gravity = 1
let repulsion = 0.7
let requestId;

const bottom = canvas.height - radius

const loop = () => {
    // 次のフレームの描画を予約
    requestId = window.requestAnimationFrame(loop)
    // 加速
    speed += gravity
    y += speed
    // 衝突判定
    if (bottom < y) {
        y = bottom
        speed = -speed * repulsion
        // speedの小数点を切り捨てて、値が0の場合
        if ( !~~speed ) window.cancelAnimationFrame(requestId)
    }
    // 前回のフレームで描画された画像を消す
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 描く
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI*2)
    context.fill()
}

window.requestAnimationFrame(loop)
