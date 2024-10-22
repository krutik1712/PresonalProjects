// Get the Information

let users = [
    {
        proPic: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1617644569393-7b96498e5695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        pendingMessage: 5,
        location: "Nagpur, Maharashtra",
        name: "Ruchita",
        age: 21,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music",
            },
            {
                icon: `<i class="ri-pen-nib-fill"></i>`,
                interest: "writting",
            },
            {
                icon: `<i class="ri-road-map-fill"></i>`,
                interest: "travelling",
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi recusandae, fugiat fugit mollitia reiciendis?",
        isFriend: null
    },
    {
        proPic: "https://images.unsplash.com/photo-1625585445301-676203ae67fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
        displayPic: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        pendingMessage: 6,
        location: "Odisha, India",
        name: "Rohit",
        age: 24,
        interests: [
            {
                icon: `<i class="ri-boxing-fill"></i>`,
                interest: "boxing",
            },
            {
                icon: `<i class="ri-book-open-fill"></i>`,
                interest: "reading",
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi recusandae, fugiat fugit mollitia reiciendis?",
        isFriend: null
    },
    {
        proPic: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1627215635153-9a450b0e0d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        pendingMessage: 4,
        location: "Ratnagiri, Maharashtra",
        name: "Monica",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-knife-line"></i>`,
                interest: "chief",
            },
            {
                icon: `<i class="ri-stethoscope-line"></i>`,
                interest: "doctor",
            },
            {
                icon: `<i class="ri-camera-3-fill"></i>`,
                interest: "photographer",
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi recusandae, fugiat fugit mollitia reiciendis?",
        isFriend: null
    },
    {
        proPic: "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingMessage: 8,
        location: "Delhi, India",
        name: "Jhon",
        age: 24,
        interests: [
            {
                icon: `<i class="ri-plane-line"></i>`,
                interest: "pilot",
            },
            {
                icon: `<i class="ri-run-fill"></i>`,
                interest: "runner",
            },
            {
                icon: `<i class="ri-live-line"></i>`,
                interest: "reeler",
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi recusandae, fugiat fugit mollitia reiciendis?",
        isFriend: null
    },
];

function select(element) {
    return document.querySelector(element);
};

let curr = 0;
let isAnimation = false;

function setData(index) {
    select(".prflimg img").src = users[index].proPic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function(interest) {
        clutter += `<div class="tag flex gap-3 items-center bg-white/30 px-3 py-1 rounded-full">
                        ${interest.icon}
                        <h3 class="text-md tracking-tight capitalize">${interest.interest}</h3>
                    </div>`
    });
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".upcomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);

    curr = 2;
})();

function changeImg() {
    if (!isAnimation) {
        isAnimation = true;
        let tl = gsap.timeline({
            onComplete: function() {
                isAnimation = false;
                let main = select(".maincard");
                let upcoming = select(".upcomingcard");
    
                upcoming.classList.remove("z-[2]");
                upcoming.classList.add("z-[3]");
                upcoming.classList.remove("upcomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]")
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if (curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                upcoming.classList.add("maincard");
                main.classList.add("upcomingcard");
            }
        });
    
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9,
        }, "start")
        .from(".upcomingcard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1,
        }, "start")
    }
};

let reject = select(".reject");
let accept = select(".accept");

reject.addEventListener("click", function(){
    changeImg();
    setData(curr-1);
    gsap.from(".details .commonclassname", {
        y: "100%",
        stagger: .07,
        ease: Power4.easeInOut,
        duration: 1.3
    })
});

accept.addEventListener("click", function(){
    changeImg();
    setData(curr-1);
    gsap.from(".details .commonclassname", {
        y: "100%",
        stagger: .07,
        ease: Power4.easeInOut,
        duration: 1.3
    })
});

(function containerCreator() {
    document.querySelectorAll(".commonclassname")
    .forEach(function (commonclassname) {
        let div = document.createElement("div");
        div.classList.add(`${commonclassname.classList[1]}container`, 'overflow-hidden');
        div.appendChild(commonclassname);
        select(".details").appendChild(div);
    })
}) ();