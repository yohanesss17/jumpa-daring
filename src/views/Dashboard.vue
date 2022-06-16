<template>
    <div
        class="bg-[radial-gradient(48.26%_50%_at_50%_50%,_#114040_0%,_#000000_45.83%)] h-screen flex justify-center items-center">
        <Transition name="slide-fade">
            <div class="w-[917px]" v-if="loaded">
                <div class="flex flex-wrap mb-[56px]">
                    <div class="basis-6/12">
                        <h3 class="font-bold font-[MontserratBold] text-[#ffffff] text-[28px]">Data Semua Rapat</h3>
                    </div>
                    <div class="basis-6/12 flex justify-end">
                        <router-link to="/">
                            <button
                                class="btn w-[132px] h-[42px] bg-[linear-gradient(180deg,_#DF0129_43.23%,_#710007_100%)] capitalize text-[14px]">Keluar</button>
                        </router-link>
                    </div>
                </div>
                <div class="flex justify-end items-center">
                    <p class="12px text-[#FFFFFF] font-normal leading-[15px]">
                        Pencarian :
                    </p>
                    <input type="text" placeholder="" v-model="search"
                        class="w-[175px] h-[31px] ml-[10px] px-[12px] bg-[#000000] border-[1px] border-solid border-[#555555] rounded-[5px] placeholder:text-[rgba(249,250,252,0.3)] text-[#ffffff] text-[14px]">

                </div>
                <div class="overflow-auto h-[400px] rapat-list mt-[33px]">
                    <div class="w-[691px] h-[255px] mb-[33px] mx-auto bg-[rgba(0,27,28,0.7)] rounded-[10px] px-[33px]"
                        v-for="(element, i) in temporaryData" :key="`data-${i}`">
                        <div class="flex flex-wrap pb-[11px] border-b-[1px] border-[#023335] pt-[11px]">
                            <div class="basis-6/12 text-[#ffffff] text-[14px] font-semibold tracking-[1px]">ID Rapat :
                                {{ element.id }}
                            </div>
                            <div class="basis-6/12 flex justify-end ">
                                <div class="w-[87px] h-[17px]  rounded-[20px]"
                                    :class="[element.status == 'berlangsung' ? 'bg-[#007075]' : 'bg-[#E5E5E5]']">
                                    <p class="text-[10px] text-center font-normal tracking-[0.3px] font-[MontserratLight]"
                                        :class="[element.status == 'berlangsung' ? ' text-[#ffffff]' : ' text-[#036569]']">
                                        {{ element.status }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="border-b-[1px] border-[#023335] px-[4px] py-[21px] grid grid-cols-12">
                                <div class="col-span-4 title">Subjek Rapat</div>
                                <div class="col-span-8 content">: {{ element.subjek }}</div>
                                <div class="col-span-4 title">Tipe</div>
                                <div class="col-span-8 content">: {{ element.tipe }}</div>
                                <div class="col-span-4 title">Penyelenggara</div>
                                <div class="col-span-8 content">: {{ element.penyelenggara }}</div>
                                <div class="col-span-4 title">Berlangsung</div>
                                <div class="col-span-8 content">: {{ element.berlangsung }}</div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-end pt-[8px] pb-[13px]">
                            <router-link :to="{ path: '/detail/' + element.id }">
                                <button
                                    class="btn !h-[28px] !min-h-[28px] font-[MontserratLight] !w-[87px] !p-0 !bg-transparent !border-[1px] !border-solid  !border-[#138C41] !leading-[18px] !text-[14px] text-[#23AD77] !tracking-[0.3px] font-normal capitalize !rounded-[10px]">
                                    Detail
                                </button>
                            </router-link>
                            <button
                                class="btn !w-[87px] !h-[28px] !min-h-[28px] ml-[14px] rounded-[10px] bg-[linear-gradient(180deg,_#23AD77_0%,_#23AD77_0.01%,_#006400_100%)] capitalize text-[12px] font-[MontserratLight] font-normal">Gabung</button>

                        </div>
                    </div>
                </div>
                <div
                    class="pt-[16px] border-t-[0.5px] border-solid border-[#8DA1B5] text-[#ffffff] text-[12px] font-normal tracking-[1px]">
                    @2022 Test
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

let temporaryData = ref([])
let search = ref('');
let loaded = ref(false);
let data = ref([{
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

onMounted(() => {
    temporaryData.value = [...data.value]
    setTimeout(() => {
        loaded.value = true;
    }, 100)
})

watch(search, (newSearchValue) => {

    if (newSearchValue == "") {
        temporaryData.value = [...data.value]
    } else {
        let temp = []
        temporaryData.value.forEach(function (elem) {
            if (elem.subjek.toLowerCase().includes(newSearchValue.toLowerCase())) {
                temp.push(elem)
            }
        });

        temporaryData.value = temp;
    }
})


</script>
<style>


.title {
    font-family: 'MontserratBold';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;

    color: #FFFFFF;
}

.content {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 1px;

    color: #FFFFFF;
}

.rapat-list::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.rapat-list {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>