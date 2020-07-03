
      var tag = document.createElement('script');
      tag.src = "//www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
        width:"100%",
        height:"100%",
        videoId: 'ERb9C1EV_TU',
        playerVars: { 'autoplay': 1, 'autohide': 1, 'rel': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      var done = true;
      function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo);
      done = true;
      }
      }
      function stopVideo() {
      player.stopVideo();
      }
      function onPlayerReady(event) {
  event.target.setVolume(2);
  event.target.playVideo();
}