
// "id": 1,
//       "name": "Shoyu Ramen",
//       "restaurant": "Nonono",
//       "image": "./assets/ramen/shoyu.jpg",
//       "rating": 7,
//       "comment": "Delish. Can't go wrong with a classic!"

//Givens
const ramenMenu = document.getElementById('ramen-menu');
const ramenImg = document.getElementsByClassName('detail-image');
const ramenName = document.getElementsByClassName('name');
const ramenRestaurant = document.getElementsByClassName('restaurant');
const ramenComment = document.getElementById('comment-display');
const ramenRating = document.getElementById('rating-display');


const Menu = () => {
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            const ramenMenu = document.getElementById('ramen-menu');
            data.forEach((ramen) => {
                const img = document.createElement('img')
                img.src = ramen.image; //calls the data image
                ramenMenu.append(img); // sends the image to the html
                const ramenImg = document.getElementsByClassName('detail-image');
                img.addEventListener('click', (e) => { // cycling through image and details of ramen
                    e.preventDefault();
                    ramenImg[0].src = ramen.image; //getElementsByClassName returns an array use bracket to call value
                    ramenName[0].innerHTML = ramen.name;
                    ramenRestaurant[0].innerHTML = ramen.restaurant;
                    document.getElementById('comment-display').innerHTML = ramen.comment;
                    document.getElementById('rating-display').innerHTML = ramen.rating;
                })
                ramenMenu.appendChild(img);
            })

        })
}

// Add new ramen into menu
const newRamen = () => {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newramenName = document.getElementById('new-name').value;
        const newramenRestaurant = document.getElementById('new-restaurant').value;
        const newramenImg = document.getElementById('new-image').value;
        const newramenComment = document.getElementById('new-comment').value;
        const newramenRating = document.getElementById('new-rating').value;
        newImg = document.createElement('img');
        newImg.src = newramenImg;
        document.getElementById('ramen-menu').append(newImg);
    })
}
// Does not save because we need to POST and PATCH function
newRamen();




document.addEventListener('DOMContentLoaded', Menu);
document.addEventListener('submit', newRamen)