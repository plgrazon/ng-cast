angular.module('video-player')
.component('videoList', {
  controller: function () {

  },

  bindings: {
    videos: '<',
    changeCurrentVideo: '<'
  },

  template: `
    <ul class="video-list">
      <video-list-entry
        video="video"
        change-current-video="$ctrl.changeCurrentVideo"
        ng-repeat="video in $ctrl.videos track by $index"
        /><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
    </ul>
  `

});
