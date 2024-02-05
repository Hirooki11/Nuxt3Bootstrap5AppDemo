<template>
    <div class="Kakumenya-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Kktitle }}</h2>
                <img src="images/kakumenya.jpeg" alt="革麺家" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{  ramen.Kktitle2 }}</h3>
                <div v-for="Kk in ramen.Kkadress">
                    <p>{{ Kk.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const ramen = useRamen()
</script>