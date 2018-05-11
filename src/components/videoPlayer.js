angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    this.video = window.exampleVideoData[0];
  },
  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" ng-src="https://www.youtube.com/embed/1w8Z0UOXVaY" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>{{ $ctrl.video.snippet.title }}</h3>
        <div>{{ $ctrl.video.snippet.description }}</div>
      </div>
    </div>
  `
});
