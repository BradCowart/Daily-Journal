const bradObject={
    name:"Brad",
    age:53,
    HasPets:true,
    favoriteFoods:["tacos","jellybeans", "burgers"]
}
bradObject.cohortName="Cohort 37";
console.log(bradObject.cohortName);

for (const food of bradObject.favoriteFoods){
    if (food==="jellybeans"){
        console.log(`${food} is the best`)
    }else{
        console.log(`${food} is good.`)
    }
}
