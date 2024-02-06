//get values from the page
//start or controller function
function getValues() {
    //page values
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parce value into ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNums
        let numbers = generateNums(startValue, endValue);
        //call displayNum
        displayNums(numbers);
    } else {
        alert("Can only enter numbers");
    }  
}

//generate the numbers form start to end value
//logic
function generateNums(startVal, endVal) {
    let numbers = [];

    for (let i = startVal; i <= endVal; i++) {
        numbers.push(i);
    }

    return numbers;
}

//display nums and print even bold
//view function
function displayNums(nums) {
    let templatRows = "";
    let className = "even";

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num % 2 == 0) {
            className = "even"
        } else {
            className = "odd";
        }
        templatRows += `<tr><td class="${className}">${num}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templatRows;
}