import home from '../home/home';

const homeView = home;
const aboutView = '../about/about';

export default {
    initialize() {
        document.body.innerHTML = `
            <div>hello app</div>
            <button class="button-home">show home view</button>
            <button class="button-about">show about view</button>
            <div class="view-container"></div>
        `;

        this.addListeners();
    },

    addListeners() {
        document.body.querySelectorAll('button')[0].addEventListener('click', () => this.onButtonClick('home'), false);
        document.body.querySelectorAll('button')[1].addEventListener('click', () => this.onButtonClick('about'), false);
    },

    onButtonClick(name) {
        //console.log('button clicked', name);

        if (name === 'home') {
            this.renderHome();
        } else {
            this.renderAbout();
        }
    },

    renderHome() {
        document.body.querySelector('.view-container').innerHTML = homeView.getContent();
    },

    renderAbout() {
        import(aboutView).then((view) => {
            document.body.querySelector('.view-container').innerHTML = view.getContent();
        })

    }
}