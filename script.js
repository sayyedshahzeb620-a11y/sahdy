// FutureKitchen Animation System

document.addEventListener("DOMContentLoaded", () => {

    console.log("FutureKitchen Loaded 🚀");


    // Button animation
    const button = document.querySelector("button");

    if(button){

        button.addEventListener("click", ()=>{

            document.querySelector(".collection")
            .scrollIntoView({
                behavior:"smooth"
            });

        });

    }



    // Scroll reveal animation

    const revealElements = document.querySelectorAll(
        ".card, .features div, .why h2, .collection h2"
    );


    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });


    },{
        threshold:0.2
    });



    revealElements.forEach(element=>{

        element.style.opacity="0";
        element.style.transform="translateY(50px)";
        element.style.transition="1s ease";

        observer.observe(element);

    });


});
