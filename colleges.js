
const params = new URLSearchParams(window.location.search);
const stream = params.get('stream');
const colleges = {
    arts: [
        { name: "Fergusson College, Pune", website: "https://fergusson.edu/", cutoff: "85%" },
        { name: "St. Xavier's College, Mumbai", website: "https://xaviers.edu/", cutoff: "92%" },
        { name: "Savitribai Phule Pune University, Pune", website: "http://www.unipune.ac.in/", cutoff: "88%" },
        { name: "Wilson College, Mumbai", website: "https://www.wilsoncollege.edu/", cutoff: "80%" },
        { name: "K.J. Somaiya College of Arts and Commerce, Mumbai", website: "https://www.somaiya.edu/", cutoff: "84%" },
        { name: "Ramnarain Ruia College, Mumbai", website: "https://ruiacollege.edu/", cutoff: "83%" },
        { name: "St. Mira's College for Girls, Pune", website: "https://stmirascollegepune.edu.in/", cutoff: "81%" },
        { name: "Modern College of Arts, Science, and Commerce, Pune", website: "https://moderncollegepune.edu.in/", cutoff: "82%" },
        { name: "SNDT Women's University, Mumbai", website: "https://www.sndt.ac.in/", cutoff: "75%" },
        { name: "Tata Institute of Social Sciences (TISS), Mumbai", website: "https://www.tiss.edu/", cutoff: "88%" }
    ],
    commerce: [
        {
            name: "Narsee Monjee College of Commerce and Economics, Mumbai",
            cutoff: "96%",
            website: "https://nmcollege.in"
        },
        {
            name: "Symbiosis College of Arts and Commerce, Pune",
            cutoff: "95%",
            website: "https://symbiosiscollege.edu.in"
        },
        {
            name: "Brihan Maharashtra College of Commerce (BMCC), Pune",
            cutoff: "94%",
            website: "https://www.bmcc.ac.in"
        },
        {
            name: "H.R. College of Commerce and Economics, Mumbai",
            cutoff: "93%",
            website: "https://www.hrcollege.edu"
        },
        {
            name: "K.J. Somaiya College of Arts and Commerce, Mumbai",
            cutoff: "92%",
            website: "https://somaiya.edu"
        },
        {
            name: "St. Mira's College for Girls, Pune",
            cutoff: "90%",
            website: "https://www.stmirascollegepune.edu.in"
        },
        {
            name: "Mithibai College of Arts, Chauhan Institute of Science, and Amrutben Jivanlal College of Commerce and Economics, Mumbai",
            cutoff: "89%",
            website: "https://mithibai.ac.in"
        },
        {
            name: "Mulund College of Commerce, Mumbai",
            cutoff: "88%",
            website: "https://www.mccmulund.ac.in"
        },
        {
            name: "Indira College of Commerce and Science, Pune",
            cutoff: "87%",
            website: "https://iccs.ac.in"
        },
        {
            name: "Jai Hind College, Mumbai",
            cutoff: "86%",
            website: "https://www.jaihindcollege.com"
        }
    ],
    science: [
        { name: "Fergusson College, Pune", cutoff: "85%", website: "http://fergusson.edu" },
        { name: "Indian Institute of Science Education and Research (IISER), Pune", cutoff: "Entrance-based", website: "http://www.iiserpune.ac.in" },
        { name: "Loyola College, Chennai", cutoff: "91%", website: "http://www.loyolacollege.edu" },
        { name: "St. Xavier's College, Mumbai", cutoff: "88%", website: "https://xaviers.edu" },
        { name: "Savitribai Phule Pune University, Pune", cutoff: "Entrance-based", website: "http://www.unipune.ac.in" },
        { name: "Ramnarain Ruia College, Mumbai", cutoff: "90%", website: "https://ruiacollege.edu" },
        { name: "Modern College of Arts, Science, and Commerce, Pune", cutoff: "82%", website: "http://moderncollegepune.edu.in" },
        { name: "Institute of Science, Nagpur", cutoff: "80%", website: "http://iscnagpur.ac.in" },
        { name: "Nowrosjee Wadia College, Pune", cutoff: "75%", website: "http://www.nowrosjeewadia.mespune.org" },
        { name: "KJ Somaiya College of Science and Commerce, Mumbai", cutoff: "87%", website: "https://kjssc.somaiya.edu" }
    ]
};

const resourceLinks = {
    arts: "arts-resourses.html",
    commerce: "commerce-resourses.html",
    science: "science-resourses.html"
};

const streamTitle = document.getElementById("stream-title");
const collegeList = document.getElementById("college-list");
const startLearningButton = document.getElementById("start-learning-button");

if (stream && colleges[stream]) {
    streamTitle.textContent = `Recommended Colleges for ${stream.charAt(0).toUpperCase() + stream.slice(1)}`;
    colleges[stream].forEach(college => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${college.website}" target="_blank">${college.name}</a> - Cutoff: ${college.cutoff}`;
        collegeList.appendChild(li);
    });

    // Update the "Start Learning" button link
    startLearningButton.href = resourceLinks[stream];
} else {
    streamTitle.textContent = "No Stream Selected";
    collegeList.innerHTML = "<li>Please retake the quiz to get recommendations.</li>";
    startLearningButton.style.display = "none"; // Hide the button if no stream is selected
}
