import{g as d,s as l,u,i as p}from"./showToast-DD9_06Po.js";const y=function(e){for(var r="",t=0;t<e.length;t++){let a=e[t].price*4;r+=`<li id=product_${e[t].id} class="productLi"><div><p class="item-category">${e[t].category}</p>
    <img src="${e[t].image}"/>
    <h2 class="item-name">${e[t].name}</h2>
    <p class="description">${e[t].description}</p>

    <div class="price"><span class="currentPrice">₹${e[t].price}</span> <span class="originalPrice">₹${Math.trunc(a)}</span></div>
    <p style="font-size:14px;">Total Stocks Available :<span id="remQuant"> ${e[t].stock-1}</span></p>
    <div id="quantityChange"><p style="margin:0;">Quantity (Pieces)</p>
    <div class="add-sub"><button class="btnAddRem" id="addMore" style="border-right: 0.5px solid #f1ecec;">+</button>
    <span id="quantity" data-quantity="1" style="padding: 10px;">1</span><button class="btnAddRem" id="remove" style="border-left: 0.5px solid #f1ecec;">-</button></div>
    </div>
    <button class="addToCart"><span class="material-symbols-outlined">shopping_cart</span>Add To Cart</button></div></li>`}document.getElementById("productsList").innerHTML=r},g=e=>{e.forEach(function(r){r.addEventListener("click",function(t){let a=this.closest("li");a.getAttribute("id");let n=Number(a.querySelector("#quantity").innerHTML),c=parseInt(a.querySelector("#remQuant").innerHTML);switch(this.innerHTML){case"+":c>0&&(n+=1,c=c-1);break;case"-":n>1&&(n-=1,c=c+1);break}this.classList.add("list"),a.querySelector("#remQuant").innerHTML=` ${c}`,a.querySelector("#quantity").setAttribute("data-quantity",n),a.querySelector("#quantity").innerText=n})})},m=e=>{let r=d(),t=e.getAttribute("id");t=t.split("_")[1];let n=String(e.querySelector(".price .currentPrice").innerHTML);n=n.replace("₹","");const c=Number(e.querySelector("#quantity").getAttribute("data-quantity"));n=n*c;let s={id:t,quantity:c,price:n};var o=1;for(var i in r)if(r[i].id==t){r[i]=s,o=0;break}o&&(r.push(s),l(`product with id ${t} has been added to cart`)),localStorage.setItem("cartProducts",JSON.stringify(r)),u(r.length)};d();y(p);var b=document.querySelectorAll(".btnAddRem");g(b);var v=document.querySelectorAll(".addToCart");v.forEach(e=>{e.addEventListener("click",r=>{const a=r.currentTarget.closest("li");m(a)})});document.getElementById("products").addEventListener("click",function(){document.querySelector(".pop").style.display="block"});
