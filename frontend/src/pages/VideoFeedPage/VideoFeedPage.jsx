import { useState } from "react";
import { Header } from "../../components/header/Header";
import "./videofeedpage.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { VideoList } from "../../components/videoList/VideoList";

export function VideoFeedPage({menu, setMenu}) {
  const [description, setDescription] = useState(true);
  function expandDescription() {
    setDescription(!description);
  }

  return (
    <>
    <main>
      <Header menu={menu} setMenu={setMenu}/>
      <Sidebar menu={menu} /> 
      <div id={menu? 'sidebar-open' : 'sidebar-close'}></div>
      <div className="video-section-container">
        <section className="video-section">
          <div className="video-feed">
            <video src="sample-video.mp4" width="700px" controls></video>
          </div>
          <div className="video-title">
            <span>HTML & CSS Full Course- Beginner to Pro</span>
          </div>
          <div className="video-data">
            <div>
              <img src="channel-img-1.jpg" width="25px" alt="" />
              <div className="channel-info">
                <span className="channel-name">SuperSimpleDev</span>
                <span className="channel-subs">8.05 lakh subscribers</span>
              </div>
              <button className="join-button">Join</button>
              <button id="notification-button">
                <img src="bell.svg" width="18px" alt="" />
                <img src="arrow-down.svg" width="10px" alt="" />
              </button>
            </div>
            <div className="video-option">
              <div className="like-dislike-buttons">
                <button id="like-button">
                  <img src="thumbs-up.svg" width="18px" alt="" />
                  <span>3.8 lakh</span>
                </button>
                <button id="dislike-button">
                  <img src="thumb-down.svg" width="18px" alt="" />
                </button>
              </div>
              <button>
                <img src="share-2.svg" width="18px" alt="" />
                <span>Share</span>
              </button>
              <button>
                <img src="star.svg" width="18px" alt="" />
                <span>Ask</span>
              </button>
              <button>
                <img src="save.svg" width="18px" alt="" />
                <span>Save</span>
              </button>
              <button>
                <img src="three-dots.svg" width="18px" alt="" />
              </button>
            </div>
          </div>
          <div className="feed-video-description">
            <p className="video-description-content">
              {description
                ? `1.9 crore views  4 years ago  #csstutorial #htmltutorial #css
Get a certificate for this course: https://courses.supersimple.dev/cours...
or Frontend Bundle (React, JS, HTML CSS): https://courses.supersimple.dev/bundl...
🎓 Includes certificate of completion and better learning experience (smaller videos, ads-free) …`
                : `1,90,10,788 views  5 Feb 2022  #csstutorial #htmltutorial #css
Get a certificate for this course: https://courses.supersimple.dev/cours...
or Frontend Bundle (React, JS, HTML CSS): https://courses.supersimple.dev/bundl...
🎓 Includes certificate of completion and better learning experience (smaller videos, ads-free)
✅ Don't worry if you're halfway through or finished the course, you can skip the lessons you  finished and take a final test to get a Certificate.
❤️ Thanks for supporting SuperSimpleDev!

In this full course, we learn how to build websites with HTML and CSS, and get started as a software engineer.
Exercise solutions: https://github.com/SuperSimpleDev/htm...
Copy of the code: https://github.com/SuperSimpleDev/htm...
HTML and CSS reference: https://supersimpledev.github.io/refe...

JavaScript Full Course:    • JavaScript Tutorial Full Course - Beginner...  

🎓 Premium Courses (get a certificate, better learning experience, support SuperSimpleDev ❤️)
Frontend Bundle (React, JS, HTML CSS): https://courses.supersimple.dev/bundl...
React Premium Course: https://courses.supersimple.dev/cours...
JavaScript Premium Course: https://courses.supersimple.dev/cours...
HTML CSS Premium Course: https://courses.supersimple.dev/cours...

⭐️ More in-depth videos, secrets of my channel, work-in-progress courses:
Membership:    / @supersimpledev   or https://member.supersimple.dev (10-20% OFF USD price)

Lessons:
0:00 Intro
1:02 1. HTML Basics
17:42 2. CSS Basics
44:39 3. Hovers, Transitions, Shadows
1:03:10 4. Chrome DevTools & CSS Box Model
1:17:30 5. Text Styles
1:52:18 6. The HTML Structure
2:11:08 7. Images and Text Boxes
2:25:42 8. CSS Display Property
2:34:58 9. The div Element
2:46:55 10. Nested Layouts Technique
3:16:58 11. CSS Grid
3:43:58 12. Flexbox
4:15:21 13. Nested Flexbox
4:44:36 14. CSS Position
5:07:14 15. Position Absolute and Relative
5:33:49 16. Finish the Project
6:07:46 17. More CSS Features
6:30:21 Outro

Additional Information:
This HTML CSS full course is a series of HTML CSS tutorials, teaching the major skills that we need to create complex websites. Each HTML CSS tutorial builds on a project and provides some HTML CSS exercises to practice what we learned. By the end, we'll learn the basics of web development and we'll be on our way to becoming a web developer and software engineer.

#htmltutorial #csstutorial #htmlcssfullcourse #html #css #tutorial #fullcourse #course #htmltutorial #csstutorial #htmlcsstutorial #htmlfullcourse #cssfullcourse #webdevelopment #advancedhtmltutorial #advancedcsstutorial #coding #codingtutorial #softwareengineer #softwareengineering #learntocode #supersimpledev`}
              <button onClick={expandDescription}>
                show {description ? "more" : "less"}
              </button>
            </p>
          </div>
          <div className="comments-container">
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-box-dp">
                <img src="channel-img-1.jpg" width="20px" alt="" />
              </div>
              <div className="comment-box-content">
                <div className="comment-box-header">
                  <span className="username">@Strawberricc</span>
                  <span className="comment-time">2 weeks ago</span>
                </div>
                <span className="comment">Anyone starting in June 2026?</span>
                <div className="comment-options">
                  <span>
                    <button>
                      <img src="thumbs-up.svg" width="10px" alt="" />
                      <span className="comment-likes-count">375</span>
                    </button>
                  </span>
                  <button>
                    <img src="thumb-down.svg" width="10px" alt="" />
                  </button>
                  <button className="reply-button">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recommendations">
          <VideoList />
        </section>
      </div>
    </main>
    </>
  );
}
