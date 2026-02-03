const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const gif = document.querySelector("#gif");

function prank(){

  btn.addEventListener("click", async()=>{
    result.innerHTML = "Your love status is loading...🔮😂";
    gif.src = "";

    const res = await fetch("https://yesno.wtf/api");
    const data = await res.json();

    result.innerHTML = `❌ NO 💔😭 <br>
      <small>Because you're SINGLE 😈</small><br>
      🍕 Netflix + Sleep Mode ON`;

    gif.src = data.image;

  })
}

prank();


