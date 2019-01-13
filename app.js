const github = new GitHub;
const ui = new UI;

// Search input
const searchInput = document.getElementById('searchUser');

// Listen for input
searchInput.addEventListener('input', (e) => {
    const userText = e.target.value;
    
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    ui.showError('User Not Found');
                } else {
                    ui.showProfile(data.profile); 
                }
                return data;
            })
            .then(data => github.getRepos(data.repos))
            .then((repos) => {
                for (repo of repos) {
                    
                }
            })
            .catch(err => console.log(err))
            
    } else {
        // clear profile when input is empty
        ui.clearProfile();
    }
});
