import React from "react";
import "../../CSS/Home/FaqAccordion.css";
import Accordion from "react-bootstrap/Accordion";

function FaqAccordion() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>
        <p className="text-center mb-5">
          Here are a few frequently asked questions and their answers to ease
          your way in!
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How do I join groups on the platform?
            </Accordion.Header>
            <Accordion.Body>
              Simply navigate to the 'Groups' section and browse through the
              available options. Click on the group you're interested in, then
              hit the 'Join' button to become a member. It's that easy!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I share my own study materials and resources with others?
            </Accordion.Header>
            <Accordion.Body>
              Absolutely! Our platform encourages sharing and collaboration. You
              can upload your study materials, notes, and resources to relevant
              groups or share them directly with your peers to contribute to the
              collective learning experience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Are there any privacy settings to control who sees my posts and
              activities?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer robust privacy settings to ensure you have control
              over your online presence. You can adjust your visibility
              settings, choose who can see your posts and activities, and even
              create private groups for more intimate discussions and
              collaboration.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How can I report inappropriate behavior or content on the
              platform?
            </Accordion.Header>
            <Accordion.Body>
              Your safety and comfort are our top priorities. If you encounter
              any inappropriate behavior or content, you can easily report it to
              our dedicated support team. Simply click on the 'ContactUS' button
              on the Home Page or reach out to us directly, and we'll take
              prompt action to address the issue.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
