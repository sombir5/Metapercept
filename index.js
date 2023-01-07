function getData() {
  let res = fetch("http://localhost:3000/data")
    .then((res) => res.json())
      .then((data) => 
      displayClasses(data)
  );
}

getData();

function displayClasses(data) {
    // console.log(data)
    let container = document.getElementById("container");
    container.innerHTML = "";
  data.forEach(elem=> {
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = elem.ImageUrl;
      let name = document.createElement("h1");
      name.innerText = elem.Name;
      let ShortDesc = document.createElement("p");
      ShortDesc.innerText = elem.ShortDesc;
      let view = document.createElement("button");
    view.innerText = "View";
    view.setAttribute("class","view")
      div.append(image, name, ShortDesc, view);
      container.append(div);
  });
}