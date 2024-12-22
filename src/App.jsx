import style from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={style.container}>
        <div className={style.resume_header}>
          <div className={style.img_contacts}>
            <img
              className={style.MyPhoto}
              src="/imgs/MyPhoto.jpeg"
              alt=""
            />
            <div className={style.contacts}>
              <a
                className={style.link}
                href="https://www.instagram.com/bt.ilya?igsh=MTI5Y2F5ZTR3cHpvZQ%3D%3D&utm_source=qr"
              >
                <img
                  className={style.contact_img}
                  src="/imgs/instagram.svg"
                  alt=""
                />
                bt.ilya
              </a>
              <a className={style.link} href="https://t.me/bimbimbambambumbim">
                <img
                  className={style.contact_img}
                  src="/imgs/telegram.svg"
                  alt=""
                />
                IlyaBackel
              </a>
              <a className={style.link} href="https://github.com/IlyaBackel?tab=repositories">
                <img
                  className={style.contact_img}
                  src="/imgs/github.svg"
                  alt=""
                />
                Ilya Backel
              </a>
            </div>
          </div>
          <div className={style.personal_information}>
            <div className={style.info}>
              <h1 className={style.name}>Ilya Backel</h1>
              <h3 className={style.prof}>Future FrontEnd Developer</h3>
            </div>
            <div className={style.list}>
              <p className={style.itemlist}>
                <b>DOB:</b> 18.01.2006
              </p>
              <p className={style.itemlist}>
                <b>From:</b> Belarus
              </p>
              <p className={style.itemlist}>
                <b>Education:</b> Belarusian State University, Math & CS
              </p>
              <p className={style.itemlist}>
                <b>Languages:</b> Russian - C2, English - B2
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className={style.about_me}>
          <div className={style.title}>
            <p>About me:</p>
          </div>
          <div className={style.text_about_me}>
            <span>
              Enthusiastic and detail-oriented web developer with a strong
              foundation in front-end and back-end technologies. Proficient in
              HTML, CSS, JavaScript, and React. Passionate about building
              responsive and user-friendly web applications that enhance user
              experience. Committed to continuous learning and staying updated
              with the latest industry trends and technologies. Excellent
              problem-solving skills and a collaborative mindset, eager to
              contribute to innovative projects.
            </span>
          </div>
        </div>

        <hr />

        <div className={style.skills_block}>
          <div className={style.title}>
            <p>Skils & Knowledge:</p>
          </div>
          <div className={style.languages}>
            <p>Languages:</p>
            <div className={style.list_of_languages}>
              <li>JavaScript</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
            </div>
          </div>
          <div className={style.technologies}>
            <p>Technologies:</p>
            <div className={style.list_of_technologies}>
              <li>React</li>
            </div>
          </div>
          <div className={style.environment}>
            <p>Dev-environment:</p>
            <div className={style.list_of_environment}>
              <li>VC Code</li>
              <li>WebStorm</li>
              <li>Xcode</li>
              <li>CLion</li>
              <li>Adobe Photoshop</li>
              <li>GIT</li>
              <li>Figma</li>
              <li>PyCharm</li>
            </div>
          </div>
        </div>

        <hr />

        <div className={style.works_block}>
          <div className={style.title}>
            <p>Works & Projects:</p>
          </div>
          <div className={style.works}>
            <div className={style.contain_of_work}>
              <img
                className={style.img_work}
                src="/imgs/todoist.jpeg"
                alt=""
              />
              <div className={style.about_work}>
                <p className={style.name_of_work}>
                  <b>Notes app</b>
                </p>
                <p className={style.description_of_work}>
                  The Notes App project is a task management web application
                  developed using React. It allows users to add challenges with
                  a title, description, and difficulty level (easy, medium,
                  hard). Tasks can be filtered by complexity and completion
                  status (completed/uncompleted), as well as edited and deleted.
                  To improve perception, tasks are highlighted in colors
                  depending on their complexity.The project uses components to
                  structure the code and CSS styles to create a modern and
                  user-friendly interface.
                </p>
                <div className={style.link_git}>
                  <a href="https://github.com/IlyaBackel/Notes-App">
                    Link in GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className={style.contain_of_work}>
              <img
                className={style.img_work}
                src="/imgs/lamoda.png"
                alt=""
              />
              <div className={style.about_work}>
                <p className={style.name_of_work}>
                  <b>Online Store</b>
                </p>
                <p className={style.description_of_work}>
                  The Online Store project is a web application for managing a
                  list of items, developed using React. Users can add items with
                  various attributes such as title and category. The application
                  provides filtering functions by name and multiple selection of
                  categories, as well as sorting items by popularity and other
                  criteria. The interface includes user-friendly search and
                  filter components, as well as a modern design using CSS to
                  improve the user experience.
                </p>
                <div className={style.link_git}>
                  <a href="https://github.com/IlyaBackel/Online-Store">
                    Link in GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
