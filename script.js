function seeMyWork() {
    // Add navigation logic
    window.location.href = "projects.html"; // Replace with actual link
  }
  
  function aboutMe() {
    // Add navigation logic
    window.location.href = "about.html"; // Replace with actual link
  }

  const tilt = document.querySelector(".tilt");

  document.addEventListener("mousemove", (e) => {
    const { innerWidth: width, innerHeight: height } = window;
    const x = (e.clientX / width - 0.5) * 20; // range: -10 to +10
    const y = (e.clientY / height - 0.5) * 20; // range: -10 to +10
    tilt.style.transform = `rotateX(${y * -1}deg) rotateY(${x}deg)`;
  });
  
  document.addEventListener("mouseleave", () => {
    tilt.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
  