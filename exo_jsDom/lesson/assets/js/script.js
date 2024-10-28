const btn = document.getElementById('btn');
const title = document.getElementsByClassName('title');
const list = document.getElementsByTagName('ul');
const listItems = document.getElementsByTagName('li');
// const filteredFruits = listItems.filter(fruit => fruit.length > 5)

// Il faut mettre la meme chose qu'en CSS ici 
//querySelector prendra le premier qu'il croise avec la class
// const listItems = document.querySelector('.list_items');
//querySelector all prendra tous les items avec la même class
// const listItems = document.querySelectorAll('.list_items');
// const listItems = document.querySelectorAll('.list_items');
// const link = document.getElementById('link');

// console.log(btn);
// console.log(title);
// console.log(list);
// link.setAttribute('href', 'https://www.youtube.com');
// link.textContent = 'COUCOU'
// console.log(link.textContent)

// listItems[0].style.color = 'red'
//Accéder à la liste des styles qu'on peut modifier
// console.log(listItems[0].style)
// console.log(listItems[0].classList.add ('red_text'))
// console.log(listItems[1].classList.add ('blue_text'))
// listItems[0].classList.remove('red_text');

//Vérifie si l'élément à une classe
// console.log(listItems[0].classList.contains)

const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem ipsum';

// Création d'une image
const image = document.createElement('img')
document.body.append(image)

image.src = 'https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png';
image.style.marginTop = '40px';

//Permet de supprimer un élément 
listItems[0].remove()

const container = document.getElementById('container')
//document.body -> accède à l'élément body du HTML
//body.append -> ajoute l'élément spécifié à la fin du <body>
document.body.append(container)
btn.style.marginTop = '20px'
//Permet de créer une balise HTML dans une div

container.innerHTML = '<p>Hello World</p>'

// Ecouter des événements avec JS 

//'click' pour ordonner activation au click sur l'élément 
// --> Création d'une fonction pour dire ce qu'on fait au click de l'élément spécifié. 

btn.addEventListener('click', function (event) {
        console.log(event.target)
        console.log(event.type)
});

// const input = document.getElementById('input')
// input.addEventListener('keyup', function() {
//     console.log(input.value)
// })