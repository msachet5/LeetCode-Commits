/* Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

 */

var kidsWithCandies = function(candies, extraCandies) {
  let marx=Math.max(...candies);
  let arrey =[];
    //84ms, 39.1mb Solution
    /*
    for(let i = 0; i<candies.length; i++){
        if(candies[i]+extraCandies>=marx){
            arrey.push(true);
        }
        else{
            arrey.push(false);
        }
    }
    return arrey;
    //100ms, 38,7mb solution
    */
    let i=0;
    while(i<candies.length){
        if(candies[i]+extraCandies>=marx){
            arrey.push(true);
        }
        else{
            arrey.push(false);
        }
        i++;
    }
    return arrey;
};