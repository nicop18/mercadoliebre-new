window.addEventListener('load', function() {





    let latest = document.getElementById('latest-products')
    
    
    
    
    
    fetch("http://localhost:3000/api/products/latest").then(function(response){
    
    return response.json();
    }).then(function(data){
       
        
        
         if (data.data.length > 0) { 
    
            data.data.forEach(product => { 
    
                let price = (product.price - (product.price * product.discount / 100))
    
                latest.innerHTML += `
    
                <div class="col-12 col-sm-6 col-lg-3">
                    <section class="product-box">
                        <a href="/products/detail/`+ product.id + `"><figure class="product-box_image"> <img src="/images/products/`+ product.image + `"alt="` + product.name + 
                            `"></figure>
                            <article class="product-box_data">
                            <h2>$` + price +`</h2>
                            <span>`+ product.discount + `% OFF</span>
                            <p>`+ product.name +`</p>
                                <i class="fas fa-truck"></i>
                            </article>
                        </a>
                    </section>
                </div>`
                
            })
         } else { 
                    latest.innerHTML += `
    
                    <div class="col-12">
                    <h2 class="noproducts">Aún se encontraron productos</h2>
                    </div>`
                }
        })       
    