var portfolio_btn = document.getElementsByClassName("portfolio_btn");

      function handleClick(event) {
        console.log(event.target);

        console.log(event.target.classList);

        if (event.target.classList[1] === "portfolio_btn_active") {
          event.target.classList.remove("portfolio_btn_active");
        } else {
          for (var i = 0; i < portfolio_btn.length; i++) {
            portfolio_btn[i].classList.remove("portfolio_btn_active");
          }

          event.target.classList.add("portfolio_btn_active");
        }
      }

      function init() {
        for (var i = 0; i < portfolio_btn.length; i++) {
          portfolio_btn[i].addEventListener("click", handleClick);
        }
      }

init();