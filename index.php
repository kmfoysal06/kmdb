<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KMDB Movie Verse</title>

    <link rel="shortcut icon" href="./images/play.png" type="image/x-icon">

    <!-- Daisy  -->

    <link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.4/dist/full.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .card-body:hover .card-body-hover{
            transform: scale(1)!important;
        }
        .card-body-hover{
            transform: scale(0);
            transition: 0.3s;
        }
    </style>

    <!-- Tailwind Script -->

    <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: '#FF1F3D',
              }
            }
          }
        }
      </script>

</head>

<body>

    <header>

        <nav class="container mx-auto">
          
            <div class="navbar bg-base-100 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           <a class="btn text-white bg-primary hover:bg-primary " href="https://www.themoviedb.org/" target="_blank">MAIN</a>
                        </ul>
                      </div>

                    <a class="btn btn-ghost normal-case text-xl"><h3 class="">KMDB</h3></a>
                </div>
                <div class="navbar-end hidden lg:flex ">
                    <a class="btn text-white bg-primary hover:bg-primary " href="https://www.themoviedb.org/" target="_blank">MAIN</a>
                </div>
            </div>
        </nav>


    </header>

    <hr>
    <main>

          <div class="category-container w-full">
            <div class="tabs p-5 w-full md:w-96 m-auto text-center flex justify-center" id="category-container">

              </div>
        </div>


        <div id="card-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">

        </div>

        <div id="card-container2" class=" my-12  container mx-auto">

        </div>


    </main>

    <footer>
         <div class="flex justify-center">
             <button class="btn text-white bg-primary hover:bg-primary prev-page-btn">PREVIOUS PAGE</button>
             <button class="btn text-white bg-primary hover:bg-primary next-page-btn">NEXT PAGE</button>
         </div>
        <p class="page-no text-center bg-gray-200 p-2"></p>
    </footer>

      


    <script src="./Script/index.js"></script>
</body>

</html>