document.addEventListener('DOMContentLoaded', function () {
    const postJobButton = document.querySelector('.end a');
    postJobButton.addEventListener('click', function (event) {
        event.preventDefault();
        // Display static job data
        displayJobs(staticJobs); // Assuming you have defined 'staticJobs' somewhere accessible
    });

    const submitButton = document.querySelector('.f4 button');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Retrieve input values
        const keyword = document.querySelector('.f1 input').value.toLowerCase();
        const location = document.querySelector('.f2 input').value.toLowerCase();
        const category = document.querySelector('.f3 select').value.toLowerCase();

        // Check if input fields are empty
        if (keyword.trim() === '' && location.trim() === '' && category.trim() === '') {
            return; // If any input field is empty, do nothing
        }

        // Display user input
        displayUserInput(keyword, location, category);

        // Filter job opportunities based on input values
        const filteredJobs = filterJobs(keyword, location, category);

        // Display filtered job opportunities
        displayJobs(filteredJobs);
    });

    // Define static job data
    const staticJobs = [
        { title: "Web Developer", company: "Seebiz pvt LTD", location: "Lahore", category: "IT Services", description: "We are looking for a talented Web Developer to join our team. You will be responsible for developing websites and web applications." },
        { title: "Frontend Developer", company: "E-Solution Software house ", location: "Okara", category: "IT Services", description: "We are looking for a talented Frontend Developer to join our team. You will be responsible for developing websites and web applications." },
        { title: "Graphic Designer", company: " Netsol Softwatre house", location: "Islamabad", category: "design", description: "We are seeking a creative Graphic Designer to join our design team. You will work on a variety of projects, including branding, print design, and digital media." },
        { title: "Backend Developer", company: "Contour Software Solutios", location: "Multan", category: "Marketing", description: "We are hiring a backend developer to develop and implement marketing strategies to promote our products and services." }
        // Add more static job data as needed
    ];

    // Function to filter job opportunities (remains unchanged)
    function filterJobs(keyword, location, category) {
        // Your job opportunities data (you can replace this with your actual data)
        const jobs = [
            { title: "Web Developer", company: "Seebiz pvt LTD", location: "Lahore", category: "IT Services", description: "We are looking for a talented Web Developer to join our team. You will be responsible for developing websites and web applications." },
            { title: "Web Developer", company: "Digitechz Software houses", location: "Lahore", category: "design", description: "We are seeking a creative Graphic Designer to join our design team. You will work on a variety of projects, including branding, print design, and digital media." },
            { title: "Web Developer", company: "Devsinc", location: "Lahore", category: "Marketing", description: "We are hiring a Marketing Manager to develop and implement marketing strategies to promote our products and services." },
            { title: "Frontend Developer", company: "E-Solution Software house ", location: "Okara", category: "IT Services", description: "We are looking for a talented Frontend Developer to join our team. You will be responsible for developing websites and web applications." },
            { title: "Frontend Developer", company: " Software IT Solutions", location: "Okara", category: "design", description: "We are looking for a talented Frontend Developer to join our team. You will be responsible for developing websites and web applications." },
            { title: "Graphic Designer", company: " Netsol Softwatre house", location: "Islamabad", category: "design", description: "We are seeking a creative Graphic Designer to join our design team. You will work on a variety of projects, including branding, print design, and digital media." },
            { title: "Graphic Designer", company: "NAYYAR Tech.AI", location: "Islamabad", category: "Marketing", description: "We are looking for a talented Frontend Developer to join our team. You will be responsible for developing websites and web applications." },
            { title: "Backend Developer", company: "Logictex IT Solutions", location: "Multan", category: "IT Services", description: "We are looking for a talented Backend Developer to join our team. You will be responsible for developing websites and web applications." },
            { title: "Backend Developer", company: "Contour Software Solutios", location: "Multan", category: "Marketing", description: "We are hiring a backend developer to develop and implement marketing strategies to promote our products and services." }
            // Add more job opportunities as needed
        ];

        // Filter jobs based on input values
        const filteredJobs = jobs.filter(job => {
            return (
                job.title.toLowerCase().includes(keyword) &&
                job.location.toLowerCase().includes(location) &&
                job.category.toLowerCase().includes(category)
            );
        });

        return filteredJobs;
    }

    // Function to display filtered job opportunities
    function displayJobs(jobs) {
        const jobListContainer = document.querySelector('.jobList');
        jobListContainer.innerHTML = ''; // Clear previous results

        if (jobs.length === 0) {
            jobListContainer.innerHTML = '<li>No job opportunities found.</li>';
        } else {
            jobs.forEach(job => {
                const jobItem = document.createElement('li');
                jobItem.classList.add('jobItem');
                jobItem.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><span style="font-weight: bold;">Company:</span> ${job.company}</p>
                    <p><span style="font-weight: bold;">Location:</span> ${job.location}</p>
                    <p><span style="font-weight: bold;">Category:</span> ${job.category}</p>
                    <p><span style="font-weight: bold;">Description:</span> ${job.description}</p>
                    <button class="saveButton">Save</button>
                `;
                jobListContainer.appendChild(jobItem);
            });
        }

        // Log filtered jobs to the console
        console.log('Filtered Jobs:', jobs);
    }

    // Function to display user input (remains unchanged)
    function displayUserInput(keyword, location, category) {
        // const userInputDisplay = document.getElementById('userInputDisplay');
        // userInputDisplay.textContent = `Keyword: ${keyword}, Location: ${location}, Category: ${category}`;
    }

    // Event delegation to handle "Save" button clicks
    document.querySelector('.jobList').addEventListener('click', function (event) {
        if (event.target.classList.contains('saveButton')) {
            const jobTitle = event.target.parentElement.querySelector('h3').textContent;
            const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
            savedJobs.push(jobTitle);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
            alert('Job saved to your history!');
        }
    });
});
