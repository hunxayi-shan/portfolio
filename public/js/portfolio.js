document.getElementById("read_more").addEventListener( 'click' , changeClass);

function changeClass() {
  let content = document.getElementById("extra_content");
  let btn = document.getElementById("read_more");
  content.classList.toggle('show');

  if (content.classList.contains("show")) {
      btn.innerHTML = "Show Less";
  } else {
      btn.innerHTML = "Show More";
  }
}
