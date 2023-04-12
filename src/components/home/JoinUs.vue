<template>
    <section class="w-full">
        <h1 class="text-center text-5xl font-medium text-blue-900 mb-10 mt-10">Unete a Nosotros</h1>
        <div class="join-us-content w-full flex justify-between">
            <div class="join-card1">
                <img src="../../../img/chofer2.jpeg" alt="">
                <div class="flex flex-auto items-center justify-between pr-3">
                    <p class="text-3xl text-start font-medium text-blue-900">Registrate <br> como conductor</p>
                    <i class="text-5xl text-blue-900 fa-solid fa-arrow-right fa-beat"></i>
                </div>
            </div>
            <div class="join-card2">
                <img src="../../../img/chofer3.jpeg" alt="">
                <div class="flex items-center justify-between pr-3">
                    <p class="text-3xl text-start font-medium text-blue-900">Registrate y <br> comienza a viajar</p>
                    <i class="text-5xl text-blue-900 fa-solid fa-arrow-right fa-beat"></i>
                </div>
            </div>
        </div>
        <div class="join-card-details w-full pt-20 flex">
            <div class="mr-40">
                <div class="circle-icon">
                    <i class="text-white fa-sharp fa-solid fa-thumbs-up fa-bounce"></i>
                </div>
                <h1 class="text-3xl font-medium text-blue-900 pb-3">Transparentes y justos</h1>
                <p class="font-normal text-xl">Tanto el pasajero como el conductor pueden ver todos
                    los detalles del viaje. No hay precios ocultos ni cambios
                    inesperados: esto hace la app segura para ambos
                </p>
            </div>
            <div>
                <div class="circle-icon">
                    <i class="text-slate-400 fa-sharp fa-solid fa-shield fa-beat"></i>
                </div>
                <h1 class="text-3xl font-medium text-blue-900 pb-3">Medidas de suguridad</h1>
                <p class="font-normal text-xl">
                    Puedes compartir el nombre del conductor, los detalles del vehiculo
                    y tu ubicacion en tiempo real con tu familia y amigos. Tambien puedes 
                    llamar a emergencia. Todo desde la app, facil y rapido.
                </p>
            </div>
        </div>
    </section>
</template>

<style>


.join-card1, .join-card2 {
    width: 450px;
}
.join-card1  img, .join-card2 img{
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(46, 56, 67, 0.622) 0px 8px 24px;
    margin-bottom: 20px;
}

.join-us-content {
    padding-right: 10%;
    padding-left: 10%;
}

.join-card-details{
    padding-left: 10%;
    padding-right: 10%;
}

.circle-icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #3056ad;
    text-align: center;
    line-height: 2;
    font-size: 1.5rem;
    margin-bottom: 10px;
}
</style>