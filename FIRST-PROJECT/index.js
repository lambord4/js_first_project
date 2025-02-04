const h1El = document.querySelector("h1");
        const btn = document.getElementById("btn");

        let isTextVisible = true;

        function hideText() {
            h1El.style.visibility = isTextVisible ? "hidden" : "visible";
            btn.textContent = isTextVisible ? "Показать текст" : "Скрыть текст";
            isTextVisible = !isTextVisible;
        }

        btn.addEventListener("click", hideText);