function checaIdade(idade) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (idade > 18) {
                console.log(idade);
                resolve();
            } else {
                reject();
            }
        }, 2000);
    })
    return promise;
}

checaIdade(10)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });