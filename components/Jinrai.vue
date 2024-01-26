<template>
    <div class="Jinrai-container" style="font-size: 20px;">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ ramen.Jtitle }}</h2>
                <img src="images/ichiran.jpeg" alt="神来" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ ramen.Jtitle2 }}</h3>
                <p></p>
                <p>【金曜日】
                    11:30〜24:30（L.O.24:00）</p>
                <p>【土曜日】
                    11:00〜24:30（L.O.24:00）</p>
                <p>【日曜日】
                    11:00〜24:00（L.O.23:30）</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const ramen = useRamen()
</script>