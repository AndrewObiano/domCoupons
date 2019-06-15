//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and squash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

let problem1 = document.getElementById('disclaimer');
problem1.innerHTML = finePrint;

//2. Target the div element with the id of 'brand1' and update the content to Nabisco.

let problem2 = document.getElementById('brand1');
problem2.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

let problem3 = document.getElementById('item1');
problem3.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

let problem4 = document.getElementById('price1');
problem4.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

let problem5 = document.getElementById('discount1');
problem5.innerHTML = 'Free fries with purchase!!! OMFG!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

let problem6 = document.createElement('div')
problem6.id = 'item2';
problem6.innerHTML = "Hendrick's Gin";
brand2.appendChild(problem6);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

let problem7 = document.createElement('div');
problem7.id = 'price2';
problem7.innerHTML = '$34.99';
brand2.appendChild(problem7);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

let problem8 = document.createElement('button');
problem8.id = 'discount3';
problem8.innerHTML = '50% OFF Axe body soap!';
price3.appendChild(problem8);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

let problem9 = document.getElementsByClassName('item');
problem9[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

let problem10 = document.createElement('button');
problem10.className = 'discount';
problem10.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
let pandaClass = document.getElementsByClassName('block1 col-sm-4');
pandaClass[1].appendChild(problem10);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

let problem11 = document.getElementsByClassName('brand');
problem11[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

let problem12 = document.getElementsByClassName('price');
problem12[1].innerHTML = '$10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

let problem13 = document.createElement('div');
problem13.className = 'brand';
problem13.innerHTML = 'Hifiman Shangri-La';
let headphoneClass = document.getElementsByClassName('block3 col-sm-4');
headphoneClass[1].appendChild(problem13);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

let problem14 = document.createElement('div');
problem14.className = 'item';
problem14.innerHTML = 'Electrostatic Headphones';
headphoneClass[1].appendChild(problem14);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

let problem15 = document.createElement('div');
problem15.className = 'price';
problem15.innerHTML = '$18,000';
headphoneClass[1].appendChild(problem15);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

let problem16 = document.createElement('button');
problem16.className = 'discount';
problem16.innerHTML = 'Free Barry Manilow CD with purchase!';
headphoneClass[1].appendChild(problem16);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

let unicBrand = document.getElementsByClassName('brand');
unicBrand[3].innerHTML = 'H&M';

let unicItem = document.getElementsByClassName('item');
unicItem[3].innerHTML = 'Unicorn-Head Slippers';

let unicPrice = document.getElementsByClassName('price');
unicPrice[3].innerHTML = '$21.99';

let unicButton = document.getElementsByClassName('discount');
unicButton[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

let doritoBrand = document.getElementsByClassName('brand');
doritoBrand[4].innerHTML = 'Frito Lay';

let doritoItem = document.getElementsByClassName('item');
doritoItem[4].innerHTML = "Poppin' Jalapeno Doritos";

let doritoPrice = document.getElementsByClassName('price');
doritoPrice[4].innerHTML = '$7.77';

let doritoButton = document.getElementsByClassName('discount');
doritoButton[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light.';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

let pugBrand = document.getElementsByClassName('brand');
pugBrand[5].innerHTML = 'Any Dog Breeder';

let pugItem = document.getElementsByClassName('item');
pugItem[5].innerHTML = "Baby Puggy";

let pugPrice = document.getElementsByClassName('price');
pugPrice[5].innerHTML = 'Priceless';

let pugButton = document.getElementsByClassName('discount');
pugButton[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.

//  LEFT ITEM
let item1Brand = document.getElementsByClassName('brand');
item1Brand[6].innerHTML = 'BLACKPINK';

let item1Item = document.getElementsByClassName('item');
item1Item[6].innerHTML = "Lisa";

let item1Price = document.getElementsByClassName('price');
item1Price[6].innerHTML = "$44444.44";

let item1Button = document.getElementsByClassName('discount');
item1Button[6].innerHTML = 'IN YOUR AREA!!!';

let item1Img = document.getElementsByTagName('img');
item1Img[10].src = "https://i.pinimg.com/originals/37/c6/f8/37c6f85f5648f50101bb1a6eeb1c503c.jpg";

// CENTER ITEM
let item2Div = document.getElementsByClassName('block2 col-sm-4');

let item2Brand = document.createElement('div');
item2Brand.className = 'brand';
item2Brand.innerHTML = 'Ugandan';
item2Div[3].appendChild(item2Brand);

let item2Item = document.createElement('div');
item2Item.className = 'item';
item2Item.innerHTML = 'Knuckles';
item2Div[3].appendChild(item2Item);

let item2Price = document.createElement('div');
item2Price.className = 'price';
item2Price.innerHTML = '$poor';
item2Div[3].appendChild(item2Price);

let item2Button = document.createElement('button');
item2Button.className = 'discount';
item2Button.innerHTML = 'Show me de whey';
item2Div[3].appendChild(item2Button);

let item2Img = document.getElementsByTagName('img');
item1Img[11].src = "https://www.earnthenecklace.com/wp-content/uploads/2018/02/ugandan-knuckles-300x300.jpg";

// RIGHT ITEM
let item3Div = document.getElementsByClassName('block3 col-sm-4');

let item3Brand = document.createElement('div');
item3Brand.className = 'brand';
item3Brand.innerHTML = 'The Universe';
item3Div[3].appendChild(item3Brand);

let item3Item = document.createElement('div');
item3Item.className = 'item';
item3Item.innerHTML = 'Illuminati';
item3Div[3].appendChild(item3Item);

let item3Price = document.createElement('div');
item3Price.className = 'price';
item3Price.innerHTML = '$1.00';
item3Div[3].appendChild(item3Price);

let item3Button = document.createElement('button');
item3Button.className = 'discount';
item3Button.innerHTML = "Show me your secrets!";
item3Div[3].appendChild(item3Button);

let item3Img = document.getElementsByTagName('img');
item1Img[12].src = "https://media.newyorker.com/photos/59095185019dfc3494e9dab1/master/w_727,c_limit/175417397-290.jpg.jpeg";