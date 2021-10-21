
import { useState } from 'react';
import react from 'react';
import { IPhotoThumbNailProps } from '../types';
import { Button } from '@mui/material';
import  Modal  from '@mui/material/Modal';
import { Box } from '@mui/system';


export const PhotoThumbNail = ({photo, setPhotos, index}:IPhotoThumbNailProps) =>{
  
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
  return (<div key={index} className="card">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="box-modal">
                  <img src={photo.url} alt="" />
                </Box>
              </Modal>
              <img src={photo.thumbnailUrl} alt="" 
                onClick={handleOpen}
              />
              <Button 
              onClick={()=>{
                setPhotos((old_photos)=>{
                  return [...old_photos.slice(0,old_photos.indexOf(photo))
                  ,
                  ...old_photos.slice(old_photos.indexOf(photo)+1,old_photos.length)]
                })
              }}
              variant="contained">Delete</Button>
  </div>)
}
