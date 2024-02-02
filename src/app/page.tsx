"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => (
  <main>
    <nav className="invert"></nav>
    <nav className="nav-container">
      <Link href={"#"} scroll={true}>
        <Image height={50} width={100} src={"/signature.png"} alt="pic" />
      </Link>
      <span className="options">
        <Link href={"#skill"}>Skills</Link>
        <Link href={"#project"}>Projects</Link>
        <Link href={"#resume"}>Resume</Link>
        <Link href={"#contact"}>Contact</Link>
      </span>
    </nav>
  </main>
);
const About = () => (
  <section className="about-container">
    <div className="about">
      <h3>
        Hi I am
        <span>Parthib</span>
      </h3>
      <p>
        A passionate Full Stack Software Developer having an experience of
        building Web and Mobile applications with JavaScript / Reactjs / Nodejs
        / React Native and some other cool libraries and frameworks
      </p>
      <ul className="social">
        <li>
          <Link target="_blank" href={"https://linkedin.com/"}>
            <Image
              id="linkedin"
              height={48}
              width={48}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/0lEQVR4nO1Zy24TMRS1HWDBsoUNKUiIb6CCD0CsEUIg+JBW2WRBiY1EVw1NI34AgloWUDYsygdEyXWYpiugjxAkmiIlsMiENEZ3ooi0eYznHaQc6UrWjOI5x762j28ImWKKKbwjl4uRVOkm4zJBuVxnQm4zAT8Zly0rum3Desdlggh5gyQVI5Hj8afLVIBgQlaYkMpRcDigQnIi5Fz4xJ8ULlIBWSbAdEx8IMCkQmbIs/yFULgzIR8yDkfeiQ8IqTEBD4Jjns2fpQJe+E9cngjK5Rp+y1/yyfx5yuF90ORZT4SATfymfyMfInn2T8QHkjTOeeYfRtqwkSJkxhN59rT0KCryrBcpuO+Ofao8y7g8HNXx3Y1dVf3VUt9//7HagQngcORqi+3u86M7RvI9VBqtYFOJw3Nn7IWcszukvvUJwHawqQQmEcYVJ6Mv7DrFtMH0wdG/s/418LVA0XZoIakY+pSgCbmIimUabYGuMnqyalgQUZy35Y92V6ez07B7d3V1R60Wamq3biqz3VEHjZbKFmvqWmbHyVpY1Mh/ueG3gFsvP6t6s62GoWEeq9uvvuitAw6vdWbA8FsAkhyHhnlszZDGDJQ0BOhZZScCdLBWqNkL4PLQXoDmJcWJAMz5ha2qmkuXrVj8WLWe9WOvrnGWcGhGIgAJn/49PutHu9PxSUAAKRRPlwd+f2lle2wf7lMogEXspg/mdhEHsY36JYBqbqOJiZ0BXlqwFYBFp0kVQFKF63pmTsD+5AmAPe1qHlrXSRNAuUxpkde90IQqgEOTLBXj+gK6s5CZFAGUwwpxjGVjZtylPryAmuu6KdYqoxYQ46V7xAuwVhkVeSogTTwjl4tRDm/CJy/fkeTWGeJbcVfAZmjkuXzrX3H3RHl9/M7kW9ok/Rr5IcBaZUC70w/PC1YbqfIslvvwgPFMnEPT2ueXjRkSOpaK8a7tsPdOgwH7lj1wesIGAjRZojiPdRv07Hjx6N7s0I6AabU5SOsdWmJ0lRPxN+sUU5D/Hn8BsEo9P7MRBcwAAAAASUVORK5CYII="
              }
              alt="pic"
            />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"https://github.com/"}>
            <Image
              id="github"
              height={50}
              width={50}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACi0lEQVR4nO2YS0hVURSGv+ulhzRyUFCIZYNe0qwGNbWEdNTAWRBBo3AmWYKRQRmZ1jScFSRJSNhrakERNQl6QUSBVDQPe5F1YscKDoe9jse717EL7g8WnHvu3v9ae6/9PBCJRCKROmM90AX0AMfE3HMn0EKd0gaMAu+AZB57C5wHtlIHbAGmgN8FAs+aq3MD2Pw/Am8ABoAfNQSete9Av2guCquAuwaBZ+2WaJce/MMSgk/EHpTZiIaSej7xZKKU4TSQcfQT2AHsAa7I76JBurKXgXZgJzCX+d/NCfPVJjthn3uWUpehaWAIOAx0i7nns8A9KbMtU/elZ2JvsmzAlKcXHxnqP/boT1qJtynr/GsrB8Abj/4vq81uJGf9rhroV0XL5+Ocgb56PDiDHUOKD5eZIFoU4W9AE3Y0iabPV3OIcJciehN7biu+9oWI9iiiF7DnouLrSIhovyLahz19iq+gTe2oIjqIPacUXy6GmjmkiF7FnmuKr4Mhop2K6EfjA1cV+FTGJF6Tc9vabxc/3YoP53t1qPgrRfw9sM4g+GbJqM/HCwP9v9t5othToDVAeyPwLEffnWCDaU2d112vd8inkll591nuCmsXoOkyd0LqasHPyScaEyZTF5HjQAXYKyfG9Hh1KT+ZozMoZYp8xZjAEJeFLynxA/K+1+PYNUyjo0DgiWTXrPd9m9qH1OXbnZfuAE+AS8CKHI3Ggr3fSwlUJK3/nAzXqKOdOhOxcfFVCiuB+ylnY8B2YDmwrOCymteA6XkyaEKjsu27ofE1oAHj0kGLQkXmRHpiJzU2YFbGfGnDJo8NwPXUPjFToM5Map2fqJdP7m7JOw3sKlB2t5Q1XyYjkUgksvT4A9CAyJgLiLHIAAAAAElFTkSuQmCC"
              }
              alt="pic"
            />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"https://pinterest.com/"}>
            <Image
              id="pinterest"
              height={50}
              width={50}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFhElEQVR4nO1ZC2wUVRS9loqK8VtKNIJJZ9paKQpS2xSjghojEQIioCjEYDR8UlGDhDblU5TYQqpVFKx8UkCNosgnYDFIVNRE/IFaF/wh6nZn9jP773a7/2veFHZ3dnbezHS2VZPe5CXNzsy759x3333n3QIM2qANmmFDgCEWYCdwwNZzwO7hgDnJA+vmgImQcfZvU+8ztt4GxdUIkAf/tlmAHcUDu44HxsIDi/oG08kD29QJxSMHHDgPxYU8sJt5YML6gcuIhDlgWzkoHT4g4DlgHuaBdRkHLiPitAAzp9+AI1SczwOzNffAWcnggH2d+MopeA6uHsYBe6i/wfMpEu3EZ07Ak2gMJHg+NY6YYPRQwwT0po2tsBLd9y1Cb00Ddq3ZgIGWNvSvegm9C1agUDkD+bwSPSvRagg8B0VztTiyXjwGfcuaMPJtB2I8jjSLC27s3rIL7cwkTSQswD7YJ/AWKCvggRHUHHgXrcK4TUDdFo1h4JWdaL3gejUSrj6V2N46T4n6haMx+MY+KsZEIIiJYA/1nch3P6F91K0qqcRs0gWenI7UQ2pIKYY+/CxrenQ1taLzltliWiXJXjoWXfc+hsHt7yNGovLFOHUabVeMVznsmGv1RH8dLSJd6zfLQAQ27BCBqqWco+QujJw4Kfs+9NEXat82aQJPRNZZnZJ1IuHGKbKN6l28WleJtF5UjuEvT8hIuGfW0FbBQkSjKgGiKmnOe/YfkUa+pU0X+HPDdlU1Jrx+aSr9fJpOHIqqVAkQuavodESVJPpx3i5GM/0d9wNLxOhGjpvQ90wj8ucVKwLyr35ZtgpkhSmbuU5L/u9VmsDzyDKJM39ds+S599FaeVrMUk4LOzNJ9r5/xYs0Ars1rABjUpqg+7W3JM4c5ZNTyztsDMbdXhmg7m3vUdMiZual77ftphBgO7SsgKJU7tl7OOUpEpXIAued82TgRUBbdlEJRI59L3k/dJhWjRhBAwHl+h/+5Fgq/22CNH0WrsxKwLf0eSqB8Off6CinTMgQgeDbB5KOyAmb/sz31NqsBITx06gEoh2/SN4nPgwSUE6hrsZWiTPHdXenqs/0hTLw4irR1GdeCSb8Ack3geatxlKItomdt81RrEJECiRCYWk0d+yhRt9RPllG2j1jseFNrFhGSU2P/dmZdBbj7En5QMRdJgFyJtAI+Fe2ZCxZHG3DbzZaRpUPMjHXn1gj8UnuAeLq3C5dHUwk0Hb5TYrzWIeWYexMKhjEeg58TCXMAVOrSoA0nWiT8PmlGD76tUy/+OtfkOIPBOnRr2uWpY/zjrnUb3goqtQq5sy0iUhkw59+1Rvlwkrxt9ChozJAQtX9Wb93T1sgXmjSjWgsOnj2b83dPCJdVSYTK4hzwqxUNckQZsRif5hRqJieIj6iSrwvYEwKPu5wieKO7pNphJxdaDKGMHYqKloigdFfz2D097+yXmbiTg8K46aqgQ+ZoeQa0GOkI6CVAOlApBvZI1HTb6hmkeMmiZ6iEHgV9JoZRl6p5VJPRvCdgzL5YCuowOCb+7NGPfLDKbGa8fmlWsA7+9w3Jb1KLQRinVYJwPSUIJvcNeVx9Mxfjq575mtup/Dnyi0UzwYjRnqVNAf2oomyDUm7xOgZHDAbwaiReygPzD4lJ5kaqOfd9hyBZz9AmJhvmEBac7c9myPfk89JCHgeejoX4A/mrLmb0eSVVSb/8vWp9HF5xJuZ0bTBXEU+m5FeZXp18i15Nkmga+1GI8AdhjesdhJlBaTdRw4Yz7ylyc1rvWxcH8AzIVLnSdmGgTZyOrpn1myPcrYYOcx0AjcTeaD7hO0Pw4aGfNslN1STvg3R7OTi0XuzI3JElCTklvdj7zOmlqjK/8S/WQdt0OD/b/8ARXi3/guKGQ0AAAAASUVORK5CYII="
              }
              alt="pic"
            />
          </Link>
        </li>
      </ul>
    </div>
    <Image height={300} width={300} src={"/profile.jpg"} alt="profile" />
  </section>
);
const Skills = () => {
  const skills = {
    top: ["html", "css", "js", "sass", "bootstrap", "react", "node"],

    bottom: [
      "typescript",
      "mysql",
      "mongodb",
      "java",
      "python",
      "lightroom",
      "premiere",
    ],
  };

  return (
    <section className="skill-container" id="skill">
      <h1>My Skills</h1>
      <div className="car-outer">
        <div className="car car1">
          {skills.top.map((item, id) => (
            <Image
              key={id}
              height={256}
              width={256}
              src={`/${item}.png`}
              alt="pic"
              id={`${item}`}
            />
          ))}
          {skills.top.map((item, id) => (
            <Image
              key={id}
              height={256}
              width={256}
              src={`/${item}.png`}
              alt="pic"
              id={`${item}`}
            />
          ))}
          {skills.top.map((item, id) => (
            <Image
              key={id}
              height={256}
              width={256}
              src={`/${item}.png`}
              alt="pic"
              id={`${item}`}
            />
          ))}
        </div>
        <div className="car car2">
          {skills.bottom.map((item, id) => (
            <Image
              key={id}
              height={256}
              width={256}
              src={`/${item}.png`}
              alt="pic"
              id={`${item}`}
            />
          ))}
          {skills.bottom.map((item, id) => (
            <Image
              key={id}
              height={256}
              width={256}
              src={`/${item}.png`}
              alt="pic"
              id={`${item}`}
            />
          ))}
          {skills.bottom.map((item, id) => (
            <Image
              key={id}
              height={256}
              width={256}
              src={`/${item}.png`}
              alt="pic"
              id={`${item}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const projects = [
    {
      title: "WeatherNXT",
      category: "Web",
      description:
        "WeatherNxt - Live weather updates. It provides live weather updates from the current location of the user as well as allows them to search for weather information from any place in the world. This application uses APIs from OpenWeatherMap (fetching weather), OpenCageData (forward geocoding), and Unsplash for the beautiful background images that represent the location of the weather.",
      tags: ["Typescript", "Reactjs", "API"],
    },
    {
      title: "DurgaPedia",
      category: "Web",
      description:
        "Durgapedia (https://durgapedia.online) is a solution to optimise your pandal-hopping experience during the Durga Puja days in Kolkata, India. It provides you with a complete plan of puja pandals near you. You get precise locations of pandals and the shortest route to take between them. This lets you spend less time on the road and more time clicking pictures of durga protimas.",
      tags: ["Nextjs", "Typescipt", "Maps", "Graph"],
    },
    {
      title: "Campuspace",
      category: "Web",
      description:
        "With our specialized social media web app, we offer a dedicated platform for mentors and entrepreneurs to connect, collaborate, and thrive in the world of startups. Say goodbye to generic networking platforms and hello to a tailored and relevant experience designed to empower the next generation of entrepreneurs.",
      tags: ["Javascript", "jQuery", "Codeigniter", "Php", "HTML5"],
    },
  ];
  const colors = [
    "#E3F2FD",
    "#FFF8E1",
    "#E8EAF6",
    "#E1F5FE",
    "#FFEBEE",
    "#F3E5F5",
    "#EDE7F6",
    "#F1F8E9",
    "#E0F2F1",
    "#E8F5E9",
    "#E0F7FA",
    "#FFF3E0",
    "#FFFDE7",
    "#FCE4EC",
    "#F9FBE7",
    "#FBE9E7",
    "#ECEFF1",
    "#EFEBE9",
  ];
  return (
    <section className="project-container" id="project">
      <h1>My Projects</h1>
      <div className="grid">
        {projects.map((item, id) => (
          <div
            key={id}
            className="project-tab"
            style={{
              backgroundColor: `${colors[id]}`,
            }}
          >
            <span>
              <Image
                height={20}
                width={20}
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABP0lEQVR4nO2ZQU7DMBBF3yorbkARvQb0fKVwgp6gXADWXTQXQSJhwSUGWZpIUZWAaztpjOdJf9HUGfvbTibWwHSsgVfgW3UA7smMFdAAcqZP4JaM2OvA33TgTu96zf03OxXwAnwNzK6P+rN/FxijBXY6lmCeAzt3Og3EqyPiPcUYaTXIwy9tuo5C+ev+x97KTNaJb5tr90FRRlpt47bApWz03ibBOKID7CIe4E7bJRip1Ey3MpeoURPVEozMgZgRxVYkMWJbq6StdRx4nbqPwuyMyIiyNTL2+wb4CEiSdS/GWOwsjJyuZST7rVV7zmYKxPKIYnkkMWIPu2J5BMsjg1geKer1Oydi55GSPhrFziPYeSQYO48kRiyPlJQQ50TMyH9bkTai0JmKjWfBdPJCZyptY4zEFDpTqfEsmBosiR8HFg/SQKU+VQAAAABJRU5ErkJggg=="
                }
                alt="pic"
              />
              <h2>{item.title}</h2>
              <h3>{item.category}</h3>
            </span>
            <p>{item.description}</p>
            <p className="tags">
              {item.tags.map((tag, id) => (
                <span key={id}>{tag}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
const Resume = () => {
  const pdfUrl = "../public/resume.pdf";
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfUrl
  )}&embedded=true`;

  return (
    <section className="resume-container" id="resume">
      <h1>My Resume</h1>
      <object data="/resume.pdf" aria-label="resume in document format">
        <p>
          It appears you do not have a PDF plugin for this browser. You can{" "}
          <Link href={"/resume.pdf"}>
            <strong>click here to download the PDF file.</strong>
          </Link>
        </p>
      </object>
    </section>
  );
};
const Contact = () => (
  <section className="contact-container" id="contact">
    <h1>Contact Me</h1>
    <p>
      Email:{" "}
      <Link
        href={"mailTo:parthib22.ds@gmail.com"}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        <strong> parthib22.ds@gmail.com</strong>
      </Link>
    </p>
    <p>
      LinkedIn:{" "}
      <Link
        href={"linkedin.com/in/parthibds/"}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        <strong> Parthib Dey Sarkar</strong>
      </Link>
    </p>
    <p>
      Phone:
      <strong> +91 98745 43210</strong>
    </p>
  </section>
);
const Footer = () => (
  <footer>
    <p>&copy; 2024 Parthib Dey Sarkar. All rights reserved.</p>
  </footer>
);
export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
