import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const MainSection = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="playlist">
            <h1 style={{ textAlign: "left" }}>Make your party fun!</h1>
            <p style={{ textAlign: "left" }}>Create your own custom playlist today.</p>
            <Button
              style={{
                color: "black",
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid black",
              }}
            >
              Create Playlist
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0">
          <div className="trending-songs p-4" style={{ backgroundColor: "grey", width: "60%" }}>
            <h3 className="text-center mb-4">Trending songs</h3>
            <div className="song-list">
              <div className="song-item" style={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px" }}>
                <span>Unavailable by Davido</span>
                <Button color="white" className="btn-plus px-3 py-2" style={{ backgroundColor: "white" }}>+</Button>
              </div>
              <div className="song-item" style={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px" }}>
                <span>Unavailable by Davido</span>
                <Button color="white" className="btn-plus px-3 py-2" style={{ backgroundColor: "white" }}>+</Button>
              </div>
              <div className="song-item" style={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px" }}>
                <span>Unavailable by Davido</span>
                <Button color="white" className="btn-plus px-3 py-2" style={{ backgroundColor: "white" }}>+</Button>
              </div>
              <div className="song-item" style={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px" }}>
                <span>Unavailable by Davido</span>
                <Button color="white" className="btn-plus px-3 py-2" style={{ backgroundColor: "white" }}>+</Button>
              </div>
              <div className="song-item" style={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px" }}>
                <span>Unavailable by Davido</span>
                <Button color="white" className="btn-plus px-3 py-2" style={{ backgroundColor: "white" }}>+</Button>
              </div>
            </div>
            <div className="text-center mt-4">
              <Button
                color="orange"
                className="px-4 py-2"
                style={{ backgroundColor: "orange", border: "1px solid black", borderRadius: "5px" }}
              >
                View More
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
