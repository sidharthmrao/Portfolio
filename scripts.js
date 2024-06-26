let default_active = "about";
let current_active = "about";

let projects_list = {
    autoboard: {
        "name": "AutoBoard",
        "org": "Choate Robotics",
        "org-link": "https://github.com/Choate-Robotics",
        "proj-link": "https://github.com/Choate-Robotics/AutoBOARd",
        "images": [
            "projects/autoboard/images/image_1.png",
        ],
        "description": "Created a custom simulation for occupancy grid-based planning algorithms. Implemented various algorithms like RRT*, LQR, MPC and developed my own which outperformed RRT* by a factor of 8. Connected everything to ROS simulators as well to incorporate into our autonomous vehicle pipeline."
    },

    decentralized_voting: {
        "name": "Decentralized, Encrypted Voting System",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/Cryptography_DS/tree/main/personal_cryptosystems/rust_schulze",
        "images": [],
        "description": "Project I worked on for my Cryptography DS. Used RSA and repeated hashing, along with decentralization principles to create a verifiable Schulze voting system that could function anonymously, securely, and without a central server. Used Rust to create a final product."
    },

    prng_system: {
        "name": "PRNG-Based Cryptosystem",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/Cryptography_DS/tree/main/personal_cryptosystems/random_seed_cryptography",
        "images": [],
        "description": "Project I worked on for my Cryptography DS as a replacement for one-time-pad, which used a set random seed to regenerate new one-time-pad codes, allowing for users to indefinitely share messages with n-bit security. Used Python for the final product."
    },

    global_local_planning: {
        "name": "Global and Local Planning",
        "org": "CEV",
        "org-link": "https://www.cornellelectricvehicles.org/",
        "proj-link": "https://github.com/cornellev/Local_and_Global_Planning",
        "images": [
            "projects/global_local_opt/images/image_1.png",
            "projects/global_local_opt/images/image_2.gif",
        ],
        "description": "Created a custom simulation for occupancy grid-based planning algorithms. Implemented various algorithms like RRT*, LQR, MPC and developed my own which outperformed RRT* by a factor of 8. Connected everything to ROS simulators as well to incorporate into our autonomous vehicle pipeline."
    },

    robotpy_toolkit: {
        "name": "Robotpy-Toolkit-7407",
        "org": "Choate Robotics",
        "org-link": "https://github.com/Choate-Robotics",
        "proj-link": "https://github.com/Choate-Robotics/7407-RobotPy-Toolkit",
        "images": [],
        "description": "Python library toolkit for our team and other FRC teams to use across years. Created tools for automatic robot path planning and position tracking based on cameras. Also wrote interfaces for sensors and motors commonly used by FRC teams."
    },

    inv_kinematics: {
        "name": "Inverse Kinematics Simulation with Gradient Descent and Jacobian Inverse Matrices",
        "org": "",
        "org-link": "",
        "proj-link": "https://editor.p5js.org/sidharthmrao/sketches/XpaS7dwnt",
        "images": ["projects/inv_kinematics/inv.png"],
        "description": "Project for my linear algebra class in which a partner and I used gradient descent and a formula derived using Jacobian inverses to simulate a robot arm optimally routing to a target."
    },

    maze_generator: {
        "name": "Maze Generator and Path Finder",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/Search_Algorithms",
        "images": ["projects/maze/maze_1.png"],
        "description": "Randomly generates a maze with various algorithms, including DFS and minimum spanning trees. Solves it with various pathfinding algorithms, including A*, DFS, and BFS."
    },

    n_body: {
        "name": "N-Body Simulation",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/NBodySimulation",
        "images": [
            "projects/n_body/n_body_1.png",
            "projects/n_body/n_body_2.png",
        ],
        "description": "Multithreaded N-Body-Problem simulator I wrote in Python using PyGame. Includes time and sampling controls. I was inspired to work on this project after reading the book “The Three-Body Problem”, which mentions that no formula or pattern has been found for the path of three bodies attracted by gravity. I wanted to see this for myself, so I created a simulation of N gravitational bodies, with cool features like movement trails, zooming, speed up/slow down, center of mass visualization, and more."
    },

    mcdiver: {
        "name": "McDiver Maze Search",
        "org": "Cornell CS 2110",
        "org-link": "https://www.cs.cornell.edu/courses/cs2110/2023fa/assignments/a6_handout.html",
        "proj-link": "",
        "images": [
            "projects/mcdiver/mcdiver.png",
        ],
        "description": "Project for my Object Oriented Programming and Data Structures course at Cornell University. Came up with our own algorithms to first do a blind search of the maze to find the destination (as in, could only see neighboring squares), and another algorithm for finding the path to a destination node within a maximum amount of steps, while collecting the maximum amount of coins. Our first algorithm involved a dfs walk, which used a manhattan distance heuristic for path selection and backtraced to previous paths when the current path seemed to be worsening. Our second algorithm involved creating a subgraph of just coin nodes, and then using Dijkstra’s algorithm to find the shortest route between each coin. Then, we ran a memoized DFS on the coin subgraph with the known route distances, and found the maximum coin value path to the destination. For situations where there were too many scenarios to search in a reasonable amount of time, a greedy search algorithm with limited randomness was used to select the best path to search next. Our algorithm was the second best out of over 600 students on the leaderboard."
    },

    autobrake: {
        "name": "LiDAR-Based AutoBrake",
        "org": "CEV",
        "org-link": "https://www.cornellelectricvehicles.org/",
        "proj-link": "https://github.com/sidharthmrao/ArduinoPractice/tree/main/Serial1",
        "images": [],
        "description": "Integrated an RPLidar, Ubuntu Raspberry pi, and Arduino along with motors in our autonomous vehicle to automatically disable the throttle and activate an auto-brake when objects above a certain size threshold were detected within a certain distance of the vehicle. Used ROS, ROSSerial, C++ (Arduino), Python."
    },

    snoway: {
        "name": "Snoway",
        "org": "BB&N Hackathon",
        "org-link": "https://bbn-hacks.devpost.com/",
        "proj-link": "https://github.com/sidharthmrao/Snoway",
        "images": [],
        "description": "Social media app two partners and I created using React Native, MongoDB, and Flask, where users could share photos of fun spots to play with snow in winter and review them."
    },

    rovicare_ocr: {
        "name": "OCR to Differential Diagnosis",
        "org": "Rovicare",
        "org-link": "https://www.rovicare.com/",
        "proj-link": "https://github.com/sidharthmrao/RovicareOCR",
        "images": [],
        "description": "Scanned handwritten doctors’ notes for various diseases and symptoms, and created a differential diagnosis mapping. Used Python, Pandas, Numpy, PyTesseract, and GCP."
    },

    taskninja: {
        "name": "TaskNinja CLI",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/TaskNinja",
        "images": [],
        "description": "CLI written in Rust to manage my tasks, TODOs, and appointments, which interfaces with Google Calendar."
    },

    jeopardy: {
        "name": "Multivariable Calculus Jeopardy",
        "org": "",
        "org-link": "",
        "proj-link": "https://sidharthmrao.github.io/jeopardy/",
        "images": [
            "projects/jeopardy/jeo_1.png",
            "projects/jeopardy/jeo_2.png",
        ],
        "description": "Jeopardy I made from scratch for one of my multivariable calculus final projects in 11th grade.",
    },

    volume_perception: {
        "name": "Volume Perception Game",
        "org": "",
        "org-link": "",
        "proj-link": "https://sidharthmrao.github.io/volume_perception/",
        "images": [],
        "description": "Game my friend and I made to test peoples' volume perception skills, as kind of a social experiment."
    },

    decision_maker: {
        "name": "Decision Maker",
        "org": "",
        "org-link": "",
        "proj-link": "https://sidharthmrao.github.io/decision_maker/",
        "images": [],
        "description": "Unironically helpful for me. What better way to know what you truly want than for someone to take away your choice?"
    },

    random_sun_tzu_quote: {
        "name": "Random Sun Tzu Quote",
        "org": "",
        "org-link": "",
        "proj-link": "https://sidharthmrao.github.io/random_sun_tzu/",
        "images": [],
        "description": "Life advice at the click of the reload button."
    },

    flappy_bird: {
        "name": "Flappy bird lol",
        "org": "",
        "org-link": "",
        "proj-link": "https://sidharthmrao.github.io/FlappyBird/",
        "images": [
            "projects/flappy_bird/flappy.png",
        ],
        "description": "Like most of my projects, I made this while bored in a plane."
    },

    snake: {
        "name": "Java Snake",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/Snake",
        "images": [
            "projects/snake/game_over.png",
        ],
        "description": "Made this for fun and to practice proper Java development, testing, etc."
    },

    cronicloud: {
        "name": "CroniCloud",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/CroniCloud",
        "images": [],
        "description": "App I made with electron to monitor my Cron backup commands status and history."
    },

    chess_bot: {
        "name": "Chess AI Bot",
        "org": "UT Dallas",
        "org-link": "https://www.utdallas.edu/",
        "proj-link": "https://github.com/sidharthmrao/Chess_AI_Bot",
        "images": [],
        "description": "A very ineffective chess bot which used Double Deep Q-Learning (RL) and a massive excel sheet. I made it for a summer camp at UTD in 8th grade."
    },

    laptop_mini_stand: {
        "name": "Laptop Mini Stand",
        "org": "",
        "org-link": "",
        "proj-link": "https://cad.onshape.com/documents/7ec62c9df1f3c74669907c1e/w/db8baed7f56487856bdbec28/e/dcdc957598e3b933402b61ac?renderMode=0&uiState=65d9b3cf26fcd7072ec1d8d8",
        "images": [
            "projects/laptop_mini_stand.png"
        ],
        "description": "Tiny stands for my laptop to allow more room for the fans, and a magnetic case."
    },

    wire_router: {
        "name": "Wire Router",
        "org": "",
        "org-link": "",
        "proj-link": "https://cad.onshape.com/documents/2d5bfd0d05153631c7fb5a39/w/4693ddbb1e8d8400c3bddfdf/e/4762ad6ac525deed48d1f93c?renderMode=0&uiState=65d9b4d726fcd7072ec1d947",
        "images": [
            "projects/wire_router.png"
        ],
        "description": "Attachment to the side of my desk to route wires."
    },

    monitor_stand: {
        "name": "Monitor Stand",
        "org": "",
        "org-link": "",
        "proj-link": "https://cad.onshape.com/documents/2d5bfd0d05153631c7fb5a39/w/4693ddbb1e8d8400c3bddfdf/e/4762ad6ac525deed48d1f93c?renderMode=0&uiState=65d9b5c51e298329479f9a7c",
        "images": [
            "projects/monitor_stand.png"
        ],
        "description": "Modular stand for my monitor. In the image above attached is a phone stand."
    },

    laptop_stand: {
        "name": "Laptop Stand",
        "org": "",
        "org-link": "",
        "proj-link": "https://cad.onshape.com/documents/d874752dc1e36f815bf97705/w/b3c29794a9e37c985a2369d2/e/17810d8bd7937d8d2b413a5b?renderMode=0&uiState=65d9b67bc4c315613204155f",
        "images": [
            "projects/laptop_stand.png"
        ],
        "description": "Laptop stand for my desk."
    },

    bass_maxx: {
        "name": "Bass Maxx",
        "org": "Cornell Makeathon 2024",
        "org-link": "https://docs.google.com/presentation/d/1e5yuNSzkqcU7ivFWvr8YPGmrOF6IwFKIkY3PY9dzy_A/edit?usp=sharing",
        "proj-link": "https://github.com/ethanuppal/makeathon-24",
        "images": [
            "projects/bass_maxx/image.png",
            "projects/bass_maxx/backend_img.png",
            "projects/bass_maxx/vid.gif",
        ],
        "description": "Recently made this project with my friends for a makeathon! We tried to mimic Baymax from Big Hero 6 by making a robot healthcare companion which dispenses candy and collects health data. We used a RPI, Arduino, servo, and a speaker, and also made our own GUI, candy dispensing mechanism, and an audio amplifier since there weren't any available."
    },

    lazy_wall: {
        "name": "Lazy Wall",
        "org": "",
        "org-link": "",
        "proj-link": "https://cad.onshape.com/documents/d8152abbfcde80591a72d9e5/w/61db43f805ed35f79ba0a951/e/adff74745d29f8dc07c86e43",
        "images": [
            "projects/lazy_wall/IMG_8831.jpg"
        ],
        "description": "I got lazy, now I don't have to hold my phone while watching stuff in bed."
    }
}

// {
//     "name": "",
//     "org": "",
//     "org-link": "",
//     "proj-link": "",
//     "images": [],
//     "description": ""
// },

let about_page = {
    "name": "Sidharth Rao",
    "org": "Resume",
    "org-link": "files/resume.pdf",
    "proj-link": "https://github.com/sidharthmrao",
    "linkedin": "https://linkedin.com/in/sidharthmrao",
    "images": [
        "about/profilepic.jpg",
    ],
    "description": "Hi! I'm a Freshman in Cornell University's College of Engineering, and aim to major in CS and ECE. At Cornell, I'm on the Software-Autonomy subteam of the Cornell Electric Vehicles project team, a researcher for the People and Robots Teaching and Learning (PoRTaL) group, and a member of the Maker Club. I'm primarily interested in Computer Science, Robotics, Cybersecurity, and decentralized cryptosystems.",
    "resume": "files/resume.pdf",
};

let projects = {
    "featured": [
        projects_list.global_local_planning,
        // projects_list.autobrake,
        // projects_list.laptop_mini_stand,
        // projects_list.mcdiver,
        projects_list.bass_maxx,
        projects_list.n_body,
        projects_list.snake,
        projects_list.autoboard,
        projects_list.maze_generator,
        // projects_list.prng_system,
        // projects_list.decentralized_voting,
        // projects_list.robotpy_toolkit,
        // projects_list.flappy_bird,
        // projects_list.random_sun_tzu_quote,
        // projects_list.decision_maker,
        // projects_list.taskninja,
        // projects_list.inv_kinematics,
        // projects_list.jeopardy,
        // projects_list.snoway,
        // projects_list.cronicloud,
        // projects_list.rovicare_ocr,
        // projects_list.chess_bot
    ],

    "robotics": [
        projects_list.global_local_planning,
        projects_list.autobrake,
        projects_list.autoboard,
        projects_list.robotpy_toolkit,
        projects_list.inv_kinematics,
    ],

    "pathfinding": [
        projects_list.global_local_planning,
        projects_list.mcdiver,
        projects_list.maze_generator,
    ],

    "simulation": [
        projects_list.global_local_planning,
        projects_list.n_body,
        projects_list.autoboard,
        projects_list.inv_kinematics,
    ],

    "cryptography": [
        projects_list.decentralized_voting,
        projects_list.prng_system
    ],

    "apps": [
        projects_list.snoway,
        projects_list.taskninja,
        projects_list.cronicloud,
        projects_list.rovicare_ocr,
    ],

    "fun": [
        projects_list.n_body,
        projects_list.snake,
        projects_list.flappy_bird,
        projects_list.jeopardy,
        projects_list.volume_perception,
        projects_list.chess_bot,
    ],

    "3d": [
        projects_list.lazy_wall,
        projects_list.laptop_mini_stand,
        projects_list.wire_router,
        projects_list.monitor_stand,
        projects_list.laptop_stand,
    ],

    "random": [
        projects_list.decision_maker,
        projects_list.random_sun_tzu_quote,
    ],

    "makeathons": [
        projects_list.bass_maxx,
        projects_list.snoway,
    ],

    "about": [about_page],
};

function addParam(v) {
    window.location.search += '&' + v;
}

function interpretImage(img, active) {
    if (active) {
        return `
        <div class="carousel-item active carousel-container">
            <img src="` + img + `" class="d-block w-100 carousel-img" alt="image">
        </div>
        `;
    }

    return `
        <div class="carousel-item carousel-container">
            <img src="` + img + `" class="d-block w-100 carousel-img" alt="image">
        </div>
        `;

}

function interpretProject(project, num) {
    const name = project["name"];
    const org = project["org"];
    const org_link = project["org-link"];
    const proj_link = project["proj-link"];
    const images = project["images"];
    const description = project["description"];

    let project_html = `<div class="project">`

    project_html += `<h3>` + name + ` <a href=` + org_link +  `>` + org + `</a> <a href="` + proj_link + `" target="_blank"><i class="fab fa-github-square"></i></a>`;

    if (project["linkedin"]) {
        project_html += `<a href="` + project["linkedin"] + `"target="_blank"><i class="fab fa-linkedin"></i></a>`
    }

    // Do the same for a resume but with a link instead of icon
    // if (project["resume"]) {
    //     project_html += `<a href="` + project["resume"] + `"target="_blank">Resume</a>`
    // }

    project_html += `</h3>`;

    project_html += `<div style="margin-top: 15px;" id="` + 'Project' + num + `" class="carousel slide" data-ride="carousel" data-interval="false">`;
    project_html += `<div class="carousel-inner">`;

    let active = true;
    let size = 0;
    for (let img in images) {
        project_html += interpretImage(images[img], active);
        active = false;
        size += 1;
    }

    project_html += `</div>`;

    if (size > 1) {
        project_html += `<a class="carousel-control-prev" href="#` + 'Project' + num + `" role="button" data-slide="prev">`;
        project_html += `
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>`;

        project_html += `
        <a class="carousel-control-next" href="#` + 'Project' + num + `" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        `;
    }

    project_html += `
    </div><p style="margin-top: 20px;">` + description + `</p>
    </div><hr class="separator">
    `;

    return project_html;
}

// Move to a new project_set state
function replaceContent(newActive, waitTime=800) {
    // Current active button
    const activeButton = document.getElementById(current_active);
    activeButton.classList.remove('btn_active')

    const newActiveButton = document.getElementById(newActive);
    newActiveButton.classList.add('btn_active');
    current_active = newActive;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('active', newActive);
    
    // Write the new URL if not the default state, else remove the active param
    if (newActive !== default_active) {
        window.history.replaceState({}, '', window.location.pathname + '?' + urlParams.toString());
    } else {
        window.history.replaceState({}, '', window.location.pathname);
    }

    const activeName = newActiveButton.innerText;

    let html = ``;

    // Project parsing
    for (let project in projects[newActive]) {
        html += interpretProject(projects[newActive][project], project);
    }

    document.getElementById("subheading").style.opacity = '0';
    document.getElementById("background").classList.toggle('transition');


    const targetDiv = document.getElementById('projects');

    if (html === ``) {
        html = `<p>Under Construction.</p>`;
    }

    // Transitions and main div setting
    targetDiv.style.opacity = '0';
    document.getElementById("footer").style.opacity = '0';
    setTimeout(() => {
        document.getElementById("subheading").innerText = activeName + (activeName === "About" ? " Me" : " Projects");
        targetDiv.innerHTML = html;
        targetDiv.style.opacity = '1';
        document.getElementById("subheading").style.opacity = '1';
        document.getElementById("footer").style.opacity = '1';
        document.getElementById("background").classList.toggle('transition');;
    }, waitTime);
}

function boot() {
    const urlParams = new URLSearchParams(window.location.search);

    document.body.style.opacity = 0;

    // Setup url parameters for each individual state
    if (urlParams.has('active')) {
        const active = urlParams.get('active');
        replaceContent(active, 0);
    } else {
        replaceContent(default_active, 0);
    }

    setTimeout(() => {
        document.body.style.opacity = 100;
    }, 700);
}

window.onload = boot;
