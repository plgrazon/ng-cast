angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    //this.video = window.exampleVideoData[0];
    //this.videoURL = 'https://www.youtube.com/embed/' + this.video.id.videoId;
  },

  bindings: {
    videos: '<',
    changeCurrentVideo: '<',
    currentVideo: '<'
  },

  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" ng-src="{{'https://www.youtube.com/embed/' + $ctrl.currentVideo.id.videoId}}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>{{ $ctrl.currentVideo.snippet.title }}</h3>
        <div>{{ $ctrl.currentVideo.snippet.description }}</div>
      </div>
    </div>
  `
});
