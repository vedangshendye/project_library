const myLibrary = [];

function Book(name,author,id,price) {
    this.name=name;
    this.author=author;
    this.id=id;
    this.price=price;
  
}

function addBookToLibrary(name,author,price) 
{
  let id=crypto.randomUUID();
  id=String(id);
  let newbook= new Book(name,author,id,price);
  myLibrary.push(newbook);

  alert(`${name} added successfully to library`);
  let container=document.querySelector(".container");
  
  let mybook=document.createElement("div");
        mybook.className="item";

        let mytitle=document.createElement("h2");
        mytitle.textContent=name;
        mybook.appendChild(mytitle);

        let myauthor=document.createElement("h3");
        myauthor.textContent=`By ${author}`;
        mybook.appendChild(myauthor);

        let myid=document.createElement("p");
        myid.textContent=`ID: ${id}`;
        mybook.appendChild(myid);

        let delbtn=document.createElement("button");
        delbtn.textContent="Delete book";
        //delbtn.addEventListener("click",mydelete(id)); //
        mybook.appendChild(delbtn);


        container.appendChild(mybook);

}

function showBooks()
{
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<myLibrary.length;i++)
    {
        let mybook=document.createElement("div");
        mybook.className="item";

        let mytitle=document.createElement("h2");
        mytitle.textContent=myLibrary[i].name;
        mybook.appendChild(mytitle);

        let myauthor=document.createElement("h3");
        myauthor.textContent=`By ${myLibrary[i].author}`;
        mybook.appendChild(myauthor);

        let myid=document.createElement("p");
        myid.textContent=`ID: ${myLibrary[i].id}`;
        mybook.appendChild(myid);

        let delbtn=document.createElement("button");
        delbtn.textContent="Delete book";
        //delbtn.addEventListener("click",mydelete(id)); //
        mybook.appendChild(delbtn);


        container.appendChild(mybook);
    }
}


function mydelete(id)
{
    let i=0;
    for(i=0;i<myLibrary.length;i++)
    {
        if(myLibrary[i].id==id)
        {
            break;
        }
    }
    myLibrary.splice(i,1);
    showBooks();
}

function verify()
{
    alert("verify entered");
    let nameinp=document.querySelector("#textinp");
    let authorinp=document.querySelector("#autinp");
    let priceinp=document.querySelector("#cost");
    if(nameinp.value.trim()=="")
    {
        alert("Enter name please");
        return;
    }
    if(authorinp.value.trim()=="")
    {
        alert("Enter authorname please");
        return;
    }
    if(priceinp.value.trim()=="")
    {
        alert("enter price please");
        return;
    }
    addBookToLibrary(nameinp.value,authorinp.value,priceinp.value);
    showBooks();
    let formcont=document.querySelector(".addbook");
    formcont.innerHTML="";
    let addbtn=document.createElement("button");
    addbtn.id="addbtn";
    addbtn.textContent="Add a book";
    addbtn.addEventListener("click",useraddbook);
    formcont.appendChild(addbtn);
}
function useraddbook()
{
    let formcont=document.querySelector(".addbook");
    formcont.innerHTML="";
    let myform=document.createElement("form");

    let nameinp=document.createElement("input");
    nameinp.type="text";
    nameinp.placeholder="Enter the name of book";
    nameinp.id="textinp";
    myform.appendChild(nameinp);
    formcont.appendChild(myform);

    let authorinp=document.createElement("input");
    authorinp.type="text";
    authorinp.placeholder="Enter the name of the author";
    authorinp.id="autinp";
    myform.appendChild(authorinp);

    let priceinp=document.createElement("input");
    priceinp.type="number";
    priceinp.placeholder="enter price";
    priceinp.id="cost";
    myform.appendChild(priceinp);

    let subbut=document.createElement("button");
    subbut.type="button";
    subbut.textContent="Submit";
    subbut.addEventListener("click",verify);
    myform.appendChild(subbut);
}

// let formcont=document.querySelector(".addbook");
let addbtn=document.querySelector("#addbtn");
addbtn.addEventListener("click",useraddbook);

addBookToLibrary("Da vinci code","Dan brown",1249);
addBookToLibrary("Sapiens","Yual Harari",900);

showBooks();
showBooks();
alert("books were shown");
addBookToLibrary("Icon","Fredrich Forsyth",700);

