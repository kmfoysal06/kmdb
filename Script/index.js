let categories = [];

// Tab section

const handleCategory = async () => {

  const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  categories = data.data;

  const categoryContainer = document.getElementById("category-container");

  categories.slice(0, 4).forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <button onclick="handleLoadPost('${category.category_id}')" class="tab mx-1 rounded-lg text-center active:bg-primary active:text-white focus:bg-primary focus:text-white transition-colors duration-200">${category.category}</button>
    `;
    categoryContainer.appendChild(div);
  });
};


// Post section

const handleLoadPost = async (postId) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${postId}`);

  const data = await response.json();
  categories = data.data;

  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';

  const cardContainer2 = document.getElementById('card-container2');
  cardContainer2.innerHTML = '';

  if (Array.isArray(categories) && categories.length > 0) {
    categories.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
          <figure><img class="w-80 h-52" src="${post?.thumbnail}" alt="Loading"  /> 
          
          <div class="absolute  mt-40 ml-32 text-white text-xs  font-bold bg-black bg-opacity-50">
          ${convertTime(post?.others?.posted_date ? post?.others?.posted_date : '' )}
        </div>
          
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4">
              <img class="w-10 h-10 rounded-full" src="${post?.authors[0]?.profile_picture}" alt="">
              <span class="font-bold text-base">${post?.title}</span>
            </div>
            <div class="flex items-center gap-4 mx-14">
              <h2 class="font-normal text-sm">${post?.authors[0]?.profile_name}</h2>
              ${post?.authors[0]?.verified ? '<img src="./images/fi_10629607.svg" alt="">' : ''}
            </div>
            <div class="card-actions mx-14">
              <p>${post?.others?.views} Views</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.appendChild(div);

      function convertTime(seconds) {
         if ( seconds === '') {
          return '';
        } 
      
        const hours = Math.floor(seconds / 3600);
        const Seconds = seconds % 3600;
        const minutes = Math.floor(Seconds / 60);
      
        return `${hours} hours ${minutes} minutes ago`;
      }
    


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
  const sortedCategories = [...categories].sort((a, b) => parseInt(b.others.views) - parseInt(a.others.views));
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';

  if (Array.isArray(sortedCategories)) {
    sortedCategories.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
          <figure><img class="w-80 h-52" src="${post?.thumbnail}" alt="Loading" />
        
          <div class="absolute  mt-40 ml-32 text-white text-xs  font-bold bg-black bg-opacity-50">
          ${convertTime(post?.others?.posted_date ? post?.others?.posted_date  : '' )}
        </div>
          
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4">
              <img class="w-10 h-10 rounded-full" src="${post?.authors[0]?.profile_picture}" alt="">
              <span class="font-bold text-base">${post?.title}</span>
            </div>
            <div class="flex items-center gap-4 mx-14">
              <h2 class="font-normal text-sm">${post?.authors[0]?.profile_name}</h2>
              ${post?.authors[0]?.verified ? '<img src="./images/fi_10629607.svg" alt="">' : ''}
            </div>
            <div class="card-actions mx-14">
              <p>${post?.others?.views} Views</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.appendChild(div);

      function convertTime(seconds) {
        if ( seconds === '') {
         return '';
       } 
     
       const hours = Math.floor(seconds / 3600);
       const Seconds = seconds % 3600;
       const minutes = Math.floor(Seconds / 60);
     
       return `${hours} hours ${minutes} minutes ago`;
     }
    });
  }
};

shortBtn.addEventListener('click', btnHandler);



handleCategory();
handleLoadPost(1000);