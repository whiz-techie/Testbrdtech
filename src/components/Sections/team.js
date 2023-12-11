/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './team.css';
import Banner2 from "../Banner2";
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Team () {
    let message = `There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour.`;
    return (
      <section class=" ">
 
    <div >
 
        <div class="row">
       
          <Banner2 text={"Team"}/>
          <div className="flex flex-wrap justify-around">


            <div class="col-sm-6 w-[350px] col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
                      <h3>JOHNATHAN HAWKINS</h3>            
                      <div class="team-info"><p>Head of SEO</p></div>
                      <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter">
                            <FaTwitter
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
            w="20px"
            />
                            </i>
                        </a></li>

                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest">
                            <FaLinkedinIn
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
                            </i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook">
                            <FaFacebook
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          
        />
                            </i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble">
                            <FaInstagram
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
                            </i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
            <div class="col-sm-6 w-[350px] col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />
                     
                      <h3>ALEXANDRA SMITHS</h3>
                      
                      <div class="team-info"><p>SEO Specialist</p></div>

                      <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter">
                            <FaTwitter
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
            w="20px"
            />
                            </i>
                        </a></li>

                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest">
                            <FaLinkedinIn
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
                            </i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook">
                            <FaFacebook
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          
        />
                            </i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble">
                            <FaInstagram
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
                            </i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 w-[350px] col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
                     
                      <h3>ELISA JOHANSON</h3>
                      
                      <div class="team-info"><p>Marketing Manager</p></div>

                      <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter">
                            <FaTwitter
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
            w="20px"
            />
                            </i>
                        </a></li>

                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest">
                            <FaLinkedinIn
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
                            </i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook">
                            <FaFacebook
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          
        />
                            </i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble">
                            <FaInstagram
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
                            </i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
        
        </div>
      </div> 
    
    </div> 

    </section>
    )
}

export default Team;