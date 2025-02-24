import React from "react";
import "./homePage.scss";
import HomeImg from "../../assets/golf.png";

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="homePage__container">
                <div className="homePage__wrapper">
                    <div className="homePage__img">
                        <div className="homePage__info">
                            <h1 className="homePage__title">
                                More than <br />
                                just a game. <br />
                                It’s a lifestyle.
                            </h1>
                            <p className="homePage__desc">
                                Whether you’re just starting out, have played{" "}
                                <br />
                                your whole life or you're a Tour pro, your{" "}
                                <br />
                                swing is like a fingerprint.
                            </p>
                            <div className="homePage__btn">
                                <button className="homePage__button">
                                    Shopping Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
