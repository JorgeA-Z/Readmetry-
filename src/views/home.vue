<script >


</script>
<template>
    <div class="header">
        <h2>ReadmeNow!</h2>
    </div>

    <div class="row">
        <div class="leftcolumn">
            <div class="card">
                <h2>Skyward</h2>
                <img src="../Images/B1.png.webp" alt="Logo" width="100%" height="auto">
                <h5>Sinopsis</h5>
                <p>
                    <small>
                        "Skyward" es una novela de ciencia ficción escrita por Brandon Sanderson que sigue la historia de Spensa, una joven piloto que vive en un mundo alienígena donde los humanos están atrapados en un planeta aislado y en constante peligro debido a los ataques de los misteriosos Krell.
                    </small>
                </p>
                <p>
                    <small>
                        A pesar de que su padre fue acusado de ser un cobarde durante una importante batalla contra los Krell, Spensa está decidida a convertirse en piloto y honrar el legado de su familia. A través de sus esfuerzos por alcanzar su sueño, Spensa se enfrenta a prejuicios y desafíos, mientras lucha por demostrar su valía.
                    </small>
                </p>
                <p>
                    <small>
                        La trama se intensifica cuando Spensa descubre un secreto oscuro que podría cambiar el curso de la guerra contra los Krell, y se ve obligada a tomar decisiones difíciles para proteger a su pueblo. A medida que la tensión aumenta y la verdad sale a la luz, Spensa se enfrenta a una carrera contra el tiempo para salvar a su pueblo y asegurar su lugar en el cielo.
                    </small>
                </p>
                
            </div>
            <div class="card">
                <h2>Words of radiance</h2>
                <img src="../Images/B2.jpg" alt="Logo" width="100%" height="auto">
                <h5>Sinopsis</h5>
                <p>
                    <small>
                        "Words of Radiance" es la segunda entrega de la serie épica de fantasía "The Stormlight Archive" del autor Brandon Sanderson. La novela sigue a Kaladin, Shallan y Dalinar en su lucha por proteger el mundo de Roshar del malvado desolador, que amenaza con destruir todo lo que conocen.
                    </small>
                </p>
                <p>
                    <small>
                        Kaladin se encuentra atrapado en el campamento de esclavos de Parshendi, donde debe encontrar la fuerza para sobrevivir y luchar por su libertad. Shallan, por su parte, se adentra en la Ciudadela Kharbranth en busca de respuestas, mientras que Dalinar lidera a los ejércitos de Roshar en una batalla épica contra los Parshendi. A medida que los personajes se unen en su lucha, descubren la verdadera naturaleza del poder de los Caballeros Radiantes y la clave para salvar su mundo. "Words of Radiance" es una emocionante continuación de la serie, llena de acción, intriga y giros sorprendentes.
                    </small>
                </p>
            </div>
        </div>
        <div class="rightcolumn">
            <div class="card">
                <h2>About us</h2>
                <img src="../Images/Logo.png" alt="Logo" width="200" height="200">
                <p>
                    Nuestra plataforma te permitirá disfrutar de la lectura de manera fácil y accesible desde cualquier
                    dispositivo móvil, tablet o computadora.
                </p>
                <p>
                    En nuestra app encontrarás características típicas de este tipo de plataformas, como la posibilidad de personalizar tu experiencia de lectura, ya sea cambiando el tamaño de letra, la fuente o el color de fondo. Además, podrás marcar tus libros favoritos, crear listas de lectura y recibir recomendaciones personalizadas basadas en tus intereses y hábitos de lectura.
                </p>
               
            </div>
            <div class="card">
                <h3>¡Proximamente!</h3>
                <p>
                    Estamos emocionados de compartir esta plataforma con todos los amantes de la lectura. ¡Mantente atento/a para más información sobre la fecha de lanzamiento y cómo puedes acceder a esta emocionante experiencia de lectura digital!
                </p>
            </div>
            <div class="card">
                <h3>¡Prueba la app!</h3>
                <p>
                    No esperes más para probar nuestra app de streaming de libros digitales. Disfruta de una lectura de una manera fácil y accesible de forma gratuita.
                </p>
                <p>
                    El clásico literario: "Alicia en el país de las maravillas".
                </p>
                <h5>
                    Sinopsis
                </h5>       
                <p>
                    <small>
                        "Alicia en el país de las maravillas" es una novela clásica de Lewis Carroll que sigue las aventuras de una joven llamada Alicia después de caer por un agujero de conejo en un mundo surrealista. Allí, Alicia se encuentra con personajes extravagantes y mágicos, como un gato sonriente, un sombrerero loco y una reina malvada, mientras intenta encontrar el camino de regreso a casa.
                    </small>
                </p>        
                <router-link to="/feed" class="">Try the Book!</router-link>

            </div>
        </div>
    </div>

    <div class="footer">
        <p><small>Nuestra aplicación ficticia de streaming de libros digitales es una descripción hipotética con fines
                ilustrativos. No representa una aplicación real ni está disponible para su descarga o uso. Esta descripción
                se ha creado únicamente con fines educativos y de ejemplo.</small></p>
    </div>
</template>


<style scoped>
* {
    box-sizing: border-box;
}
body {
    padding: 20px;
}
p
{
    color: black;
}
/* Header/Blog Title */
.header {
    padding: 10px;
    font-size: 40px;
    text-align: center;
    background: white;
    border-radius: 12px;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
    float: left;
    width: 75%;
}

/* Right column */
.rightcolumn {
    float: left;
    width: 25%;
    padding-left: 20px;
}

/* Fake image */
.fakeimg {
    background-color: #C4A6DB;
    color: white;
    border-radius: 12px;
    text-align: center;
    width: 100%;
    padding: 20px;

}
img
{
    border-radius: 12px;
}

/* Add a card effect for articles */
.card {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
    border-radius: 12px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Footer */
.footer {
    padding: 20px;
    text-align: left;
    background: #ddd;
    margin-top: 20px;
    border-radius: 12px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
    img,
    .leftcolumn,
    .rightcolumn {
        width: 100%;
        padding: 0;
    }
}</style>