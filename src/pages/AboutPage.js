import "./About.css";

const AboutPage = () => {
  return (
    <section id="about" className="sub-header">
      <h2>About Me</h2>
      <div className="outer">
        <div className="inner">
          <p>
            Hello! My name is Daniel and I enjoy building web applications. My
            interest in programming started in 2018 just after graduating high
            school. I started off with making 2D games, to building GUIs, then
            android applications, and now web applications.
          </p>
          <p>
            Also, I have experience with DevOps practices: Continuous
            Integragtion, Continuous Delivery, Infrastructure as Code,
            Communication and Collaboration.
          </p>
          <div>
            <p>
              Here are languages & technologies I've been working with recently:
            </p>
            <div>
              <h4>Languages</h4>
              <p>
                <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
                <span>Python</span> <span>Shell scripting</span>
                <span>Powershell scripting</span> <span>Git</span>
              </p>
            </div>
            <div>
              <h4>Technologies / Tools</h4>
              <p>
                <span>React</span> <span>Next.js</span> <span>Node.js</span>
                <span>AWS</span> <span>Jenkins</span> <span>Terraform</span>
              </p>
            </div>
          </div>
        </div>
        <div className="inner profile">
          <img
            width="300"
            height="300"
            src="./user.png"
            alt="A Bitmoji of Daniel Ukoha"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
