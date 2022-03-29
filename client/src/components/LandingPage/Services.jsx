import React from 'react'

function Services(props) {
  return (
    <div className='Service-Container'>
        <header>
          <p>Do you need help with keeping your business online</p>       
        </header>

      <main>

        <header>
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>
        </header>

        <div className='PricingCard-Container'>
        <section>
        

          <main>
            
            <aside className='ServicePricing-Container'>
              <ul className='TwoColumnsGrid'>
              <h4 className='Span2'>Mobile Website</h4>
                <li>Mobile Design</li>
                <li>$250.00</li>
                <li>Development</li>
                <li>$250.00</li>
                <li>Total__________</li>
                <li>$500.00</li>
              </ul>

              <ul>
              <h5>Included in your Subscription</h5>
                <li>SSL Certificate</li>
                <li>Regular Maintains</li>
                <li>Unlimited Updates</li>
                <li>Re-deployment</li>
              </ul>
              <footer>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick"/>
                            <input type="hidden" name="hosted_button_id" value="8XQJR2M39U7FQ"/>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
                                border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                                height="1"/>
                        </form>

                        <h3>$40.00/month</h3>
                    </footer>

            </aside>

          </main>
        </section>

        
        
        <section>
        

          
            <main>
            
            <aside className='ServicePricing-Container'>
              <ul className='TwoColumnsGrid'>
              <h4 className='Span2'>Essential Website</h4>
                <li>Mobile Design</li>
                <li>$250.00</li>
                <li>Tablet Design</li>
                <li>$250.00</li>
                <li>Desktop Design</li>
                <li>$250.00</li>
                <li>Development</li>
                <li>$750.00</li>
                <li>Total__________</li>
                <li>$1,500.00</li>
              </ul>

              <ul>
              <h5>Included in your Subscription</h5>
                <li>SSL Certificate</li>
                <li>Regular Maintains</li>
                <li>Unlimited Updates</li>
                <li>Re-deployment</li>
              </ul>
              <footer>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick"/>
                            <input type="hidden" name="hosted_button_id" value="FS7CZ3EALU6N4"/>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
                                border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                                height="1"/>
                        </form>

                        <h3>$60.00/month</h3>
                    </footer>

            </aside>

          </main>

        </section>

        <section>
      

          <main>
            
            <aside className='ServicePricing-Container'>
              <ul className='TwoColumnsGrid'>
              <h4 className='Span2'>Web App</h4>
                <li>Design and Planning</li>
                <li>$2,500.00</li>
            
              </ul>

              <aside className='WebAppContainer'>
                                <ul>
                                    <li>
                                        <input type="checkbox" name="" id="" checked/>
                                        <h3>Frontend Developer...</h3>
                                        <h3>$1,000.00</h3>
                                    </li>

                                    <li>
                                        <input type="checkbox" name="" id="" checked/>
                                        <h3>Backend Developer...</h3>
                                        <h3>$1,000.00</h3>
                                    </li>

                                    <li>
                                        <input type="checkbox" name="" id="" checked/>
                                        <h3>Operations Developer...</h3>
                                        <h3>$1,000.00</h3>
                                    </li>

                                </ul>
                      </aside>
                      <ul className='TwoColumnsGrid'>
                <li>Total___________</li>
                <li>$5,500.00</li>
            
              </ul>

              <ul>
              <h5>Included in your Subscription</h5>
                <li>SSL Certificate</li>
                <li>Regular Maintains</li>
                <li>Unlimited Updates</li>
                <li>Re-deployment</li>
              </ul>
              <footer>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick"/>
                            <input type="hidden" name="hosted_button_id" value="M56XHSE6QPJVC"/>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
                                border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                                height="1"/>
                        </form>


                        <h3>$150.00/month</h3>
                    </footer>

            </aside>

          </main>
        </section>
        </div>
      </main>

    </div>
  )
}


export default Services
