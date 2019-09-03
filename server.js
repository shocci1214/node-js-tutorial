//expressモジュールの読み込み
const express = require('express');
//expressモジュールをインスタンス化
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log("My app listening on port 3000!")
});