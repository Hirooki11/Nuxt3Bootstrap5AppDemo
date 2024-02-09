<template>
    <div class="Asahi container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Atitle }}</h2>
                <img src="images/asahi.jpeg" class="img-thumbnail" alt="本家第一旭">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Atitle }}</h3>
                <div v-for="As in ramen.Aadress">
                    <p>{{ As.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>