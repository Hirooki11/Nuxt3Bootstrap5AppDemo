<template>
    <div style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Zntitle }}</h2>
                <img src="images/zundo.png" class="img-thumbnail" alt="ずんどう屋">
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