import TAGS from "./tags";
import userManager from "../assets/user-manager.png";

export const PROJECTS = [
  {
    title: "User-manager API Rest",
    description: `API rest que ofrece servicios CRUD para gestionar usuarios. Incluye autenticación y autorización (Oauth2 y JWT), 
    y servicio de envio de correo electronico para recuperar la contraseña.`,
    image: userManager,
    tags: [TAGS.python, TAGS.fastapi, TAGS.jwt, TAGS.sqlite],
    github: "https://github.com/josemoyano04/user-manager",
    preview: false,
    preview_link: "",
  },
];
