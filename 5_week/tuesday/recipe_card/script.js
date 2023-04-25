let taiChiken = new Object();
taiChiken.title = 'Tai chiken with cashews';
taiChiken.servings = '2';
taiChiken.spicy = "very spicy";
taiChiken.ingredients = ['chiken brust','cashews','garlic','ginger','sesame oil','carrot','corn starch','soya sauce','fish sauce','sweet bell pepper'];

function printMeal(obj){
    for (const key in obj){
        if (key == 'ingredients'){
            console.log(`Ingredients: ${obj[key]}`);
        }
        else if(key == 'servings'){
            console.log(`Servings: ${obj[key]}`);
        }
        else{
            console.log(`${obj[key]}`);
        }
    }   
} 

printMeal(taiChiken);
