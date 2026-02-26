const input = document.getElementById("input");

const is_palindrome = (input) => {
    const value = input.value;
    if (value === "") { alert("You entered nothing!"); return; }
    for (let i = 0; i < value.length / 2; i++) {
        if (value[i] != value[value.length - 1 - i]) {
            alert(value + " is NOT a palindrome!");
            return;
        }
    }
    alert(value + " IS a palindrome!");
}


