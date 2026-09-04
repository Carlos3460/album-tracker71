/**
 * Todo lo que seleccionamos al principio, debe ser seleccionado mediante el documento
 * Opciones de seleccion
 * Clasicas
 * getElementByld
 * getElementByClassName
 * 
 * Modernas
 * Nos permiten seleccionar por un selector css
 * Selectores css
 * Etiqueta por ejemplo form
 * clase . por ejemplo .form-control
 * id # por ejemplo #title
 * querySelector() si usamos un selector como de clase
 * solo va a seleccionar la primera coincidencia
 * querySelectorAll
 */

const formEl = document.getElementById("album-form");
const mainEl = document.querySelector("#album-container");
let albums = [];

/**
 * Eventos
 * Es cualquier accion que realiza el usuario en la pagina web
 * Escuchar por el evento
 * Escuchamos por un evento para que cuando ocurra desencadene una respuesta
 * Pasos para extraer la info del formulario
 * 1.Agrega un event listener del evento submit
 * 2.Prevenir el comportamiento por default
 * 3.Construir un form data dandole el elemento formulario
 * 4.Extaer la informacion del formData y guardala en un array de arrays usando el spread operator
 * El spread operator desempaqueta la informacion de un iterable y la guarda en otro
 * 5.Crear un objeto con la informacion usando Object.formEntries()
 * object from entries recibe un array de arrays
 */
window.addEventListener("load", (event) =>{
  if(getItemLocalStorage("albums") == undefined) return;
  albums = [...getItemLocalStorage("albums")];
  albums.map((album) => renderCard(album, mainEl));
  /**
   * segunda opcion
   * getItemLocalStorage("albums").forEch((album) => albums.push(album))
   */
});


formEl.addEventListener("submit", (event)=>{
    event.preventDefault(); //para que cuando presiones el boton no se recargue la pagina
    const formData = new FormData(formEl); //guarda lo escrito en las barras
    console.log(formData.get("Title")); //Obtiene un solo dato
    console.log(formData);
    const dataArray = [...formData]; 
    console.log(dataArray);
    const album = Object.fromEntries(dataArray);
    console.log(album);
    /* como hacer todo eso en una linea 
    const album = Object.fromEntries([...new FormData(formEl)]);
    */
   albums.push(album);
   setLocalStorage("albums", albums);
   //Limpiamos antes de volver a renderizar las cards, para evitar la acumulacion
   mainEl.innerHTML = "";
   //Renderizamos todas las cards dentro del array de albums
   albums.map((album) => renderCard(album, mainEl));
  formEl.reset();
});
const renderCard = (albumObject, htmlElement) =>{
  
  const card = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${albumObject.Title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${albumObject.Artist}</h6>
    <p class="card-text">Genero: ${albumObject.Genre}</p>
    <a href="#" class="card-link">Ano de lanzamiento: ${albumObject.ReleaseYear}</a>
    <a href="#" class="card-link">Rating: ${albumObject.Raiting}</a>
    <h6 class="card-subtitle mb-2 text-body-secondary">Listened: ${albumObject.Listened}</h6>
  </div>
</div>`;
htmlElement.insertAdjacentHTML("beforeend", card);
};

const setLocalStorage = (key, value) => {
  //Paso 1. convertir el valor a texto
  const textValue = JSON.stringify(value);
  //Paso 2. almacenar
  localStorage.setItem(key, textValue);
};
const getItemLocalStorage = (key) =>{
 if(localStorage.getItem(key) == null) return;
 //convertimos de texto a lenguaje js
 const data = JSON.parse(localStorage.getItem(key));
 return data;
}
/**
 *Opcion solo para este script
 *  const renderCard = (albumObject) =>{
  
  const card = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${albumObject.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${albumObject.artist}</h6>
    <p class="card-text">Genero: ${albumObject.genre}</p>
    <a href="#" class="card-link">Ano de lanzamiento: ${albumObject.year}</a>
    <a href="#" class="card-link">Rating: ${albumObject.rating}</a>
  </div>
</div>`;
htmlElement.insertAdjacentHTML("beforeend", card);
};
 */

/**
 * Manipulacion de la interfaz
 * 1.Propiedad llamada innerhtml dentro de ella podremos observar
 * todo el html que vive dentro de la etiqueta seleccionada
 * si lo usamos sin cuidado podemos borrar todo lo que estaba
 * !Importante
 * !No usar innerhtml para renderizar solo texto si estoy recibiendo y mostrando
 * inmediatamente (propenso a inyeccion de html)
 * 2.Propiedad llamada textContent esta solo mostrara el texto que tiene dentro
 */
console.log(mainEl.innerHTML);
console.log("text content");
console.log(mainEl.textContent);

//mainEl.innerHTML += "<h1> Hola ch 71</h1>";
mainEl.innerHTML += card;
console.log(mainEl.innerHTML);

// mainEl.textContent += "hola";
// mainEl.textContent += card;

/**
 * Insert Adjacent HTML
 * Permite insertar html en el contenedor sin borrar lo que ya esta
 * y en una posicion especifica
 * tiene 4 posiciones
 * 1.beforebegin
 * 2.beforeend
 * 3.afterbegin
 * 4.afterend
 */
mainEl.insertAdjacentHTML(
  "afterbegin",
  "<p>Insertado por insert adjacent html</p>",
);
mainEl.insertAdjacentHTML("beforeend", card);

