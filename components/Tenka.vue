<template>
    <div class="Tenka-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Tntitle }}</h2>
                <img src="images/tenkaippin.jpeg" alt="天下一品" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Tntitle2 }}</h3>
                <div v-for="Tn in ramen.Tnadress">
                    <p>{{ Tn.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const ramen = useRamen()
</script>