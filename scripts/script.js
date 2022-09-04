const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then( res => res.json())
    .then( data => displayeCategories(data.data.news_category))
};

const displayeCategories = categories =>{
    const categoryContainer = document.getElementById('category-list');
    categories.forEach(categoryName => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category1');
        categoryDiv.innerHTML = `
        <button onclick="loadNews(${categoryName.category_id})" class="category">${categoryName.category_name}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
};

const loadNews = (catId) => {
    console.log('id-' , catId)
    const url = `https://openapi.programming-hero.com/api/news/category/0${catId}`;
    console.log(url)

    fetch (url)
    .then( res => res.json())
    .then( data => displayNews(data.data))
};

const displayNews = allNews =>{
    console.log(allNews)
    const newsContainer = document.getElementById('all-news');
    allNews.forEach( news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('newses');
        newsDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details}</p>
                            <section>
                                <div class="d-flex">
                                    
                                    <div >
                                        <p>${news.author.name}</p>
                                        <p>${news.author.published_date}</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-eye"></i>
                                        <p>${news.total_view}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        `
        newsContainer.appendChild(newsDiv);
    })
}

loadCategories();

loadNews();
{/* <img src="${news.author.img}" class="author-image" alt=""></img> */}