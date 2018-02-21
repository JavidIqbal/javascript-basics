export const getNthElement = (index, array) => {

    return array[index];


};


export const arrayToCSVString = (array) => {

    { return array.join(","); }

};



export const csvStringToArray = (string) => {

    { return string.split(",") }
};




//export const addToArray = (array, element) => { - JI comment

//array.push(element);  - JI comment

//return array;  - JI comment

//};  - JI comment

export const addToArray = (element, array) => {
    array.push(element);
};




export const addToArray2 = (element, array, array2) => {

    array2 = array.concat(element);

    return array2;

};

//array = ['one', 'two', 'three'];
//array2 = array.concat(element);
//return (ar2);






export const removeNthElement = (index, array) => {
    // your code here




};

export const numbersToStrings = (numbers) => {
    // your code here
};

export const uppercaseWordsInArray = (strings) => {
    // your code here
};

export const reverseWordsInArray = (strings) => {

};

export const onlyEven = (numbers) => {
    // your code here
};

export const removeNthElement2 = (index, array) => {
    // your code here
};

export const elementsStartingWithAVowel = (strings) => {
    // your code here
};

export const removeSpaces = (string) => {
    // your code here
};

export const sumNumbers = (numbers) => {
    // your code here
};

export const sortByLastLetter = (strings) => {
    // your code here
};