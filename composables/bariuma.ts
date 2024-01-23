export const useBariuma = () => useState('Bariuma', () => {
    return {
        title: "私のおすすめはばり馬です",
        description:
            "これは僕の地元和歌山県にあるお店です",
        adress: [
            { text: "住所: 和歌山県岩出市川尻17-8" },
            { text: "電話番号: 0736-69-5850" },
            { text: "営業時間: 11:00～24:00(LO.23:30)※年末年始、連休時は店舗へお問い合わせください。" },
            { text: "駐車場: 32台" },
            { text: "席数: 44席" },

        ],
    }
})