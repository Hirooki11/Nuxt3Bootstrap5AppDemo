<template>
    <div class="Ichiran-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Ictitle }}</h2>
                <img src="images/ichiran.jpeg" alt="一蘭" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Ictitle2 }}</h3>
                <div v-for="Ic in ramen.Icadress">
                    <p>{{ Ic.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>