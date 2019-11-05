function listRepos() {


    userElement = document.getElementsByName('user')[0];

    axios.get('https://api.github.com/users/' + userElement.value + '/repos')

        .then(function (response) {
            listElement = document.getElementById('repos');
            listElement.innerHTML = '';

            console.log(response.data[0].name);

            response.data.forEach(element => {
                console.log(element.name);
                itemElement = document.createElement('li');
                textElement = document.createTextNode(element.name);
                itemElement.appendChild(textElement);
                listElement.appendChild(itemElement);
            });

            userElement.value = '';
        })
        .catch(function (error) {
            console.warn(error);
        })
}

