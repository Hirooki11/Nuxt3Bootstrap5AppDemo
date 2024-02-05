<template>
    <div class="Yokoduna-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Yktitle }}</h2>
                <img src="images/yokoduna.jpeg" alt="横綱" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Yktitle2 }}</h3>
                <div v-for="Yk in ramen.Ykadress">
                    <p>{{ Yk.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const ramen = useRamen()
</script>