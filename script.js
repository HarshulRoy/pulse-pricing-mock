var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();
    for(let i=0; i<length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => {
        console.log(b,a)
        return b-a});

    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};
sortPeople(  ["Mary","John","Emma"], [175, 160, 165])
