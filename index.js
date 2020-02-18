const express = require('express');
const app = express();
const fs = require('fs');
const download = require('download-file');

const xlsxtojson = require('xlsx-to-json');

app.use(express.json());




app.get('/json', function(req,res){
    const jsonData = fs.readFileSync("loft-datas.json", "utf8");
    res.send(jsonData);
})
app.post('/excel-to-json.xlsx', function(req, res){
                
            const link = "";

            const options = {
                directory: "./",
                filename: "dados.xlsx"
            }
            
            download(link, options, function(err){
                if (err) throw err
                console.log("meow")
            }) 
    const url = "./dados_loft.xlsx";
    
    xlsxtojson({
        input: `${url}`,
        output: "loft-datas.json",
        lowerCaseHeaders: true
    }, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
});



app.listen(3200);


