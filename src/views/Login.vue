<template>
    <div
        class="bg-[radial-gradient(48.26%_50%_at_50%_50%,_#114040_0%,_#000000_100%)] h-screen flex justify-center items-center">
        <div class="w-[932px] h-[343px] grid grid-cols-12">
            <div class="col-span-6">
                <Transition name="slide-fade-reverse">
                    <div class="relative w-[321px] h-[302px] mx-auto" v-if="loadedImg">
                        <div
                            class="bg-[url(../../../src/assets/image/login/eclipse.png)] bg-cover bg-no-repeat h-[302px] w-[321px] absolute z-[3]">
                        </div>
                        <div
                            class="w-[314px] h-[292px] rounded-[300px] bg-[radial-gradient(48%_48%_at_50%_50%,_#007075_33.33%,_#000000_99.48%)] top-[6px] left-[2px] absolute">
                        </div>
                        <Transition name="bounce">
                            <img src="../../src/assets/image/login/camera.png"
                                class="z-[4] -bottom-[36px] absolute right-[77px]" v-if="showCam" alt="">
                        </Transition>
                        <Transition name="bounce">
                            <img src="../../src/assets/image/login/key.png"
                                class="z-[4] absolute -left-[25px] top-[69px]" v-if="showKey" alt="">
                        </Transition>
                        <Transition name="bounce">
                            <img src="../../src/assets/image/login/security.png"
                                class="z-[4] absolute left-[258px] top-[50px]" v-if="showSecurity" alt="">
                        </Transition>
                        <Transition name="bounce">
                            <img src="../../src/assets/image/login/spy.png"
                                class="z-[4] absolute left-0 right-0 mx-auto top-[100px]" v-if="showSpy" alt="">
                        </Transition>

                    </div>
                </Transition>
            </div>
            <div class="col-span-6">
                <Transition name="slide-fade">
                    <div class="w-[312px]" v-if="loadedForm">
                        <h3 class="text-[#ffffff] text-[24px] leading-[20px] font-[MontserratBold] font-bold mb-[10px]">
                            Portal Meeting</h3>
                        <p class="text-[#727272] text-[12px] leading-[20px] font-nomral">
                            Silakan isi formulir di bawah ini! <br />
                            Pastikan NIP dan nomor PIN yang Anda masukkan benar
                        </p>

                        <div>
                            <label for="nip" class="text-[12px] text-[#CBCBCB] leading-[20px] font-medium mb-[6px]"> NIP
                            </label>
                            <input type="text" name="nip" id="nip" placeholder="Masukkan NIP Anda"
                                class="w-full h-[42px] px-[12px] bg-[#111111] placeholder:text-[rgba(249,250,252,0.3)] text-[#ffffff] text-[14px]">
                        </div>

                        <div>
                            <label for="nip" class="text-[12px] text-[#CBCBCB] leading-[20px] font-medium mb-[6px]">
                                Nomor
                                PIN
                            </label>
                            <input type="text" name="nip" id="nip" placeholder="Masukkan Nomor PIN Anda"
                                class="w-full h-[42px] px-[12px] bg-[#111111] placeholder:text-[rgba(249,250,252,0.3)] text-[#ffffff] text-[14px]">
                        </div>

                        <router-link to="/forgot-password">
                            <p class="w-full text-right text-[12px] text-[#CBCBCB] mt-[8px]">
                                Lupa PIN?
                            </p>
                        </router-link>

                        <router-link to="/dashboard">
                            <div
                                class="relative btn !bg-[transparent] !p-0 !w-[142px] !h-[46px] border-none outline-0 !hover:bg-[transparent] !focus:bg-[transparent]">
                                <div
                                    class="bg-[linear-gradient(180deg,_#049399_0%,_#024447_100%)] w-[139px] h-[42px] rounded-[5px] z-[2] absolute top-0 left-0 py-[12px] !capitalize font-[MontserratBold]">
                                    Masuk
                                </div>
                                <div
                                    class="bg-[linear-gradient(180deg,_#049399_0%,_#024447_100%)] w-[133px] h-[42px] bottom-0 right-0 absolute z-[1]">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

let showCam = ref(false)
let showKey = ref(false)
let showSecurity = ref(false)
let showSpy = ref(false)
let loadedForm = ref(false)
let loadedImg = ref(false)
onMounted(() => {
    setTimeout(() => {
        loadedImg.value = true
    }, 200)

    setTimeout(() => {
        showCam.value = true
    }, 300)
    
    setTimeout(() => {
        loadedForm.value = true
    }, 400)

    setTimeout(() => {
        showKey.value = true

    }, 500)

    setTimeout(() => {
        showSecurity.value = true
    }, 700)

    setTimeout(() => {
        showSpy.value = true
    }, 900)
})
</script>
<style>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>