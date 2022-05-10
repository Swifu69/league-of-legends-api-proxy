const config = require("../config/config.json")

async function getChampion(req, res){
    const apiRes = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/MyEnemyLovesToQQ",{
        headers:{
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": config["riot-api-key"]
        }
    })

    const data = await apiRes.json()

    res.json(data)
}

module.exports = {
    getChampion
}