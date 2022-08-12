
var cfg_serverImage = "images/logo.png";


var cfg_serverName = "Нижние дубки | SandBox";

var cfg_bgVideo = false;

var cfg_background = "backgrounds/videos/glimmering.webm";

var cfg_bgImages = [
	"backgrounds/images/bg01.jpg",
	"backgrounds/images/bg02.jpg",
	"backgrounds/images/bg03.jpg",
	"backgrounds/images/bg04.jpg",
];

var cfg_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var cfg_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var cfg_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var cfg_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var cfg_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var cfg_music = true;

/*Display actual song's name?*/
var cfg_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var cfg_musicPlaylist = [
	{ogg: "songs/sfainter-Digital-парилка.ogg", name: "sfainter - Digital парилка"},
	{ogg: "songs/Royal-Republic-Fireman-_-Dancer.ogg", name: "Royal Republic - Fireman & Dancer"},
	{ogg: "songs/Bee-Gees-Stayin_-Alive-_Official-Music-Video_.ogg", name: "Bee Gees - Stayin Alive"},
	{ogg: "songs/honda.ogg", name: "ЕБАНЬКО x INITIAL D — DON'T STOP THE HONDA"},
];

/*Random music order?*/
var cfg_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var cfg_musicVolume = 5;

/*Enable custom messages?*/
var cfg_messagesEnabled = true;

/*Enter your custom messages below*/
var cfg_messages = [
"Ну ты это, заходи потом если что",
"Дарова братанчик, спасиб что зашел!",
"Вся информация о сервере находится в !motd"
];

/*Random message order?*/
var cfg_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var cfg_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var cfg_messagesFade = 1000;
