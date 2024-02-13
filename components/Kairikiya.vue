<template>
    <div style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Kititle}}</h2>
                <img src="images/kairikiya.jpeg" class="img-thumbnail" alt="魁力屋">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Kititle2 }}</h3>
                <div v-for="Ki in ramen.Kiadress">
                    <p>{{ Ki.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>