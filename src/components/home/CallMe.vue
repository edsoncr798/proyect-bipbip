<template>
    <section class="w-full">
        <div class="call-content w-full flex mt-40 ">
            <div class="card-phone">
                <img src="../../../img/callme.jpg" alt="">
            </div>
            <div class="ml-20 mt-10 pr-10">
                <h2 class="text-5xl font-medium text-blue-900">
                    Hacer una llamada y reservar un viaje / Hacer pedido
                </h2>
                <p class="font-medium text-2xl mt-5">¿Te preocupa que no tengas internet o que alguien no este acostumbrado a usar una aplicacion?
                    No se! ¡Te ayudaremos en esto! Simplemente llamenos y obtenga un transporte, un pedido de comida o un paquete hecho por usted.
                </p>
                <div class="w-full btn-call flex justify-end mt-10">
                    <button class="px-3 p-1 bg-blue-900 text-white"> <i class="fa-solid fa-phone fa-shake"></i>&nbsp;+51 993 878 347</button>
                </div>
            </div>
        </div>
        <div class="w-full h-2 bg-slate-200">
        </div>
    </section>
</template>

<style>

.call-content{
    width: 100%;
    background: #ccddfe;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 35px;
}

.call-content button{
    text-align: center;
}

    .card-phone{
        width: 2000px;
        height: 800px;
        background: deepskyblue;
        border: 4px solid black;
        border-radius: 20px;
        transform: rotate(5deg);
        margin-top: -60px;
        box-shadow:  -40px 30px 30px -10px rgba(0, 0, 0, 0.5);   
    }

    .card-phone img{
        height: 100%;
        border-radius: 15px;
    }

    @media (max-width:800px){
        .call-content h2{
            font-size: 1.4rem;
        }

        .call-content p{
            font-size: 1rem;
            line-height: 1em;
        }

        .btn-call button{
            padding: 0px;
            padding-left: 1px;
            padding-right: 1px;
        }
    }
</style>