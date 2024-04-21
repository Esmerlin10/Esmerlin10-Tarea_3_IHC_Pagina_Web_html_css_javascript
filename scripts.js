// Obtener referencias a los elementos de búsqueda
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Obtener todas las miniaturas de películas
const movies = document.querySelectorAll('.movie');

// Agregar un evento de clic al botón de búsqueda
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Iterar sobre cada miniatura de película
    movies.forEach(function(movie) {
        const title = movie.querySelector('h3').textContent.toLowerCase();
        
        // Mostrar u ocultar la película según el término de búsqueda
        if (title.includes(searchTerm)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
});

// Dentro de tu archivo scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    // Función para realizar la búsqueda
    function search(query) {
        // Aquí puedes implementar la lógica de búsqueda
        // Por ahora, solo mostraremos un mensaje de ejemplo
        searchResults.innerHTML = `<p>Resultados de búsqueda para: <strong>${query}</strong></p>`;
    }


    // Evento click del botón de búsqueda
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query !== '') {
            search(query);
        }
    });

    // Evento 'Enter' en el campo de entrada de búsqueda
    searchInput.addEventListener('keydown', function(event) {
        const query = searchInput.value.trim();
        if (query !== '' && event.key === 'Enter') {
            search(query);
        }
    });
});

// Formulario para loguearse en la pagina web
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const profileSection = document.getElementById('profile');
    const profileInfo = document.getElementById('profile-info');

    // Función para manejar el registro de usuario
    function registerUser(username, email, password) {
        // Aquí puedes implementar la lógica para registrar al usuario
        // Por ahora, simplemente mostraremos un mensaje de registro exitoso
        profileInfo.textContent = `¡Bienvenido, ${username}! Tu cuenta ha sido creada correctamente.`;
        profileSection.style.display = 'block'; // Mostrar la sección de perfil
    }

    // Función para manejar el inicio de sesión de usuario
    function loginUser(username, password) {
        // Aquí puedes implementar la lógica para iniciar sesión del usuario
        // Por ahora, simplemente mostraremos un mensaje de inicio de sesión exitoso
        profileInfo.textContent = `¡Hola de nuevo, ${username}! Has iniciado sesión correctamente.`;
        profileSection.style.display = 'block'; // Mostrar la sección de perfil
    }

    // Evento submit del formulario de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        const username = registerForm.elements['username'].value.trim();
        const email = registerForm.elements['email'].value.trim();
        const password = registerForm.elements['password'].value.trim();
        registerUser(username, email, password);
    });

    // Evento submit del formulario de inicio de sesión
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        const username = loginForm.elements['login-username'].value.trim();
        const password = loginForm.elements['login-password'].value.trim();
        loginUser(username, password);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    // Estructura de datos para almacenar comentarios y valoraciones
    const commentsData = [];

    // Función para mostrar los comentarios y valoraciones
    function renderComments() {
        commentsList.innerHTML = ''; // Limpiar el contenido anterior
        commentsData.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <p>${comment.comment}</p>
                <p>Valoración: ${comment.rating}</p>
            `;
            commentsList.appendChild(commentElement);
        });
    }

    // Evento submit del formulario de comentarios
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        const comment = commentForm.elements['comment'].value.trim();
        const rating = parseInt(commentForm.elements['rating'].value);
        if (comment !== '' && !isNaN(rating) && rating >= 1 && rating <= 5) {
            // Agregar el comentario y la valoración a la estructura de datos
            commentsData.push({ comment: comment, rating: rating });
            // Mostrar los comentarios y valoraciones actualizados
            renderComments();
            // Limpiar el formulario después de enviar
            commentForm.reset();
        } else {
            alert('Por favor, ingresa un comentario válido y una valoración entre 1 y 5.');
        }
    });
});
