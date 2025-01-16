let categoryFilter = document.getElementById('category-filter')
let productList = document.getElementById('product_list')

categoryFilter.addEventListener('change', function () {
    let selectedCategory = categoryFilter.value
    console.log(selectedCategory)


    let productType = document.querySelectorAll('.product')
    console.log(productType)

    productType.forEach((product) => {
        let productCategory = product.getAttribute('data-category');
        if (selectedCategory === productCategory) {
            product.style.display = "block"
        }
        else {
            product.style.display = 'none'
        }

        console.log(productCategory)
    })
})