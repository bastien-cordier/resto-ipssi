const baseURL = "http://localhost:8000/api/public";

const Token = localStorage.getItem("token");

const ErrorTokenMessage = "Votre session à peut être expiré, <br/> Je vous invite à vous déconnecter et à vous reconnecter";

const ErrorInfosMessage = "Les informations qui ont été saisies sont incorrectes";

const ErrorUnauthorizedMessage = "Vous session a expiré, <br/> Nous allons vous déconnecter";

const Header = {
  'Authorization': Token
};

const ApiRequests = {
  fetchUsers: `${baseURL}/user`,
  fetchAuthentications: `${baseURL}/authentication`,
  fetchReservations: `${baseURL}/reservation`,
  fetchPlats: `${baseURL}/plat`,
  fetchBoissons: `${baseURL}/boisson`,
  fetchTables: `${baseURL}/table`,
};

export { ApiRequests, Token, Header, ErrorTokenMessage, ErrorInfosMessage, ErrorUnauthorizedMessage };