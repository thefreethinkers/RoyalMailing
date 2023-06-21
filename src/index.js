const parentElement = document.getElementById("secondSwipper");
const secondSwiper = [
  {
    title: "Ship Like a Pro",
    body: "Get access to powerful and time-saving customizable features found only in MyDHL+.",
    btn: "Create a Login and Ship",
    image:'../src/assets/images/2.jpg'
  },
  {
    title: "DHL for Business",
    body: "Get preferred rates, billing options and other great benefits of having a DHL Express account! ",
    btn: "Open an Account",
    image:'../src/assets/images/3.jpg'
  },
  {
    title: "Customs Regulatory Updates",
    body: "Stay up-to-date on important customs regulations from around the world! ",
    btn: "View Latest Updates",
    image:'../src/assets/images/4.png'
  },
  {
    title: "Not Home?  Change of Plans?",
    body: "Take control of your shipment delivery!  Decide when and where you want us to deliver.",
    btn: "Learn About Delivery Management",
    image:'../src/assets/images/5.jpg'
  },
  {
    title: "Ship with Peace of Mind",
    body: "We offer options to protect packages and documents on the way to their final destination.",
    btn: "Explore Shipment Protection Options",
    image:'../src/assets/images/6.jpg'
  },
  {
    title: "Are Batteries Included?",
    body: "Lithium and Ion Batteries are classified as Dangerous Goods. Ensure you know the rules before you ship. ",
    btn: "Understanding Dangerous Goods",
    image:'../src/assets/images/9.jpg'
  },
  {
    title: "Flexibility for Whatever You Need",
    body: " Get your shipment delivered exactly the way you want! We offer flexible additional services that cater to a variety of shipment needs.",
    btn: "Learn About Optional Services",
    image:'../src/assets/images/7.jpg'
  },
];

const divArray = secondSwiper.map((data) => {
  const divElement = document.createElement("div");
  divElement.classList.add("swiper-slide");
  divElement.innerHTML = `
      <div class='rounded-lg overflow-hidden max-w-sm mx-auto shadow-lg h-full ' >
        <div class="h-[210px]  bg-[url('')"><img class='h-full w-full object-cover object-center' src='${data.image}' /></div>
          <div class='bg-white h-[200px] flex  flex-col p-4'>
          <div class=''>
          <p class='font-bold text-lg leading-tight'>${data.title}</p>
          <p>${data.body}</p>
          </div>
            <a class="text-primary mt-auto self-end " href="#">${data.btn}</a>
          </div>
          
          
      </div>

`;
  return divElement;
});
divArray.forEach((div) => {
  parentElement.appendChild(div);
});
