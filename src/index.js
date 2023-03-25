let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
/*
document.addEventListener('DOMContentLoaded', () => {

  fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => {

      const toyCollection = document.getElementById('toy-collection');

      toys.forEach(toy => {

        const card = document.createElement('div');
        card.className = 'card';

        const name = document.createElement('h2');
        name.textContent = toy.name;
        card.appendChild(name);

        const image = document.createElement('img');
        image.src = toy.image;
        image.className = 'toy-avatar';
        card.appendChild(image);

        const likes = document.createElement('p');
        likes.textContent = toy.likes + ' Likes';
        card.appendChild(likes);

        const likeButton = document.createElement('button');
        likeButton.className = 'like-btn';
        likeButton.id = toy.id;
        likeButton.textContent = 'Like ❤️';
        card.appendChild(likeButton);

        toyCollection.appendChild(card);

      });

    });

});
*/

document.addEventListener('DOMContentLoaded', () => {

  fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => {

      const toyCollection = document.getElementById('toy-collection');

      toys.forEach(toy => {

        const card = document.createElement('div');
        card.className = 'card';

        const name = document.createElement('h2');
        name.textContent = toy.name;
        card.appendChild(name);

        const image = document.createElement('img');
        image.src = toy.image;
        image.className = 'toy-avatar';
        card.appendChild(image);

        const likes = document.createElement('p');
        likes.textContent = toy.likes + ' Likes';
        card.appendChild(likes);

        const likeButton = document.createElement('button');
        likeButton.className = 'like-btn';
        likeButton.id = toy.id;
        likeButton.textContent = 'Like ❤️';
        card.appendChild(likeButton);

        likeButton.addEventListener('click', () => {
          likes.textContent = (parseInt(likes.textContent) + 1) + ' Likes';

          fetch(`http://localhost:3000/toys/${toy.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              likes: toy.likes + 1
            })
          })
            .then(response => response.json())
            .then(updatedToy => {
              toy.likes = updatedToy.likes;
            })
            .catch(error => console.error(error));
        });

        toyCollection.appendChild(card);

      });

    });

});
