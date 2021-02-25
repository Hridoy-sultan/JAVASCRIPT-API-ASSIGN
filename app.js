fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => {
        const mealItem = data.meals
        const mealContinar = document.getElementById('meal-continar');
        for (let i = 0; i < mealItem.length; i++) {
            const mealElement = mealItem[i];
            const mealName = mealElement.strMeal;
            const mealImg = mealElement.strMealThumb;
            const mealDiv = document.createElement('div');
            const mealInfo = `<img onclick="" class='meal-Img' src="${mealImg}"></img>
                              <h3>${mealName}</h3>
        `
            mealDiv.className = 'meal-box ';
            mealDiv.innerHTML = mealInfo;
            mealContinar.appendChild(mealDiv)

            const searchBtn = document.getElementById('searchBtn');
            searchBtn.addEventListener('click', function () {
                const searchInput = document.getElementById('search-input').value;

                MealSearch = FoodIndex => {
                    const FoodTitle = mealItem[FoodIndex].strMeal;
                    const FoodImg = mealItem[FoodIndex].strMealThumb;
                    if (searchInput === FoodTitle) {
                        const foodInfo = `<img class='meal-Img' src="${FoodImg}">
                                    <h3>${FoodTitle}</h3>    
                    `
                        const foodContinar = document.getElementById('foodContinar');
                        const FoodDiv = document.getElementById('foodDiv');
                        FoodDiv.innerHTML = foodInfo;
                        foodContinar.appendChild(FoodDiv);
                        mealContinar.style.display = "none";
                        FoodDiv.style.display = "block";

                    }
                    else {
                        const mealMatch = document.getElementById('meals-match');
                        mealMatch.style.display = "block";
                        mealContinar.style.display = "none";
                    }
                }

                MealSearch(0);
                MealSearch(1);
                MealSearch(2);
                MealSearch(3);
                MealSearch(4);
                MealSearch(5);
                MealSearch(6);
                MealSearch(7);
                MealSearch(8);
            })


        }
    });
