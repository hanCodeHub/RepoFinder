class UI {
    constructor() {
        // set the UI insertion point as the constructor property
        this.profile = document.getElementById('profile')
    }

    createEl(element, classNames, text) {
        let el = document.createElement(element);
        for (name of classNames) {
            el.classList.add(name);
        }
        el.textContent = text;
        return el;
    }

    appendEl (parent, children) {
        children.forEach((child) => {
            parent.appendChild(child);
        })
        return parent;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showProfile(profile) {
        let fragment = document.createDocumentFragment();
        
        let divCard = this.createEl('div', ['card', 'card-body', 'mb-3'],);
        let divRow = this.createEl('div', ['row']);
        
        let divCol3 = this.createEl('div', ['col-md-3']);
        let img = this.createEl('img', ['img-fluid', 'mb-2']);
            img.setAttribute('src', `${profile.avatar_url}`);
        let profileLink = this.createEl('a', ['btn', 'btn-primary', 'btn-block', 'mb-4'], 'View Profile');
            profileLink.setAttribute('target', '_blank');
            profileLink.setAttribute('href', `${profile.html_url}`)  
        
        let divCol9 = this.createEl('div', ['col-md-9']);
        let spanRepos = this.createEl('span', ['badge', 'badge-primary'], `Public Repos: ${profile.public_repos}`);
        let spanGists = this.createEl('span', ['badge', 'badge-primary'], `Public Gists: ${profile.public_gists}`);
        let spanFllwers = this.createEl('span', ['badge', 'badge-success'], `Followers: ${profile.followers}`);  
        let spanFllwing = this.createEl('span', ['badge', 'badge-primary'], `Following: ${profile.following}`);   
        let ulInfo = this.createEl('ul', ['list-group']);
        let liCompany = this.createEl('li', ['list-group-item'], `Company: ${profile.company}`);
        let liBlog = this.createEl('li', ['list-group-item'], `Website/Blog: ${profile.blog}`);
        let liLocation = this.createEl('li', ['list-group-item'], `Location: ${profile.location}`);
        let liCreatedAt = this.createEl('li', ['list-group-item'], `Member Since: ${profile.created_at}`);
        
        let h3Repos = this.createEl('h3', ['page-heading', 'mb-3', 'text-center'], 'Latest Repos');
        let divRepos = document.createElement('div');
            divRepos.id = 'repos';

        let infoList = this.appendEl(ulInfo, [liCompany, liBlog, liLocation, liCreatedAt]);
        let column3 = this.appendEl(divCol3, [img, profileLink]);
        let column9 = this.appendEl(divCol9, [spanRepos, spanGists, spanFllwers, spanFllwing, infoList]);
        let rowMain = this.appendEl(divRow, [column3, column9]);
        divCard.appendChild(rowMain);

        let finalFrag = this.appendEl(fragment, [divCard, h3Repos, divRepos]);
        
        this.clearProfile();
        this.profile.appendChild(finalFrag);
    }

    showError(message) {
        let divError = this.createEl('div', ['container'])
        let h5Error = this.createEl('h5', ['text-center', 'alert', 'alert-danger'], message);
        
        divError.appendChild(h5Error);

        this.clearProfile();
        this.profile.appendChild(divError);
        
        // add a set timeout to remove alert after 3 seconds
        // if (document.querySelector('.alert-danger')) {
        //     setTimeout(() => {
        //         this.clearProfile(); 
        //         }, 3000);
        //     } 
    }


    showRepos(repos) {
        
    }
}
