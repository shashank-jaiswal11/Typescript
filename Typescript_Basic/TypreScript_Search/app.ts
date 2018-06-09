(function(){
    interface Iuser{
        name:string;
        age:number
    }
    const users: Array<Iuser> = [
        {
              name:"Rajnikanth",
        age:20
    },
    {
         name:'vijay',
        age:21
    }
    ];

    class SearchResult {
        constructor( public list: Array<Iuser>){

        }
        renderList(){

        }
    }
    new SearchResult(users).renderList();
})()

