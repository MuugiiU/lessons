
var span = document.getElementById('watch');
document.getElementById('watch').style.fontSize="70px";
document.getElementById('watch').style.color="#7F669D";
document.getElementById('watch').style.padding="100px";
function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  console.log(("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2));
  span.innerText =
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(time, 1000);

