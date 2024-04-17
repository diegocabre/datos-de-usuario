(async function loadUsers() {
    const userInfo = document.getElementById('user-data');

    async function fetchUsers() {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        return data.results;
    }

    function displayUsers(users) {
        users.forEach(user => {
            // contenedor para cada usuario
            const userDiv = document.createElement('div');
            userDiv.className = 'user-div';
            
            // insertar la imagen
            const userImage = document.createElement('img');
            userImage.src = user.picture.large;
            userImage.alt = `Foto de ${user.name.first} ${user.name.last}`;
            userImage.className = 'user-img';
            userDiv.appendChild(userImage);

            const textContainer = document.createElement('div');
            textContainer.className = 'text-container';

            // insertar el nombre
            const userName = document.createElement('p');
            userName.textContent = `Nombre: ${user.name.title} ${user.name.first} ${user.name.last}`;
            textContainer.appendChild(userName);

            // insertar el número de celular
            const userCell = document.createElement('p');
            userCell.textContent = `Celular: ${user.cell}`;
            textContainer.appendChild(userCell);

            // insertar el email
            const userEmail = document.createElement('p');
            userEmail.textContent = `Email: ${user.email}`;
            textContainer.appendChild(userEmail);

            userDiv.appendChild(textContainer);
            userInfo.appendChild(userDiv);
        });
    }

    try {
        const users = await fetchUsers();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        userInfo.textContent = 'Error al cargar los datos de los usuarios.';
    }
})();

