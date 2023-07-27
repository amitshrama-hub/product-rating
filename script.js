let stars = document.querySelectorAll(".rating span")
let products = document.querySelectorAll(".rating");

for(let star of stars){
    star.addEventListener("click", function(){
        let children = star.parentElement.children;
        for(let child of children){
            if(child.getAttribute("data-clicked")){
                return false;
            }
        }
        this.setAttribute("data-clicked", "true")
        let ratings = this.dataset.rating;
        let productId = this.parentElement.dataset.productid


            console.log(productId, ratings)
    });
}


