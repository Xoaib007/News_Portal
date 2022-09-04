const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => displayeCategories(data.data.news_category));
  };
  
  const displayeCategories = (categories) => {
    toggleSpinner(false);
    const categoryContainer = document.getElementById("category-list");
    categories.forEach((categoryName) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category1");
      categoryDiv.innerHTML = `
          <button onclick="loadNews(${categoryName.category_id})" class="category border-none">${categoryName.category_name}</button>
          `;
      categoryContainer.appendChild(categoryDiv);
    });
  };
  
  const loadNews = (catId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${catId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayNews(data.data))
      .then ((data) => newsCount(data))
  };


  
  const displayNews = (allNews) => {
    toggleSpinner(true);
    const newsContainer = document.getElementById("all-news");
    newsContainer.innerText = "";
    allNews.forEach((news) => {
      toggleSpinner(true);
      const newsDiv = document.createElement("div");
      toggleSpinner(false);
      newsDiv.classList.add("newses");
      newsDiv.innerHTML = `
        
            <div>
              <div class="card flex-sm-column mb-3 mt-5 ms-5" style="width: 1200px;">
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src="${
                            news.thumbnail_url
                          }" class="img-fluid m-3 rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">${news.title}</h5>
                              <p class="card-text">${news.details.slice(
                                0,
                                500
                              )}</p>
                              <section>
                                  <div class="d-flex justify-content-around">
                                      
                                      <div >
                                          <p>${news.author.name}</p>
                                          <p>${news.author.published_date}</p>
                                      </div>
                                      <div>
                                          <i class="fa-solid fa-eye"></i>
                                          <p>${news.total_view}</p>
                                      </div>
                                      <div>
                                          <button type="button" onclick="loadNewsDetails('${
                                            news._id
                                          }')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                          View Details
                                          </button>
                                      </div>
                                  </div>
                              </section>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        `;
      newsContainer.appendChild(newsDiv);
    });
    toggleSpinner(false);
  };

  
  
  const toggleSpinner = (isLoading) => {
    const loaderSection = document.getElementById("spinner");
    if (isLoading) {
      loaderSection.classList.remove("d-none");
    } else {
      loaderSection.classList.add("d-none");
    }
<<<<<<< HEAD
  };
  
  const loadNewsDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
=======
    else{
        loaderSection.classList.add('d-none');
    }
}


const loadNewsId = () => {
    console.log('id-' , catId1)
    const url = `https://openapi.programming-hero.com/api/news/category/0${n++}`;
    console.log(url)

    fetch (url)
    .then( res => res.json())
    .then( data => loadNewsDetails(data.data._id))
};

const loadNewsDetails = async id =>{
    const url =`https://openapi.programming-hero.com/api/news/${id}`;
    console.log(url);
>>>>>>> a55b56ecfd42e26d6bcf01cd09be3e8da46afb40
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
  };
  
  const displayNewsDetails = (news1) => {
    const modalContainer = document.getElementById(`modalBody`);
    modalContainer.textContent = "";
    news1.forEach((modal) => {
      console.log(modal);
      const div = document.createElement("div");
      div.innerHTML = `
              <div>
              <img width="300px" src=${modal.image_url} alt="">
              <p>Author: ${modal.author.name}</p>
               <h6 class="card-title">${modal.title}</h6>
               <p class="card-text">${modal.details}</p>
            </div>
     `;
      modalContainer.appendChild(div);
    });
  };
  
  loadCategories();
  loadNews();
  loadNewsDetails();