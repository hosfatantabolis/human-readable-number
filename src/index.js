module.exports = function toReadable(number) {
    let leftover = 0;
    let hundreds = 0;
    if (number < 20) {
        return upToTwenties(number);
    } else if (number < 100) {
        return upToHundreds(number);
    } else if (number < 1000) {
        hundreds = Math.floor(number / 100);
        leftover = number % 100;
        let add;
        if (leftover < 20) add = upToTwenties(leftover);
        else add = upToHundreds(leftover);
        if (leftover === 0) return numsZero[hundreds] + " hundred";
        else return numsZero[hundreds] + " hundred " + add;
    }
};

const upToTwenties = (number) => {
    if (number in numsZero) return numsZero[number];
    else return numsZero[number % 10] + "teen";
};

const upToHundreds = (number) => {
    leftover = number % 10;
    if (leftover == 0) return numsTeens[number / 10];
    else return numsTeens[(number - leftover) / 10] + " " + numsZero[leftover];
};

const numsZero = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    15: "fifteen",
    18: "eighteen",
};

const numsTeens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};
