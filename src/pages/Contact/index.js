import React from "react";
import Container from "../../components/Container"
import Row from "../../components/Row";
import Col from "../../components/Col/";
import Title from "../../components/Title";



function Contact() {
  return (
   <div>
    <Container>
      <Row>
        <Title></Title>
        <Col size="md-12">
        <section>
              <form className="form">
                <h2>Contact 📫</h2>
                <div className="form-group">
                  <label for="Name">Name</label>
                  <input className="form-control" type="text" placeholder="Enter Name"/> 
                </div>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-dark">I promise not to share your email with your enemies.</small>
                </div>
                <div className="form-group">
                  <label for="Message">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
          </section>
        </Col>
      </Row> 
    </Container>
    </div>
  );
}

export default Contact;