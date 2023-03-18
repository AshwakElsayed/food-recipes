
let mainSection=document.getElementById('mainSection');
let detailsSection =document.getElementById('detailsSection') ;
let searchSection=document.getElementById('searchSection');
//*------------------ slide Bar ------------------*//
function openSideNav() {
  $(".side-nav-menu").animate({left: 0}, 500);
  $(".open-close-icon").toggleClass("fa-x");
  for (let i = 0; i < 5; i++) {
    $(".items li").eq(i).animate({
      top: 0
    }, (i + 5) * 100)
  }
}
function closeSideNav() {
  let boxWidth = $(".side-nav-menu .nav-tab").outerWidth();
  $(".side-nav-menu").animate({left: -boxWidth}, 500);
  $(".open-close-icon").addClass("fa-align-justify");
  $(".open-close-icon").removeClass("fa-x");
  $(".items li").animate({top: 300}, 500)
}
closeSideNav()

$(".side-nav-menu i.open-close-icon").click(() => {
  if ($(".side-nav-menu").css("left") == "0px") {
      closeSideNav()
  } else {
      openSideNav()
  }
})
//*---------------- end slide Bar ------------------*//

//*-------------- start main content -----------------*//
let food=[] 
async function getmeals() {
  $('#loading').css('z-index' , '99999999999').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let final=await myResbonse.json();
    food=final.meals;
    displaymeals();
    $('#loading').addClass('d-none').css('z-index' , '99999');
}
getmeals()
function displaymeals() {
    
    $('#categoriesSection').addClass('d-none');
    $('#categoriesDetails').addClass('d-none')
    $('#countriesMeals').addClass('d-none')
    $('#mealsIngredients').addClass('d-none');
    $('#Ingredients').addClass('d-none')
    let mealsBox=``
    for (let i = 0; i < 20 ; i++) {
    mealsBox +=`<div class="col-md-3  p-3 " onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden " onclick="showMeal(${food[i].idMeal})">
      <div>
        <img
          src="${food[i].strMealThumb}"
          class="img-fluid rounded"/>
        <div class="layer d-flex align-items-center">
          <div class="info p-0 ">
            <h3>${food[i].strMeal}</h3>
          </div>
        </div>
      </div>
     </div>
   </div>`
        
    }
    document.getElementById('card').innerHTML =mealsBox
}
//------------- details main content --------------//

let details=[]
async function showMeal(id) {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let final=await myResbonse.json();
    details=final.meals
    //console.log(details);
    displayDetails(details);
    $('#loading').addClass('d-none'); 
}

function displayDetails(details) {
    detailsSection.classList.remove("d-none");
    $('#categoriesDetails').addClass('d-none')
    mainSection.classList.add('d-none');
    searchSection.classList.add('d-none');
    document.getElementById('countriesMeals').classList.add('d-none');
    document.getElementById('mealsIngredients').classList.add('d-none');

    if (details[0].strTags != null) {
      var tags=details[0].strTags.split(",")
    } else {
      var tags=[];
    }

    let mealsBox=``
    mealsBox +=` <div class="col-md-4 ">
    <img src="${details[0].strMealThumb}" alt="" class="w-100 rounded-3">
    <h2>${details[0].strMeal}</h2>
    
   </div>
   <div class="col-md-8">
      <h2>Instructions</h2>
      <p>${details[0].strInstructions}</p>
      <h3><span class="fw-bolder">Area : </span>${details[0].strArea}</h3>
      <h3><span class="fw-bolder">Category : </span>${details[0].strCategory}</h3>
      <h3>Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
          <li class="alert alert-info m-2 p-1">${details[0].strMeasure1}${details[0].strIngredient1}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure2}${details[0].strIngredient2}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure3}${details[0].strIngredient3}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure4}${details[0].strIngredient4}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure5}${details[0].strIngredient5}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure6}${details[0].strIngredient6}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure7}${details[0].strIngredient7}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure8}${details[0].strIngredient8}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure9}${details[0].strIngredient9}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure10}${details[0].strIngredient10}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure11}${details[0].strIngredient11}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure12}${details[0].strIngredient12}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure13}${details[0].strIngredient13}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure14}${details[0].strIngredient14}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure15}${details[0].strIngredient15}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure16}${details[0].strIngredient16}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure17}${details[0].strIngredient17}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure18}${details[0].strIngredient18}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure19}${details[0].strIngredient19}
          </li><li class="alert alert-info m-2 p-1">${details[0].strMeasure20}${details[0].strIngredient20}
          </li>
      </ul>
      <h3>Tags :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
                    
        <li class="alert alert-danger m-2 p-1">${tags[0]}</li>
        <li class="alert alert-danger m-2 p-1">${tags[1]}</li>
        <li class="alert alert-danger m-2 p-1">${tags[2]}</li>
      </ul>
      <a target="_blank" href="http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/" class="btn btn-success">Source</a>
      <a target="_blank" href="https://www.youtube.com/watch?v=bwTSmLTZKNg" class="btn btn-danger">Youtube</a>
  </div>`
  
    
    document.getElementById('details-Data').innerHTML =mealsBox;

    document.querySelectorAll('li').forEach((item)=>{
      if (item.innerText =="" || item.innerText.includes(null) || item.innerText == 'undefined') {
          item.classList.add('d-none');
      }
    })
    
    
}
//*---------------- end main content ----------------*//

//*------------------ start search  ------------------*//
//------------------ search By Name -----------------//
let searchMeal=[]
$('.item1').click(function () { 
  document.getElementById('nameSearch').value="";
  document.getElementById('fSearch').value="";

});
async function searchByName(name) {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    let final=await myResbonse.json();
    searchMeal=final.meals
    //console.log(searchMeal);
    $('#loading').addClass('d-none');
    displaySearch(searchMeal);
} 

function  displaySearch(searchMeal) {
  document.getElementById('searchData').innerHTML = "";
  
  $('#searchSection').removeClass('d-none');
  $('#mainSection').addClass('d-none');
  $('#countries').addClass('d-none');
  $('#countriesMeals').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#mealsIngredients').addClass('d-none');
  $('#Contacts').addClass('d-none');
  $('#categoriesDetails').addClass('d-none');
  $('#categoriesSection').addClass('d-none');
  $('#detailsSection').addClass('d-none');
  
    let mealsBox=``
    for (let i = 0; i < searchMeal.length ; i++) {
    mealsBox +=`<div class="col-md-3  p-3 " onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden " onclick="showMeal(${searchMeal[i].idMeal})">
      <div>
        <img
          src="${searchMeal[i].strMealThumb}"
          class="img-fluid rounded"/>
        <div class="layer d-flex align-items-center">
          <div class="info p-0 ">
            <h3>${searchMeal[i].strMeal}</h3>
          </div>
        </div>
      </div>
     </div>
   </div>`
        
    }
    document.getElementById('searchData').innerHTML =mealsBox
}
//-------------- Search By First Letter -------------//
let searchLetter=[]
async function searchByFLetter(Letter) {
  
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`);
    let final=await myResbonse.json();
    searchLetter=final.meals;
    //console.log(searchLetter);
    displayLetter(searchLetter);
  
}    

function  displayLetter(searchLetter) {
  $('#mainSection').addClass('d-none');
    let mealsBox=``
    for (let i = 0; i < searchLetter.length ; i++) {
    mealsBox +=`<div class="col-md-3  p-3 " onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden " onclick="showMeal(${searchLetter[i].idMeal})">
      <div>
        <img
          src="${searchLetter[i].strMealThumb}"
          class="img-fluid rounded"/>
        <div class="layer d-flex align-items-center">
          <div class="info p-0 ">
            <h3>${searchLetter[i].strMeal}</h3>
          </div>
        </div>
      </div>
     </div>
   </div>`
        
    }
    document.getElementById('searchData').innerHTML =mealsBox
}
//*------------------ end search  --------------------*//
//*---------------- start categories  ----------------*//
let categories=[]
async function getCategories() {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let final=await myResbonse.json();
    categories=final.categories;
    //console.log(categories);
    displayCategories();
    $('#loading').addClass('d-none');
}

function displayCategories() {
    $('#categoriesSection').removeClass('d-none')
    $('#mainSection').addClass('d-none');
    $('#searchSection').addClass('d-none');
    $('#countries').addClass('d-none');
    $('#countriesMeals').addClass('d-none');
    $('#Ingredients').addClass('d-none');
    $('#mealsIngredients').addClass('d-none');
    $('#Contacts').addClass('d-none');
    $('#detailsSection').addClass('d-none');
    $('#categoriesDetails').addClass('d-none');
    
    let mealsBox=``
    if (categories.length >20) {
      categories.length=20;
    }
    for (let i = 0; i < categories.length ; i++) {
    mealsBox +=`<div class="col-md-3  my-3" onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden" onclick="showCategories('${categories[i].strCategory}')">
      <div>
        <img
          src="${categories[i].strCategoryThumb}"
          class="img-fluid rounded w-100"/>
          <div class="layer d-flex ">
          <div class="info text-center">
            <h3>${categories[i].strCategory}</h3>
            <p>${categories[i].strCategoryDescription.substr(0,105)}</p>
          </div>
        </div>
      </div>
     </div>
</div>`
        
    }
    document.getElementById('categories').innerHTML =mealsBox
}
//------------ categories Details ---------------//
categoriesDetails =document.getElementById('categoriesDetails');
categoriesSection=document.getElementById('categoriesSection');
let Details=[];
async function showCategories(category) {
    $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    let final=await myResbonse.json();
    Details=final.meals;
    
    displayCategoriesDetails(Details);
    //console.log(Details);
    $('#loading').addClass('d-none');
    
}

function displayCategoriesDetails(Details) {
  $('#categoriesDetails').removeClass('d-none')
  categoriesSection.classList.add('d-none');
    
    let mealsBox=``;
    if (Details.length >20) {
      Details.length=20;
    }
    for (let i = 0; i < Details.length ; i++) {
    mealsBox +=`<div class="col-md-3  p-3 " onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden " onclick="showMeal(${Details[i].idMeal})">
      <div>
        <img
          src="${Details[i].strMealThumb}"
          class="img-fluid rounded"/>
        <div class="layer d-flex align-items-center">
          <div class="info p-0 ">
            <h3>${Details[i].strMeal}</h3>
          </div>
        </div>
      </div>
     </div>
   </div>`
        
    }
    document.getElementById('categoriesBox').innerHTML =mealsBox

}
//*---------------- end categories ----------------*//
//*----------------- start Areas -----------------*//
let countires=[];
async function getAreas() {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let final=await myResbonse.json();
    countires=final.meals
    //console.log(countires);
    displayAreas();
    $('#loading').addClass('d-none');  
}

function displayAreas() {
  $('#countries').removeClass('d-none')
  $('#mainSection').addClass('d-none');
  $('#categoriesSection').addClass('d-none');
  $('#categoriesDetails').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#mealsIngredients').addClass('d-none');
  $('#detailsSection').addClass('d-none');
  $('#Contacts').addClass('d-none');
  $('#searchSection').addClass('d-none');
  $('#countriesMeals').addClass('d-none');
  
  
    let AreasBox=``
    for (let i = 0; i < countires.length ; i++) {
        AreasBox +=`<div class="col-md-3 text-white" onclick="closeSideNav()">
        <div onclick="getAreaMeals('${countires[i].strArea}')" class=" text-center cursor-pointer py-3">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>${countires[i].strArea}</h3>
        </div>
    </div>`
        
    }
    document.getElementById('home').innerHTML =AreasBox
}
//--------------- Areas Details --------------//
let Area=[];
async function getAreaMeals(country) {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    let final=await myResbonse.json();
    Area=final.meals;
    displayAreameals();
    //console.log(Area);
    $('#loading').addClass('d-none');  
}

function displayAreameals() {
    document.getElementById('countries').classList.add('d-none');
    document.getElementById('countriesMeals').classList.remove('d-none');
    
    
    let mealsBox=``;
    if (Area.length >20) {
      Area.length=20;
    }
    for (let i = 0; i < Area.length ; i++) {
    mealsBox +=`<div class="col-md-3  p-3 " onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden " onclick="showMeal(${Area[i].idMeal})">
      <div>
        <img
          src="${Area[i].strMealThumb}"
          class="img-fluid rounded"/>
        <div class="layer d-flex align-items-center">
          <div class="info p-0 ">
            <h3>${Area[i].strMeal}</h3>
          </div>
        </div>
      </div>
     </div>
   </div>`
        
    }
    document.getElementById('homeMeals').innerHTML =mealsBox
}
//*----------------- end Areas -----------------*//
//*------------- start Ingredients ---------------*//
let Ingredients=[];
async function getIngredients() {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let final=await myResbonse.json();
    Ingredients=final.meals
    //console.log(Ingredients);
    displayIngredients() ;
    $('#loading').addClass('d-none');  
}

function displayIngredients() {
  $('#Ingredients').removeClass('d-none')
  $('#mainSection').addClass('d-none');
  $('#categoriesSection').addClass('d-none');
  $('#countriesMeals').addClass('d-none');
  $('#countries').addClass('d-none');
  $('#categoriesDetails').addClass('d-none');
  $('#mealsIngredients').addClass('d-none');
  $('#Contacts').addClass('d-none');
  $('#detailsSection').addClass('d-none');
  $('#searchSection').addClass('d-none');

    let Box=``
    for (let i = 0; i < 20 ; i++) {
        Box +=`<div class="col-md-3 text-white" onclick="closeSideNav()">
        <div onclick="getIngredientsMeals('${Ingredients[i].strIngredient}')" class="rounded-2 text-center cursor-pointer py-3">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${Ingredients[i].strIngredient}</h3>
                <p>${Ingredients[i].strDescription.substr(0,120)}</p>
        </div>
    </div>`
        
    }
    document.getElementById('IngredientsHome').innerHTML =Box
}
//---------- Ingredients Details -------------//
let repast=[];
async function getIngredientsMeals(mealsRepast) {
  $('#loading').removeClass('d-none');
    let myResbonse=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealsRepast}`);
    let final=await myResbonse.json();
    repast=final.meals;
    displayIngredientsMeals();
    //console.log(repast);
    $('#loading').addClass('d-none');
}

function displayIngredientsMeals() {
    document.getElementById('Ingredients').classList.add('d-none');
    document.getElementById('mealsIngredients').classList.remove('d-none');
    $('#searchSection').addClass('d-none');

    let mealsBox=``
    for (let i = 0; i < repast.length ; i++) {
    mealsBox +=`<div class="col-md-3  p-3 " onclick="closeSideNav()">
    <div class="meal  rounded-2 position-relative overflow-hidden " onclick="showMeal(${repast[i].idMeal})">
      <div>
        <img
          src="${repast[i].strMealThumb}"
          class="img-fluid rounded"/>
        <div class="layer d-flex align-items-center">
          <div class="info p-0 ">
            <h3>${repast[i].strMeal}</h3>
          </div>
        </div>
      </div>
     </div>
   </div>`
        
    }
    document.getElementById('recMeals').innerHTML =mealsBox
}
//*------------- end Ingredients ---------------*//
//*----------------  Contacts ------------------*//
$('.item5').click(function (e) { 
  $('#Contacts').removeClass('d-none');
  $('#mainSection').addClass('d-none');
  $('#categoriesSection').addClass('d-none');
  $('#countriesMeals').addClass('d-none');
  $('#countries').addClass('d-none');
  $('#categoriesDetails').addClass('d-none');
  $('#mealsIngredients').addClass('d-none');
  $('#Ingredients').addClass('d-none');
  $('#searchSection').addClass('d-none');
  $('#detailsSection').addClass('d-none');
  nameInput.value="";
  emailInput.value="";
  phoneInput.value="";
  ageInput.value="";
  passwordInput.value="";
  repasswordInput.value="";
  closeSideNav();
});

//*------------------ Regex  -------------------*//
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passwordInput = document.getElementById("passwordInput");
let repasswordInput = document.getElementById("repasswordInput");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let phoneAlert = document.getElementById("phoneAlert");
let ageAlert = document.getElementById("ageAlert");
let passwordAlert = document.getElementById("passwordAlert");
let repasswordAlert = document.getElementById("repasswordAlert");
let submitBtn = document.getElementById("submitBtn");

function userNameValid() {
  let nameRegx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
  if (nameRegx.test(nameInput.value) || nameInput.value =="") {
    
    nameAlert.classList.add("d-none");
    if (nameRegx.test(nameInput.value)  ){
      nameAlert.classList.add("d-none");
      return true;
    }  
  } 
  else {
    nameAlert.classList.remove('d-none');
    return false;
  }

}

function userEmailInput() {
  let emailRegx = /^\S+@\S+\.\S+$/;

  if (emailRegx.test(emailInput.value) || emailInput.value =="") {
    emailAlert.classList.add("d-none");

    if(emailRegx.test(emailInput.value)){
      emailAlert.classList.add("d-none");
      return true;
    }
    
  } 
  else {
    emailAlert.classList.remove('d-none');
    return false;
  }

}

function userPhoneValid() {
  let regx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (regx.test(phoneInput.value)  || phoneInput.value =="") {
    phoneAlert.classList.add("d-none");
    if (regx.test(phoneInput.value)){
      phoneAlert.classList.add("d-none");
      return true;
    }
     
  } 
  else {
    phoneAlert.classList.remove('d-none');
    return false;
  }

}

function userAgeValid() {
  let AgeRegx = /^(1[89]|[2-9]\d)$/gm;

  if (AgeRegx.test(ageInput.value) || ageInput.value =="") {
    ageAlert.classList.add("d-none");
    
      return true;
    
  } 
  else {
    ageAlert.classList.remove('d-none');
    return false;
  }

}

function userPasswordValid() {
  let passwordRegx = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
  if (passwordRegx.test(passwordInput.value) || passwordInput.value =="") {
    passwordAlert.classList.add("d-none");
    if (passwordRegx.test(passwordInput.value)){
      passwordAlert.classList.add("d-none");
      return true;
    }
    
  } else {
    passwordAlert.classList.remove("d-none");
    return false;
  }
}

function userRePasswordValid() {
  if (passwordInput.value == repasswordInput.value) {
    repasswordAlert.classList.add("d-none");
    return true;
  } else {
    repasswordAlert.classList.remove("d-none");
    return false;
  }
}
//------------ checkValid --------------------//
function checkValid() {
  if ( userNameValid() && userEmailInput() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()  ) { 
    submitBtn.classList.remove("disabled");
     console.log('valid');
     return true;
  }
  else {
    submitBtn.classList.add("disabled");
     return false;
  }
}

let x= setInterval(() => {
  checkValid()
  
}, 1000);

(function contniueValid() {
  if (checkValid()) {
    clearInterval(x);
  } else {
    setInterval(() => {
      checkValid();
      
    }, 1000);
  }
})();





