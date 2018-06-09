(function () {
    var users = [
        {
            name: "Rajnikanth",
            age: 20
        },
        {
            name: 'vijay',
            age: 21
        }
    ];
    var SearchResult = /** @class */ (function () {
        function SearchResult(list) {
            this.list = list;
        }
        SearchResult.prototype.renderList = function () {
        };
        return SearchResult;
    }());
    new SearchResult(users).renderList();
})();
