const anim = document.getElementById("anim");
const ani = document.querySelector("ani");

anim.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  console.log(x, y);

  ani.style.transformOrigin = "${x}px ${y}px";
  ani.style.transform = "scale(2)";
});
