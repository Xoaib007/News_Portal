const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then( res => res.json())
    .then( data => displayeCategories(data.data.news_category))
    // .then( data => console.log(data.data.category_id))
};

const displayeCategories = categories =>{
    console.log(categories);
    const categoryContainer = document.getElementById('category-list');
    categories.forEach(categoryName => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.innerHTML = `
        <button onclick="displayNews(${categoryName.category_id})" class="category">${categoryName.category_name}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
};
const displayNews = (catId) => {
    console.log('id-' , catId)
    const url = `https://openapi.programming-hero.com/api/news/category/0${catId}`;
    console.log(url)

    fetch (url)
    .then( res => res.json())
    .then( data => console.log(data))

}

loadCategories();