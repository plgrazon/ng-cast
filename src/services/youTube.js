angular.module('video-player')
.service('youTube', function($http){
  this.search = (query, callback) => {
    let url = 'https://www.googleapis.com/youtube/v3/search';
    $http.get(url, {
      params: {
        maxResults: 5,
        q: query,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video'
      }
    }).then(function successCallback(response){
      console.log("Success!");
      
    })
  }

});
