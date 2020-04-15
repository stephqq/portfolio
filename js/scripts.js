const cv = {};

// wait for document to finish loading before calling init
function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
    cv.init();
});

cv.init = () => {
    cv.getDOM();
    cv.listenUp();
}

cv.getDOM = () => {
    cv.menu = document.querySelector('.hamburger');
    cv.navigation = document.querySelector('.mainNav');
    cv.navLinks = document.querySelectorAll('.mainNav a');
    cv.resume = document.querySelectorAll('.resume');
    cv.contact = document.querySelector('.contactButton');
    cv.contactSection = document.querySelector('#contactSection');
    cv.portfolio = document.querySelector('.portfolioButton');
    cv.portfolioSection = document.querySelector('#portfolioSection');
    cv.projects = document.querySelectorAll('.toggleProject');
    cv.projectText = document.querySelector('.portfolio__textContainer');
    cv.projectImage = document.querySelector('.portfolio__imgContainer');
}

cv.listenUp = () => {
    cv.menu.addEventListener('click', () => {
        cv.menu.classList.toggle('is-active');
        cv.navigation.classList.toggle('isDisplayed');
    });

    for (let i = 0; i < cv.navLinks.length; i++) {
        cv.navLinks[i].addEventListener('click', () => {
            cv.menu.classList.toggle('is-active');
            cv.navigation.classList.toggle('isDisplayed');
        })
    }

    for (let i = 0; i < cv.resume.length; i++) {
        cv.resume[i].addEventListener('click', () => {
            window.open('../assets/Stephanie-Kerr-Resume-2020.pdf')
        })
    }

    cv.contact.addEventListener('click', () => {
        cv.contactSection.scrollIntoView();
    });

    cv.portfolio.addEventListener('click', () => {
        cv.portfolioSection.scrollIntoView();
    });

    for (let i = 0; i < cv.projects.length; i++) {
        cv.projects[i].addEventListener('click', cv.toggleProject);
    }
}

cv.toggleProject = (e) => {
    if (e.target.className !== 'active') {
        e.target.classList.add('active');
    }

    if (e.target.textContent === '02') {
        for (let i = 0; i < cv.projects.length; i++) {
            if (cv.projects[i].textContent !== '02') {
                cv.projects[i].classList.remove('active');
            }
        }

        cv.projectText.innerHTML = 
            `
            <a href="https://stephqq.github.io/kittyClicker/" target="_blank"
            rel="noopener noreferrer">
            <h3>Kitty Clicker</h3>
            </a>
            <ul class="tags">
                <li>jQuery</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>Firebase</li>
                <li>Sass</li>
                <li>CSS3</li>
            </ul>
            <p>Accessible, interactive game where the user clicks or taps a kitty as many times as they can for
                30 seconds.</p>
            <p>jQuery was used to manipulate the DOM and Firebase was used to provide a real-time
                leaderboard.</p>
            <a href="https://github.com/stephqq/kittyClicker" class="likeAButton" target="_blank"
                rel="noopener noreferrer">github repo <i class="fab fa-github-alt" aria-hidden="true"></i></a>
            <a href="https://stephqq.github.io/kittyClicker/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">view live <i class="fas fa-paw" aria-hidden="true"></i></a>
            `;
        cv.projectImage.innerHTML = 
            `
            <a href="https://stephqq.github.io/kittyClicker/" target="_blank"
            rel="noopener noreferrer">
            <img src="./assets/mockupKC.png" alt="mock up of kitty clicker on the screen of a macbook">
            </a>
            `;
    } else if (e.target.textContent === '01') {
        for (let i = 0; i < cv.projects.length; i++) {
            if (cv.projects[i].textContent !== '01') {
                cv.projects[i].classList.remove('active');
            }
        }

        cv.projectText.innerHTML = 
            `
            <a href="https://stephqq.github.io/thinkMindful/" target="_blank" rel="noopener noreferrer">
            <h3>Think Mindful</h3>
            </a>
            <ul class="tags">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>Firebase</li>
                <li>CSS3</li>
            </ul>
            <p>A SPA built in React with CRUD functionality, Think Mindful allows the user to keep a thought record journal for therapy. </p>
            <p>Firebase was used for authentication and a real-time database.</p>
            <a href="https://github.com/stephqq/thinkMindful" class="likeAButton" target="_blank"
                rel="noopener noreferrer">github repo <i class="fab fa-github-alt" aria-hidden="true"></i></a>
            <a href="https://stephqq.github.io/thinkMindful/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">view live <i class="fas fa-paper-plane" aria-hidden="true"></i></a>
            `;
        cv.projectImage.innerHTML = 
            `
            <a href="https://stephqq.github.io/thinkMindful/" target="_blank"
            rel="noopener noreferrer">
            <img src="./assets/mockupTM.png" alt="mock up of think mindful on the screen of a macbook">
            </a>
            `;
    } else if (e.target.textContent === '03') {
        for (let i = 0; i < cv.projects.length; i++) {
            if (cv.projects[i].textContent !== '03') {
                cv.projects[i].classList.remove('active');
            }
        }

        cv.projectText.innerHTML = 
            `
            <a href="https://ethicalmakeupc25.github.io/project6/" target="_blank" rel="noopener noreferrer">
            <h3>Ethical Makeup</h3>
            </a>
            <ul class="tags">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>Firebase</li>
                <li>Sass</li>
                <li>CSS3</li>
                <li>REST API</li>
            </ul>
            <p>Built to meet a client brief as a mob programming project, this app utilizes a REST API to allow users to search for ethical cosmetic products that meet a specific query.</p>
            <p>Users are able to view product details, read and write reviews, as well as add products to a wishlist.</p>
            <a href="https://github.com/ethicalMakeupC25/project6" class="likeAButton" target="_blank"
                rel="noopener noreferrer">github repo <i class="fab fa-github-alt" aria-hidden="true"></i></a>
            <a href="https://ethicalmakeupc25.github.io/project6/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">view live <i class="fas fa-hand-holding-heart" aria-hidden="true"></i></a>
            `;
        cv.projectImage.innerHTML = 
            `
            <a href="https://ethicalmakeupc25.github.io/project6/" target="_blank"
            rel="noopener noreferrer">
            <img src="./assets/mockupEM.png" alt="mock up of ethical makeup on the screen of a macbook">
            </a>
            `;
    } else if (e.target.textContent === '04') {
        for (let i = 0; i < cv.projects.length; i++) {
            if (cv.projects[i].textContent !== '04') {
                cv.projects[i].classList.remove('active');
            }
        }

        cv.projectText.innerHTML = 
            `
            <a href="https://cecile-stephanie.github.io/elephantQuiz/" target="_blank" rel="noopener noreferrer">
            <h3>The Elephant Quiz</h3>
            </a>
            <ul class="tags">
                <li>jQuery</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>REST API</li>
                <li>Sass</li>
                <li>CSS3</li>
            </ul>
            <p>From a pair programming project, The Elephant Quiz is quite literal: an interactive quiz on famous elephants from Wikipedia.</p>
            <p>This single page application utilizes a REST API for data and was built with jQuery.</p>
            <a href="https://github.com/cecile-stephanie/elephantQuiz/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">github repo <i class="fab fa-github-alt" aria-hidden="true"></i></a>
            <a href="https://cecile-stephanie.github.io/elephantQuiz/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">view live <i class="fas fa-tasks" aria-hidden="true"></i></a>
            `;
        cv.projectImage.innerHTML = 
            `
            <a href="https://cecile-stephanie.github.io/elephantQuiz/" target="_blank"
            rel="noopener noreferrer">
            <img src="./assets/mockupEQ.png" alt="mock up of the elephant quiz on the screen of a macbook">
            </a>
            `;
    } else if (e.target.textContent === '05') {
        for (let i = 0; i < cv.projects.length; i++) {
            if (cv.projects[i].textContent !== '05') {
                cv.projects[i].classList.remove('active');
            }
        }

        cv.projectText.innerHTML = 
            `
            <a href="https://stephqq.github.io/stephanie-kerr-project-two/" target="_blank" rel="noopener noreferrer">
            <h3>Willow - PSD Conversion</h3>
            </a>
            <ul class="tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
            </ul>
            <p>A pixel perfect personal multi-page website developed from a PSD design.</p>
            <a href="https://github.com/stephqq/stephanie-kerr-project-two/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">github repo <i class="fab fa-github-alt" aria-hidden="true"></i></a>
            <a href="https://stephqq.github.io/stephanie-kerr-project-two/" class="likeAButton" target="_blank"
                rel="noopener noreferrer">view live <i class="fas fa-leaf" aria-hidden="true"></i></a>
            `;
        cv.projectImage.innerHTML = 
            `
            <a href="https://stephqq.github.io/stephanie-kerr-project-two/" target="_blank"
            rel="noopener noreferrer">
            <img src="./assets/mockupPSD.png" alt="mock up of willow PSD conversion on the screen of a macbook">
            </a>
            `;
    }
}