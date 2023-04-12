<script lang="ts" setup>
import { defineComponent, ref } from 'vue'

const optionsUser =ref([
    {text:'mi Perfil', link:'/profile'},
    {text:'Notificaciones', link:'/notify'},
    {text:'Iniciar Sesion', link:'/login'},
    {text:'Registrarse', link:'/signup'},
    {text:'Cerrar Sesion', link:'/logout'}, 
    ])
const isMenuOpen = ref(false);
const isLogin = ref(false);
const openMenuUser = ref(false);

const  toogleMenu = async()=> {
    isMenuOpen.value = !isMenuOpen.value
};

const toogleUser = async() => {
    openMenuUser.value = !openMenuUser.value
};

// defineProps<{
//     isMenuOpen: boolean
// }>();

</script>

<template>
        <nav class="header flex  p-1 items-center">
            <div class="menu-header w-1/2 flex justify-around items-center ml-5">
                <div class="menu-toogle p-2 ml-5">
                    <i 
                        v-if="!isMenuOpen"
                        class="fa-solid fa-bars fa-beat text-lg" 
                        @click="toogleMenu"
                    >
                    </i>
                    <i 
                        v-else
                        @click="toogleMenu" 
                        class="fa-solid fa-rectangle-xmark fa-fade text-lg"
                    >
                    </i>
                    
                </div>
                <div class="bip-logo">
                    <!-- <img
                        class="cursor-pointer px-2 bg-blue-900 rounded-lg" 
                        src="../../../img/logo-bip.png"
                        @click="$router.push('/')" 
                         alt=""> -->
                    <strong 
                        class="cursor-pointer px-2 bg-blue-900 rounded-lg" 
                        @click="$router.push('/')" 
                    >Bip Bip
                    </strong>
                </div>


                <!--! here!! comming son continue... -->
                <div
                    :class="{'open menu': isMenuOpen}"
                    class="menu-wfull"  
                >
                    <button ><router-link to="/about"> Sobre Nosotros</router-link></button>
                    <button ><router-link to="/contact"> Contactenos </router-link></button>
                </div>
                <!--! ..................................................................  -->
            </div>
            <div class="btn-options w-1/2  mr-5">
                <i v-if="isLogin == false" @click="toogleUser" class="fa-solid fa-circle-user text-3xl"></i>
                <img 
                    v-else-if="isLogin == true" 
                    @click="toogleUser" 
                    class="cursor-pointer h-8 w-8 rounded-full" 
                    src="../../../img/user.jpeg" alt="log in"
                >
                <div 
                    :class="{'open-user': openMenuUser}"
                    class="items-user none flex"
                    v-if="openMenuUser && isLogin == false"
                >
                    <router-link to="/login">{{ optionsUser[2].text }}</router-link>
                    <router-link to="/signup">{{ optionsUser[3].text }}</router-link>
                </div>
                <div 
                    :class="{'open-user ': openMenuUser}"
                    class=" flex justify-around" 
                    v-if="isLogin == false"
                >
                    <button class="text-black px-2 " >
                        <router-link to="/login">{{ optionsUser[2].text }}</router-link>
                    </button>
                    <button class="text-black px-2" >
                        <router-link to="/signup">{{ optionsUser[3].text }}</router-link>
                    </button>
                </div>
                <div 
                    :class="{'open-user': openMenuUser}"
                    class="items-user flex" 
                    v-if=" openMenuUser && isLogin == true"
                >
                    <div v-for="option in optionsUser" class="text-black px-1 ">
                        <router-link :to="option.link">{{ option.text }}</router-link></div>
                </div>
                
            </div>
        </nav>
</template>
    
<style>
    .header{
        height: 64px;
        width: 100%;
        background: rgba(209, 209, 209, 0.274);
        position:absolute;
        top: 0;
        box-shadow: 0 0 10px #0003;
    }

    


    @media (max-width: 540px){
        .header{
            box-shadow: rgba(46, 56, 67, 0.622) 0px 8px 24px;
        }

        .menu-header{
            gap: 30px;
            justify-content: space-between;
        }

        .menu-header strong{
            margin-right: -55px;
        }

        .menu-wfull{
            display: none;
        }

        .menu{
            position: absolute;
            gap:0;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            top:64px;
            width: 100%;
            left: -800px;
            background: rgba(209, 209, 209, 0.274);
            height: 50vh;
            z-index: 10;
        }

        .open{
            left: 0;
        }

        .items-user{
            position: absolute;
            flex-direction: column;
            gap: 5px;
            align-items: flex-start;
            justify-content: center;
            width: 150px;
            box-shadow: rgba(46, 56, 67, 0.622) 0px 8px 24px;
            top: 50px;
            border-radius:5px ;
            height: 200px;
            right: -300px;
            background: #fff;
            z-index: 10;
        }

        .items-user button{
            color: black;
        }
    
        .open-user{
            right: 20px;
        }

        .btn-options{
            text-align:end;
        }

        .btn-options img, .btn-options i{
            position: absolute;
            right: 30px;
            top: 10px;
        }

        .btn-options button{
            display: none;
        }

        .btn-user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: deeppink;
            position: absolute;
            top: 4px;
            right: 10px;
        }
    }

    @media (min-width:540px){
        .menu-toogle{
            display: none;
        }

        .btn-options i{
            display: none;
        }

        .btn-options img{
            position: absolute;
            right: 30px;
            top: 10px;
        }

        .items-user{
            position: absolute;
            flex-direction: column;
            gap: 5px;
            align-items: flex-start;
            justify-content: center;
            width: 150px;
            box-shadow: rgba(46, 56, 67, 0.622) 0px 8px 24px;
            top: 50px;
            border-radius:5px ;
            height: 200px;
            right: -300px;
            background: #fff;
            z-index: 10;
        }

        .open-user{
            right: 20px;
        }

        .menu-header{
            width:65% ;
            font-size: .8rem;
            font-weight: 500;
        }

        .menu-header button:hover{
            padding: 1px 5px 1px 5px ;
            background: #0d47a1;
            color: #fff;
        }

        .menu-wfull{
            display: flex;
            justify-content: space-between;
            width: 60%;
            max-width: 200px;
            white-space: nowrap;
        }

        

        .btn-options{
            width: 35%;
        }

        .none{
            display: none;
        }

        .btn-options button{
            background: #e0e0e0;
            font-size: .8rem;
            font-weight: 500;
            white-space: nowrap;
        }

        .btn-options button:hover{
            background: #0d47a1;
            color: #fff;
        }

        .header{
            padding: 0 10px 0 10px;
        }

        .menu-header{
            justify-content: flex-start;
        }

        .menu-header strong{
            margin-right: 10px;
        }

        .btn-options div{
            justify-content: flex-end;
        }

        .btn-options div button{
            margin-left: 5px;
        }
    }

    @media (min-width:700px){
        .header{
            padding: 0 40px 0 40px;
        }

        .menu-header{
            justify-content: flex-start;
        }

        .menu-header strong{
            margin-right: 10px;
        }

        .btn-options div{
            justify-content: flex-end;
        }

        .btn-options div button{
            margin-left: 5px;
        }
    }

    @media (min-width: 850px){
        .header{
            padding: 0 70px 0 70px;
        }

        .menu-header{
            justify-content: flex-start;
        }

        .menu-header strong{
            margin-right: 50px;
        }

        .btn-options div{
            justify-content: flex-end;
        }

        .btn-options div button{
            margin-left: 20px;
        }
    }

    @media (min-width: 960px){

        .header{
            padding: 0 190px 0 190px;
        }
        .menu-header div button{
            margin-right: 20px;
        }

        .menu-header{
            justify-content: flex-start;
            font-size: 1rem;
            font-weight: 400;
        }

        .menu-header strong{
            margin-right: 30px;
        }

        .btn-options div{
            justify-content: flex-end;
        }

        .btn-options div button{
            margin-left: 15px;
            font-size: 1rem;
            font-weight: 400;
        }
    }
</style>