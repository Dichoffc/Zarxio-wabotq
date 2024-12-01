const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");

async function tiktok(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const videoUrl = $("video").attr("src");
    const coverImage = $("meta[property='og:image']").attr("content");
    const title = $("meta[property='og:title']").attr("content");
    
    return {
      status: true,
      author: "Nezzx",
      result: {
        title,
        videoUrl,
        coverImage,
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function spotify(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $("meta[property='og:title']").attr("content");
    const artist = $("meta[property='og:description']").attr("content");
    const image = $("meta[property='og:image']").attr("content");

    return {
      status: true,
      author: "Nezzx",
      result: {
        title,
        artist,
        image,
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function instagram(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $("meta[property='og:title']").attr("content");
    const image = $("meta[property='og:image']").attr("content");
    const videoUrl = $("meta[property='og:video']").attr("content");

    return {
      status: true,
      author: "Nezzx",
      result: {
        title,
        image,
        videoUrl,
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function facebook(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $("meta[property='og:title']").attr("content");
    const image = $("meta[property='og:image']").attr("content");
    const videoUrl = $("meta[property='og:video']").attr("content");

    return {
      status: true,
      author: "Nezzx",
      result: {
        title,
        image,
        videoUrl,
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function twitter(url) {
  try {
    const { data } = await axios.post("https://twdown.net/download.php", qs.stringify({ URL: url }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    const $ = cheerio.load(data);
    return {
      status: true,
      author: "Nezzx",
      result: {
        desc: $("div:nth-child(1) > div:nth-child(2) > p").text().trim(),
        thumb: $("div:nth-child(1) > img").attr("src"),
        low: $("tr:nth-child(2) > td:nth-child(4) > a").attr("href"),
        high: $("tbody > tr:nth-child(1) > td:nth-child(4) > a").attr("href"),
        audio: "https://twdown.net/" + $("body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td:nth-child(4) > a").attr("href")
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function joox(query) {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const { data } = await axios.get(`http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=${query}&pn=1&sin=0&ein=29&_=${timestamp}`);
    
    const songList = await Promise.all(
      data.itemlist.map(async (item) => {
        const songData = await axios.get(`http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=${item.songid}`);
        const song = JSON.parse(songData.data.replace("MusicInfoCallback(", "").replace("\n)", ""));

        return {
          title: song.msong,
          album: song.malbum,
          artist: song.msinger,
          release: song.public_time,
          image: song.imgSrc,
          audio: song.mp3Url
        };
      })
    );

    return { status: true, author: "Nezzx", result: songList };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function xnxx(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    return {
      status: true,
      author: "Nezzx",
      result: {
        title: $("meta[property='og:title']").attr("content"),
        duration: $("meta[property='og:duration']").attr("content"),
        thumbnail: $("meta[property='og:image']").attr("content"),
        quality: {
          low: ($("script").html().match(/html5player.setVideoUrlLow'(.*?)';/) || [])[1],
          high: $("script").html().match(/html5player.setVideoUrlHigh'(.*?)';/)[1]
        }
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function videy(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    return {
      status: true,
      author: "Nezzx",
      result: { media: $("source").attr("src") }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

async function mediafire(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const downloadLink = $("a#downloadButton").attr("href");
    const fileName = $("div#file-name").text();

    return {
      status: true,
      author: "Nezzx",
      result: {
        downloadLink,
        fileName
      }
    };
  } catch (error) {
    return { status: false, author: "Nezzx", result: error.message };
  }
}

module.exports = {
  tiktok,
  spotify,
  instagram,
  facebook,
  twitter,
  joox,
  xnxx,
  mediafire,
  videy
};