angular.module('video-player')

.component('search', {
  controller: function() {
    this.newSearch = '';
  },

  bindings: {
    currentSearchVideo: '<',
    doSearch: '<'
  },

  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model-options="{ debounce: 500 }" ng-model="$ctrl.newSearch" ng-keyup="$ctrl.doSearch($ctrl.newSearch)" />
      <button class="btn" ng-click="$ctrl.doSearch($ctrl.newSearch)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
});
