
let meal=document.getElementById('meal');
async function search(){
    let input=document.getElementById('input');
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value}`);
    // console.log(api);
    const data=await api.json()
    // console.log(data.meals);
    if(data.meals){
        meal.innerHTML="";
        data.meals.map((ele)=>{
            // console.log(ele);
            meal.innerHTML += `
            <div id="meals-card">
            <img src=${ele.strMealThumb} alt="">
            <h2>${ele.strMeal}</h2>
            <button onclick="mealDetails(${ele.idMeal})">Get Recipe</button>
            </div>
            `
        })
    }
    else{
        meal.innerHTML=`
        <h1 style="color:#d65108" >"Sorry, we didn't find any meal!"</h1>
        `
    }
}



    let meals_detailsContaine=document.getElementById('meals-detailsContaine');
    async function mealDetails(idMeal){
        //
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        // console.log(api);
        const data=await api.json()
        // console.log(data.meals[0]);
        const result=data.meals[0]
        // console.log(result);
        meals_detailsContaine.innerHTML = `
                <div class="details-card" id="cardId${idMeal}">
               <div class="remove-Details-btn"> <button onclick="returndetails(${idMeal})"><img src="delete.png"></button></div>
                <div class="str-deatils">
                <h2>${result.strMeal}</h2>
                <h4>${result.strCategory}</h4>
                <h3>Instrucation:</h3>
                <p>
                ${result.strInstructions}
                </p>
                <img src=${result.strMealThumb} alt="">
                <a href=${result.strYoutube} target = "_blank">Watch video</a>
                </div>
                </div>
        `

    }
    function returndetails(idMeal){
        // console.log('hello');
        const idRemove=document.getElementById(`cardId${idMeal}`)
        idRemove.remove();
    }
