<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'  // Importer useRouter pour la redirection

const router = useRouter()

const userEmail = ref('')
const password = ref('')
const data = ref([])  // On va remplir ceci avec les utilisateurs

// Fonction pour récupérer les utilisateurs
async function fetchUser() {
    const url = "http://localhost:5100/sign-in";


    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify({
                email: userEmail.value,
                password: password.value,
            })
        })
    } catch (error) {
        // console.error("Erreur lors de la récupération des données:", error);
        // alert("Erreur lors de la récupération des utilisateurs.");
    }
}

// async function fetchUser() {
//   const url = "http://localhost:5100/data/users.json";  

//   console.log("Début de la requête fetch pour récupérer les utilisateurs...");

//   try {

//     const response = await fetch(url);
//     console.log("Requête fetch réussie, réponse reçue.");

//     const result = await response.json();
//     console.log("Données récupérées:", result);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données:", error);
//     alert("Erreur lors de la récupération des utilisateurs.");
//   }
// }



function submit() {
    console.log("Soumission du formulaire... Tentative de connexion.");
    fetchUser();
}

onMounted(() => {
    console.log("Composant monté, lancement de fetchUser.");
    fetchUser();
});
</script>


<template>
    <div class="main-container">
        <div class="login-container">
            <h2>Connexion</h2>
            <form @submit.prevent="submit()">
                <label for="login__username"><svg class="icon">
                        <use xlink:href="#icon-user"></use>
                    </svg></label>
                <input type="email" v-model="userEmail" placeholder="Votre email" required />
                <label for="login__password"><svg class="icon">
                        <use xlink:href="#icon-lock"></use>
                    </svg></label>
                <input type="password" v-model="password" placeholder="Password" required />
                <button type="submit">LOGIN</button>
            </form>
            <div class="forgot-password">
                <a href="#">Mot de passe oublier?</a>
            </div>
            <div class="sign-up">
                <p>Vous êtes nouveau ici? <RouterLink to="/signup">S'inscrire</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Arial, sans-serif;
    background: linear-gradient(#00c6ff, #0072ff, #0000ff);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
}

.login-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 500px;
}

h2 {
    color: white;
    text-align: center;
    margin-bottom: 30px;
}

input[type='email'],
input[type='password'] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

input[type='email']::placeholder,
input[type='password']::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0a178d;
    color: white;
    cursor: pointer;
    margin-top: 20px;
}

.remember-me {
    color: white;
    margin: 15px 0;
}

.forgot-password,
.sign-up {
    text-align: center;
    margin-top: 15px;
}

.forgot-password a,
.sign-up a {
    color: white;
    text-decoration: none;
}

.icon {
    block-size: 1em;
    fill: var(--iconFill);
    inline-size: 1em;
    vertical-align: middle;
}
</style>
