
// Author: Edwin Abraham
// Student ID: 100852671
// Ḍate Completed: February 4, 2023


console.log("JS script wired up");


(function()
{

    // Display Homepage
function displayHome()
{


    let userMessage = document.getElementById("homeTitle");
    let imageElement = document.getElementById("homeImage");
    let textElement = document.getElementById("homeText");
 


    userMessage.textContent = "Welcome to LAB - 1";
    imageElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnbVFD-e0wmUxcUTftIyLj9sT2rMJDvpv-Q&usqp=CAU&w=10000&q=8000";
    imageElement.style.height = '500px';
    imageElement.style.width = '800px';
    imageElement.alt = "Welcome!";

    textElement.textContent = "This is the homepage for the Lab 1 in WEBD-CLIENT SIDE SCRIPTING. This website contains various webpages such as Contact Us, About us, and all the basic pages that are required in creating a basic website.";

    
}


// Displays Product/Interest Page
function displayProduct()
{



    // Interest 1
    let productTitle = document.createElement("h1");
    productTitle.setAttribute("id","titleOne");
    productTitle.textContent = "The Alchemist - Novel";
        
    let productImg = document.createElement("img");
    productImg.setAttribute("id","imageOne")
    productImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZDEux3nNZlROFGdf3_gy1a3MpF8gIQM4VA&usqp=CAU";
        
    let productParagraph = document.createElement("p");
    productParagraph.setAttribute("id", "paraOne");
    productParagraph.textContent = "\nCombining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago\'s journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life\'s path, and, most importantly, following our dreams.";

    let productContent = document.getElementById("product");
    
    productContent.appendChild(productTitle);
    productContent.appendChild(productImg); 
    productContent.appendChild(productParagraph);





    // Interest 2
    let productTitle2 = document.createElement("h1");
    productTitle2.setAttribute("id","titleTwo");
    productTitle2.textContent = "Friends - TV Show";
        
    let productImg2 = document.createElement("img");
    productImg2.setAttribute("id","imageTwo")
    productImg2.src = "https://media.gettyimages.com/id/138425601/photo/matthew-perry-as-chandler-bing-jennifer-aniston-as-rachel-green-david-schwimmer-as-ross-geller.jpg?s=612x612&w=gi&k=20&c=Q1snHC9GtLiDVZ6I_r-2Zp-CKpNNi4a_9RUkjW9NZ4o=";

    let productParagraph2 = document.createElement("p");
    productParagraph2.setAttribute("id", "paraTwo");
    productParagraph2.textContent = "\nFriends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. Rachel Green (Jennifer Aniston), a sheltered but friendly woman, flees her wedding day and wealthy yet unfulfilling life and finds childhood friend Monica Geller (Courteney Cox), a tightly wound but caring chef. Rachel becomes a waitress at West Village coffee house Central Perk after she moves into Monica's apartment above Central Perk and joins Monica's group of single friends in their mid-20s: previous roommate Phoebe Buffay (Lisa Kudrow), an eccentric masseuse and musician; neighbor Joey Tribbiani (Matt LeBlanc), a dim-witted yet loyal struggling actor and womanizer; Joey's roommate Chandler Bing (Matthew Perry), a sarcastic, self-deprecating data processor; and Monica's older brother and Chandler's college roommate Ross Geller (David Schwimmer), a sweet-natured but insecure paleontologist. Episodes depict the friends' comedic and romantic adventures and career issues.";

    let productContent2 = document.getElementById("product2");
    
    productContent2.appendChild(productTitle2);
    productContent2.appendChild(productImg2); 
    productContent2.appendChild(productParagraph2);
 




    // Interest 3
    let productTitle3 = document.createElement("h1");
    productTitle3.setAttribute("id","titleThree");
    productTitle3.textContent = "Charlie Puth - Artist";
        
    let productImg3 = document.createElement("img");
    productImg3.setAttribute("id","imageThree")
    productImg3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Pv6ZStev6vy59dN3PVAno0HiEmk_OOUnDg&usqp=CAU";

    let productParagraph3 = document.createElement("p");
    productParagraph3.setAttribute("id", "paraThree");
    productParagraph3.textContent = "\nCharles Otto Puth Jr. (born December 2, 1991) is an American singer, songwriter, and record producer. His initial exposure came through the viral success of his song videos uploaded to YouTube. After initially signing with eleven-eleven after performing on The Ellen DeGeneres Show, Puth began contributing to songs and albums for other artists such as Cody Simpson, Livingston Taylor, and Skizzy Mars; as well as creating lite solo material and covers of popular songs. With primary intent on a solo career, Atlantic Records eventually sought the artist and released his debut single, Marvin Gaye featuring Meghan Trainor in 2015 to unanimous success. Coinciding with the single came his first feature, \"See You Again\", which he co-wrote, co-produced, and performed with Wiz Khalifa for the Furious 7 soundtrack as a tribute to Paul Walker. It peaked at number one on the US Billboard Hot 100 for 12 non-consecutive weeks. After the success of \"See You Again\", he gained worldwide recognition for multiple subsequent releases, including his next single \"One Call Away\". The single reached number 12 on the Billboard Hot 100, and topped charts in New Zealand, the Republic of Ireland, and the United Kingdom.";

    let productContent3 = document.getElementById("product3");
    
    productContent3.appendChild(productTitle3);
    productContent3.appendChild(productImg3); 
    productContent3.appendChild(productParagraph3);
 
}




// Display Service Page

function DisplayService()
{
    console.log("Service Page");

    let DocumentBody = document.body;
    let serviceDetails = document.createElement("serviceDetails");




// HTML Code for service page
    let serviceDetailsHTML = `<table id="service" >
    <tr>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">Web Designing</h2>
        </th>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">Security Testing</h2>
        </th>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">Support & Maintenance</h2>
        </th>
    </tr>

    <tr>
        <td align="center"><img src= "https://www.cloudways.com/blog/wp-content/uploads/20-Best-Web-Design-Tools-for-Design-Agencies.jpg" width="300" height="200"></td>
        <td align="center"><img src= "https://www.edureka.co/blog/wp-content/uploads/2019/08/Security-Testing-1-300x279.png" width="250" height="200">></td>
        <td align="center"><img src= "https://fingerprintmarketing.com/wp-content/uploads/2022/09/how_often_to_maintain_website-1024x1024.png" width="200" height="200"></td>
    </tr>
    <tr>
        <td align="center">
            <h6 style="margin-left: 100px;">
                We specialize in designing the best websites. It usually refers to the user experience aspects of website development rather than software development. We would make sure the site is elegant, and user friendly.
            </h6>
        </td>
        <td align="center">
            <h6 style="margin-left: 100px;">
                 We provide security testing to ensure your websites are safe to use and are free from flaws that could cause data leaks or affect the websites integrity.
            </h6>
        </td>
        <td align="center">
            <h6 style="margin-left: 100px;">
                Our services also include support and maintenance such as regularly updates, security checks, analytics, data backups, etc.
            </h6>
        </td>
    </tr>

    </table>`;
     

    serviceDetails.setAttribute("class", "container");
    




    // Adding resume link 
    let resumeFile = document.createElement("a");
    resumeFile.setAttribute("id", "Resume");
    var link = document.createTextNode("*Link to my Resume*")
    // resumeFile.textContent = "https://drive.google.com/file/d/1NnJjQTqvpN7Yvv4nSJO61-ZjGDH6sjus/view?usp=sharing";
    resumeFile.appendChild(link);
    resumeFile.title = "This is link.";
    resumeFile.href = "https://drive.google.com/file/d/1NnJjQTqvpN7Yvv4nSJO61-ZjGDH6sjus/view?usp=sharing";

    // let serviceContent = document.getElementById("about");
    
    serviceDetails.innerHTML = serviceDetailsHTML;
    DocumentBody.appendChild(resumeFile);
    DocumentBody.appendChild(serviceDetails);
    
}




// Displays About Us Page

function displayAbout()
{
    
    let aboutTitle = document.createElement("h1");
    aboutTitle.setAttribute("id","titleOne");
    aboutTitle.textContent = "About Me";
        
    let aboutImg = document.createElement("img");
    aboutImg.setAttribute("id","imageOne")
    aboutImg.src = "https://lh3.googleusercontent.com/LTeAMnVM5sFFombtEWbiWStjIY2W_YvEyE-PtJ7IyXvSmTPjIGEmSl2w1590KQbX55RM6R99D880bKOsspKV2UJPvgoV3fpMIJxG_Wy-";
        
    let aboutParagraph = document.createElement("p");
    aboutParagraph.setAttribute("id", "paraOne");
    aboutParagraph.textContent = "\n My name is Edwin Abraham and i\'m an International student hailing from India. I enjoy my free time mostly watching movies and TV shows." + 
    "\nAnother hobby of mine is that I love to play all kinds of video games such as Assassin's Creed, Among Us, etc. A physical game I enjoy is Badminton, it's fun and also lets me exercise once in a while ;).  ";
    
    let resumeFile = document.createElement("a");
    resumeFile.setAttribute("id", "Resume");
    var link = document.createTextNode("*Link to my Resume*")
    // resumeFile.textContent = "https://drive.google.com/file/d/1NnJjQTqvpN7Yvv4nSJO61-ZjGDH6sjus/view?usp=sharing";
    resumeFile.appendChild(link);
    resumeFile.title = "This is link.";
    resumeFile.href = "https://drive.google.com/file/d/1NnJjQTqvpN7Yvv4nSJO61-ZjGDH6sjus/view?usp=sharing";

    let aboutContent = document.getElementById("about");
    

    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutImg); 
    aboutContent.appendChild(aboutParagraph);
    aboutContent.appendChild(resumeFile);
}



// Contact Us Page

function displayContact()
{

    // Redirecting to home page after page submission
    function timedRedirect(e){
        let firstName = document.getElementById('InputFirstName').value;
        let lastName = document.getElementById('InputLastName').value;
        let contactEmail = document.getElementById('InputEmail').value;
        let contactPassword = document.getElementById('InputPassword').value;
        let message = document.getElementById('InputShortMessage').value;
        console.log("Name: " + firstName + " " + lastName +"\nEmail: " + contactEmail + "\nPassword: " + contactPassword + "\nMessage: " + message);
        e.preventDefault();
        setTimeout(function () {
            window.location.href = "index.html";
        }, 3000);
    }

    let submitButton = document.getElementById('submit-button');
    if (submitButton){
        submitButton.addEventListener('click', timedRedirect, false);
    }
        
}

// Function loading the whole website
    
function LAB1()
    {
        //Products link to Interests
        document.querySelectorAll("nav ul li a")[1].innerHTML = '<i class="fa fa-code"></i>Interests';
        

        document.body.style.backgroundImage = "URL(https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?w=2000)";

        //Creating footer
        let mainContent = document.querySelector("main");
        console.log(mainContent);

        // HTML for footer
        let footer = document.createElement("footer");
        footer.innerHTML = `        
        <nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i> Edwin's Lab, 2023.</p>
        </nav>
        `;

        if (document.getElementsByTagName('main') != null) {
            document.body.appendChild(footer);
            console.log(footer);
        }
        
        
        // Creating link for Human resources page
        const navLinkItem = document.createElement("li");
        navLinkItem.classList.add("nav-item");
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.setAttribute("href", "human-resources.html")
        navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
        navLinkItem.appendChild(navLink);
    
        document.querySelectorAll("nav ul li")[3].after(navLinkItem)

        // Switch-Case that works depending title of the page.

              switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Product":
              displayProduct();
            break;
          case "Service":
              DisplayService();
            break;
          case "Contact":
              displayContact();
            break;
        }        
    }
    window.addEventListener("load", LAB1);

})();

