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
                    // show alert
                    ui.showError('User Not Found');
                    
                } else {
                    // show profile
                    ui.showProfile(data.profile); 
                    
                }
                return data;
            })
            .then(data => github.getRepos(data.repos))
            .then(repos => console.log(repos))
            .catch(err => console.log(err));
        
    } else {
        // clear profile
        ui.clearProfile();
    }
});
