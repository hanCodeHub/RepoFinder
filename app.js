const github = new GitHub;
const ui = new UI;

// Search input
const searchInput = document.getElementById('searchUser');

// Listen for input
searchInput.addEventListener('input', (e) => {
    const userText = e.target.value;
    
    if (userText !== '') {
        // fetches github profile data
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    ui.showError('User Not Found');
                } else {
                    ui.showProfile(data.profile); 
                }
                return data;
            })
            // fetches github repos data from the profile object
            .then(data => github.getRepos(data.repos))
            .then((repos) => {
                console.log(repos);
                ui.showRepos(repos);
            })
            .catch(err => console.log(err))
            
    } else {
        // clear profile when input is empty
        ui.clearProfile();
        ui.clearRepos();
    }
});
