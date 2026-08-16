<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EVIL CYBORG</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    overflow: hidden;
    background: #050505;
    font-family: Arial, sans-serif;
    color: white;
}

.scene {
    position: relative;
    width: 100vw;
    height: 100vh;
    background:
        radial-gradient(circle at center, #251010 0%, #090909 45%, #000 100%);
    overflow: hidden;
}

/* Rode energie */
.energy {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,0,0,.35), transparent 65%);
    animation: pulse 2s infinite alternate;
}

@keyframes pulse {
    from {
        transform: translate(-50%, -50%) scale(.8);
        opacity: .4;
    }
    to {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: .9;
    }
}

/* Cyborg */
.cyborg {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    width: 210px;
    height: 470px;
    animation: breathe 2s infinite ease-in-out;
}

@keyframes breathe {
    0%,100% {
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        transform: translate(-50%, -50%) scale(1.025);
    }
}

/* Hoofd */
.head {
    position: absolute;
    left: 35px;
    top: 0;
    width: 140px;
    height: 150px;
    border-radius: 45% 45% 35% 35%;
    background: linear-gradient(90deg,#111,#777,#161616);
    border: 3px solid #333;
    box-shadow: 0 0 25px rgba(255,0,0,.35);
}

/* Menselijke helft */
.face {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 66px;
    height: 140px;
    border-radius: 45% 0 0 35%;
    background: linear-gradient(#d0a08a,#8a5545);
}

/* Cyborg helft */
.machine-face {
    position: absolute;
    right: 3px;
    top: 3px;
    width: 66px;
    height: 140px;
    border-radius: 0 45% 35% 0;
    background:
        repeating-linear-gradient(
            0deg,
            #303030 0px,
            #303030 7px,
            #111 8px,
            #111 12px
        );
}

/* Ogen */
.eye {
    position: absolute;
    top: 55px;
    width: 25px;
    height: 8px;
    background: #ff0000;
    box-shadow: 0 0 15px red;
    animation: eyeGlow 1s infinite alternate;
}

.eye.left {
    left: 25px;
}

.eye.right {
    right: 25px;
}

@keyframes eyeGlow {
    from { opacity: .4; }
    to { opacity: 1; }
}

/* Mond */
.mouth {
    position: absolute;
    bottom: 25px;
    left: 47px;
    width: 48px;
    height: 8px;
    background: #050505;
    border-bottom: 3px solid #d00000;
}

/* Nek */
.neck {
    position: absolute;
    left: 75px;
    top: 145px;
    width: 60px;
    height: 35px;
    background: #222;
    border: 2px solid #555;
}

/* Romp */
.body {
    position: absolute;
    left: 15px;
    top: 170px;
    width: 180px;
    height: 190px;
    background: linear-gradient(90deg,#111,#444,#111);
    clip-path: polygon(20% 0,80% 0,100% 100%,0 100%);
    border: 3px solid #333;
    box-shadow: inset 0 0 25px #000;
}

/* Energie reactor */
.core {
    position: absolute;
    left: 77px;
    top: 220px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #ff0000;
    border: 8px solid #222;
    box-shadow:
        0 0 15px red,
        0 0 35px red,
        0 0 70px rgba(255,0,0,.6);
    animation: corePulse .8s infinite alternate;
}

@keyframes corePulse {
    from { transform: scale(.85); }
    to { transform: scale(1.1); }
}

/* Armen */
.arm {
    position: absolute;
    top: 180px;
    width: 48px;
    height: 170px;
    background: linear-gradient(#555,#111);
    border: 3px solid #333;
    border-radius: 25px;
}

.arm.left {
    left: -25px;
    transform: rotate(12deg);
}

.arm.right {
    right: -25px;
    transform: rotate(-12deg);
}

/* Benen */
.leg {
    position: absolute;
    top: 340px;
    width: 65px;
    height: 130px;
    background: linear-gradient(90deg,#111,#555,#111);
    border: 3px solid #333;
}

.leg.left {
    left: 35px;
}

.leg.right {
    right: 35px;
}

/* Tekst */
.title {
    position: absolute;
    top: 35px;
    width: 100%;
    text-align: center;
    font-size: clamp(32px,8vw,75px);
    font-weight: 900;
    letter-spacing: 8px;
    color: #fff;
    text-shadow:
        0 0 10px red,
        0 0 30px red;
}

.subtitle {
    position: absolute;
    bottom: 35px;
    width: 100%;
    text-align: center;
    color: #aaa;
    letter-spacing: 4px;
}

/* Knop */
button {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 35px;
    background: #900;
    color: white;
    border: 2px solid red;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 20px red;
}

button:active {
    transform: translateX(-50%) scale(.95);
}
</style>
</head>

<body>

<div class="scene">

    <div class="energy"></div>

    <div class="title">EVIL CYBORG</div>

    <div class="cyborg">

        <div class="head">
            <div class="face"></div>
            <div class="machine-face"></div>

            <div class="eye left"></div>
            <div class="eye right"></div>

            <div class="mouth"></div>
        </div>

        <div class="neck"></div>

        <div class="arm left"></div>
        <div class="arm right"></div>

        <div class="body"></div>

        <div class="core"></div>

        <div class="leg left"></div>
        <div class="leg right"></div>

    </div>

    <div class="subtitle">
        SYSTEM ONLINE // THREAT LEVEL: EXTREME
    </div>

    <button onclick="activate()">
        ACTIVATE
    </button>

</div>

<script>

function activate() {

    document.body.style.background = "#200000";

    document.querySelector(".title").innerText =
        "SYSTEM ACTIVATED";

    document.querySelector(".subtitle").innerText =
        "TARGET ACQUIRED";

    document.querySelector(".energy").style.animationDuration =
        "0.5s";

    document.querySelector(".core").style.animationDuration =
        "0.2s";

    if (navigator.vibrate) {
        navigator.vibrate([100,50,200]);
    }
}

</script>

</body>
</html>
