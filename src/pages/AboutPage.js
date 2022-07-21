import "./About.css";
import userImg from "../assets/shared/user.png";

const AboutPage = () => {
  return (
    <section className="sub-header">
      <h2>About Me</h2>
      <div className="outer">
        <div className="inner">
          <p>
            Hello! My name is Daniel and I enjoy building web applications, and
            making game. My interest in programming start in 2018 just after
            graduating high school. I started off with making 2D games, to
            building GUIs, then android applications, and now web applications.
          </p>
          <p>
            Also, I have experience with DevOps practices: Continuous
            Integragtion, Continuous Delivery, Infrastructure as Code,
            Communication and Collaboration.
          </p>
          <p>
            Here are languages & technologies I've been working with recently:
            <div>
              <h4>Languages</h4>
              <p>
                <span>HTML</span> <span>CSS</span> <span>JavaScript</span>{" "}
                <span>Node.js</span> <span>Python</span>{" "}
                <span>Shell scripting</span> <span>Git</span>
              </p>
            </div>
            <div>
              <h4>Technologies / Tools</h4>
              <p>
                <span>Bootstrap</span> <span>Jenkins</span>{" "}
                <span>Terraform</span> <span>Ansible</span> <span>AWS</span>{" "}
                <span>Linux</span> <span>Github</span> <span>VS Code</span>
              </p>
            </div>
          </p>
        </div>
        <div className="inner profile">
          <img
            width="300"
            height="300"
            src={userImg}
            alt="A Bitmoji Headshot"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
