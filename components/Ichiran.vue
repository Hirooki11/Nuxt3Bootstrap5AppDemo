<template>
    <div class="Ichiran-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Ictitle }}</h2>
                <img src="images/ichiran.jpeg" alt="一蘭" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Ictitle2 }}</h3>
                <p>〒600-8006</p>
                <p>京都府京都市下京区立売中之町102-3 ミューズ389京都ビル2F</p>
                <p>075-211-7755</p>
                <p>10:00～22:00</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>