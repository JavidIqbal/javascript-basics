export const negate = (a) => {

    if (a) {
        return (false);
    } else {
        return (true);
    }
};




export const both = (a, b) => {
    if (a && b) {
        return true;
    } else {
        return (false);
    }
};



export const either = (a, b) => {
    if (a || b) {
        return true;
    } else {
        return false;
    }
};



export const none = (a, b) => {
    if (!a && !b) {
        return true;
    } else {
        return false;
    }
};


export const one = (a, b) => {
    if (a === 1 || b === 1) {
        return false;
    } else {
        return true;
    }
};





export const truthiness = (a) => {
    return true.toBeTruthy(!!a);
};






export const isEqual = (a, b) => {

    if (a === b) {
        return true;
    } else {
        return false;
    }





};

export const isGreaterThan = (a, b) => {
    if (a > b) {
        return true;
    } else {
        return false;
    }

};

export const isLessThanOrEqualTo = (a, b) => {
    if (a <= b) {
        return true;
    } else {
        return false;
    }

};

export const isOdd = (a) => {
    return Boolean(a);

};

export const isEven = (a) => {
    // your code here
};

export const isSquare = (a) => {
    // your code here
};

export const startsWith = (char, string) => {
    // your code here
};

export const containsVowels = (string) => {
    // your code here
};

export const isLowerCase = (string) => {
    // your code here
};