<template>
    <Navigation/>
    <div class="bg-midnight-300">
        <h1 class="h-96">
                ARG - больше чем просто сервисы
        </h1>
        <div class="max-w-full-sm flex justify-center ">
            <div class="p-12 h-96 rounded-xl bg-midnight-400 mb-24">
                <p class="m-4">Мы разработали новый проект для фриланса</p>
                <button class="text-midnight-400 mx-4 mt-48 w-36 bg-midnight-200 border-4 rounded-full p-2">Вход</button>
                <button class="text-midnight-400 mx-4 mt-48 w-36 bg-midnight-200 border-4 rounded-full p-2">Регистрация</button>
            </div>
        </div>
    </div>
    <footer>
        <p class="bg-midnight-400 p-24">@ARG 2023</p>
    </footer>
</template>

<script>
import Navigation from '../components/Navigation.vue';
export default{
    components: {Navigation},
    data(){
        return{
            
        }
    }
}
</script>