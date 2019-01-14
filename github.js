class GitHub {
    constructor() {
        this.client_id = '4a34c3766e7b5396d60e';
        this.client_secret = 'd0cb7a80644b2ad8aba47d10fcde5167d29abf28';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
     
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        if (profileResponse.status === 200) {
            const profileData = await profileResponse.json();
            const reposData = profileData.repos_url;
            return {
                profile: profileData,
                repos: reposData
            }
        } else {
            throw new Error('User does not exist.')
            }   
    }

    async getRepos(url) {
        const repoResponse = await fetch(`${url}?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoData = await repoResponse.json();
        return repoData;
    }
}