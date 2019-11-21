//first part
const delay = () => new Promise(resolve => setTimeout(resolve('ok'), 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();


async function executePromise() {
    console.log(await delay(), '1s');
    console.log(await delay(), '2s');
    console.log(await delay(), '3s');
}

executePromise();

//second part
import axios from 'axios';

/*function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
//getUserFromGithub('chewbaccaismyfather');
//getUserFromGithub('adroaldopagliari');*/
async function getUserFromGithub(user) {
    try {
        console.log(await axios.get(`https://api.github.com/users/${user}`));

    } catch (error) {
        console.log('User not found');
    }

}
getUserFromGithub('chewbaccaismyfather');
getUserFromGithub('adroaldopagliari');

//third part
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}

class GithubAsync {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch (error) {
            console.log('Repo not found');
        }

    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
GithubAsync.getRepositories('adroaldopagliari/skylab.rocketseat');


//fourth part
const buscaUsuario = user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
buscaUsuario('diego3g');


const buscaUsuarioAsync = async user => {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);

}
buscaUsuarioAsync('adroaldopagliari');

