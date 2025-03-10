import React from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col/'
import Title from '../../components/Title'

function Contact() {
  return (
    <div>
      <Row>
        <Title></Title>
        <Col size="md-12">
          <section>
            <div id="mc_embed_signup">
              <form
                className="form validate"
                action="https://gmail.us1.list-manage.com/subscribe/post?u=3d1ca8922aef1c0d21e536517&amp;id=75caa397d7"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                novalidate
              >
                <h2>Contact 📫</h2>
                <div className="form-group">
                  <label for="Name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-dark">
                    I promise not to share your email with your enemies.
                  </small>
                </div>
                <div className="form-group">
                  <label for="Message">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  name="b_3d1ca8922aef1c0d21e536517_75caa397d7"
                  id="mc-embedded-subscribe"
                  className="btn btn-dark"
                >
                  Submit
                </button>
                <div aria-hidden="true">
                  <input
                    type="text"
                    name="b_3d1ca8922aef1c0d21e536517_75caa397d7"
                    tabindex="-1"
                    value=""
                  />
                </div>
                {/* /* <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /> 
                  </div> */}
              </form>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
