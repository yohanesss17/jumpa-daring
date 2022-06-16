<template>
    <div
        class="bg-[radial-gradient(48.26%_50%_at_50%_50%,_#114040_0%,_#000000_45.83%)] h-screen flex justify-center items-center">
        <Transition name="slide-fade">
            <div class="w-[917px]" v-if="layout">
                <div class="flex flex-wrap mb-[56px]">
                    <div class="basis-6/12">
                        <h3 class="font-bold font-[MontserratBold] text-[#ffffff] text-[28px]">Detail Rapat</h3>
                    </div>
                    <div class="basis-6/12 flex justify-end">
                        <router-link to="/">

                            <button
                                class="btn w-[132px] h-[42px] bg-[linear-gradient(180deg,_#DF0129_43.23%,_#710007_100%)] capitalize text-[14px]">Keluar</button>
                        </router-link>
                    </div>
                </div>
                <div class="">
                    <router-link to="/dashboard">
                        <button
                            class="btn !h-[28px] !min-h-[28px] font-[MontserratLight] !w-[87px] !p-0 !bg-transparent !border-[1px] !border-solid !border-[#D8D8D8] !leading-[18px] !text-[14px] text-[#E5E5E5] !tracking-[0.3px] font-normal capitalize mt-[25px] !rounded-[10px]">
                            Kembali
                        </button>
                    </router-link>

                </div>
                <div
                    class="w-[833px] h-[303px] mt-[33px] mx-auto bg-[rgba(0,27,28,0.7)] rounded-[10px] grid grid-cols-12 gap-4 py-[42px] px-[60px]">
                    <div class="col-span-4">
                        <h3 class="title">ID Rapat</h3>
                        <p class="text">{{ meeting.id }}</p>
                    </div>
                    <div class="col-span-5">
                        <h3 class="title">Subjek Rapat</h3>
                        <p class="text">{{ meeting.subjek }}</p>
                    </div>
                    <div class="col-span-3">
                        <h3 class="title">Tipe Rapat</h3>
                        <p class="text">{{ meeting.tipe }}</p>
                    </div>
                    <div class="col-span-4">
                        <h3 class="title">Penyelenggara</h3>
                        <p class="text">{{ meeting.penyelenggara }}</p>
                    </div>
                    <div class="col-span-5">
                        <h3 class="title">Waktu Mulai</h3>
                        <p class="text">{{ meeting.berlangsung }}</p>
                    </div>
                    <div class="col-span-3">
                        <h3 class="title">Durasi</h3>
                        <p class="text">{{ meeting.durasi }}</p>
                    </div>
                    <div class="col-span-12 flex justify-center">
                        <button
                            class="btn w-[132px] h-[42px] rounded-[10px] bg-[linear-gradient(180deg,_#23AD77_0%,_#23AD77_0.01%,_#006400_100%)] capitalize text-[14px] font-[MontserratLight] font-normal">Gabung</button>
                    </div>
                </div>
                <div
                    class="mt-[129px] pt-[16px] border-t-[0.5px] border-solid border-[#8DA185] text-[#ffffff] text-[12px] font-normal tracking-[1px]">
                    @2022 Test
                </div>
            </div>
        </Transition>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

let layout = ref(false)
let meetingList = ref([{
    'id': 12345,
    'subjek': 'Tes Meeting',
    'tipe': 'Rapat Regular',
    'penyelenggara': 'Budi ABC (budi@gmail.com)',
    'berlangsung': '02:28',
    'status': 'berlangsung',
    'durasi': '1 jam'
},
{
    'id': 67891,
    'subjek': 'Coba 2',
    'tipe': 'Rapat Regular',
    'penyelenggara': 'Budi ABC (budi@gmail.com)',
    'berlangsung': '02:28',
    'status': 'terjadwal',
    'durasi': '1 jam'
},
{
    'id': 13579,
    'subjek': 'Tes Meeting',
    'tipe': 'Rapat Regular',
    'penyelenggara': 'Budi ABC (budi@gmail.com)',
    'berlangsung': '02:28',
    'status': 'berlangsung',
    'durasi': '1 jam'
}]);

let meeting = ref([]);

onMounted(() => {
    setTimeout(() => {
        var id = route.params.id
        layout.value = true;
        meetingList.value.forEach(function (elem) {
            if (elem.id == id) {
                meeting.value = elem;
            }
        });
    }, 200)
})

</script>
<style>
.title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 1px;
    color: #FFFFFF;

    margin-bottom: 10px;
}

.text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    letter-spacing: 1px;

    color: #FFFFFF;
}
</style>