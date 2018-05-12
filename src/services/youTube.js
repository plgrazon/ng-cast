angular.module('video-player')
  .service('youTube', function($http){

    this.search = function(query, callback){
      let url = 'https://www.googleapis.com/youtube/v3/search';
      $http.get(url, {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true
        }
      }).then(function (response){
        console.log('success', response);
        callback(response)
      })
    }
});
