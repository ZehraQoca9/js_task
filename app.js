//? 1.bir function yazacaqsiniz , 2 parametr qebul edecek , 1i array 1i ise bir eded
//?bu eded array daxilinde her hansi 2 ededin cemine beraberdise true qayitsin.Isteseniz hemin 2 ededi array - de console - a cixarda bilersiniz
const array = [1, 4, 6, 8, 10];
const sum = 14;

function myFunction(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                console.log(`Numbers: ${arr[i]} , ${arr[j]}`);
                return true;
            }
        }
    }
    return false;
}

console.log(myFunction(array, sum));


//? 2.array-i Bubble Sort-dan istifadə edərək artan sira ile(ascending ) sortlayin
//? 3. arraydaki stringleri alphabetic sira ile sortlayin (Bubble Sort) 
let myArr = [64, 34, 25, 22, 11, 90]; //2
let newArr = ["banana", "apple", "cherry", "date", "book"]; //3

function bobbleSort(arr) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                c = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = c
            }
        }

    }
    console.log(arr);
}
bobbleSort(myArr);
bobbleSort (newArr);


//? 4.  2 ve daha artiq array-leri birlesdiren function yazin (merge edin) (bubble sort)
let demo = [[1,5,9], [2,6], [3,4,7,8]];

function mergeArrays(arr){
    let mergedArr =[]
    let c=0;
    for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr[i].length; j++){
                mergedArr.push(arr[i][j])  
            }
    }
    return mergedArr;
}
let myMergedArr=mergeArrays(demo)
function bobbleSort(arr) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                c = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = c
            }
        }

    }
    console.log(arr)
}
bobbleSort(myMergedArr)

//________________________________________
