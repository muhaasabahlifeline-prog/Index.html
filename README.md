<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>

<title>LONGVIDEO AI</title>

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  background:#07070a;
  color:#fff;
  font-family:Arial,Helvetica,sans-serif;
}

.app{
  width:100%;
  max-width:1100px;
  margin:auto;
  padding:20px;
}

header{
  padding:20px 0 30px;
}

.logo{
  font-size:32px;
  font-weight:900;
  letter-spacing:2px;
}

.logo span{
  color:#8b5cf6;
}

.subtitle{
  color:#999;
  margin-top:8px;
}

.card{
  background:#111116;
  border:1px solid #24242c;
  border-radius:16px;
  padding:20px;
  margin-bottom:16px;
}

label{
  display:block;
  margin-bottom:8px;
  color:#bbb;
  font-size:14px;
}

textarea,
select,
input{
  width:100%;
  background:#08080c;
  border:1px solid #30303a;
  border-radius:10px;
  color:white;
  padding:14px;
  font-size:15px;
}

textarea{
  min-height:150px;
  resize:vertical;
}

.grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:15px;
}

button{
  width:100%;
  border:0;
  border-radius:11px;
  padding:15px;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

.generate{
  background:#7c3aed;
  color:white;
  margin-top:15px;
}

.generate:active{
  transform:scale(.98);
}

.progress{
  height:10px;
  background:#202027;
  border-radius:20px;
  overflow:hidden;
  margin-top:15px;
}

.progressBar{
  width:0%;
  height:100%;
  background:linear-gradient(
    90deg,
    #7c3aed,
    #c084fc
  );
  transition:width .3s;
}

.status{
  margin-top:12px;
  color:#aaa;
  font-size:14px;
}

.sceneList{
  display:flex;
  flex-direction:column;
  gap:8px;
  margin-top:15px;
}

.scene{
  background:#09090d;
  border:1px solid #292932;
  border-radius:10px;
  padding:12px;
}

.scene strong{
  color:#c084fc;
}

.preview{
  min-height:220px;
  border:1px dashed #333;
  border-radius:12px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:#777;
}

.small{
  color:#777;
  font-size:12px;
  margin-top:8px;
}

@media(max-width:650px){

  .grid{
    grid-template-columns:1fr;
  }

  .app{
    padding:14px;
  }

  .logo{
    font-size:27px;
  }

}

</style>
</head>

<body>

<div class="app">

<header>

<div class="logo">
LONGVIDEO <span>AI</span>
</div>

<div class="subtitle">
Create long-form AI videos from one idea.
</div>

</header>


<div class="card">

<label>
Wat wil je maken?
</label>

<textarea
id="prompt"
placeholder="Bijvoorbeeld:

Maak een donkere cinematografische superheldenfilm over een half menselijke, half mechanische krijger die ontdekt dat hij de laatste verdediger van de aarde is."
></textarea>

</div>


<div class="card">

<div class="grid">

<div>

<label>
Videolengte
</label>

<select id="duration">

<option value="60">
1 minuut
</option>

<option value="300">
5 minuten
</option>

<option value="600">
10 minuten
</option>

<option value="1200">
20 minuten
</option>

<option value="1800">
30 minuten
</option>

</select>

</div>


<div>

<label>
Resolutie
</label>

<select id="resolution">

<option value="480p">
480p
</option>

<option value="720p">
720p HD
</option>

<option value="1080p">
1080p Full HD
</option>

</select>

</div>


<div>

<label>
Beeldverhouding
</label>

<select id="aspect">

<option value="16:9">
16:9 YouTube
</option>

<option value="9:16">
9:16 TikTok
</option>

<option value="1:1">
1:1
</option>

</select>

</div>


<div>

<label>
Stijl
</label>

<select id="style">

<option>
Cinematic
</option>

<option>
Realistic
</option>

<option>
Anime
</option>

<option>
3D Animation
</option>

<option>
Dark Fantasy
</option>

<option>
Documentary
</option>

</select>

</div>

</div>

<button
class="generate"
onclick="createVideoPlan()"
>
CREATE VIDEO
</button>

</div>


<div class="card">

<h2>
Video Planner
</h2>

<div
class="status"
id="status"
>
Ready.
</div>

<div class="progress">

<div
class="progressBar"
id="progress"
></div>

</div>

<div
class="sceneList"
id="sceneList"
></div>

</div>


<div class="card">

<h2>
Video Output
</h2>

<div class="preview">

<div>

VIDEO PREVIEW

<br><br>

<span>
De gegenereerde video verschijnt hier.
</span>

</div>

</div>

</div>

</div>


<script>

function createVideoPlan(){

  const prompt =
    document.getElementById("prompt").value.trim();

  const duration =
    Number(
      document.getElementById("duration").value
    );

  const resolution =
    document.getElementById("resolution").value;

  const aspect =
    document.getElementById("aspect").value;

  const style =
    document.getElementById("style").value;

  const status =
    document.getElementById("status");

  const progress =
    document.getElementById("progress");

  const sceneList =
    document.getElementById("sceneList");


  if(!prompt){

    status.innerText =
      "Voer eerst een verhaal of video-idee in.";

    return;

  }


  sceneList.innerHTML = "";

  status.innerText =
    "Video-project voorbereiden...";


  /*
    We gebruiken korte AI-clips als bouwstenen.

    Voorlopig:
    10 seconden per scène.
  */

  const sceneLength = 10;

  const sceneCount =
    Math.ceil(duration / sceneLength);


  for(
    let i = 1;
    i <= sceneCount;
    i++
  ){

    const scene =
      document.createElement("div");

    scene.className = "scene";

    scene.innerHTML = `
      <strong>Scene ${i}</strong>
      <br>
      ${style} • ${resolution} • ${aspect}
      <br>
      <span class="small">
      Waiting for AI generation...
      </span>
    `;

    sceneList.appendChild(scene);

  }


  let value = 0;


  const timer =
    setInterval(function(){

      value += 5;

      progress.style.width =
        value + "%";


      if(value >= 100){

        clearInterval(timer);

        status.innerText =
          "PROJECT READY — AI BACKEND NEEDED";

      }

    },100);


  console.log({

    prompt,
    duration,
    resolution,
    aspect,
    style,
    sceneCount

  });

}

</script>

</body>
</html>
