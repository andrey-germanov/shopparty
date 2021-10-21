export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IPhotoThumbNailProps {
    photo:IPhoto;
    index: number;
    
    setPhotos: React.Dispatch<React.SetStateAction<{
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }[]>>
}