<template>
    <div class="Bariuma-container mb-5">
        <div class="row">
                <div class="col-md-6">
                    <img src="images/bariuma_f.jpeg" alt="外観" style="width: 700px; height: auto;" class="mb-5">
                    <div v-for="ba in bariuma.adress">
                        {{ ba.text }}
                    </div>
                <div class="col-md-6">
                    <img src="images/menu.jpeg" alt="メニュー" style="width: 700px; height: auto;">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const bariuma = useBariuma()
</script>