import React, { useState, useEffect } from 'react'
import './Gallery.css'
import { photos } from './Data'
import Button from './Button'
import { SRLWrapper } from "simple-react-lightbox";
import Zoom from 'react-reveal/Zoom';
import "../../assets/css/Headers.css"


export default function Gallery() {
    const [event, setEvent] = useState('All')
    const [filteredPhotos, setFilteredPhotos] = useState([])
    const options = {
        buttons: {
            showDownloadButton: false,
            showFullscreenButton: false,
            showThumbnailsButton: true,
            showAutoplayButton: false,
        },
        thumbnails: {
            showThumbnails: true,
        }
    }
    useEffect(() => {
        if (event == "All") {
            setFilteredPhotos(photos)
        }
        else {
            setFilteredPhotos(photos.filter(photo => photo.event == event))
        }
    }, [event])
    return (
        <div>
            <div className="Header GalleryHeader">
                <div className="HeaderOverlay">
                    <div className="titleWrapper">
                        <h1 contenteditable data-heading="Our Gallery" className="titles">Our Gallery</h1>
                    </div>
                </div>
            </div>
            <div className="GalleryBody">
                <div className="GalleryWrapper">
                    <nav>
                        <div className="items">
                            <Button name="All" handleSetEvent={setEvent} />
                            <Button name="Anniversary" handleSetEvent={setEvent} />
                            <Button name="JEWD" handleSetEvent={setEvent} />
                            <Button name="Forum" handleSetEvent={setEvent} />
                            <Button name="EJIS" handleSetEvent={setEvent} />
                        </div>
                    </nav>
                </div>
                <SRLWrapper options={options}>
                    <div className="gallery">
                        {filteredPhotos.map(photo =>
                            <Zoom>
                                <div key={photo.id} className="photo">
                                    <img srl_gallery_image="true" src={photo.img} className="photo" />
                                </div>
                            </Zoom>)}
                    </div>
                </SRLWrapper>
            </div>
        </div>
    )
}