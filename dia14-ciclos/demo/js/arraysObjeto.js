const peliculas = [
    {
        id: 1,
        titulo: "Titanic",
        fecha: "1997",
        portada: "https://wallpapers.com/images/hd/titanic-portrait-jack-and-rose-59mlyxfqzqnkdn73.jpg"
    },
    {
        id:2,
        titulo: "Rapidos y F",
        fecha: "2010",
        portada: "https://w0.peakpx.com/wallpaper/312/711/HD-wallpaper-fast-and-furious-6-fast-furious.jpg"
    },
    {
        id:3,
        titulo: "Cars",
        fecha: "2015",
        portada: "https://e0.pxfuel.com/wallpapers/386/655/desktop-wallpaper-cars-2006-phone-moviemania-disney-cars-cars-cartoon-disney-cars-movie-thumbnail.jpg"
    }
]

/* recuperar el elemento del DOM */
const listaPelis = document.querySelector("#listaPelis");

/* clico for para recorrer el array de peliculas */
for (let i = 0; i < peliculas.length; i++) {

    /* elemento del DOM => le inserto los datos */
       listaPelis.innerHTML += `<li>
                                    <article>
                                        <img src="${peliculas[i].portada}" alt="" width="200px">
                                        <h2>${peliculas[i].titulo}</h2>
                                        <h4>${peliculas[i].fecha}</h4>
                                        <a href="idPelicula=${peliculas[i].id}">Ver mas</a>
                                    </article>
                                </li>`

                                /* Template string `` */
}