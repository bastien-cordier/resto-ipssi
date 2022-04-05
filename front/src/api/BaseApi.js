const baseURL = "http://localhost:8000";

const ErrorTokenMessage = "Votre session à peut être expiré, <br/> Je vous invite à vous déconnecter et à vous reconnecter";

const ErrorInfosMessage = "Les informations qui ont été saisies sont incorrectes";

const ErrorUnauthorizedMessage = "Vous session a expiré, <br/> Nous allons vous déconnecter"

const ApiRequests = {
  fetchPlat: `${baseURL}/plat`,
  fetchBoisson: `${baseURL}/boisson`,
};

export { ApiRequests, ErrorTokenMessage, ErrorInfosMessage, ErrorUnauthorizedMessage };