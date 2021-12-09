let x = 0
let y = 0
let list: number[] = []
let n = 0
let 隨機 = 0
let a = 0
function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
// 畫面將會顯示剛剛按下B按鈕後顯示數字數量的燈數
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    // 顯示剛剛B抽到數字的燈數
    while (n < 隨機) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
})
// 隨機從2到5抽一個數字，顯示於畫面
input.onButtonPressed(Button.B, function () {
    隨機 = randint(2, 5)
    basic.showNumber(隨機)
})
