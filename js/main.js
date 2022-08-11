//Array randomizer (Fisher-Yates algorithm)
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }
  
  var neededFiles;
  var downloadedFiles = 0;
  
  function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	  setGamemode(gamemode);
	  setMapname(mapname);
  
	  if (!cfg_serverName && !cfg_serverImage) {
		  setServerName(servername);
	  }
  }
  
  function DownloadingFile( fileName ) {
	  downloadedFiles++;
	  refreshProgress();
  
	  setStatus("Downloading files...");
  }
  
  function SetStatusChanged( status ) {
	  if (status.indexOf("Getting Addon #") != -1) {
		  downloadedFiles++;
		  refreshProgress();
	  }else if (status == "Sending client info...") {
		  setProgress(100);
	  }
  
	  setStatus(status);
  }
  
  /* Useless...
  function SetFilesTotal( total ) {
	  console.log("SetFilesTotal("+total+")");
  }*/
  
  function SetFilesNeeded( needed ) {
	  neededFiles = needed + 1;
  }
  
  function refreshProgress() {
	  progress = Math.floor(((downloadedFiles / neededFiles)*100));
  
	  setProgress(progress);
  }
  
  function setStatus(text) {
	  $("#status").html(text);
  }
  
  function setProgress(progress) {
	  $("#loading-progress").css("width", progress + "%");
  }
  
  function setGamemode(gamemode) {
	  $("#gamemode").html(gamemode);
  }
  
  function setMapname(mapname) {
	  $("#map").html(mapname);
  }
  
  function setServerName(servername) {
	  $("#title").html(servername);
  }
  
  function setMusicName(name) {
	  $("#music-name").fadeOut(2000, function() {
		  $(this).html(name);
		  $(this).fadeIn(2000);
	  });
  }
  
  var youtubePlayer;
  var actualMusic = -1;
  
  $(function() {
	  if (cfg_bgImagesRandom)
		  cfg_bgImages = shuffle(cfg_bgImages);
  
	  if (cfg_musicRandom)
		  cfg_musicPlaylist = shuffle(cfg_musicPlaylist);
  
	  if (cfg_messagesRandom)
		  cfg_messages = shuffle(cfg_messages);
  
	  if (cfg_messagesEnabled)
		  showMessage(0);
  
	  if (cfg_music) {
		  loadYoutube();
		  if (cfg_musicDisplay)
			  $("#music").fadeIn(2000);
	  }
  
	  if (cfg_bgVideo) {
		  $("body").append("<video loop autoplay muted><source src='"+cfg_background+"' type='video/webm'></video>");
	  }else{
		  $.backstretch(cfg_bgImages, {duration: cfg_bgImageDuration, fade: cfg_bgImageFadeVelocity});
	  }
  
	  if (cfg_serverName && !cfg_serverImage)
		  setServerName(cfg_serverName);
  
	  if (cfg_serverImage)
		  setServerName("<img src='"+cfg_serverImage+"'>");
  
	  if (cfg_bgOverlay)
		  $("#overlay").css("background-image", "url('images/overlay.png')");
  
	  $("#overlay").css("background-color", "rgba(0,0,0,"+(cfg_bgDarkening/100)+")");
  });
  
  function loadYoutube() {
	  var tag = document.createElement('script');
  
	  tag.src = "https://www.youtube.com/iframe_api";
	  var firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  function onYouTubeIframeAPIReady() {
	  youtubePlayer = new YT.Player('player', {
		height: '390',
		width: '640',
		events: {
		  'onReady': onPlayerReady,
		  'onStateChange': onPlayerStateChange
		}
	  });
  }
  
  function onPlayerReady(event) {
	  youtubePlayer.setVolume(cfg_musicVolume);
	  if (youtubePlayer.isMuted()) youtubePlayer.unMute();
	  nextMusic();
  }
  
  function onPlayerStateChange(event) {
	  if (event.data == YT.PlayerState.ENDED) {
		  nextMusic();
	  }
  }
  
  function nextMusic() {
	  actualMusic++;
  
	  if (actualMusic >= cfg_musicPlaylist.length) {
		  actualMusic = 0;
	  }
  
	  var atual = cfg_musicPlaylist[actualMusic];
  
	  if (atual.youtube) {
		  youtubePlayer.loadVideoById(atual.youtube);
	  }else{
		  $("body").append('<audio src="'+atual.ogg+'" autoplay>');
		  $("audio").prop('volume', cfg_musicVolume/100);
		  $("audio").bind("ended", function() {
			  $(this).remove();
			  nextMusic();
		  });
	  }
  
	  setMusicName(atual.name);
  }
  
  function showMessage(message) {
	  if (message >= cfg_messages.length)
		  message = 0;
  
	  $("#messages").fadeOut(cfg_messagesFade, function() {
		  $(this).html(cfg_messages[message]);
		  $(this).fadeIn(cfg_messagesFade);
	  });
  
	  setTimeout(function() {
		  showMessage(message+1);
	  }, cfg_messagesDelay + cfg_messagesFade*2);
  }