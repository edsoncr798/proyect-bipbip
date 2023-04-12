<template>
    <section class="w-full bg-blue-900 mt-10 rounded-t-3xl pb-5 text-white">
            <h1 class="text-center text-3xl font-bold text-white p-5 ">!COMIENZA A AHORRAR YA, VIAJA CON NOSOTROS!</h1>
            <div class="w-full info-app flex justify-between">
                <div class="addres-info">
                    <img src="../../../../img/bibbip2.png" alt="">
                    <p class="mt-2">Av. Freyre 2024, Iquitos-Peru</p>
                    <p>+51966898989</p>
                    <p>bipbip@email.com</p>
                </div>

                <div>
                    <strong>INFORMACION</strong>
                    <p class="mt-2">Politicas</p>
                    <p>Reclamaciones</p>
                    <p>Terminos y condiciones</p>
                </div>

                <div>
                    <strong>CONTACTO</strong>
                    <p class="mt-2">Centro de ayudas</p>
                    <p>Preguntas mas Frecuentes</p>
                    <p>Confianza, Seguridad y Seguros</p>
                </div>

                <div class="apps">
                    <strong>PLATAFORMAS</strong>
                    <img class="mt-2 mb-2" src="../../../../img/image.jpeg" alt="">
                    <img src="../../../../img/app+store2.jpeg" alt="">
                </div>
            </div>
            <div class="social-network mt-5">
                <button class="mr-1"><i class="text-white text-2xl fa-brands fa-facebook-f"></i></button>
                <button class="mr-1"><i class="text-white text-2xl fa-brands fa-instagram"></i></button>
                <button class="mr-1"><i class="text-white text-2xl fa-brands fa-whatsapp"></i></button>
                <button><i class="text-white text-2xl fa-brands fa-tiktok"></i></button>
            </div>
    </section>
</template>

<style>

    .info-app{
        padding-left: 10%;
        padding-right: 10%;
        margin-top: 50px ;
    }

    .addres-info img{
        width: 100px;
        height: 35px;
        margin-bottom: 4px;
        margin-top: -15px;
    }

    .social-network{
        padding-left: 10%;
    }
    
    .apps img{
        width: 150px;
        border-radius: 10px;
        cursor: pointer;
    }

    .apps img:hover{
        transform: scale(1.05);
        transition: transform 200 ease;
    }
    
    .social-network button{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: black;
    }
</style>