function listRepos() {

    listElement = document.getElementById('repos');


    userElement = document.getElementsByName('user')[0];
    itemElement = document.createElement('li');
    textElement = document.createTextNode('Carregando...');
    itemElement.appendChild(textElement);
    listElement.appendChild(itemElement);


    axios.get('https://api.github.com/users/' + userElement.value + '/repos')

        .then(function (response) {
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
            listElement.innerHTML = '';
            alert(error.message);
        })
}

