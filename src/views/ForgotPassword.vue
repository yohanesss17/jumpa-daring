<template>
    <div
        class="bg-[radial-gradient(48.26%_50%_at_50%_50%,_#114040_0%,_#000000_100%)] h-screen flex justify-center items-center">
        <Transition name="slide-fade">
            <div class="lg:w-[420px] lg:h-[552px] bg-[#040D0D] shadow-[-10px_10px_15px_rgba(0,0,0,0.25)] rounded-[10px] py-[40px] text-center" v-if="layout">
                <h3 class="text-[#ffffff] text-[30px] font-bold font-[MontserratBold]">Lupa PIN?</h3>
                <img src="../../src/assets/image/forgot-password/people.png" class="mx-auto mt-[15px]" alt="">
                <p class="text-[#F5F5F5] text-[14px] leading-[21px] mt-[23px] mb-[13px]">
                    Masukkan email yang terkait dengan akun Anda
                </p>
                <input type="text" name="nip" id="nip" placeholder="Enter Your Email Address"
                    class="w-[360px] h-[42px] mx-auto px-[12px] bg-[#111111] border-[1px] border-solid border-[#2D2D2D] rounded-[5px] placeholder:text-[rgba(249,250,252,0.3)] text-[#ffffff] text-[14px]">
                <button
                    class="btn !w-[360px] !h-[40px] !bg-[#036569] mt-[20px] uppercase text-[14px] leading-[21px] font-bold font-[MontserratBold]">
                    send link
                </button>
                <router-link to="/">
                    <button
                        class="btn !h-[28px] !min-h-[28px] font-[MontserratLight] !w-[87px] !p-0 !bg-transparent !border-[1px] !border-solid !border-[#D8D8D8] !leading-[18px] !text-[14px] text-[#E5E5E5] !tracking-[0.3px] font-normal capitalize mt-[25px] !rounded-[10px]">
                        Kembali
                    </button>
                </router-link>
            </div>
        </Transition>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
let layout = ref(false)

onMounted(() => {
    setTimeout(() => {
        layout.value = true;
    }, 200)
})

</script>