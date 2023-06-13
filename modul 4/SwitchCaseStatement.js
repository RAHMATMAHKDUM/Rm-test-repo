let language = "Chinese";
let greeting = "null";
switch (language){
    case "English":
        greeting = "Good Morning!";
        break;
    case "Franch":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    case "Arab Saudi":
        greeting = "sabah alkhayr!";
        break;
    case "Korea":
        greeting = "Joh-eun Achim-ieyo!";
        break;
    case "Chinese":
        greeting = "Zǎoshang hǎo!";
        break;
    case "Jawa":
        greeting = "Sugeng Enjing!";
        break;    
    default:
        greeting = "Selamat Pagi!";
}
console.log(greeting);