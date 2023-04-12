<script lang="ts" setup>
import BestOptions from './BestOptions.vue';
import CallMe from './CallMe.vue';
import HowToUseIt from './HowToUseIt.vue';
import JoinUs from './JoinUs.vue';
import CardInfoApp from './cards/CardInfoApp.vue';
</script>

<template>
    <section class=" home h-screen min-h-screen flex items-center ">
        <div class="card" >
            <p class="text-white font-medium pl-3">Aprovecha los multiples <br> Servicios con la mejor solucion</p>
            <div class="card-img flex flex-col pt-5">
                <img class=" rounded-lg m-2" src="../../.././img/app+store2.jpeg" alt="">  
                <img class="rounded-lg m-2" src="../../.././img/image.jpeg" alt="">
            </div>
        </div>
    </section>
    <BestOptions />
    <HowToUseIt />
    <CallMe />
    <JoinUs />
    <CardInfoApp/>
</template>

<style>

.card-img img{
    width: 30%;
}
.home{
    background-image:linear-gradient(135deg, #2458b8ae 0%, #151a7b57 100%), url('./img/photo-home1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    
}
    

    @media (min-width: 769px){
        .home{
            background-image:linear-gradient(135deg, #2458b8ae 0%, #151a7b57 100%), url('./img/photo-home.jpg');
            background-size: 100% 100% ;
            background-repeat: no-repeat;
            justify-content: center;
        }

        .card{
            margin-top: 50px;
        }

        .card p{
            font-size: 2.5rem;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .card-img{
            flex-direction: row;
        }

        .card-img img{
            width: 20%;
        }
    }
</style>