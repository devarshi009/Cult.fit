import { Link } from "react-router-dom";
import "./footer.css";
//  import appStore from "../../images/app-store.svg";

//  import playStore from "../../images/play-store.svg";
//  import cult from "../../images/cult-logo-white.svg";
//  import fb from "../../images/facebook_icon_white.svg";
//  import twitter from "../../images/twitter_icon_white.svg";
//  import insta from "../../images/instagram_icon_white.svg";
//  import youtube from "../../images/youtube_icon_white_1.svg";

 const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="top_section">
          <div class="logo_section">
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="Cult logo" />
            <p>
              {`At cult.fit, we make group workouts fun, daily food healthy &
              tasty, mental fitness easy with yoga & meditation, and medical &
              lifestyle care hassle-free. #BeBetterEveryDay`}
            </p>
          </div>
          <div class="about_links">
            <ul>
              <>
                <Link to="/">cult.fit franchise</Link>
              </>
              <>
                <Link to="/">Corporate patnerships</Link>
              </>
              <>
                <Link to="/">cult pass network</Link>
              </>
              <>
                <Link to="/">t&c for business</Link>
              </>
              
            </ul>
          </div>
          <div id="farzi">
            <ul>
                <>
                <Link to="/">blogs</Link>
                </>
                <>
                <Link to="/">security</Link>
                </>
                <>
                <Link to="/">career</Link>
                </>
            </ul>
          </div>
          <div class="business_links">
            <ul>
              <>
                <Link to="/">peivacy policy</Link>
              </>
              <>
                <Link to="/">cult bmi catculator</Link>
              </>
              <>
                <Link to="/">terms & condition</Link>
              </>
             
            </ul>
          </div>
          <div class="download_app">
            <Link to="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png" alt="App store" />

            </Link>
            <Link to="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png" alt="Play store" />
            </Link>
          </div>
        </div>

        <div class="related_searches_section">
          <h4>Related searches</h4>
          <div class="search_list">
            <Link to="/">Gym Near Me</Link>
            <Link to="/">Online Personal Training</Link>
            <Link to="/">Online Doctor Consultation</Link>
            <Link to="/">Therapist Consultation</Link>
            <Link to="/">Online Fitness Classes</Link>
            <Link to="/">Consult Cardiologist Online</Link>
            <Link to="/">Consult Nutritionist Online</Link>
            <Link to="/">Consult Gynecologist Online</Link>
            <Link to="/">Diagnostic Tests</Link>
            <Link to="/">Food Near Me</Link>
            <Link to="/">Healthy Recipes</Link>
            <Link to="/">Chest Exercises</Link>
            <Link to="/">Exercise To Reduce Belly Fat</Link>
            <Link to="/">Six Pack Workout</Link>
            <Link to="/">Yoga Postures for Beginners</Link>
            <Link to="/">Surya Namaskar for Beginners</Link>
            <Link to="/">Yoga For Stress Relief</Link>
            <Link to="/">Yoga Asanas</Link>
            <Link to="/">Meditation Music</Link>
            <Link to="/">Pranayama</Link>
            <Link to="/">Bedtime Stories for Kids</Link>
            <Link to="/">Meditation in Hindi</Link>
            <Link to="/">Mindfulness Meditation</Link>
            <Link to="/">Yoga Nidra</Link>
            <Link to="/">Dermatologist online</Link>
            <Link to="/">Orthopedist doctor near me</Link>
            <Link to="/">Gyms in Mumbai</Link>
            <Link to="/">Gyms in Delhi</Link>
            <Link to="/">Gyms in Pune</Link>
            <Link to="/">Gyms in Hyderabad</Link>
            <Link to="/">Gyms in Chennai</Link>
            <Link to="/">Gyms in Jaipur</Link>
            <Link to="/">Gyms in Kolkata</Link>
            <Link to="/">Gyms in Ahmedabad</Link>
            <Link to="/">Gyms in Chandigarh</Link>
            <Link to="/">Gyms in Indore</Link>
            <Link to="/">Gyms in Coimbatore</Link>
            <Link to="/">Gyms in Bangalore</Link>
            <Link to="/">Home Workouts</Link>
            <Link to="/">Belly Fat Loss Exercise</Link>
            <Link to="/">Weight Loss Exercise</Link>
            <Link to="/">Strength Training</Link>
            <Link to="/">Mobility Exercises</Link>
            <Link to="/">Kids Exercise</Link>
            <Link to="/">Dance Exercises</Link>
            <Link to="/">How to Lose Weight</Link>
            <Link to="/">HIIT Workout</Link>
            <Link to="/">Exercises for Toned Body</Link>
            <Link to="/">Core Exercises</Link>
            <Link to="/">Butt Exercises</Link>
            <Link to="/">Arm Workout</Link>
            <Link to="/">Back Exercises</Link>
            <Link to="/">Abs Workout</Link>
            <Link to="/">Thigh Exercises</Link>
          </div>
        </div>

        <div class="bottom">
          <div class="links">
            <Link to="/">Contact us</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">{`Terms & conditions`}</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Refund policy</Link>
          </div>
          <div class="social_icons">
            <Link to="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer