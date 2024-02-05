<template>
    <div class="Zundo-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Zntitle }}</h2>
                <img src="images/zundo.png" alt="ずんどう屋" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Zntitle2 }}</h3>
                <div v-for="Zn in ramen.Znadress">
                    <p>{{ Zn.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const ramen = useRamen()
</script>