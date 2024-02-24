let current_active = "selected";

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
        "images": [],
        "description": "Project for my linear algebra class in which a partner and I used gradient descent and a formula derived using Jacobian inverses to simulate a robot arm optimally routing to a target."
    },

    maze_generator: {
        "name": "Maze Generator and Path Finder",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/Search_Algorithms",
        "images": [],
        "description": "Randomly generates a maze with various algorithms, including DFS and minimum spanning trees. Solves it with various pathfinding algorithms, including A*, DFS, and BFS."
    },

    n_body: {
        "name": "N-Body Simulation",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/NBodySimulation",
        "images": [],
        "description": "Multithreaded N-Body-Problem simulator I wrote in Python using PyGame. Includes time and sampling controls. I was inspired to work on this project after reading the book “The Three-Body Problem”, which mentions that no formula or pattern has been found for the path of three bodies attracted by gravity. I wanted to see this for myself, so I created a simulation of N gravitational bodies, with cool features like movement trails, zooming, speed up/slow down, center of mass visualization, and more."
    },

    mcdiver: {
        "name": "McDiver Maze Search",
        "org": "Cornell CS 2110",
        "org-link": "https://www.cs.cornell.edu/courses/cs2110/2023fa/assignments/a6_handout.html",
        "proj-link": "",
        "images": [],
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
        "proj-link": "https://www.iamsrao.com/jeopardy/",
        "images": [],
        "description": "Jeopardy I made from scratch for one of my multivariable calculus final projects in 11th grade.",
    },

    volume_perception: {
        "name": "Volume Perception Game",
        "org": "",
        "org-link": "",
        "proj-link": "https://www.iamsrao.com/volume_perception/",
        "images": [],
        "description": "Game my friend and I made to test peoples' volume perception skills, as kind of a social experiment."
    },

    decision_maker: {
        "name": "Decision Maker",
        "org": "",
        "org-link": "",
        "proj-link": "https://www.iamsrao.com/decision_maker/",
        "images": [],
        "description": "Unironically helpful for me. What better way to know what you truly want than for someone to take away your choice?"
    },

    random_sun_tzu_quote: {
        "name": "Random Sun Tzu Quote",
        "org": "",
        "org-link": "",
        "proj-link": "https://www.iamsrao.com/random_sun_tzu/",
        "images": [],
        "description": "Raw inspiration at the click of the reload button."
    },

    flappy_bird: {
        "name": "Flappy bird lol",
        "org": "",
        "org-link": "",
        "proj-link": "https://www.iamsrao.com/FlappyBird/",
        "images": [],
        "description": "Like most of my projects, I made this while bored in a plane."
    },

    snake: {
        "name": "Java Snake",
        "org": "",
        "org-link": "",
        "proj-link": "https://github.com/sidharthmrao/Snake",
        "images": [],
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
    "org": "",
    "org-link": "",
    "proj-link": "https://github.com/sidharthmrao",
    "images": [
        "projects/global_local_opt/images/image_1.png",
        "projects/global_local_opt/images/image_2.gif",
    ],
    "description": "Created a custom simulation for occupancy grid-based planning algorithms. Implemented various algorithms like RRT*, LQR, MPC and developed my own which outperformed RRT* by a factor of 8. Connected everything to ROS simulators as well to incorporate into our autonomous vehicle pipeline."
};

let projects = {
    "selected": [
        projects_list.global_local_planning,
        projects_list.autoboard,
        projects_list.n_body,
        projects_list.maze_generator,
    ],

    "robotics": [
        projects_list.autoboard,
        projects_list.global_local_planning,
        projects_list.autobrake,
        projects_list.robotpy_toolkit,
        projects_list.inv_kinematics,
    ],

    "pathfinding": [
        projects_list.maze_generator,
        projects_list.mcdiver,
        projects_list.global_local_planning,
        projects_list.autoboard,
    ],

    "simulation": [
        projects_list.n_body,
        projects_list.inv_kinematics,
        projects_list.global_local_planning,
        projects_list.autoboard,
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
        projects_list.snake,
    ],

    "fun": [
        projects_list.flappy_bird,
        projects_list.snake,
        projects_list.volume_perception,
        projects_list.jeopardy,
        projects_list.n_body,
        projects_list.chess_bot,
    ],

    "3d": [],

    "random": [
        projects_list.decision_maker,
        projects_list.random_sun_tzu_quote,
    ],

    "about": [about_page],
};

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

    project_html += `<h3>` + name + ` <a href=` + org_link +  `>` + org + `</a> <a href="` + proj_link + `" target="_blank"><i class="fab fa-github-square"></i></a></h3>`;
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

function replaceContent(newActive, waitTime=800) {
    // Current active button
    const activeButton = document.getElementById(current_active);
    activeButton.classList.remove('btn_active')

    const newActiveButton = document.getElementById(newActive);
    newActiveButton.classList.add('btn_active');
    current_active = newActive;
    const activeName = newActiveButton.innerText;

    let html = ``;

    for (let project in projects[newActive]) {
        html += interpretProject(projects[newActive][project], project);
    }

    document.getElementById("subheading").style.opacity = '0';


    const targetDiv = document.getElementById('projects');

    if (html === ``) {
        html = `<p>Under Construction.</p>`;
    }

    targetDiv.style.opacity = '0';
    document.getElementById("footer").style.opacity = '0';
    setTimeout(() => {
            document.getElementById("subheading").innerText = activeName + (activeName === "About" ? " Me" : " Projects");
            targetDiv.innerHTML = html;
            targetDiv.style.opacity = '1';
            document.getElementById("subheading").style.opacity = '1';
            document.getElementById("footer").style.opacity = '1';
        }, waitTime);
}

function boot() {
    document.body.style.opacity = 0;

    replaceContent(current_active, 0);

    setTimeout(() => {
        document.body.style.opacity = 100;
    }, 300);
}