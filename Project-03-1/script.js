var images = [
    'https://user-images.githubusercontent.com/97996962/162998260-d244ee7d-354b-4506-80ea-63108cfd4822.png',
    'https://user-images.githubusercontent.com/97996962/162998261-4c22213c-3ec0-4ab0-ade3-eec3a305cb18.png',
    'https://user-images.githubusercontent.com/97996962/162998265-51eae6df-7ca6-43ed-b1c6-0f4f20ce38a5.png',
    'https://user-images.githubusercontent.com/97996962/162998266-7e0adf95-16fa-42e8-bbf5-8d973ac4d995.png',
    'https://user-images.githubusercontent.com/97996962/162998266-7e0adf95-16fa-42e8-bbf5-8d973ac4d995.png',
    'https://user-images.githubusercontent.com/97996962/162998259-dfcda495-35d8-4f3f-b7c9-5a4c178086c0.png'
]

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    
    // set the position
    img.style.position = 'absolute';
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';
  
    document.body.appendChild(img);
  }
  document.getElementById('foo').addEventListener('click', () =>
    show_image("https://user-images.githubusercontent.com/97996962/162998259-dfcda495-35d8-4f3f-b7c9-5a4c178086c0.png", 'foo')
  );


//   //example
//   function renderFlowersToPage(flowers){
//     for(i = 0; i < flowers.length; i++){
//         let list_item = document.createElement("li");
//         list_item.classList.add(flowers[i].color, 'card')

//         renderFlowersToPage(flowers)