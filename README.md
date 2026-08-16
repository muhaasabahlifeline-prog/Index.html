<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
<title>VEX // EVIL CYBORG V4</title>

<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

html,body{
    width:100%;
    height:100%;
    overflow:hidden;
    background:#020204;
    font-family:Arial,Helvetica,sans-serif;
    color:#fff;
    touch-action:none;
}

#game{
    position:relative;
    width:100vw;
    height:100vh;
    overflow:hidden;
    background:
        radial-gradient(
            ellipse at 50% 45%,
            #420909 0%,
            #180303 28%,
            #060608 65%,
            #010102 100%
        );
}

/* BACKGROUND */

.stars{
    position:absolute;
    inset:0;
    background-image:
        radial-gradient(circle,#fff 1px,transparent 1px),
        radial-gradient(circle,#f22 1px,transparent 1px);
    background-size:90px 90px,150px 150px;
    background-position:10px 20px,70px 80px;
    opacity:.3;
}

.city{
    position:absolute;
    bottom:0;
    width:100%;
    height:34%;
    display:flex;
    align-items:flex-end;
    gap:3px;
}

.building{
    position:relative;
    background:linear-gradient(90deg,#050506,#18181b,#050506);
    border-top:1px solid #333;
}

.building:after{
    content:"";
    position:absolute;
    inset:8px;
    background:
        repeating-linear-gradient(
            90deg,
            transparent 0 13px,
            rgba(255,0,0,.28) 14px 16px
        ),
        repeating-linear-gradient(
            0deg,
            transparent 0 18px,
            rgba(255,0,0,.2) 19px 21px
        );
}

.ground{
    position:absolute;
    left:-25%;
    bottom:-5%;
    width:150%;
    height:35%;
    background:
        linear-gradient(rgba(255,0,0,.12) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,0,0,.12) 1px,transparent 1px);
    background-size:45px 45px;
    transform:perspective(300px) rotateX(60deg);
    transform-origin:bottom;
}

/* ENERGY */

.aura{
    position:absolute;
    left:50%;
    top:48%;
    width:500px;
    height:500px;
    transform:translate(-50%,-50%);
    border-radius:50%;
    background:
        radial-gradient(
            circle,
            rgba(255,0,0,.35),
            rgba(255,0,0,.08) 40%,
            transparent 70%
        );
    filter:blur(12px);
    animation:aura 1.5s infinite alternate;
}

@keyframes aura{
    from{
        transform:translate(-50%,-50%) scale(.85);
    }
    to{
        transform:translate(-50%,-50%) scale(1.15);
    }
}

/* UI */

.logo{
    position:absolute;
    top:18px;
    width:100%;
    text-align:center;
    font-size:clamp(35px,10vw,72px);
    font-weight:900;
    letter-spacing:10px;
    z-index:50;
    text-shadow:
        0 0 8px white,
        0 0 25px red,
        0 0 55px red;
}

.status{
    position:absolute;
    top:90px;
    width:100%;
    text-align:center;
    font-size:9px;
    letter-spacing:3px;
    color:#ff3030;
    z-index:50;
}

/* BARS */

.stats{
    position:absolute;
    top:118px;
    left:50%;
    transform:translateX(-50%);
    width:min(300px,80vw);
    z-index:60;
}

.stat{
    display:flex;
    align-items:center;
    gap:7px;
    margin:5px 0;
    font-size:9px;
    font-weight:bold;
}

.bar{
    flex:1;
    height:7px;
    border:1px solid #555;
    background:#090909;
    overflow:hidden;
}

.fill{
    height:100%;
    transition:width .3s;
}

.hp{
    width:100%;
    background:#e00000;
    box-shadow:0 0 8px red;
}

.energybar{
    width:100%;
    background:#d000ff;
    box-shadow:0 0 8px #d000ff;
}

/* CYBORG */

#cyborg{
    position:absolute;
    left:50%;
    top:53%;
    width:280px;
    height:570px;
    transform:translate(-50%,-50%);
    z-index:20;
    transition:left .12s linear;
}

#cyborg.walking{
    animation:bob .22s infinite alternate;
}

@keyframes bob{
    from{
        transform:translate(-50%,-50%) translateY(0);
    }
    to{
        transform:translate(-50%,-50%) translateY(-7px);
    }
}

/* HEAD */

.head{
    position:absolute;
    left:58px;
    top:0;
    width:164px;
    height:175px;
    border:3px solid #666;
    border-radius:48% 48% 38% 38%;
    background:
        linear-gradient(
            90deg,
            #151619 0%,
            #777 47%,
            #202124 48%,
            #37393c 100%
        );
    box-shadow:inset 0 0 25px #000,0 0 30px rgba(255,0,0,.25);
}

.human{
    position:absolute;
    left:4px;
    top:4px;
    width:75px;
    height:163px;
    border-radius:45% 5% 5% 35%;
    background:linear-gradient(110deg,#633d34,#c28772,#75473c);
}

.machine{
    position:absolute;
    right:4px;
    top:4px;
    width:75px;
    height:163px;
    border-radius:5% 45% 35% 5%;
    background:repeating-linear-gradient(0deg,#555 0 7px,#17181a 8px 13px);
}

.machine:before{
    content:"";
    position:absolute;
    top:18px;
    left:15px;
    width:3px;
    height:120px;
    background:#b00000;
    box-shadow:0 0 10px red;
}

.eye{
    position:absolute;
    top:63px;
    width:32px;
    height:9px;
    background:#ff1010;
    box-shadow:0 0 8px red,0 0 25px red;
    z-index:10;
    animation:eye .8s infinite alternate;
}

.eye.left{left:24px}
.eye.right{right:24px}

@keyframes eye{
    from{opacity:.35}
    to{opacity:1}
}

.mouth{
    position:absolute;
    left:53px;
    bottom:25px;
    width:58px;
    height:11px;
    background:#020202;
    border-bottom:3px solid #b00000;
}

.neck{
    position:absolute;
    left:103px;
    top:166px;
    width:70px;
    height:48px;
    border:3px solid #555;
    background:linear-gradient(90deg,#111,#777,#111);
}

/* BODY */

.torso{
    position:absolute;
    left:35px;
    top:195px;
    width:210px;
    height:215px;
    clip-path:polygon(18% 0,82% 0,100% 100%,0 100%);
    background:linear-gradient(90deg,#111214,#686b6f 46%,#202124 50%,#37393b);
    border:3px solid #555;
    box-shadow:inset 0 0 35px #000;
}

.armor{
    position:absolute;
    border:2px solid #555;
    background:linear-gradient(145deg,#777,#18191b);
    box-shadow:inset 0 0 15px #000;
}

.armor.a{
    left:53px;
    top:210px;
    width:78px;
    height:78px;
}

.armor.b{
    right:52px;
    top:210px;
    width:78px;
    height:78px;
}

.reactor{
    position:absolute;
    left:103px;
    top:262px;
    width:68px;
    height:68px;
    border-radius:50%;
    border:9px solid #252629;
    background:radial-gradient(circle,#fff 0 8%,#ff3333 18%,#a00000 45%,#050505 52%);
    box-shadow:0 0 15px red,0 0 40px red,0 0 90px rgba(255,0,0,.6);
    animation:reactor .5s infinite alternate;
    z-index:15;
}

@keyframes reactor{
    from{transform:scale(.88)}
    to{transform:scale(1.1)}
}

/* ARMS */

.shoulder{
    position:absolute;
    top:190px;
    width:78px;
    height:58px;
    border:3px solid #555;
    border-radius:50%;
    background:linear-gradient(#777,#161719);
}

.shoulder.left{left:-27px}
.shoulder.right{right:-27px}

.arm{
    position:absolute;
    top:215px;
    width:60px;
    height:190px;
    border:3px solid #555;
    border-radius:30px;
    background:linear-gradient(90deg,#111,#686b6d,#1b1c1e);
}

.arm.left{
    left:-10px;
    transform:rotate(12deg);
}

.arm.right{
    right:-10px;
    transform:rotate(-12deg);
}

/* WALKING LEGS */

.leg{
    position:absolute;
    top:390px;
    width:82px;
    height:155px;
    border:3px solid #555;
    background:linear-gradient(90deg,#111,#666,#111);
    box-shadow:inset 0 0 20px #000;
    transform-origin:top center;
}

.leg.left{left:45px}
.leg.right{right:45px}

.walking .leg.left{
    animation:legLeft .22s infinite alternate;
}

.walking .leg.right{
    animation:legRight .22s infinite alternate;
}

@keyframes legLeft{
    from{transform:rotate(10deg)}
    to{transform:rotate(-10deg)}
}

@keyframes legRight{
    from{transform:rotate(-10deg)}
    to{transform:rotate(10deg)}
}

/* HANDS */

.hand{
    position:absolute;
    top:390px;
    width:66px;
    height:72px;
    border:3px solid #555;
    border-radius:25px;
    background:linear-gradient(#555,#151617);
}

.hand.left{left:-15px}
.hand.right{right:-15px}

/* ATTACK */

.attack #cyborg{
    animation:attack .6s ease-in-out;
}

@keyframes attack{
    0%{transform:translate(-50%,-50%)}
    35%{transform:translate(-50%,-50%) rotate(-6deg) scale(1.07)}
    65%{transform:translate(-50%,-50%) rotate(6deg) scale(1.07)}
    100%{transform:translate(-50%,-50%)}
}

/* CONTROLS */

.controls{
    position:absolute;
    bottom:18px;
    left:50%;
    transform:translateX(-50%);
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:7px;
    width:95%;
    z-index:100;
}

button{
    min-width:72px;
    padding:12px 10px;
    border:1px solid #e00000;
    border-radius:7px;
    background:rgba(35,0,0,.95);
    color:#fff;
    font-size:11px;
    font-weight:bold;
    letter-spacing:1px;
    box-shadow:0 0 12px rgba(255,0,0,.35);
}

button:active{
    transform:scale(.9);
}

.move{
    min-width:60px;
}

/* MOBILE */

@media(max-width:500px){

    #cyborg{
        transform:translate(-50%,-50%) scale(.72);
    }

    .logo{
        font-size:42px;
    }

    .status{
        top:83px;
    }

    .stats{
        top:105px;
    }
}
</style>
</head>

<body>

<div id="game">

<div class="stars"></div>

<div class="city">
<div class="building" style="height:45%;width:9%"></div>
<div class="building" style="height:65%;width:11%"></div>
<div class="building" style="height:35%;width:8%"></div>
<div class="building" style="height:80%;width:12%"></div>
<div class="building" style="height:50%;width:9%"></div>
<div class="building" style="height:72%;width:10%"></div>
<div class="building" style="height:42%;width:8%"></div>
<div class="building" style="height:90%;width:13%"></div>
<div class="building" style="height:55%;width:10%"></div>
<div class="building" style="height:70%;width:11%"></div>
</div>

<div class="ground"></div>
<div class="aura"></div>

<div class="logo">VEX</div>

<div class="status" id="status">
CYBERNETIC WAR MACHINE // ONLINE
</div>

<div class="stats">

<div class="stat">
HP
<div class="bar">
<div class="fill hp" id="hp"></div>
</div>
</div>

<div class="stat">
ENERGY
<div class="bar">
<div class="fill energybar" id="energy"></div>
</div>
</div>

</div>

<div id="cyborg">

<div class="head">
<div class="human"></div>
<div class="machine"></div>
<div class="eye left"></div>
<div class="eye right"></div>
<div class="mouth"></div>
</div>

<div class="neck"></div>

<div class="shoulder left"></div>
<div class="shoulder right"></div>

<div class="arm left"></div>
<div class="arm right"></div>

<div class="torso"></div>

<div class="armor a"></div>
<div class="armor b"></div>

<div class="reactor"></div>

<div class="hand left"></div>
<div class="hand right"></div>

<div class="leg left"></div>
<div class="leg right"></div>

</div>

<div class="controls">

<button class="move"
onclick="move(-1)">
◀ LEFT
</button>

<button
onclick="scan()">
SCAN
</button>

<button
onclick="attack()">
ATTACK
</button>

<button class="move"
onclick="move(1)">
RIGHT ▶
</button>

</div>

</div>

<script>

let position = 50;

let hp = 100;

let energy = 100;

const cyborg =
document.getElementById("cyborg");

const status =
document.getElementById("status");

const hpBar =
document.getElementById("hp");

const energyBar =
document.getElementById("energy");


function move(direction){

    position += direction * 6;

    if(position < 18){
        position = 18;
    }

    if(position > 82){
        position = 82;
    }

    cyborg.style.left = position + "%";

    cyborg.classList.add("walking");

    status.innerText =
        direction < 0
        ? "MOVING LEFT // TARGET HUNT"
        : "MOVING RIGHT // TARGET HUNT";

    setTimeout(function(){

        cyborg.classList.remove("walking");

        status.innerText =
            "CYBERNETIC WAR MACHINE // ONLINE";

    },600);

    energy -= 4;

    if(energy < 0){
        energy = 0;
    }

    updateBars();
}


function scan(){

    status.innerText =
        "SCANNING AREA...";

    setTimeout(function(){

        status.innerText =
            "TARGET DETECTED // THREAT: EXTREME";

    },1000);

    energy -= 8;

    if(energy < 0){
        energy = 0;
    }

    updateBars();
}


function attack(){

    if(energy < 15){

        status.innerText =
            "INSUFFICIENT ENERGY";

        return;
    }

    const game =
        document.getElementById("game");

    game.classList.remove("attack");

    void game.offsetWidth;

    game.classList.add("attack");

    status.innerText =
        "WEAPON SYSTEM ACTIVATED";

    energy -= 15;

    updateBars();

    if(navigator.vibrate){

        navigator.vibrate(
            [80,40,150]
        );

    }

    setTimeout(function(){

        game.classList.remove("attack");

        status.innerText =
            "CYBERNETIC WAR MACHINE // ONLINE";

    },900);
}


function updateBars(){

    hpBar.style.width =
        hp + "%";

    energyBar.style.width =
        energy + "%";
}


/* ENERGY REGENERATION */

setInterval(function(){

    if(energy < 100){

        energy += 1;

        updateBars();

    }

},1000);

</script>

</body>
</html>
