<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VEX // EVIL CYBORG</title>

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
    color:white;
}

body{
    user-select:none;
}

#game{
    position:relative;
    width:100vw;
    height:100vh;
    overflow:hidden;
    background:
        radial-gradient(
            ellipse at 50% 45%,
            #390909 0%,
            #160303 25%,
            #060608 60%,
            #010102 100%
        );
}

/* =========================
   BACKGROUND
========================= */

.stars{
    position:absolute;
    inset:0;
    background-image:
        radial-gradient(circle,#ffffff 1px,transparent 1px),
        radial-gradient(circle,#ff3030 1px,transparent 1px);
    background-size:90px 90px,150px 150px;
    background-position:10px 20px,70px 80px;
    opacity:.25;
}

.city{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:35%;
    display:flex;
    align-items:flex-end;
    gap:3px;
    opacity:.8;
}

.building{
    background:linear-gradient(
        90deg,
        #050506,
        #18181b,
        #050506
    );
    border-top:1px solid #333;
    position:relative;
}

.building:after{
    content:"";
    position:absolute;
    inset:10px;
    background:
        repeating-linear-gradient(
            90deg,
            transparent 0 12px,
            rgba(255,0,0,.3) 13px 15px
        ),
        repeating-linear-gradient(
            0deg,
            transparent 0 18px,
            rgba(255,0,0,.25) 19px 21px
        );
}

.ground{
    position:absolute;
    bottom:0;
    left:-25%;
    width:150%;
    height:35%;
    background:
        linear-gradient(
            rgba(255,0,0,.12) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,0,0,.12) 1px,
            transparent 1px
        );
    background-size:50px 50px;
    transform:
        perspective(300px)
        rotateX(60deg);
    transform-origin:bottom;
}

/* =========================
   LIGHT / ENERGY
========================= */

.aura{
    position:absolute;
    left:50%;
    top:48%;
    width:520px;
    height:520px;
    transform:translate(-50%,-50%);
    border-radius:50%;
    background:
        radial-gradient(
            circle,
            rgba(255,0,0,.35),
            rgba(255,0,0,.1) 35%,
            transparent 70%
        );
    filter:blur(12px);
    animation:auraPulse 1.5s infinite alternate;
}

@keyframes auraPulse{
    from{
        transform:translate(-50%,-50%) scale(.85);
        opacity:.5;
    }
    to{
        transform:translate(-50%,-50%) scale(1.15);
        opacity:1;
    }
}

/* =========================
   UI
========================= */

.logo{
    position:absolute;
    top:22px;
    left:0;
    width:100%;
    text-align:center;
    font-size:clamp(32px,9vw,75px);
    font-weight:900;
    letter-spacing:12px;
    z-index:50;
    text-shadow:
        0 0 8px white,
        0 0 20px red,
        0 0 50px red;
}

.status{
    position:absolute;
    top:105px;
    left:0;
    width:100%;
    text-align:center;
    font-size:10px;
    letter-spacing:4px;
    color:#ff3030;
    z-index:50;
    text-shadow:0 0 12px red;
}

.controls{
    position:absolute;
    left:50%;
    bottom:20px;
    transform:translateX(-50%);
    display:flex;
    gap:10px;
    z-index:100;
}

button{
    min-width:90px;
    padding:12px 16px;
    border:1px solid #ff2020;
    border-radius:7px;
    background:rgba(40,0,0,.9);
    color:white;
    font-weight:bold;
    letter-spacing:1px;
    box-shadow:
        0 0 10px rgba(255,0,0,.4);
}

button:active{
    transform:scale(.92);
}

/* =========================
   CYBORG
========================= */

#cyborg{
    position:absolute;
    left:50%;
    top:53%;
    width:280px;
    height:570px;
    transform:translate(-50%,-50%);
    z-index:20;
    animation:breathing 3s ease-in-out infinite;
}

@keyframes breathing{
    0%,100%{
        transform:translate(-50%,-50%) scale(1);
    }
    50%{
        transform:translate(-50%,-51%) scale(1.018);
    }
}

/* shadow */

.shadow{
    position:absolute;
    left:50%;
    bottom:0;
    width:260px;
    height:30px;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    box-shadow:0 0 35px #f00;
}

/* =========================
   HEAD
========================= */

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
    box-shadow:
        inset 0 0 25px #000,
        0 0 30px rgba(255,0,0,.25);
}

/* human half */

.human{
    position:absolute;
    left:4px;
    top:4px;
    width:75px;
    height:163px;
    border-radius:45% 5% 5% 35%;
    background:
        linear-gradient(
            110deg,
            #633d34,
            #c28772,
            #75473c
        );
}

/* mechanical half */

.machine{
    position:absolute;
    right:4px;
    top:4px;
    width:75px;
    height:163px;
    border-radius:5% 45% 35% 5%;
    background:
        repeating-linear-gradient(
            0deg,
            #555 0 7px,
            #17181a 8px 13px
        );
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

/* eyes */

.eye{
    position:absolute;
    top:63px;
    width:32px;
    height:9px;
    background:#ff1010;
    box-shadow:
        0 0 8px red,
        0 0 25px red;
    z-index:10;
    animation:eyePulse .8s infinite alternate;
}

.eye.left{
    left:24px;
}

.eye.right{
    right:24px;
}

@keyframes eyePulse{
    from{
        opacity:.35;
    }
    to{
        opacity:1;
    }
}

/* mouth */

.mouth{
    position:absolute;
    left:53px;
    bottom:25px;
    width:58px;
    height:11px;
    background:#020202;
    border-bottom:3px solid #b00000;
}

/* neck */

.neck{
    position:absolute;
    left:103px;
    top:166px;
    width:70px;
    height:48px;
    border:3px solid #555;
    background:
        linear-gradient(
            90deg,
            #111,
            #777,
            #111
        );
}

/* =========================
   BODY
========================= */

.torso{
    position:absolute;
    left:35px;
    top:195px;
    width:210px;
    height:215px;
    clip-path:
        polygon(
            18% 0,
            82% 0,
            100% 100%,
            0 100%
        );
    background:
        linear-gradient(
            90deg,
            #111214,
            #686b6f 46%,
            #202124 50%,
            #37393b
        );
    border:3px solid #555;
    box-shadow:
        inset 0 0 35px #000;
}

/* armor */

.armor{
    position:absolute;
    border:2px solid #555;
    background:
        linear-gradient(
            145deg,
            #777,
            #18191b
        );
    box-shadow:
        inset 0 0 15px #000;
}

.armor.a{
    left:53px;
    top:210px;
    width:78px;
    height:78px;
    clip-path:
        polygon(
            20% 0,
            80% 0,
            100% 100%,
            0 100%
        );
}

.armor.b{
    right:52px;
    top:210px;
    width:78px;
    height:78px;
    clip-path:
        polygon(
            20% 0,
            80% 0,
            100% 100%,
            0 100%
        );
}

/* reactor */

.reactor{
    position:absolute;
    left:103px;
    top:262px;
    width:68px;
    height:68px;
    border-radius:50%;
    border:9px solid #252629;
    background:
        radial-gradient(
            circle,
            #fff 0 8%,
            #ff3333 18%,
            #a00000 45%,
            #050505 52%
        );
    box-shadow:
        0 0 15px red,
        0 0 40px red,
        0 0 90px rgba(255,0,0,.6);
    animation:reactorPulse .5s infinite alternate;
    z-index:15;
}

@keyframes reactorPulse{
    from{
        transform:scale(.88);
        filter:brightness(.8);
    }
    to{
        transform:scale(1.1);
        filter:brightness(1.5);
    }
}

/* =========================
   ARMS
========================= */

.shoulder{
    position:absolute;
    top:190px;
    width:78px;
    height:58px;
    border:3px solid #555;
    border-radius:50%;
    background:
        linear-gradient(
            #777,
            #161719
        );
}

.shoulder.left{
    left:-27px;
}

.shoulder.right{
    right:-27px;
}

.arm{
    position:absolute;
    top:215px;
    width:60px;
    height:190px;
    border:3px solid #555;
    border-radius:30px;
    background:
        linear-gradient(
            90deg,
            #111,
            #686b6d,
            #1b1c1e
        );
    box-shadow:
        inset 0 0 18px #000;
}

.arm.left{
    left:-10px;
    transform:rotate(12deg);
}

.arm.right{
    right:-10px;
    transform:rotate(-12deg);
}

.hand{
    position:absolute;
    top:390px;
    width:66px;
    height:72px;
    border:3px solid #555;
    border-radius:25px;
    background:
        linear-gradient(
            #555,
            #151617
        );
}

.hand.left{
    left:-15px;
}

.hand.right{
    right:-15px;
}

/* =========================
   LEGS
========================= */

.leg{
    position:absolute;
    top:390px;
    width:82px;
    height:155px;
    border:3px solid #555;
    background:
        linear-gradient(
            90deg,
            #111,
            #666,
            #111
        );
    box-shadow:
        inset 0 0 20px #000;
}

.leg.left{
    left:45px;
}

.leg.right{
    right:45px;
}

/* =========================
   ENERGY ARCS
========================= */

.arc{
    position:absolute;
    width:90px;
    height:3px;
    background:#ff1111;
    box-shadow:
        0 0 10px red,
        0 0 25px red;
    opacity:0;
}

.arc.one{
    left:0;
    top:310px;
    transform:rotate(25deg);
    animation:arcFlash .8s infinite;
}

.arc.two{
    right:0;
    top:340px;
    transform:rotate(-20deg);
    animation:arcFlash .8s .3s infinite;
}

@keyframes arcFlash{
    0%,100%{
        opacity:0;
    }
    30%,60%{
        opacity:1;
    }
}

/* =========================
   ATTACK MODE
========================= */

.attack #cyborg{
    animation:attack .6s ease-in-out;
}

@keyframes attack{
    0%{
        transform:translate(-50%,-50%);
    }

    35%{
        transform:
            translate(-50%,-50%)
            rotate(-5deg)
            scale(1.06);
    }

    65%{
        transform:
            translate(-50%,-50%)
            rotate(5deg)
            scale(1.06);
    }

    100%{
        transform:translate(-50%,-50%);
    }
}

.attack .aura{
    animation:attackAura .6s;
}

@keyframes attackAura{
    50%{
        transform:
            translate(-50%,-50%)
            scale(1.8);
        opacity:1;
    }
}

/* =========================
   MOBILE
========================= */

@media(max-width:500px){

    #cyborg{
        transform:
            translate(-50%,-50%)
            scale(.78);
    }

    .logo{
        font-size:42px;
        letter-spacing:8px;
    }

    .status{
        top:88px;
        font-size:8px;
    }

    .controls{
        bottom:12px;
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
        <div class="building" style="height:40%;width:8%"></div>
    </div>

    <div class="ground"></div>

    <div class="aura"></div>

    <div class="logo">VEX</div>

    <div class="status" id="status">
        CYBERNETIC WAR MACHINE // ONLINE
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

        <div class="arc one"></div>
        <div class="arc two"></div>

        <div class="shadow"></div>

    </div>

    <div class="controls">

        <button onclick="scan()">
            SCAN
        </button>

        <button onclick="attack()">
            ATTACK
        </button>

    </div>

</div>

<script>

function scan(){

    const status =
        document.getElementById("status");

    status.innerText =
        "SCANNING TARGET...";

    setTimeout(function(){

        status.innerText =
            "TARGET LOCKED // THREAT: EXTREME";

    },1000);
}


function attack(){

    const game =
        document.getElementById("game");

    game.classList.remove("attack");

    void game.offsetWidth;

    game.classList.add("attack");

    document.getElementById("status").innerText =
        "WEAPON SYSTEM ACTIVATED";

    if(navigator.vibrate){

        navigator.vibrate(
            [80,40,150]
        );

    }

    setTimeout(function(){

        game.classList.remove("attack");

        document.getElementById("status").innerText =
            "CYBERNETIC WAR MACHINE // ONLINE";

    },900);

}

</script>

</body>
</html>
