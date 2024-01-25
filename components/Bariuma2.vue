<template>
    <div class="Bariuma2-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>ばり馬</h2>
                <img src="images/bariuma2.jpeg" alt="ばり馬" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
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