const dropdown =document.querySelectorAll('.dropdown');
dropdown.forEach((dropdown) => {
    const dropdown_title = dropdown.querySelector('dropdown_title')
    const dropdown_text = dropdown.querySelector('dropdown_text')

    dropdown_title.addEventlistener(click,() => {
        dropdown_text.classlist.toggle('dropdown_close')
    });
})

const API_URL ='https://jsonplaceholder.typicode.com'



async function  get_users() {
    let responce = await fetch(API_URL + '/users);
    users = await user.json();
    return users;
}

async function get_posts() {
    let response = await fetch(API_URL+ '/posts/?useerId=1');
    response = await responce.json();
    return post;
}
function create_dropdown(title, text) {
    const dropdown = document.createElement('div');
    dropdown.classList.classList.add('dropdown');

    const dropdown_title = document.createElement('p');
    dropdown_title.classlist.add('dropdwn_title');
    dropdown_title.innerText = title;

    const dropdown_text = document.createElement('p');
    dropdown_text.classList.add('dropdown_text');
    dropdown_text.classlist.add('dropdown_close');
    dropdown_text.innerText = text

    dropdown_title.addEventListener('click', () => {
        dropdown_text.classList.toggle('dropdwn_closed');
    });

    dropdown.appendChild(dropdown_title)
    dropdown.appendChild(dropdown_text)


}

window.addEventListener('load', async () => {
    USER = await get_users();
    POST = await get_posts();

    post.forEach((post) => {
        let user = USER.find((user) =>(post.userid === user.id))
        post.user = user;
    })
    console.log(USER, POSTS)
});