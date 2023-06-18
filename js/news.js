// document.getElementById("newscherry").onclick = function() {
  // document.getElementById("newscherrycoment").style.display = "none";
// }

// document.getElementById("newscherrycoment").style.display = "none";
document.getElementById("newscherrycoment").style.display = "none";

const cherryComent = document.getElementById("newscherry");
cherryComent.addEventListener("click", () => {
  document.getElementById("newscherrycoment").style.display = "";
});

// ↑　反映されない　「2023.6.20　サクランボ狩りの予約を開始しました。」にクリックすると、「大変お待たせ致しました。～」が表示されるようにしたい（スライド？）