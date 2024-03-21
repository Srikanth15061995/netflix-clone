import React from 'react'
import './nqtfaqsec.css'
const Nqtfaqsection = () => {
  return (
    <>
    <div className="nqtfaqsection">
        <div className="nqtfaqsec">
                <div className="nqtfaqheading">
                     <h1>Frequently Asked Questions</h1>
                </div>

            {/* faq1 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What is Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                    </details> 
                </div>
            </div>
            {/* faq2 */}
                <div className="nqtfaq-boxes">
                    <div className="nqtfaq">
                        <details className="nqtperehide">
                            <summary className="nqtlabel-faq-text">
                                <div className="peragraphs"> 
                                    <p>How much does Netflix Cost</p>
                                    <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                                </div>
                            </summary>
                            <p className='perafaq'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.</p>
                        </details> 
                    </div>
                </div>  
            {/* faq3 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>Where can I watch?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    </details> 
                </div>
            </div>
            {/* faq4 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>How do I cancle?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </details> 
                </div>
            </div>
            {/* faq5 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>What can I watch on Netflix?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <p className='perafaq'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </details> 
                </div>
            </div>
            {/* faq6 */}
            <div className="nqtfaq-boxes">
                <div className="nqtfaq">
                    <details className="nqtperehide">
                        <summary className="nqtlabel-faq-text">
                            <div className="peragraphs"> 
                                <p>Is Netflix good for kids?</p>
                                <img src={require ("./ntfimages/icons8-plus-24.png")} alt="" />
                            </div>
                        </summary>
                        <div className='perafaq'>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                            
                        </div>
                    </details> 
                </div>
            </div>
            {/* faqs*/}

        </div>

       <div className="lastpera">
        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
       <div className="herosec-searchbox">
                    <div className="hero-searchboxinput">
                        <input type="email" placeholder='Email address' />
                    </div>
                    <div className="hero-searchboxbtn"> 
                        <button>Get Started <span>&gt;</span></button>
                    </div>
                </div>
       </div>
    </div>

    </>
  )
}

export default Nqtfaqsection
