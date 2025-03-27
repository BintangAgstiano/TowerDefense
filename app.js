const canvas = document.querySelector('canvas');
const wcanvas = canvas.width = 1000
const hcanvas = canvas.height = 600
const ctx = canvas.getContext('2d')

const popupScreen = document.querySelector('.popup-screen');
const popupGameOver = document.querySelector('.popup-gameOver');
const popupPause = document.querySelector('.popup-pause');
const btnPlay = document.querySelector('.btn-play');
const btnRetry = document.querySelector('.btn-retry');
const textCoin = document.querySelector('.text-coin');
const textHeart = document.querySelector('.text-heart');
const colLeadeboard = document.querySelector('.col-leadeboard');
const btnIntroduction = document.querySelector('.btn-introduction');
const colIntroduction = document.querySelector('.col-introduction');
const boxClose = document.querySelector('.box-close');
const btnSort = document.querySelector('.btn-sort');
let textTimer = document.querySelector('.text-timer');
let inputUsername = document.querySelector('.input-username');
let detik = 0
let menit = 0
textTimer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`

btnIntroduction.addEventListener('click', function () {
    colIntroduction.style.display = 'flex'
})
boxClose.addEventListener('click', function () {
    colIntroduction.style.display = 'none'
})
btnSort.addEventListener('click', function () {
    let data = [];
    localStorage.setItem('dataGame', JSON.stringify(data));
    colLeadeboard.innerHTML = ""
    data.forEach((item, index) => {
        colLeadeboard.innerHTML += `<div class="box-leadeboard">
                        <div class="left-lea">
                            <div class="top-lea">${item.username}</div>
                            <div class="bottom-lea">Time : ${item.time}</div>
                        </div>
                        <div class="right-lea">
                            <button class="btn-detail" onclick="hapusData(${index})">Delete</button>
                        </div>
                    </div>
                  `
    })
})
inputUsername.value = ""
document.addEventListener('change', function () {
    if (inputUsername !== "") {
        btnPlay.addEventListener('click', function () {
            popupScreen.style.display = 'none'
            let data = JSON.parse(localStorage.getItem('dataGame')) || [];

            colLeadeboard.innerHTML = ""
            data.forEach((item, index) => {
                colLeadeboard.innerHTML += `<div class="box-leadeboard">
                        <div class="left-lea">
                            <div class="top-lea">${item.username}</div>
                            <div class="bottom-lea">Time : ${item.time}</div>
                        </div>
                        <div class="right-lea">
                            <button class="btn-detail" onclick="hapusData(${index})">Delete</button>
                        </div>
                    </div>
                  `
            })
            main();


        })
    }
})
function hapusData(index) {
    let data = JSON.parse(localStorage.getItem('dataGame')) || [];
    data.splice(index, 1);
    localStorage.setItem('dataGame', JSON.stringify(data));

    colLeadeboard.innerHTML = ""
    data.forEach((item, index) => {
        colLeadeboard.innerHTML += `<div class="box-leadeboard">
                        <div class="left-lea">
                            <div class="top-lea">${item.username}</div>
                            <div class="bottom-lea">Time : ${item.time}</div>
                        </div>
                        <div class="right-lea">
                            <button class="btn-detail" onclick="hapusData(${index})">Delete</button>
                        </div>
                    </div>
                  `
    })
}
let intervalTimer
function startTimer() {
    intervalTimer = setInterval(() => {
        detik += 1
        textTimer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`
        if (detik >= 59) {
            detik = 0
            menit += 1
            textTimer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`

        }
    }, 1000);
}

btnRetry.addEventListener('click', function () {
    retry()
});
let xArr
let yarr
let tower1 = false
let tower2 = false
let tower3 = false
let tower4 = false
let tower5 = false
let tower6 = false
let tower7 = false
let tower8 = false
let tower9 = false
let tower10 = false
const mapImg = new Image();
mapImg.src = "assets/map.png";
mapImg.onload = () => {
    drawBoard();
}

const laneImg = new Image();
laneImg.src = "assets/lane.png";
laneImg.onload = () => {
    drawLane();
}
const boomImg = new Image();
boomImg.src = "assets/boom.png";
boomImg.onload = () => {
    drawBoom();
}
const kolamImg = new Image();
kolamImg.src = "assets/kolam.png";
kolamImg.onload = () => {
    drawKolam();
}
const pasir1Img = new Image();
pasir1Img.src = "assets/pasir1.png";
pasir1Img.onload = () => {
    drawPasir1();
}
const pasir2Img = new Image();
pasir2Img.src = "assets/pasir2.png";
pasir2Img.onload = () => {
    drawPasir2();
}
const kaktusImg = new Image();
kaktusImg.src = "assets/kaktus.png";
kaktusImg.onload = () => {
    drawKaktus();
}
const kaktus2Img = new Image();
kaktus2Img.src = "assets/kaktus2.png";
kaktus2Img.onload = () => {
    drawKaktus2();
}
const tengkorakImg = new Image();
tengkorakImg.src = "assets/tengkorak.png";
tengkorakImg.onload = () => {
    drawTengkorak();
}
const batu1Img = new Image();
batu1Img.src = "assets/batu1.png";
batu1Img.onload = () => {
    drawBatu1();
}
const batu2Img = new Image();
batu2Img.src = "assets/batu2.png";
batu2Img.onload = () => {
    drawBatu2();
}
const panahImg = new Image();
panahImg.src = "assets/panah.png";
panahImg.onload = () => {
    drawPanah();
}

function drawKolam() {
    ctx.drawImage(kolamImg, 50, 80)
}
function drawPasir1() {
    ctx.drawImage(pasir1Img, 140, 180, 50, 50)
}
function drawPasir2() {
    ctx.drawImage(pasir2Img, 200, 180, 50, 50)
}
function drawKaktus() {
    ctx.drawImage(kaktusImg, 30, 50, 50, 50)
}
function drawKaktus2() {
    for (let i = 0; i < 3; i++) {
        ctx.drawImage(kaktus2Img, 30, 410 + i * 60, 40, 50)
    }
}
function drawTengkorak() {
    ctx.drawImage(tengkorakImg, 100, 500)
}
function drawBatu1() {
    ctx.drawImage(batu1Img, 830, 450)
}
function drawBatu2() {
    ctx.drawImage(batu2Img, 750, 520, 100, 80)
}
function drawPanah() {
    ctx.drawImage(panahImg, 925, 225, 50, 50)
}

let arrOrcImg = [
    "assets/orc1.png",
    "assets/orc2.png",
    "assets/orc3.png",
    "assets/orc4.png",
    "assets/orc5.png",
    "assets/orc6.png",
    "assets/orc7.png",
]
let arrTowerImg = [
    "assets/tower1.png",
    "assets/tower2.png",
    "assets/tower3.png",
    "assets/tower4.png",
    "assets/tower5.png",
    "assets/tower6.png",
    "assets/tower7.png",
    "assets/tower8.png",
    "assets/tower9.png",
    "assets/tower10.png",
    "assets/tower11.png",
    "assets/tower12.png",
    "assets/tower13.png",
    "assets/tower14.png",
    "assets/tower15.png",
    "assets/tower16.png",
    "assets/tower17.png",
    "assets/tower18.png",
    "assets/tower19.png",
]
let arrTower = []
const orcImg = new Image();


function drawBoard() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.beginPath();
            ctx.drawImage(mapImg, j * 100, i * 100, 100, 100);
        }
    }
}
function drawKotak() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.beginPath();
            ctx.strokeStyle = "black"
            ctx.lineWidth = 2
            ctx.rect(j * 100, i * 100, 100, 100)
            ctx.stroke()

        }
    }
}
function drawLane() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.beginPath();
            if (i == 3 && j < 4 || i == 2 && j == 3 || i == 1 && j == 3 || i == 1 && j > 3 && j < 6 || j == 5 && i < 5 && i > 1 || i == 4 && j >= 6 && j <= 7 || i < 4 && j == 7 && i > 0 || j > 7 && i == 1) {
                ctx.drawImage(laneImg, j * 100, i * 100, 100, 100);
            }
        }
    }
}
let intervalRunOrc
let index = 0
function drawRunOrc() {
    intervalRunOrc = setInterval(() => {
        if (index < 7) {
            index++
        } else {
            index = 0
        }
        if (arrOrcImg[index]) {
            orcImg.src = arrOrcImg[index];
        }
        orcImg.onload = () => {
            ctx.clearRect(0, 0, wcanvas, hcanvas)
            drawBoard()
            drawLane()
            drawOrc()
            // drawKotak()
            drawPlaceShadow()
            drawTower()
            drawBoom()
            drawDarah()
            drawDarahHijau()
            drawKolam()
            drawPasir1()
            drawPasir2()
            drawKaktus()
            drawKaktus2()
            drawTengkorak()
            drawBatu1()
            drawBatu2()
            drawPanah()
        }
    }, 20);
}
let intervalCreateOrc
let arrOrc = []
function createOrc() {
    let orcCount = 0;

    intervalCreateOrc = setInterval(() => {
        if (orcCount < 8) {
            let xOrc = -50;
            let yOrc = 309;
            let xRect = xOrc;
            let yRect = yOrc - 30;
            let xRectHijau = xOrc;
            let wRectHijau = 60;
            let yRectHijau = yOrc - 30;
            arrOrc.push({ x: xOrc, y: yOrc, xRect: xRect, yRect: yRect, xRectHijau: xRectHijau, yRectHijau: yRectHijau, w: wRectHijau });
            orcCount++;
        } else {
            orcCount = 0;
            clearInterval(intervalCreateOrc);


            setTimeout(createOrc, 5000);
        }
    }, 800);
}

let xPlaceShadow
let yPlaceShadow
function drawPlaceShadow() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 10; j++) {
            if (i == 2 && j == 4 || i == 3 && j == 4 || i == 4 && j == 4 || i == 5 && j == 6 || i == 3 && j == 6 || i == 2 && j == 6 || i == 1 && j == 6 || i == 2 && j == 8 || i == 3 && j == 8) {
                ctx.beginPath();
                if (i == yPlaceShadow && j == xPlaceShadow) {

                    ctx.globalAlpha = .4
                } else {
                    ctx.globalAlpha = .12

                }
                ctx.fillStyle = "white"
                ctx.rect(j * 100, i * 100, 100, 100)
                ctx.fill()
                ctx.globalAlpha = 1
            }

        }
    }
}

function drawOrc() {
    let indexOrc = 0
    arrOrc.forEach((item, index) => {
        ctx.drawImage(orcImg, item.x, item.y);
        if (item.x < 300 && item.y == 309) {
            item.x += 3
            item.xRect += 3
            item.xRectHijau += 3
        }
        if (item.x > 300 && item.y > 100 && item.x < 500) {
            item.y -= 3
            item.x += 0
            item.yRect -= 3
            item.xRect += 0
            item.yRectHijau -= 3
            item.xRectHijau += 0
        }
        if (item.y < 100 && item.x > 300 && item.x < 500) {
            item.y -= 0
            item.x += 3
            item.yRect -= 0
            item.xRect += 3
            item.yRectHijau -= 0
            item.xRectHijau += 3
        }
        if (item.x > 500 && item.y < 400 && item.x < 510) {
            item.y += 3
            item.yRect += 3
            item.yRectHijau += 3
        }
        if (item.y > 400 && item.x < 700) {
            item.y += 0
            item.x += 3
            item.yRect += 0
            item.xRect += 3
            item.yRectHijau += 0
            item.xRectHijau += 3
        }
        if (item.x >= 700 && item.y > 100) {
            item.x += 0
            item.y -= 3
            item.xRect += 0
            item.yRect -= 3
            item.xRectHijau += 0
            item.yRectHijau -= 3
        }
        if (item.y < 100 && item.x >= 700) {
            item.y += 0
            item.x += 3
            item.yRect += 0
            item.xRect += 3
            item.yRectHijau += 0
            item.xRectHijau += 3
        }
        if (item.x >= 1000 && item.x < 1001) {
            indexOrc++
        }
    })
    textHeart.innerHTML = textHeart.innerHTML - indexOrc
    if (textHeart.innerHTML <= 0) {
        textHeart.innerHTML = 0
        gameOver()
    }
}

function gameOver() {
    popupGameOver.style.display = 'flex'
    clearInterval(intervalCreateOrc)
    clearInterval(intervalRunOrc)
    clearInterval(intervalTimer)
    let data = JSON.parse(localStorage.getItem('dataGame')) || [];
    let newData = { 'username': inputUsername.value, 'time': textTimer.innerHTML }
    data.push(newData);
    localStorage.setItem('dataGame', JSON.stringify(data));
    colLeadeboard.innerHTML = ""
    data.forEach((item, index) => {
        colLeadeboard.innerHTML += `<div class="box-leadeboard">
                        <div class="left-lea">
                            <div class="top-lea">${item.username}</div>
                            <div class="bottom-lea">Time : ${item.time}</div>
                        </div>
                        <div class="right-lea">
                            <button class="btn-detail" onclick="hapusData(${index})">Delete</button>
                        </div>
                    </div>
                  `
    })
}
function retry() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrTower.forEach((item) => {
        if (item.shootingInterval) {
            clearInterval(item.shootingInterval);
            item.shootingInterval = null;
        }
    });

    detik = 0
    menit = 0
    textTimer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`
    textHeart.innerHTML = 2
    textCoin.innerHTML = 200
    arrOrc = []
    arrBoom = []
    arrTower = []
    xArr = 0
    yarr = 0
    arrBoom.length = 0  // Tidak perlu lagi, sudah dihapus di atas
    tower1 = tower2 = tower3 = tower4 = tower5 = false
    tower6 = tower7 = tower8 = tower9 = tower10 = false


    startTimer()
    drawRunOrc()
    createOrc()
    drawBoard()
    drawLane()
    drawOrc()
    drawPlaceShadow()
    drawTower()

    drawBoom() // Pastikan tidak menggambar jika kosong

    drawDarah()
    drawDarahHijau()
    drawKolam()
    drawPasir1()
    drawPasir2()
    drawKaktus()
    drawKaktus2()
    drawTengkorak()
    drawBatu1()
    drawBatu2()
    drawPanah()
    popupGameOver.style.display = 'none'
}


let arrBoom = [];
let intervalTower1 = false

let i = 0

let objTowerImg = arrTowerImg.map(src => {
    let img = new Image();
    img.src = src;
    return img
})

function drawDarah() {
    arrOrc.forEach((item, index) => {
        ctx.beginPath()
        ctx.fillStyle = "red";
        ctx.rect(item.xRect, item.yRect, 60, 10);
        ctx.fill()
    });
}
function drawDarahHijau() {
    arrOrc.forEach((item, index) => {
        ctx.beginPath()
        ctx.fillStyle = "green";
        ctx.rect(item.xRectHijau, item.yRectHijau, item.w, 10);
        ctx.fill()
    });
}

function drawTower() {
    arrTower.forEach((item, index) => {
        let towerImg = new Image();


        if (arrOrc.some(itemOrc => itemOrc.x > 300 && itemOrc.y < 200 && itemOrc.x <= 550) && item.x == 4 && item.y == 2) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(orc =>
                            (orc.x > 300 && orc.y < 200 && orc.x <= 550)
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 30;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x > 300 && itemOrc.x < 310 && itemOrc.y > 150 && itemOrc.y < 300 && item.x == 4 && item.y == 3 || itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y < 400 && item.x == 4 && item.y == 3)) {

            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(orc =>
                            (orc.x > 300 && orc.x < 400 && orc.y > 150 && orc.y < 300) ||
                            (orc.x > 500 && orc.x < 510 && orc.y < 400)
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 30;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }



            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y > 300 && item.x == 4 && item.y == 4)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y > 300
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 30;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }

            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x < 700 && itemOrc.x > 400 && itemOrc.y > 400 && item.x == 6 && item.y == 5)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            itemOrc.x < 700 && itemOrc.x > 400 && itemOrc.y > 400
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 30;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y > 300 && item.x == 6 && item.y == 3 || itemOrc.x < 700 && itemOrc.x > 500 && itemOrc.y > 300 && item.x == 6 && item.y == 3 || itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y > 300 && item.x == 6 && item.y == 3)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            (itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y > 300) ||
                            (itemOrc.x < 700 && itemOrc.x > 500 && itemOrc.y > 300) ||
                            (itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y > 300)
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 38
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y < 300 && itemOrc.y > 200 && item.x == 6 && item.y == 2 || itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y < 400 && itemOrc.y > 200 && item.x == 6 && item.y == 2)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            (itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y < 300 && itemOrc.y > 200) ||
                            (itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y < 400 && itemOrc.y > 200)
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 30;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 12,
                                speedY: (deltaY / distance) * 12,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y < 300 && item.x == 6 && item.y == 1 || itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y < 300 && item.x == 6 && item.y == 1)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            (itemOrc.x < 510 && itemOrc.x > 500 && itemOrc.y < 300) ||
                            (itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y < 300)
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 30;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y <= 250 && item.x == 8 && item.y == 2 || itemOrc.x < 900 && itemOrc.x > 700 && item.x == 8 && item.y == 2)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            (itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y <= 250) ||
                            (itemOrc.x < 900 && itemOrc.x > 700)
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 10;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else if (arrOrc.some(itemOrc => itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y > 200 && item.x == 8 && item.y == 3)) {
            if (!intervalTower1) {
                intervalTower1 = setInterval(() => {
                    if (i < 18) {
                        i++
                    } else {
                        i = 0
                    }
                }, 30);
            }
            if (!item.shootingInterval) {
                item.shootingInterval = setInterval(() => {
                    if (arrOrc.length > 0) {
                        let targetOrc = arrOrc.find(itemOrc =>
                            itemOrc.x > 650 && itemOrc.x < 705 && itemOrc.y > 200
                        );

                        if (targetOrc) {
                            let startX = item.x * 100.5 + 50;
                            let startY = item.y * 100 + 50;
                            let deltaX = targetOrc.x - startX + 50;
                            let deltaY = targetOrc.y - startY + 0;
                            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                            arrBoom.push({
                                x: startX,
                                y: startY,
                                speedX: (deltaX / distance) * 15,
                                speedY: (deltaY / distance) * 15,
                                target: targetOrc,
                                towerX: item.x,
                                towerY: item.y,

                            });
                        }
                    }
                }, 500);
            }
            towerImg.src = arrTowerImg[i];
        }
        else {
            towerImg.src = arrTowerImg[0];

        }

        ctx.drawImage(towerImg, item.x * 100.5, item.y * 100, 100, 100);
    });

}

function drawBoom() {
    if (arrBoom.length === 0) {
        return;
    }
    arrBoom.forEach((boom, index) => {
        boom.x += boom.speedX;
        boom.y += boom.speedY;

        ctx.beginPath();
        ctx.drawImage(boomImg, boom.x, boom.y, 30, 30);

        let target = boom.target;
        let targetCenterX = target.x + 25;
        let targetCenterY = target.y + 25;
        let targetHeadY = target.y + 10;
        let targetFootY = target.y + 40;

        if (target.hitCount === undefined) {
            target.hitCount = 0;
        }

        let hit = (
            (Math.abs(boom.x - targetCenterX) < 10 && Math.abs(boom.y - targetCenterY) < 10) ||
            (Math.abs(boom.x - targetCenterX) < 10 && Math.abs(boom.y - targetHeadY) < 10) ||
            (Math.abs(boom.x - targetCenterX) < 10 && Math.abs(boom.y - targetFootY) < 10)
        );

        if (hit) {
            arrBoom.splice(index, 1);
            target.w -= 10;

            if (target.w <= 0) {
                let orcIndex = arrOrc.indexOf(target);
                if (orcIndex !== -1) {
                    arrOrc.splice(orcIndex, 1);
                    textCoin.innerHTML = parseInt(textCoin.innerHTML) + 25;
                }
            }
        }

    });
}

function pause() {
    popupPause.style.display = 'flex'
    clearInterval(intervalCreateOrc)
    clearInterval(intervalRunOrc)
    clearInterval(intervalTimer)
}
function resume() {
    popupPause.style.display = 'none'
    createOrc()
    drawRunOrc()
    startTimer()
}
let isPause = false
function main() {
    document.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            if (!isPause) {
                pause()
                isPause = true
            } else {
                resume()
                isPause = false
            }
        }
    })
    drawBoard()
    drawLane()
    drawOrc()
    drawRunOrc()
    createOrc()
    // drawKotak()
    drawPlaceShadow()
    drawDarah()
    canvas.addEventListener('mousemove', function (e) {
        let x = e.clientX - canvas.getBoundingClientRect().left
        let y = e.clientY - canvas.getBoundingClientRect().top

        if (y > 200 && y < 200 + 100 && x > 400 && x < 400 + 100) {
            xPlaceShadow = 4
            yPlaceShadow = 2
        } else if (y > 300 && y < 300 + 100 && x > 400 && x < 400 + 100) {
            xPlaceShadow = 4
            yPlaceShadow = 3
        }
        else if (y > 400 && y < 400 + 100 && x > 400 && x < 400 + 100) {
            xPlaceShadow = 4
            yPlaceShadow = 4
        }
        else if (y > 500 && y < 500 + 100 && x > 600 && x < 600 + 100) {
            xPlaceShadow = 6
            yPlaceShadow = 5
        }
        else if (y > 300 && y < 300 + 100 && x > 600 && x < 600 + 100) {
            xPlaceShadow = 6
            yPlaceShadow = 3
        }
        else if (y > 200 && y < 200 + 100 && x > 600 && x < 600 + 100) {
            xPlaceShadow = 6
            yPlaceShadow = 2
        }
        else if (y > 100 && y < 100 + 100 && x > 600 && x < 600 + 100) {
            xPlaceShadow = 6
            yPlaceShadow = 1
        }
        else if (y > 200 && y < 200 + 100 && x > 800 && x < 800 + 100) {
            xPlaceShadow = 8
            yPlaceShadow = 2
        }

        else if (y > 300 && y < 300 + 100 && x > 800 && x < 800 + 100) {
            xPlaceShadow = 8
            yPlaceShadow = 3
        }
        else {

            xPlaceShadow = 0
            yPlaceShadow = 0
        }
    });

    canvas.addEventListener('click', function (e) {
        if (textCoin.innerHTML >= 100) {

            textCoin.innerHTML -= 100
            let x = e.clientX - canvas.getBoundingClientRect().left
            let y = e.clientY - canvas.getBoundingClientRect().top
            xArr
            yarr
            tower1 = false
            tower2 = false
            tower3 = false
            tower4 = false
            tower5 = false
            tower6 = false
            tower7 = false
            tower8 = false
            tower9 = false
            tower10 = false
            if (y > 200 && y < 200 + 100 && x > 400 && x < 400 + 100 && !tower1) {
                xArr = 4
                yarr = 2
                tower1 = true
            }
            else if (y > 300 && y < 300 + 100 && x > 400 && x < 400 + 100 && !tower2) {
                xArr = 4
                yarr = 3
                tower2 = true

            }
            else if (y > 400 && y < 400 + 100 && x > 400 && x < 400 + 100 && !tower3) {
                xArr = 4
                yarr = 4
                tower3 = true

            }
            else if (y > 500 && y < 500 + 100 && x > 600 && x < 600 + 100 && !tower4) {
                xArr = 6
                yarr = 5
                tower4 = true

            }
            else if (y > 300 && y < 300 + 100 && x > 600 && x < 600 + 100 && !tower5) {
                xArr = 6
                yarr = 3
                tower5 = true

            }
            else if (y > 200 && y < 200 + 100 && x > 600 && x < 600 + 100 && !tower6) {
                xArr = 6
                yarr = 2
                tower6 = true

            }
            else if (y > 100 && y < 100 + 100 && x > 600 && x < 600 + 100 && !tower7) {
                xArr = 6
                yarr = 1
                tower7 = true

            }
            else if (y > 200 && y < 200 + 100 && x > 800 && x < 800 + 100 && !tower8) {
                xArr = 8
                yarr = 2
                tower8 = true

            }
            else if (y > 200 && y < 200 + 100 && x > 800 && x < 800 + 100 && !tower9) {
                xArr = 8
                yarr = 2
                tower9 = true

            }
            else if (y > 300 && y < 300 + 100 && x > 800 && x < 800 + 100 && !tower10) {
                xArr = 8
                yarr = 3
                tower10 = true

            }

            arrTower.push({ x: xArr, y: yarr });
            drawTower();
        }
    })


    drawTower()
    drawBoom()
    drawKolam()
    drawPasir1()
    drawPasir2()
    drawKaktus()
    drawTengkorak()
    drawKaktus2()
    drawBatu1()
    drawBatu2()
    drawPanah()
    startTimer()

}


