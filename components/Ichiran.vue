<template>
    <div style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Ictitle }}</h2>
                <img src="images/ichiran.jpeg" class="img-thumbnail" alt="一蘭">
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