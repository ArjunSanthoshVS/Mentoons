import axios from 'axios';
import './PodYoutube.css';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PodYoutube = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.user?._id;
    const [hasPurchased, setHasPurchased] = useState(false);
    const [showSubscribeAlert, setShowSubscribeAlert] = useState(false);

    const handlePurchase = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/purchase_status?userId=${userId}`);
            if (response.data.hasPurchased) {
                setHasPurchased(true);
            } else {
                setShowSubscribeAlert(true);
            }
        } catch (error) {
            console.error('Error checking purchase status:', error);
        }
    };

    const handleSubscribeConfirm = () => {
        setShowSubscribeAlert(false);
        const date = Date.now()
        const userName = user?.user?.name
        const amount = 2000
        axios.post('http://localhost:5000/subscription', {
            amount,
            userId: user?.user?._id,
            userName: userName,
            createdAt: date
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => {
            console.log(err.message);
        })
    };

    return (
        <div className="containerStyle">
            <img className="w-100" src="/mentoons podcast/png1/Mentoons Podcast page uiux-07.png" alt="" />
            <div className="overlayImageStyle">
                <img className="listening d-block m-auto mt-5 mb-5" src="/mentoons podcast/png1/Mentoons Podcast page uiux-17.png" alt="" />
                <div className="youtube m-auto d-flex justify-content-between">
                    {hasPurchased ? (
                        <>
                            <a className="thumbnail" href="https://youtu.be/gctT1SfjYg0?si=JeKDy0HDlsoC2uIx">
                                <img className='w-100' src="/mentoons podcast/png1/Mentoons Podcast page uiux-20.png" alt="" />
                            </a>
                            <a className="thumbnail" href="https://youtu.be/mRUjCGjyyX8?si=kkRmwQZiOsri3E26">
                                <img className='w-100' src="/mentoons podcast/png1/Mentoons Podcast page uiux-19.png" alt="" />
                            </a>
                            <a className="thumbnail" href="https://youtu.be/dBaSt0nnHVo?si=9jad0Rw_8zl77VU1">
                                <img className='w-100' src="/mentoons podcast/png1/Mentoons Podcast page uiux-18.png" alt="" />
                            </a>
                        </>
                    ) : (
                        <>
                            <a className="thumbnail" onClick={handlePurchase} href="#">
                                <img className='w-100' src="/mentoons podcast/png1/Mentoons Podcast page uiux-20.png" alt="" />
                            </a>
                            <a className="thumbnail" onClick={handlePurchase} href="#">
                                <img className='w-100' src="/mentoons podcast/png1/Mentoons Podcast page uiux-19.png" alt="" />
                            </a>
                            <a className="thumbnail" onClick={handlePurchase} href="#">
                                <img className='w-100' src="/mentoons podcast/png1/Mentoons Podcast page uiux-18.png" alt="" />
                            </a>
                        </>
                    )}
                </div>
                <img className="bg_lamp w-75 d-flex m-auto" src="/mentoons podcast/png1/Mentoons Podcast page uiux-10.png" alt="" />
                <img className="submit_form w-25 d-flex m-auto" src="/mentoons podcast/png1/Mentoons Podcast page uiux-11.png" alt="" />
                <img className="submit_button d-flex m-auto" src="/mentoons podcast/png1/Mentoons Podcast page uiux-08.png" alt="" />
            </div>

            <Modal show={showSubscribeAlert} onHide={() => setShowSubscribeAlert(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Subscribe for More</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Click OK to subscribe and access premium content.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubscribeConfirm}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PodYoutube;
