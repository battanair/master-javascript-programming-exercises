// Write your function here
function keep (arr, element){
    return arr.filter(function(item) {
        return item === element;
    });
}