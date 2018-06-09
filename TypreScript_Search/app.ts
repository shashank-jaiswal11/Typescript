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
const containerE1: HTMLDivElement = document.querySelector('#container') as HTMLDivElement;
const u1E1: HTMLUListElement = document.createElement('ul') ;
containerE1.innerHTML=null;
this.list.forEach((item: Iuser) =>{
    const liE1= document.createElement('li');
    liE1.textContent= item.name;
    
    u1E1.appendChild(liE1);


});
containerE1.appendChild(u1E1);
        }
    }
    new SearchResult(users).renderList();

    const myInput: HTMLInputElement= document.querySelector('input');
    myInput.addEventListener('keyup',(e:KeyboardEvent) => {
        const inputE1 : HTMLInputElement = e.target as HTMLInputElement;
        const inputval= inputE1.value;
        const filtereduser: Array<Iuser> = users.filter((u:Iuser )=> u.name.includes(inputval))

        new SearchResult(filtereduser).renderList();
    });
})()

