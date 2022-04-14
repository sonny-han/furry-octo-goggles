const flowers = [
    {
      name: "Tulip",
      color: "yellow",
      image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
      name: "Daffodil",
      color: "yellow",
      image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
      name: "Sunflower",
      color: "yellow",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
      name: "Bluebell",
      color: "blue",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
      name: "Rose",
      color: "red",
      image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
  ];

  ul = document.querySelector('ul')

  //RENDER FLOWERS TO WEBPAGE. "flowers" is a placeholder.
  
  function renderFlowersToPage(flowers){
      for(i = 0; i < flowers.length; i++){
          let list_item = document.createElement("li");
          list_item.classList.add(flowers[i].color, 'card')
          // flower name
        let title = document.createElement("h3");
        title.textContent = flowers[i].name;
          //flower color
        let color = document.createElement("p")
        color.textContent = flowers[i].color;
          // flower image
        let image = document.createElement("img")
        image.setAttribute("src", flowers[i].image)
          ul.appendChild(list_item)
          list_item.appendChild(title)
          list_item.appendChild(color)
          list_item.appendChild(image)

      }
  }

  renderFlowersToPage(flowers)

  // FILTER FLOWERS BY COLOR

  const filterBtns = document.querySelector('.filters');
  const cards = document.querySelectorAll(".card")
  
  function filterFn(event){
    console.log('clicked', event.target)

  if(event.target.classList.contains("filter-btn")){

    const filterValue = event.target.getAttribute('data-filter');

    console.log('clicked', filterValue)

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === "all"){
        cards[i].classList.remove("hide");
        cards[i].classList.add("show");
      } else {
        cards[i].classList.remove("show");
        cards[i].classList.add("hide");

      }
    }
  }

}

renderFlowersToPage(flowers);

const sortingBtns = document.querySelector(".filters");

function sortingFn(event){
  console.log(event.target)
  if(event.target.classList.contains("sorting-btn")){
    //do something
    const filterValue = event.target.getAttribute("data-filter");

    if(filterValue ==="ascending"){
      //write sort logic
      flowers.sort(function(a, b){
        if(a.name < b.name){
          return -1
        }
        if(a.name > b.name){
          return 1;
        }

        return 0;
      });
      ul.innterHTML = ""
      renderFlowersToPage(flowers)
    } else if (filterValue === "descending") {
      //write reverse logic
      flowers.reverse();
      console.log('reversed',flowers)
      //clear the page of unsorted flowers
      ul.innerHTML = "";
      renderFlowersToPage(flowers)
    }
    }
    }


filterBtns.addEventListener('click', filterFn)
filterBtns.addEventListener('click', sortingFn)
