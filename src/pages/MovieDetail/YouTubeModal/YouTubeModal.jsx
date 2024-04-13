import { Alert, Button, Modal } from "react-bootstrap";
import YouTube, {YouTubeProps} from "react-youtube";
import { useYouTubePrevQuery } from "../../../hooks/useYouTubePrev";
import { useParams } from "react-router-dom";
import './YouTubeModal.style.css'

export const YouTubeModal = (props) => {
    let {id} = useParams();
    let videoId = '';
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }
    const opts = {
        playerVars: {
            autoplay: 0
        }
    }
    const {data, isLoading, isError, error} = useYouTubePrevQuery(id);
    if (data) {
        videoId = data.results[0].key
        console.log(data)
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert>{error.message}</Alert>
    }
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentClassName="modal-style"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="modal-player">
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onPlayerReady}
            />
          </Modal.Body>
        </Modal>
      );
}