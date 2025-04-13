const app = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
    app.innerHTML = `
        <div id="welcome-page-container">
            <h1 id="welcome-page-button">Get coffee</h1>
        </div>
    `;

    document.getElementById('welcome-page-button').addEventListener('click', (event) => {
        event.target.classList.toggle('exit');
        setTimeout(() => {
            openCoffeePage();
        }, 500);
    });
});

const openCoffeePage = () => {
    app.innerHTML = `
        <div id="coffee-page">
            <div id="navigation-bar" class="to-exit-left exit-left">
                <div id="title">
                    <i class="fas fa-mug-hot"></i>
                    <h1>Coffee machine</h1>
                </div>
                <div id="icons">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <i class="fa-solid fa-gear"></i>
                </div>
            </div>
        </div>
    `

    setTimeout(() => {
        Array.from(document.getElementsByClassName('to-exit-left')).forEach((item) => {
            item.classList.remove('exit-left');
        });

        Array.from(document.getElementsByClassName('to-exit-right')).forEach((item) => {
            item.classList.remove('exit-right');
        });

        const back = document.querySelector('#icons > .fa-arrow-right-from-bracket');

        back.addEventListener("click", () => {
            Array.from(document.getElementsByClassName('to-exit-left')).forEach((item) => {
                item.classList.add('exit-left');
            });

            Array.from(document.getElementsByClassName('to-exit-right')).forEach((item) => {
                item.classList.add('exit-right');
            });

            setTimeout(() => {
                openMainPage();
            }, 500);
        });
    }, 100)
}

const openMainPage = () => {
    app.innerHTML = `
        <div id="welcome-page-container">
            <h1 id="welcome-page-button" class="exit">Get coffee</h1>
        </div>
    `;

    setTimeout(() => {
        document.getElementById("welcome-page-button").classList.remove('exit');

        document.getElementById('welcome-page-button').addEventListener('click', (event) => {
            event.target.classList.toggle('exit');
            setTimeout(() => {
                openCoffeePage();
            }, 500);
        });
    }, 100);
}