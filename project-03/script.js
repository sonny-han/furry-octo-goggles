const spam = [
    {
        name: "spam01",
        image: "https://user-images.githubusercontent.com/97996962/162998259-dfcda495-35d8-4f3f-b7c9-5a4c178086c0.png"
    },
    {
        name: "spam02",
        image: "https://user-images.githubusercontent.com/97996962/162998257-05cb03ec-9fac-4f4a-ba27-d457694e2d2a.png"
    }
]

function showPicture() {
    var sourceOfPicture = "https://user-images.githubusercontent.com/97996962/162998257-05cb03ec-9fac-4f4a-ba27-d457694e2d2a.png";
    var img = document.getElementById('spam')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block"
}
