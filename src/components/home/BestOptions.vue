<template>
    <section class="option-contain flex flex-col justify-center items-center bg-white">
        <h1 class="text-center text-5xl p-5 font-medium text-blue-900">Somos tu mejor opcion</h1>
        <div class="card-content">

            <div class="card1 text-xs">
                <div class="card-header flex items-center ">
                    <img class="mr-2" src="../../../img/user.jpeg" alt="">
                    <p class="text-4xl text-yellow-600">s/ 7.00</p>
                </div>
                <div class="divider w-full bg-slate-500"></div>
                <div class="card-info">
                    <div class="flex justify-between">
                        <p class="font-medium">Fernando Quispe Quiros</p>
                        <span>(5,0)<i class="fa-solid fa-star fa-fade" style="color: #e0a910;"></i></span>
                    </div>
                    <p>Lego a tu ubicacion en: 15 min</p>
                    <p>Estoy a 500mts de ti</p>
                    <div class="flex mt-1 justify-between">
                        <button class="bg-green-400 text-white font-bold px-7 py-1 mr-1 rounded-md">Aceptar</button>
                        <button class="bg-red-400 text-white font-bold px-7 py-1 rounded-md">Rechazar</button>
                    </div>
                </div>
            </div>

            <div class="card1-1 img-over text-xs">
                <div class="card-header flex items-center ">
                    <img class="mr-2" src="../../../img/user2.jpeg" alt="">
                    <p class="text-4xl text-yellow-600">s/ 9.00</p>
                </div>
                <div class="divider w-full bg-slate-500"></div>
                <div class="card-info">
                    <div class="flex justify-between">
                        <p class="font-medium">Carlos Freitas Pereira</p>
                        <span>(4,9)<i class="fa-solid fa-star fa-fade" style="color: #e0a910;"></i></span>
                    </div>
                    <p>Lego a tu ubicacion en: 10 min</p>
                    <p>Estoy a 300mts de ti</p>
                    <div class="flex mt-1 justify-between">
                        <button class="bg-green-400 text-white font-bold px-7 py-1 mr-1 rounded-md">Aceptar</button>
                        <button class="bg-red-400 text-white font-bold px-7 py-1 rounded-md">Rechazar</button>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-3xl text-center pt-4 font-medium text-blue-900">Por que siempre pensamos en ti primero</h2>
        <p class="font-normal text-2xl text-center">Te damos la libertad de escoger el precio mas comodo </p>

        <div class="card-content2 w-full flex bg-slate-200 pt-20 pb-40 justify-between mt-10">
            
            <div class="card2">
                <img src="../../../img/photo-home.jpg" alt="">
                <img class="mobile-foto" src="../../../img/mobile4.jpeg" alt="">
                <h2 class="mt-5 text-3xl font-medium text-blue-900 text-center">Precios Comodos</h2>
                <p class="text-center text-2xl">Te llevamos a tu destino al alcance de tu bolsillo. </p>
            </div>
            
            <div class="card3">
                <img src="../../../img/photo-home1.jpg" alt="">
                <h2 class="mt-5 text-3xl font-medium text-blue-900 text-center">Tu seguridad es primero</h2>
                <p class="text-center text-2xl">Conoces quien sera el conductor y su evaluacion al alcance <br> de tus manos</p>
            </div>
        </div>
    </section>
</template>

<style>

.divider{
    margin-top: 5px;
    width: 100%;
    border: 1px solid #3c434f;
}

.card2{
    margin-left: 10%;
    margin-right: 70px;
}

.card3{
    margin-right: 10%;
}

.card2 img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.card3 img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.card-header img{
    background-color: aqua;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #2b2e32;
}

@media (max-width:800px ){
    .option-contain h1{
        font-size:1.8rem;
    }

    .option-contain h2{
        font-size: 1.4rem;
    }

    .option-contain p{
        font-size: 1rem;
        line-height: 1;
    }

    .card-content{
        width: 80%;
        height: 300px;
        background-image: url('./img/photo-home1.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 15px;
        box-shadow: rgba(46, 56, 67, 0.622) 0px 8px 24px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card1, .card1-1{
        padding: 10px;
        width: 250px;
        background: #c3d1e7;
        opacity: .9;
        border-radius: 5px;
    }

    .card-content .img-over{
        opacity: 0;
        position: absolute;
        transition: .8s;
        background: #fff;
    }

    .card-content .img-over:hover{
        opacity: 1;
    }

    .card2, .card3{
        position: relative;
        width: 450px;
        height: 300px;
    }

    .card-content2{
        overflow-x: scroll !important;
        white-space: nowrap;
    }

    .card2, .card3{
        display: inline-block;
    }

    .card3 p{
        word-wrap: break-word;
    }

    .card2 .mobile-foto{
        position: absolute;
        top: 20px;
        left: 30px;
        width: 130px;
        height: 240px;
    }
}

@media (min-width: 800px){
    .card-content{
        width: 80%;
        height: 500px;
        background-image: url('./img/photo-home1.jpg');
        background-size: cover;
        border-radius: 15px;
        box-shadow: rgba(46, 56, 67, 0.622) 0px 8px 24px;
    }

    
    .card1, .card1-1{
        padding: 10px;
        width: 250px;
        background: #c3d1e7;
        border-radius: 5px;
    }
    
    .card1{
        margin-left: 160px;
        margin-top: 40px;
    
    }
    
    .card1-1{
        margin-left: 240px;
        margin-top: 40px;
    }

    .card2, .card3{
        position: relative;
        width: 550px;
        height: 370px;
    }

    .card2 .mobile-foto{
        position: absolute;
        top: 20px;
        left: 30px;
        width: 130px;
        height: 290px;
    }

    
    
    .card2 img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    
    .card3 img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    
    .card-header img{
        background-color: aqua;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #2b2e32;
    }
}
</style>