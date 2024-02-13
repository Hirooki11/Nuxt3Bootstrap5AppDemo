<template>
    <div style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Kktitle }}</h2>
                <img src="images/kakumenya.jpeg" class="img-thumbnail" alt="革麺家">
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