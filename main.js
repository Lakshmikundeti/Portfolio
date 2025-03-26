<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Name | Portfolio</title>
  <link rel="stylesheet" href="CSS" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" />
  <style>
    html {
      background: #e6e9e9;
      background-image: linear-gradient(270deg, rgb(230, 233, 233) 0%, rgb(216, 221, 221) 100%);
      -webkit-font-smoothing: antialiased;
    }

    body {
      background: #fff;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.06);
      color: #545454;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      margin: 0 auto;
      max-width: 800px;
      padding: 2em 2em 4em;
    }

    h1, h2, h3, h4, h5, h6 {
      color: #222;
      font-weight: 600;
      line-height: 1.3;
    }

    h2 {
      margin-top: 1.3em;
    }

    a {
      color: #0083e8;
      text-decoration: none;
    }

    b, strong {
      font-weight: 600;
    }

    img {
      animation: colorize 2s cubic-bezier(0, 0, .78, .36) 1;
      background: transparent;
      border: 10px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      display: block;
      margin: 1.3em auto;
      max-width: 95%;
    }

    @keyframes colorize {
      0% {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      100% {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }
    }

    .preloader-parent {
      position: fixed;
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      z-index: 9999;
    }

    .cursor {
      width: 20px;
      height: 20px;
      border: 2px solid #333;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      pointer-events: none;
      transition: transform 0.1s ease;
      z-index: 10000;
    }

    .cursor.expand {
      transform: scale(2);
      transition: transform 0.3s ease;
    }

    .progress-wrap {
      position: fixed;
      bottom: 20px;
      right: 20px;
      height: 60px;
      width: 60px;
      background: transparent;
      cursor: pointer;
      z-index: 999;
    }

    .progress-circle path {
      stroke: #222;
      stroke-width: 4;
      fill: none;
    }

    .progress-wrap.active-progress {
      opacity: 1;
      visibility: visible;
    }

    header, .about, .projects, .contact {
      margin-bottom: 3em;
    }
  </style>
</head>

<body>
  <div class="preloader-parent">Loading...</div>

  <div class="container">
    <header>
      <h1 data-aos="fade-up">Hi, I'm Dr. Your Name</h1>
      <p data-aos="fade-up" data-aos-delay="100">PharmD | Health Data Analyst | PV Specialist</p>
    </header>

    <section class="about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        I'm passionate about data, healthcare, and tech. I bring 6+ years of pharmacovigilance experience, project work in oncology, COVID-19, and FHIR-based claim denial systems.
      </p>
    </section>

    <section class="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <ul>
        <li><a href="#">ADR Tracker System</a> - Automates adverse drug reporting with smart dashboards.</li>
        <li><a href="#">FHIR Claim Dashboard</a> - Visualizes healthcare claim denial metrics.</li>
        <li><a href="#">Vaccine Signal Detector</a> - Monitors safety signals in real-time.</li>
      </ul>
    </section>

    <section class="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Email: yourname@email.com</p>
      <p>LinkedIn: <a href="#">linkedin.com/in/yourname</a></p>
    </section>
  </div>

  <div class="cursor"></div>
  <div class="progress-wrap">
    <svg class="progress-circle" width="100%" height="100%">
      <path d="M50,1 a49,49 0 1,1 -0.1,0" />
    </svg>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"></script>
  <script>
    AOS.init({ disable: 'mobile' });

    // Preloader
    $(window).on("load", function () {
      setTimeout(function () {
        $(".preloader-parent").fadeOut();
      }, 800);
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });
    document.addEventListener('click', () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });

    // Scroll Progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });

    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  </script>
</body>

</html>
