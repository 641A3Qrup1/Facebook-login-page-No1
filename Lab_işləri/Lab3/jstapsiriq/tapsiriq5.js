function sumElements(array) { 
    for (let i=0; i<array.length; i++) {
        if (array[i]%2==0) {
            console.log(array[i]);
            break
        }
        else{
            console.log('-1');
            console.clear()
        }
    }
   
}

const sample_array = [1,3,5,7,71,11,4,9,100];
console.log(sumElements(sample_array));
