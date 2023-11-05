let categories = [];

// Tab section
let page = 1;
let pageNoP = document.querySelector(".page-no");
let nextPageBtn = document.querySelector(".next-page-btn");
let prevPageBtn = document.querySelector(".prev-page-btn");
nextPageBtn.addEventListener("click",(e)=>{
  if(page === 1){
    prevPageBtn.disabled = true;
  }else{
    prevPageBtn.disabled = false;
  }
  page ++;
  handleLoadPost(e.target.id,page);
})
prevPageBtn.addEventListener("click",(e)=>{
  if(page === 1){
    prevPageBtn.disabled = true;
  }else{
    prevPageBtn.disabled = false;
  }
  page --;
  handleLoadPost(e.target.id,page);
})
const handleCategory = async () => {

  categories = [{
    category:"Action",
    id:28
  },
  {
    category:"Comedy",
    id:35
  },
   {
    category:"Horror",
    id:27
  },
   {
    category:"Adventure",
    id:12
  },
  ];

  const categoryContainer = document.getElementById("category-container");

  categories.slice(0, 4).forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <button onclick="handleLoadPost('${category.id}','${page}')" class="tab mx-1 rounded-lg text-center active:bg-primary active:text-white focus:bg-primary focus:text-white transition-colors duration-200">${category.category}</button>
    `;
    categoryContainer.appendChild(div);
  });
};


// Post section

const handleLoadPost = async (postId,page) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bab42df8cfdaa259b0245a26fd039f95&page=${page}&with_genres=${postId}&per_page=10`);

  const data = await response.json();
  categories = data.results;

  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
console.log(categories)
  const cardContainer2 = document.getElementById('card-container2');
  cardContainer2.innerHTML = '';
// ${convertTime(post?.others?.posted_date ? post?.others?.posted_date : '' )}
  if (categories.length > 0) {
    categories.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
          <figure><img class="w-80" src="https://image.tmdb.org/t/p/w500/${post?.poster_path}" alt="Loading"  /> 
          
          <div class="absolute  mt-40 ml-32 text-white text-xs  font-bold bg-black bg-opacity-50">
         ${post?.release_date}
        </div>
          
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4">
              <span class="font-bold text-base">${post?.title}</span>
            </div>
            <div class="flex items-center gap-4 mx-14">
              <h2 class="font-normal text-sm"></h2>
            </div>
            <div class="card-actions mx-14">
              <p>popularity ${post?.popularity}</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.appendChild(div);
      pageNoP.textContent = `Page No ${page}` ;
      nextPageBtn.id = postId;
    


    });
  }
  else {
    cardContainer2.innerHTML = `
    <div  class="flex justify-center flex-col text-center items-center">
    <img class="w-36 h-36" src="./images/Icon.png" alt="">
    <br>
    <p class="text-4xl font-bold text-center ">Oops!! Sorry, There is no <br> content here</p>
    
    </div>
    `;
  }
};

const shortBtn = document.getElementById('sortBtn');

const btnHandler = () => {
  const sortedCategories = [...categories].sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';

  if (Array.isArray(sortedCategories)) {
    sortedCategories.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
       <div class="card card-compact bg-base-100 shadow-xl">
          <figure><img class="w-80" src="https://image.tmdb.org/t/p/w500/${post?.poster_path}" alt="Loading"  /> 
          
          <div class="absolute  mt-40 ml-32 text-white text-xs  font-bold bg-black bg-opacity-50">
         ${post?.release_date}
        </div>
          
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4">
              <span class="font-bold text-base">${post?.title}</span>
            </div>
            <div class="flex items-center gap-4 mx-14">
              <h2 class="font-normal text-sm"></h2>
            </div>
            <div class="card-actions mx-14">
              <p>popularity ${post?.popularity}</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.appendChild(div);

    });
  }
};

shortBtn.addEventListener('click', btnHandler);



handleCategory();
handleLoadPost(' ','1');