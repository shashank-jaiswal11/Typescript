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
            var containerE1 = document.querySelector('#container');
            var u1E1 = document.createElement('ul');
            containerE1.innerHTML = null;
            this.list.forEach(function (item) {
                var liE1 = document.createElement('li');
                liE1.textContent = item.name;
                u1E1.appendChild(liE1);
            });
            containerE1.appendChild(u1E1);
        };
        return SearchResult;
    }());
    new SearchResult(users).renderList();
    var myInput = document.querySelector('input');
    myInput.addEventListener('keyup', function (e) {
        var inputE1 = e.target;
        var inputval = inputE1.value;
        var filtereduser = users.filter(function (u) { return u.name.includes(inputval); });
        new SearchResult(filtereduser).renderList();
    });
})();
