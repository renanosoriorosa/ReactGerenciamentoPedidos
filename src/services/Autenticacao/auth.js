const isTokenValid = (token) => {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = exp * 1000; // converte a hora de expiração do token para milissegundos
    console.log(Date.now() < expirationTime);
    return Date.now() < expirationTime;
};

// Verifica se o usuário está autenticado verificando se o token de autenticação ainda é válido
export default function IsAuthenticated() {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return false;
    }

    return isTokenValid(token);
};