let current_active = "selected";

let projects = {
    "selected": [
        {
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

        {
            "name": "AutoBoard",
            "org": "Choate Robotics",
            "org-link": "https://github.com/Choate-Robotics",
            "proj-link": "https://github.com/Choate-Robotics/AutoBOARd",
            "images": [
                "projects/autoboard/images/image_1.png",
                "images/dog.jpg",
            ],
            "description": "Created a custom simulation for occupancy grid-based planning algorithms. Implemented various algorithms like RRT*, LQR, MPC and developed my own which outperformed RRT* by a factor of 8. Connected everything to ROS simulators as well to incorporate into our autonomous vehicle pipeline."
        },
    ],

    "robotics": [],
    "pathfinding": [],
    "simulation": [],
    "cryptography": [],
    "apps": [],
    "fun": [],
    "3d": [],
    "random": [],
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
    for (let img in images) {
        project_html += interpretImage(images[img], active);
        active = false;
    }

    project_html += `</div>`;

    project_html += `<a class="carousel-control-prev" href="#` + 'Project' + num + `" role="button" data-slide="prev">`;
    project_html += `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>`;

    project_html += `
    <a class="carousel-control-next" href="#` + 'Project' + num + `" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a></div>
    `;

    project_html += `
    <p style="margin-top: 20px;">` + description + `</p>
    </div><hr class="separator">
    `;

    return project_html;
}

function replaceContent(newActive) {
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

    document.getElementById("subheading").innerText = activeName + " Projects";

    const targetDiv = document.getElementById('projects');

    if (html === ``) {
        html = `<p>Under Construction.</p>`;
    }

    targetDiv.style.opacity = '0';
    setTimeout(() => {
            targetDiv.innerHTML = html;
            targetDiv.style.opacity = '1';
        }, 0);
}