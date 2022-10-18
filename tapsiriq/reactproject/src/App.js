import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <main>
       <div class="row">
           <div class="col-logo">
            <img src="image/fb_logo.svg" alt="logo"/>
            <h2>Connect with friends and the world around you on Facebook.</h2>
           </div>
           <div class="col-form">
               <div class="form-container">
                   <input type="text" placeholder="Email or phone number"/>
                   <input type="Password" 
                   placeholder="Password"/>
                   <button class="btn-login">login</button>
                   <a href="#">Forgotten password?</a>
                   <button class="btn-new">Create New 
                    Account</button>
               </div>
                 <p><a href="#">Create a Page</a> for 
                 a celebrity, brand or business.</p>  
           </div>
       </div> 
    </main>
    <footer>
        <div class="footer-container">
            <ol>
              <li>English (US)</li>
              <li><a href="#">Azərbaycan dili</a></li>
              <li><a href="#">Türkçe</a></li>
              <li><a href="#">Русский</a></li>
              <li><a href="#">العربية</a></li>
              <li><a href="#">Deutsch</a></li>
              <li><a href="#">Français (France)</a></li>
              <li><a href="#">فارسی</a></li>
              <li><a href="#">ქართული</a></li>
              <li><a href="#">Español</a></li>
              <li><a href="#">Português (Brasil)</a></li>
              <li><button>+</button></li>
            </ol>   
              <ol>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Facebook Lite</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Meta Pay</a></li>
                <li><a href="#">Oculus</a></li>
                <li><a href="#">Portal</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Bulletin</a></li>
                <li><a href="#">Local</a></li>
                <li><a href="#">Fundraisers</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Voting Information Center</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Create Ad</a></li>
                <li><a href="#">Create Page</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Ad choices</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contact Uploading & Non-Users</a></li>
              </ol>
              <small>Meta © 2022</small>
        </div>
    </footer>   
    </div>
  );
}

export default App;
