angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    youTube.search();
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    
    this.changeCurrentVideo = (inputVideo) => {
      // console.log(this)
      this.currentVideo = inputVideo;
    };

    this.currentSearchVideo = (searchResults) => {
      this.videos = searchResults;
      this.currentVideo = searchResults[0];
    }
  },

  template: `
    <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search current-search-video="$ctrl.currentSearchVideo"><h5><em>search</em></h5></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player current-video="$ctrl.currentVideo"><h5><em>videoPlayer</em></h5></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos" change-current-video="$ctrl.changeCurrentVideo"><h5><em>videoList</em></h5></video-list>
      </div>
    <div>
  </div>
  `
});
