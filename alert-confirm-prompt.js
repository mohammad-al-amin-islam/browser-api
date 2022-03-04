const giveAlert = () => {
    alert("al amin don't be lazy");
}

const getConfirmation = () => {
    const response = confirm('Are Ready to Work Hard');
    if (response === true) {
        alert('Yes he is dedicated');
    }
    else {
        console.log(response, 'he is lazy');
    }
}

const getInput = () => {
    const input = prompt('Are you agree or agree do work hard?');
    if (input) {
        console.log(input);
    }
}