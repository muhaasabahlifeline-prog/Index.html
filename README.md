<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VEX — Evil Cyborg</title>

<style>
*{box-sizing:border-box}

html,body{
    margin:0;
    width:100%;
    height:100%;
    overflow:hidden;
    background:#020204;
    font-family:Arial,sans-serif;
    color:white;
}

body{
    display:flex;
    justify-content:center;
    align-items:center;
}

.scene{
    position:relative;
    width:100vw;
    height:100vh;
    overflow:hidden;
    background:
      radial-gradient(circle at 50% 42%,#3b0808 0%,#160404 22%,#050507 55%,#010102 100%);
}

/* ---------- ATMOSFEER ---------- */

.vignette{
    position:absolute;
    inset:0;
    pointer-events:none;
    background:radial-gradient(circle,transparent 35%,rgba(0,0,0,.75) 100%);
}

.grid{
    position:absolute;
    left:-50%;
    bottom:-30%;
    width:200%;
    height:65%;
    opacity:.16;
    background:
      linear-gradient(rgba(255,0,0,.3) 1px,transparent 1px),
      linear-gradient(90deg,rgba(255,0,0,.3) 1px,transparent 1px);
    background-size:45px 45px;
    transform:perspective(300px) rotateX(58deg);
}

.energy{
    position:absolute;
    left:50%;
    top:48%;
    width:420px;
    height:420px;
    transform:translate(-50%,-50%);
    border-radius:50%;
    background:radial-gradient(
      circle,
      rgba(255,0,0,.28),
      rgba(180,0,0,.08) 35%,
      transparent 70%
    );
    filter:blur(8px);
    animation:energyPulse 1.4s infinite alternate;
}

@keyframes energyPulse{
    from{transform:translate(-50%,-50%) scale(.85);opacity:.45}
    to{transform:translate(-50%,-50%) scale(1.15);opacity:1}
}

/* ---------- TITEL ---------- */

.title{
    position:absolute;
    top:24px;
    width:100%;
    text-align:center;
    z-index:20;
    font-size:clamp(28px,8vw,70px);
    font-weight:900;
    letter-spacing:10px;
    color:#eee;
    text-shadow:0 0 8px #fff,0 0 25px red,0 0 55px red;
}

.status{
    position:absolute;
    top:100px;
    width:100%;
    text-align:center;
    z-index:20;
    color:#f00;
    font-size:11px;
    letter-spacing:4px;
    text-shadow:0 0 10px red;
}

/* ---------- CYBORG ---------- */

.cyborg{
    position:absolute;
    left:50%;
    top:52%;
    width:270px;
    height:560px;
    transform:translate(-50%,-50%);
    z-index:10;
    animation:idle 3s infinite ease-in-out;
}

@keyframes idle{
    0%,100%{transform:translate(-50%,-50%)}
    50%{transform:translate(-50%,-52%)}
}

/* schaduw */
.shadow{
    position:absolute;
    bottom:-15px;
    left:50%;
    width:250px;
    height:30px;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    box-shadow:0 0 30px #f00000;
}

/* hoofd */
.head{
    position:absolute;
    left:54px;
    top:0;
    width:162px;
    height:172px;
    border-radius:46% 46% 35% 35%;
    background:linear-gradient(
      90deg,
      #17191b 0%,
      #5d6064 48%,
      #17191b 49%,
      #292b2f 100%
    );
    border:3px solid #777;
    box-shadow:
      inset 0 0 25px #000,
      0 0 30px rgba(255,0,0,.3);
}

/* menselijke helft */
.human{
    position:absolute;
    left:4px;
    top:4px;
    width:74px;
    height:160px;
    border-radius:45% 5% 5% 35%;
    background:
      linear-gradient(100deg,#7d4b3d,#c1846e,#5c332c);
    overflow:hidden;
}

.human:after{
    content:"";
    position:absolute;
    width:80px;
    height:40px;
    left:0;
    top:0;
    background:rgba(255,255,255,.07);
    transform:rotate(-20deg);
}

/* machine helft */
.machine{
    position:absolute;
    right:4px;
    top:4px;
    width:74px;
    height:160px;
    border-radius:5% 45% 35% 5%;
    background:
      repeating-linear-gradient(
        0deg,
        #45484b 0 7px,
        #17191c 8px 12px
      );
    overflow:hidden;
}

.machine:after{
    content:"";
    position:absolute;
    inset:10px;
    border-left:2px solid #a00000;
    border-right:2px solid #a00000;
    opacity:.7;
}

/* oog */
.eye{
    position:absolute;
    top:63px;
    width:31px;
    height
