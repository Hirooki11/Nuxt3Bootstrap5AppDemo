<template>
    <div style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>ばり馬</h2>
                <img src="images/bariuma2.jpeg" class="img-thumbnail" alt="ばり馬">
            </div>
            <div class="col-md-5">
                <h3>{{ bariuma.store }}</h3>
                <div v-for="ba2 in bariuma.info">
                    {{ ba2.text }}
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const bariuma = useBariuma()
</script>