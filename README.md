# UMC1stpractice
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Counter</title>
</head>
<body>
    <h2 id="number">0</h2>
    <button id="increase">+1</button>
    <button id="decrease">-1</button>

    <script>
        const increaseBtn = document.getElementById("increase");
        const decreaseBtn = document.getElementById("decrease");

        increaseBtn.addEventListener("click", function() {
            console.log("increase가 클릭됨");
        });

        decreaseBtn.addEventListener("click", function() {
            console.log("decrease가 클릭됨");
        });
    </script>
</body>
</html
