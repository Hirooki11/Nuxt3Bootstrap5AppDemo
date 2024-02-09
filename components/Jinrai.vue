<template>
    <div class="Jinrai-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Jtitle }}</h2>
                <img src="images/jinrai.jpeg" class="img-thumbnail" alt="神来">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Jtitle2 }}</h3>
                <div v-for="Ji in ramen.Jadress">
                    <p>{{ Ji.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>