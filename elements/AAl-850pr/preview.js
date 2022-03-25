function(instance, properties) {


  var d = document.createElement("div")
  d.id = "loaderr preview"
  d.style.display = "flex"
  d.style.width = properties.bubble.width-0 + "px"
  d.style.height = properties.bubble.height-0 + "px"
  d.style.overflow = "hidden"
  d.style.justifyContent = "center"
  d.style.background = "none"
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://s3.amazonaws.com/appforest_uf/f1648210251773x808269200674233600/icons8-share-100%20%283%29.png")
  var smaller = Math.min(properties.bubble.height, properties.bubble.width)
  x.style.width = "100px"
    x.style.height = "100px"
  x.style.verticalAlign = "middle"
    x.setAttribute("transform", "translateX(50%) translateY(50%)")
  d.appendChild(x)
  var e = []
  
  
  instance.canvas[0].appendChild(d)
  var iconScale = x.offsetWidth / 100
  e.forEach(element => element.style.fontSize = iconScale * 100 + "%") 

}