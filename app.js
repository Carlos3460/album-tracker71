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
formEl.addEventListener("submit", (event)=>{
    event.preventDefault(); //para que cuando presiones el boton no se recargue la pagina
    const formData = new FormData(formEl); //guarda lo escrito en las barras
    console.log(formData.get("Title")); //Obtiene un solo dato
    console.log(formData);
    const dataArray = [...formData]; 
    console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);
    /* como hacer todo eso en una linea 
    const album = Object.fromEntries([...new FormData(formEl)]);
    */

});
const card = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
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

mainEl.innerHTML += "<h1> Hola ch 71</h1>";
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