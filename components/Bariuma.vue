<template>
    <div class="Bariuma-container mb-5">
        <div class="row">
            <div class="col-md-6 mb-5">
                <img src="images/bariuma_f.jpeg" class="img-thumbnail" alt="外観">
                <div v-for="ba in bariuma.adress">
                    <p>{{ ba.text }}</p>
                </div>
            </div>
            <div class="col-md-6">
                <img src="images/menu.jpeg" class="img-thumbnail" alt="メニュー">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const bariuma = useBariuma()
</script>
