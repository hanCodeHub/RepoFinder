class GitHub {
    constructor() {
        this.client_id = '4a34c3766e7b5396d60e';
        this.client_secret = 'd0cb7a80644b2ad8aba47d10fcde5167d29abf28';
    }

    async getUser(user) {
       
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const reposData = profileData.repos_url;

        return {
            profile: profileData,
            repos: reposData
        }
    }

    async getRepos(url) {
        
        const repoResponse = await fetch(`${url}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoData = await repoResponse.json();

        return repoData;
    }
}