import { useState, useEffect } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
  const [isOpena, setIsOpena] = useState(false);
  const [isOpenb, setIsOpenb] = useState(false);
  const [isOpenc, setIsOpenc] = useState(false);
  const [isOpend, setIsOpend] = useState(false);
  
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: 'ease',
      Once: false,
    });
  })

  return (
    <div>
      <main>
        <div className="main-text" data-aos='slide-up' data-aos-delay='50'>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="main-btn" >
            <button className="btn">Get it on Chrome</button>
            <button className="btn bt-1">Get it on Firefox</button>
          </div>
        </div>
        <div className="main-img" data-aos='zoom-out-left' data-aos-delay='100'>
          <div className="img"></div>
          <div className="main-bg"></div>
        </div>
      </main>

      <section>
        <div className="sect-1-cont">
          <div className="sect-1-head" data-aos='zoom-out-up' data-aos-delay='350'>
            <h1>Features</h1>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="mini-routes" data-aos='zoom-out-right' data-aos-delay='700'>
            <NavLink to="bookmarking" className="mini-route">
              Simple Bookmarking
            </NavLink>
            <NavLink to="searching" className="mini-route">
              Speedy Searching
            </NavLink>
            <NavLink to="sharing" className="mini-route">
              Easy Sharing
            </NavLink>
          </div>
          <div className="route-content" data-aos='zoom-in-left' data-aos-delay='800'>
            <Outlet />
          </div>
        </div>
      </section>

      <section>
        <div className="sect-2">
          <div className="sect-2-head" data-aos='zoom-out-up' data-aos-delay='350'>
            <h1>Download the extension</h1>
            <p>
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>
          <div className="box-cont">
            <div className="box box-1" data-aos='zoom-out-left' data-aos-delay='1000'>
              <div className="chrome">
                <div className="img"></div>
              </div>
              <h2>Add to Chrome</h2>
              <p>Minimum version 62</p>
              <div className="line">
                <div className="img"></div>
              </div>
              <button className="btn">Add & Install Extension</button>
            </div>
            <div className="box box-2" data-aos='zoom-in-up' data-aos-delay='900'>
              <div className="firefox">
                <div className="img"></div>
              </div>
              <h2>Add to Firefox</h2>
              <p>Minimum version 55</p>
              <div className="line">
                <div className="img"></div>
              </div>
              <button className="btn">Add & Install Extension</button>
            </div>
            <div className="box box-3" data-aos='zoom-out-right' data-aos-delay='800'>
              <div className="opera">
                <div className="img"></div>
              </div>
              <h2>Add to Opera</h2>
              <p>Minimum version 46</p>
              <div className="line">
                <div className="img"></div>
              </div>
              <button className="btn">Add & Install Extension</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sect-3">
          <div className="sect-3-head" data-aos='fade-down-right'>
            <h1>Frequently Asked Questions</h1>
            <p>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          <div className="questions" data-aos='zoom-in-left' data-aos-delay='600'>
            <button
              onClick={() => setIsOpena((prev) => !prev)}
              className="quest-btn"
            >
              <div className="quest-cont">
                <h3>What is Bookmark?</h3>
              </div>
              {!isOpena ? (
                <IoIosArrowDown className="arrowDown"/>
              ) : (
                  <IoIosArrowUp  className="arrowUp"/>
              )}
            </button>
            {isOpena && (
              <div className="ans-cont" data-aos='zoom-in-left'>
                <div className="ans">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce tincidunt justo eget ultricies fringilla. Phasellus
                    blandit ipsum quis quam ornare mattis.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsOpenb((prev) => !prev)}
              className="quest-btn"
            >
              <div className="quest-cont">
                <h3>How can I request a new browser?</h3>
              </div>
              {!isOpenb ? (
                <IoIosArrowDown className="arrowDown"/>
              ) : (
                  <IoIosArrowUp  className="arrowUp"/>
              )}
            </button>
            {isOpenb && (
              <div className="ans-cont" data-aos='zoom-in-left'>
                <div className="ans">
                  <p>
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdie
                    tVivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsOpenc((prev) => !prev)}
              className="quest-btn"
            >
              <div className="quest-cont">
                <h3>Is there a mobile app?</h3>
              </div>
              {!isOpenc ? (
                <IoIosArrowDown className="arrowDown"/>
              ) : (
                  <IoIosArrowUp  className="arrowUp"/>
              )}
            </button>
            {isOpenc && (
              <div className="ans-cont" data-aos='zoom-in-left'>
                <div className="ans">
                  <p>
                    Sed consectetur quam id neque fermentum accumsan. Praesent
                    luctus vestibulum dolor, ut condimentum urna vulputate eget.
                    Cras in ligula quis est pharetra mattis sit amet pharetra
                    purus. Sed sollicitudin ex et ultricies bibendum.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsOpend((prev) => !prev)}
              className="quest-btn"
            >
              <div className="quest-cont">
                <h3>What about other Chromium browsers?</h3>
              </div>
              {!isOpend ? (
                <IoIosArrowDown className="arrowDown"/>
              ) : (
                  <IoIosArrowUp  className="arrowUp"/>
              )}
            </button>
            {isOpend && (
              <div className="ans-cont" data-aos='zoom-in-left'>
                <div className="ans">
                  <p>
                    Integer condimentum ipsum id imperdiet finibus. Vivamus in
                    placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                    gravida pellentesque non ut velit.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <button className="btn" data-aos='zoom-in-down' data-aos-delay='550'>More Info</button>
        </div>
      </section>

      <footer>
        <div className="foot-head">
          <p data-aos='zoom-out-up' data-aos-delay='600'>35,000+ ALREADY JOINED</p>
          <h2 data-aos='zoom-out-right' data-aos-delay='700'>Stay up-to-date with what we’re doing</h2>
          <div className="aside" data-aos='zoom-in-left' data-aos-delay='800'>
            <input type="text" placeholder="Enter your email address" />
            <button className="btn">Contact Us</button>
          </div>
        </div>
        <div className="foot">
          <div className="foot-aside" >
            <div className="foot-logo">
              <div className="img"></div>
            </div>
            <div className="foot-navs">
              <Link to="/features" className="foot-nav">
                FEATURES
              </Link>
              <Link to="/pricing" className="foot-nav">
                PRICING
              </Link>
              <Link to="/contact" className="foot-nav">
                CONTACT
              </Link>
            </div>
          </div>
          <div className="foot-icons">
            <div className="icons">
            <Link href='facebook.com' className="facebook" target="_blank">
              <div className="img"></div>
            </Link>
            <Link href='twitter.com' className="twitter" target="_blank">
              <div className="img"></div>
            </Link>
            </div>
           <div class="attribution" > Coded by <a href="https://portfolio-ten-chi-17.vercel.app/">Zcodes</a>..</div>
          </div>
           </div>
      </footer>
    </div>
  );
};

export default Home;
