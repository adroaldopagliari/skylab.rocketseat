import api from './api';

class Repository {
    constructor() {
        this.repositories = [];

        this.formSearchRepo = document.getElementById('formSearchRepo');
        this.repositoriesList = document.getElementById('repositoriesList');
        this.inputRepo = document.getElementById('inputRepo');

        this.registerHandlers();
    }

    registerHandlers() {

        this.formSearchRepo.onsubmit = event => { this.getRemoteRepositories(event); }
    }

    setLoading(loading = true) {
        if (loading) {
            let loadingEl = document.createElement('span');
            loadingEl.setAttribute('id', 'loading');
            loadingEl.appendChild(document.createTextNode('Searching...'));

            this.formSearchRepo.appendChild(loadingEl);
        } else {
            this.formSearchRepo.removeChild(document.getElementById('loading'));
        }
    }

    async getRemoteRepositories(event) {

        event.preventDefault();
        let repoInput = this.inputRepo.value;

        if (repoInput) {

            this.setLoading();

            try {
                const response = await api.get(`/repos/${repoInput}`);
                console.log(response);

                const { name, description, html_url, owner: { avatar_url } } = response.data;

                this.repositories.push({
                    name,
                    description,
                    html_url,
                    avatar_url
                });

            } catch (error) {
                alert('Repository not found');
            }

            this.setLoading(false);

            this.renderRepositories();

            this.inputRepo.value = '';
        }
    }

    renderRepositories() {
        this.repositoriesList.innerHTML = '';

        console.log(this.repositories);

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Link'));

            let liEl = document.createElement('li');
            liEl.appendChild(imgEl);
            liEl.appendChild(titleEl);
            liEl.appendChild(descriptionEl);
            liEl.appendChild(linkEl);

            this.repositoriesList.appendChild(liEl);
        });
    }
}

new Repository();