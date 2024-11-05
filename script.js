console.log('Hello World');

const emailListElement = document.getElementById('email-list');
// console.log(emailListElement);

// Creo un ciclo for per iterare 10 volte e chiedere 10 email all'api
for(let i = 0; i < 10; i++) {
    // console.log(i)

    // Creo una richiesta get da fare all'api usando axios
    axios
    .get(' https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
        // console.log(response);

        // recuperare il valore dell'email
        const email = response.data.response;
        console.log(email);
        // creo un elemnto li
        const listItem = document.createElement('li');
        listItem.textContent = email;
        emailListElement.appendChild(listItem);
    })
    

}