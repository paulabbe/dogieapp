

 export const Getdog = async() =>{ 
    try {
        const dogi = await fetch(`https://dog.ceo/api/breeds/image/random/10`);
        const results = await dogi.json()
        console.log(results.message);
        return results.message;
    } catch(error){
        console.log(error);
    }
};
