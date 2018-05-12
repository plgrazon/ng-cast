angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.onClickedTitle = () => {
      
    }
  },

  template: `
    <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search><h5><em>search</em></h5></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player  ><h5><em>videoPlayer</em></h5></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos"><h5><em>videoList</em></h5></video-list>
      </div>
    <div>
  </div>
  `
});
