let random_num = Math.floor(Math.random() * 10);
            let count = 1;
            function guessNumber (){
                var guess_num = parseInt(document.getElementById("GN").value);
                const result = document.getElementById("result");
                if (isNaN(guess_num)) {
                    alert("Please enter a numeric value");
                    return;
                } else if (guess_num > random_num) {
                    result.textContent = "Too high!";
                    count += 1;
                } else if (guess_num < random_num) {
                    result.textContent = "Too low!"
                    count += 1;
                } else {
                    result.textContent = "Correct! You win!! " + count + "Trials";
                    random_num = Math.floor(Math.random() * 10);
                    count = 1;
                }
            }
