<template>
    <div style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Iptitle }}</h2>
                <img src="images/ippudo.jpeg" class="img-thumbnail" alt="一風堂">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Iptitle2 }}</h3>
                <div v-for="Ip in ramen.Ipadress">
                    <p>{{ Ip.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>