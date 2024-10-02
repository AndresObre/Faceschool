let a =0;

const like = () => {
    a = a + 1;
    document.getElementById("megusta").innerHTML = a + " me gusta";
    document.getElementById("corazon").style.color="red";
}

const fotos = [
    {usuario: "Andrés Obregón", imgusuario: "usuario.webp", imagen:"foto1.webp", megustas: 10, comentario:""},
    {usuario: "Juan Surita", imgusuario: "usuario.webp", imagen:"foto1.webp", megustas: 5, comentario:""},
    {usuario: "Adrian Surita", imgusuario: "usuario.webp", imagen:"foto1.webp", megustas: 6, comentario:""},
    {usuario: "Axel Surita", imgusuario: "usuario.webp", imagen:"foto1.webp", megustas: 7, comentario:""}
]

function cargarfotos() {
    for (const foto of fotos) {
        let contenedor = document.createElement("div")
        contenedor.innerHTML=` <div id="boxfoto">
                                    <div id="boxusuario">
                                        <img src="usuario.webp" alt="" id="imgusuario">
                                        <h2>${fotos.usuario}</h2>
                                    </div>
                                    <img src="foto1.webp" alt="foto de paisaje" id="imgfoto">
                                    <div id="boxbotones">
                                        <button onclick="like()">
                                            <span class="material-symbols-outlined" id="corazon">
                                            favorite
                                            </span>
                                        </button>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                chat_bubble
                                            </span>
                                        </button>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                send
                                            </span>
                                        </button>
                                    </div>
                                    <div class="boxmegusta">
                                        <p id="megusta">O me gusta</p>
                                    </div>
                                </div>`;
        document.body.appendChild(contenedor)
    }
}

cargarfotos()